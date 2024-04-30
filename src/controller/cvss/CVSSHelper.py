# API source: https://pypi.org/project/cvss/
import json

from cvss import CVSS4, CVSS3
from src.controller.cvss import acronym_mapping


def _get_data_in_json(vector_str_le: str, vector_str_he: str, av: str, ac: str, pr: str, ui: str,
                      vc: str, vi: str, va: str, sc: str, si: str, sa: str, base_score, severity: str):
    output = {
        "cvssMetricV4": [
            {
                "source": "Score+ | Estimation",
                "cvssData": {
                    "version": "4.0",
                    "vectorStringLowEstimate": vector_str_le,
                    "vectorStringHighEstimate": vector_str_he,
                    "attackVector": av,
                    "attackComplexity": ac,
                    "privilegesRequired": pr,
                    "userInteraction": ui,
                    "vulnerableComplexity": vc,
                    "vulnerableImpact": vi,
                    "vulnerableAvailability": va,
                    "subsequentComplexity": sc,
                    "subsequentImpact": si,
                    "subsequentAvailability": sa,
                    "baseScore": base_score,
                    "baseSeverity": severity
                }
            }
        ]
    }

    return output


class CVSSv31Tov4(object):
    """
    Class to hold estimated CVSS4 vectors.\n
    This Class will take a real CVSS v3.1 score and try to convert it in the future CVSS v4.0 standard. Most of the
    v4.0 metrics match the previous standard, for the ones that do not, a compensatory system has been put in place.
    The class will hold the reference of two CVSS4, one representing the highest estimate, and the other representing
    the lowest estimate.\n
    On this presumption, the estimated base score is the average of the two base scores, and the estimated severity is
    the mapping of such estimated score onto the regular CVSS4 severity range.
    """

    def __init__(self, vectorV31: str):
        self.__originalV31 = CVSS3(vectorV31)
        self.__vectorV4_le = None
        self.__vectorV4_he = None
        self.estimated_base_score = 0
        self.estimated_severity = "None"

        # metrics
        self.__attack_vector = ''
        self.__attack_complexity = ''
        self.__privileges_required = ''
        self.__user_interaction = ''
        self.__vulnerable_complexity = ''
        self.__vulnerable_impact = ''
        self.__vulnerable_availability = ''
        self.__subsequent_complexity = ''
        self.__subsequent_impact = ''
        self.__subsequent_availability = ''

        self.__generate_v4_vectors()
        self.__compute_estimated_base_score()
        self.__compute_estimated_severity()

    def __generate_v4_vectors(self):
        v4_metrics = {}
        base_metrics = {m: self.__originalV31.metrics[m] for m in list(self.__originalV31.metrics)[:8]}
        scope_metric = base_metrics['S'] == 'C'
        # start for
        for metric in base_metrics:
            if str(metric).upper() == 'AV':
                # Both standards have Attack Vector, so we keep the same value as v3.1
                v4_metrics['AV'] = base_metrics[metric]
                self.__attack_vector = acronym_mapping['AV'][base_metrics[metric]]
            if str(metric).upper() == 'AC':
                # Both standards have Attack Complexity, so we keep the same value as v3.1
                v4_metrics['AC'] = base_metrics[metric]
                self.__attack_complexity = acronym_mapping['AC'][base_metrics[metric]]
            if str(metric).upper() == 'PR':
                # Both standards have Privileges Required, so we keep the same value as v3.1
                v4_metrics['PR'] = base_metrics[metric]
                self.__privileges_required = acronym_mapping['PR'][base_metrics[metric]]
            if str(metric).upper() == 'UI':
                # Both standards have User Interaction though v4 extends the value range
                # For simplicity and informative-purpose only, we map N -> N, and R -> A
                if base_metrics[metric] == 'N':
                    v4_metrics['UI'] = base_metrics[metric]
                    self.__user_interaction = acronym_mapping['UI'][base_metrics[metric]]
                elif base_metrics[metric] == 'R':
                    v4_metrics['UI'] = 'A'
                    self.__user_interaction = acronym_mapping['UI']['A']
            if str(metric).upper() == 'C':
                if not scope_metric:
                    # scope is unchanged -> It is assumed there is no impact on the subsequent confidentiality
                    v4_metrics['VC'] = base_metrics[metric]
                    v4_metrics['SC'] = 'N'
                    self.__vulnerable_complexity = acronym_mapping['VC'][base_metrics[metric]]
                    self.__subsequent_complexity = acronym_mapping['SC']['N']
                else:
                    # scope is changed -> It is assumed there is the same impact on subsequent systems
                    v4_metrics['VC'] = base_metrics[metric]
                    v4_metrics['SC'] = base_metrics[metric]
                    self.__vulnerable_complexity = acronym_mapping['VC'][base_metrics[metric]]
                    self.__subsequent_complexity = acronym_mapping['SC'][base_metrics[metric]]
            if str(metric).upper() == 'I':
                if not scope_metric:
                    # scope is unchanged -> It is assumed there is no impact on the subsequent integrity
                    v4_metrics['VI'] = base_metrics[metric]
                    v4_metrics['SI'] = 'N'
                    self.__vulnerable_impact = acronym_mapping['VI'][base_metrics[metric]]
                    self.__subsequent_impact = acronym_mapping['SI']['N']
                else:
                    # scope is changed -> It is assumed there is the same impact on subsequent systems
                    v4_metrics['VI'] = base_metrics[metric]
                    v4_metrics['SI'] = base_metrics[metric]
                    self.__vulnerable_impact = acronym_mapping['VI'][base_metrics[metric]]
                    self.__subsequent_impact = acronym_mapping['SI'][base_metrics[metric]]
            if str(metric).upper() == 'A':
                if not scope_metric:
                    # scope is unchanged -> It is assumed there is no impact on the subsequent availability
                    v4_metrics['VA'] = base_metrics[metric]
                    v4_metrics['SA'] = 'N'
                    self.__vulnerable_availability = acronym_mapping['VA'][base_metrics[metric]]
                    self.__subsequent_availability = acronym_mapping['SA']['N']
                else:
                    # scopre is changed -> It is assumed there is the same impact on subsequent systems
                    v4_metrics['VA'] = base_metrics[metric]
                    v4_metrics['SA'] = base_metrics[metric]
                    self.__vulnerable_availability = acronym_mapping['VA'][base_metrics[metric]]
                    self.__subsequent_availability = acronym_mapping['SA'][base_metrics[metric]]
        # end for
        self.__vectorV4_le = CVSS4(f"CVSS:4.0/AV:{v4_metrics['AV']}/AC:{v4_metrics['AC']}/AT:N/PR:{v4_metrics['PR']}/"
                                   f"UI:{v4_metrics['UI']}/VC:{v4_metrics['VC']}/VI:{v4_metrics['VI']}/"
                                   f"VA:{v4_metrics['VA']}/SC:{v4_metrics['SC']}/SI:{v4_metrics['SI']}/"
                                   f"SA:{v4_metrics['SA']}")
        self.__vectorV4_he = CVSS4(f"CVSS:4.0/AV:{v4_metrics['AV']}/AC:{v4_metrics['AC']}/AT:P/PR:{v4_metrics['PR']}/"
                                   f"UI:{v4_metrics['UI']}/VC:{v4_metrics['VC']}/VI:{v4_metrics['VI']}/"
                                   f"VA:{v4_metrics['VA']}/SC:{v4_metrics['SC']}/SI:{v4_metrics['SI']}/"
                                   f"SA:{v4_metrics['SA']}")

    def get_original_v31_vector(self) -> CVSS3:
        """
        :returns: The original v3.1 vector from which the v4.0 has been estimated
        """
        return self.__originalV31

    def get_cvss4_low_estimate(self) -> str:
        """
        :returns: The lowest estimated CVSS4
        """
        return self.__vectorV4_le

    def get_cvss4_high_estimate(self) -> str:
        """
        :returns: The highest estimated CVSS4
        """
        return self.__vectorV4_he

    def __compute_estimated_base_score(self) -> float:
        return (self.__vectorV4_le.base_score + self.__vectorV4_he.base_score) / 2

    def __compute_estimated_severity(self):
        estimated_base_score = self.__compute_estimated_base_score()
        if estimated_base_score == 0.0:
            self.estimated_severity = "None"
        elif estimated_base_score <= 3.9:
            self.estimated_severity = "Low"
        elif estimated_base_score <= 6.9:
            self.estimated_severity = "Medium"
        elif estimated_base_score <= 8.9:
            self.estimated_severity = "High"
        else:
            self.estimated_severity = "Critical"

    def get_json_data(self):
        return _get_data_in_json(self.__vectorV4_le, self.__vectorV4_he, self.__attack_vector, self.__attack_complexity,
                                 self.__privileges_required, self.__user_interaction, self.__vulnerable_complexity,
                                 self.__vulnerable_impact, self.__vulnerable_availability, self.__subsequent_complexity,
                                 self.__subsequent_impact, self.__subsequent_availability, self.estimated_base_score,
                                 self.estimated_severity)
