import numpy as np
from typing import List
from src.controller.cve.CVEHelper import CVE
from src.controller.cvss.CVSSHelper import CVSSv31Tov4

severity_score_mapping = {
    "NONE": 0,
    "LOW": 1,
    "MEDIUM": 2,
    "HIGH": 3,
    "CRITICAL": 4
}

cwe_type_mapping = {
    "PRIMARY": 2,
    "SECONDARY": 1,
}

__exploitability_score_max = 3.9  # obtained from: 8.22 x AV x AC x PR x UI for v3.1
__severity_score_max = 4.0  # obtained from severity_score_mapping max value
__impact_based_max = 6.0  # obtained from: 7.52 × (ISS - 0.029) - 3.25 × (ISS - 0.02)^15 where ISS = 1 - [ (1 - Confidentiality) × (1 - Integrity) × (1 - Availability) ]


def calculate_base_org_score(cve_list: List[CVE]) -> float:
    """
    Description:
        Calculates the final organisation score based on the following criteria:\n
        The score is the simple average of all the CVE base scores.\n
        This approach does not take into account the impact/weigh of every vulnerability found, but gives a simple,
        straight-forward perspective of the overall security score
    :param cve_list: List of all the detected CVEs
    :return: Final organisation score
    """
    score = sum(cve.get_cvss_base_score() for cve in cve_list) / len(cve_list)
    return round(score, 2)


def calculate_base_org_score_v4(cve_list: List[CVSSv31Tov4]) -> float:
    """
    Description:
        Calculates the final organisation score based on the following criteria:\n
        The score is the simple average of all the CVE 4.0 base scores.\n
        This approach does not take into account the impact/weigh of every vulnerability found, but gives a simple,
        straight-forward perspective of the overall security score
    :param cve_list: List of all the detected CVEs
    :return: Final organisation score
    """
    score = sum(cve.estimated_base_score for cve in cve_list) / len(cve_list)
    return round(score, 2)


def calculate_org_score_based_on_exploitability(cve_list: List[CVE]) -> float:
    """
    Description:
        Calculates the final organisation score based on the following criteria:\n
        The score is the weighted average of all the CVE base scores multiplied by their respective exploitability score.\n
        The exploitability score, which indicates the likelihood of that vulnerability to be exploited and/or the ease of
        exploitation can be a good mean of measure to weigh every CVE and obtain a nicely, informative weighted result
    :param cve_list: List of all the detected CVEs
    :return: Final organisation score
    """
    # for each cve in the list we add the base score value weighted on its exploitability score
    data = np.array([(cve.get_cvss_base_score() * cve.get_exploitability_score()) for cve in cve_list])
    score = sum(__normalize_score(data, __exploitability_score_max)) / len(cve_list)
    return round(score, 2)


def calculate_org_score_based_on_severity(cve_list: List[CVE]) -> float:
    """
    Description:
        Calculates the final organisation score based on the following criteria:\n
        The score is the weighted average of all the CVE base scores multiplied by their respective severity score,
        mapped as follows:
            - "NONE" = 0
            - "LOW" = 1
            - "MEDIUM" = 2
            - "HIGH" = 3
            - "CRITICAL" = 4
        The severity score, which indicates the underlying CVSS score in a string format, can be a good mean of measure
        to weigh every CVE and obtain a nicely, informative weighted result
    :param cve_list: List of all the detected CVEs
    :return: Final organisation score
    """
    # for each cve in the list we add the base score value weighted on its severity score mapping
    data = np.array([(cve.get_cvss_base_score() * severity_score_mapping[cve.get_cvss_severity().upper()]) for cve in
                     cve_list])
    score = sum(__normalize_score(data, __severity_score_max)) / len(cve_list)
    return round(score, 2)


