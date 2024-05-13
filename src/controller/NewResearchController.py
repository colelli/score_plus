import sys
sys.path.append('src')
from controller.cve.CVEHelper import CVE
import controller.cve.ScoreHelper as sh
import controller.SearchController as sc
import requests


def _new_research(cve_id: str) -> dict:
    cve_list = __get_all_relationships(cve_id)
    detailed_cve_list = [CVE(sc._get_cve_from_id(cve)) for cve in cve_list]
    severity_counts = __get_severity_counts(detailed_cve_list)
    weakness_counts = __get_weakness_counts(detailed_cve_list)
    base_score = sh.calculate_base_org_score(detailed_cve_list)
    return {
        "criticalVuln": severity_counts['CRITICAL'],
        "highVuln": severity_counts['HIGH'],
        "mediumVuln": severity_counts['MEDIUM'],
        "lowVuln": severity_counts['LOW'],
        "primaryWeak": weakness_counts['Primary'],
        "secondaryWeak": weakness_counts['Secondary'],
        "score": base_score,
        "state": sh.compute_estimated_severity(base_score),
        "cveList": [__tinify_json(cve.cve_json) for cve in detailed_cve_list],
        "cveCount": len(cve_list),
        "cweCount": weakness_counts['Primary'] + weakness_counts['Secondary']
    }


def __tinify_json(orignal: dict) -> dict:
    out = orignal
    out.pop('configurations', None)
    out.pop('references', None)
    return out


def __get_all_relationships(cve_id: str) -> list:
    # TO-DO: request to third-party API
    cve_list = ['CVE-2014-3757','CVE-2018-16659','CVE-2018-2925','CVE-2006-3414','CVE-2021-30303',
                'CVE-2010-3686','CVE-2020-23912','CVE-2024-0007','CVE-2024-1011','CVE-2012-1297',
                'CVE-2012-1947','CVE-2008-1515','CVE-2017-15425','CVE-2017-18158','CVE-2010-3685']
    return cve_list


def __get_severity_counts(cve_list: list[CVE]) -> dict:
    out = {
        "CRITICAL": 0,
        "HIGH": 0,
        "MEDIUM": 0,
        "LOW": 0,
        "NONE": 0
    }
    for cve in cve_list:
        out[cve.get_cvss_severity()] += 1
    return out


def __get_weakness_counts(cve_list: list[CVE]) -> dict:
    out = {
        'Primary': 0,
        'Secondary': 0
    }
    for cve in cve_list:
        for cwe in cve.get_cwes():
            out[cwe[1]] += 1
    return out