def calculate_org_score_based_on_severity_v4(cve_list: List[CVSSv31Tov4]) -> float:
    """
    Description:
        Calculates the final organisation score based on the following criteria:\n
        The score is the weighted average of all the CVE 4.0 base scores multiplied by their respective severity score,
        mapped as follows:
            - "NONE" = 0
            - "LOW" = 1
            - "MEDIUM" = 2
            - "HIGH" = 3
            - "CRITICAL" = 4
        The severity score, which indicates the underlying CVSS score in a string format, can be a good mean of measure
        to weigh every CVE and obtain a nicely, informative weighted result
    :param cve_list: List of all the detected CVEs
    :return: Final organisation score
    """
    # for each cve in the list we add the base score value weighted on its severity score mapping
    data = np.array([(cve.estimated_base_score * severity_score_mapping[cve.estimated_severity.upper()]) for cve in
                     cve_list])
    score = sum(__normalize_score(data, __severity_score_max)) / len(cve_list)
    return round(score, 2)


def calculate_org_score_based_on_impact_score(cve_list: List[CVE]) -> float:
    """
    Description:
        Calculates the final organisation score based on the following criteria:\n
        The score is the weighted average of all the CVE base scores multiplied by their respective impact score.\n
        The impact score, which indicates, as the name suggests, the impact of a vulnerability on the company's Risk
        index, can be a good mean of measure to weigh every CVE and obtain a nicely, informative weighted result
    :param cve_list: List of all the detected CVEs
    :return: Final organisation score
    """
    # for each cve in the list we add the base score value weighted on its impact score
    data = np.array([(cve.get_cvss_base_score() * cve.get_impact_score()) for cve in cve_list])
    score = sum(__normalize_score(data, __impact_based_max)) / len(cve_list)
    return round(score, 2)


def calculate_org_score_based_on_cwes(cve_list: List[CVE], mode: str = 'count') -> float:
    """
    Description:
        Calculates the final organisation score based on the following mode criterias:\n
        Mode:
            - count: Calculates the score as the weighted average of all the CVE base scores multiplied by the number of weaknesses linked to the specific CVE
            - type: Calculates the score as the weighted average of all the CVE base scores multiplied by the 'type' of weaknesses linked to the specific CVE, mapped on an internal dictionary
            - both: Calculates the score as the average of the previous mentioned modes
    :param cve_list: List of all the detected CVEs
    :param mode: Calculation mode between count | type | both (default = count)
    :return: Final organisation score based on the chosen mode
    :raises ValueError: if the inserted mode is not valid
    """
    if mode not in ['count', 'type', 'both']:
        raise ValueError("Inserted mode not valid, please choose between 'count', 'type' or 'both'")

    # process CWE score based on mode
    if mode == 'count':
        score = __score_based_on_cwe_count(cve_list)
    elif mode == 'type':
        score = __score_based_on_cwe_type(cve_list)
    else:
        score = (__score_based_on_cwe_count(cve_list) + __score_based_on_cwe_type(cve_list)) / 2
    return round(score, 2)


def __score_based_on_cwe_count(cve_list: List[CVE]) -> float:
    """
    Calculates the score as the weighted average of all the CVE base scores multiplied by the count of weaknesses
    linked to the CVE
    :param cve_list: List of all the detected CVEs
    :return: Score
    """
    data = np.array([(cve.get_cvss_base_score() * len(cve.get_cwes())) for cve in cve_list])
    return sum(__normalize_cwe_score(data)) / len(cve_list)


def __score_based_on_cwe_type(cve_list: List[CVE]) -> float:
    """
    Calculates the score as the weighted average of all the CVE base scores multiplied by the average of all the
    mapped weaknesses types on an internal dictionary
    :param cve_list: List of all the detected CVEs
    :return: Score
    """
    data = np.fromiter((cve.get_cvss_base_score() * (sum(cwe_type_mapping[t[1].upper()] for t in cve.get_cwes()) / len(cve.get_cwes())) for cve in cve_list), float)
    return sum(__normalize_cwe_score(data)) / len(cve_list)


def __normalize_score(data, norm_max: float, norm_min: float = 0.0):
    if (norm_max - norm_min) == 0:
        raise ZeroDivisionError
    return (data - norm_min) / (norm_max - norm_min)


def __normalize_cwe_score(data):
    if len(data) == 1:
        return data
    if (np.max(data) - np.min(data)) == 0:
        raise ZeroDivisionError
    return ((data - np.min(data)) / (np.max(data) - np.min(data))) * 10.0
