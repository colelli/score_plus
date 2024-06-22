import sys
sys.path.append('src')
import model.Dao as db
import controller.cve.ScoreHelper as sh
import controller.SearchController as sc
from controller.cve.CVEHelper import CVE
from controller.utils.ControllerUitls import cvwelibapi
import requests
import json


__invalid_cwe_ids = ['NVD-CWE-noinfo', 'NVD-CWE-Other']


def _get_dashboard() -> dict:
    out = {}
    # construct response
    most_recent = db.read_most_recent_history()
    out = most_recent
    out['cveList'] = [__retrieve_cve_data(cve_json) for cve_json in most_recent['cveList']]
    
    return out


def __get_cwe(cwe_id: str) -> dict:
    result = requests.get(f"{cvwelibapi}get_cwe?cweId={cwe_id}")
    return json.loads(result.content)


def __retrieve_cve_data(cve_json: dict):
    cve_data = CVE(cve_json)
    data = [__retrieve_cwe_data(id[0]) for id in cve_data.get_cwes()]
    for inner in data:
        if inner == {}:
            data.remove(inner)
    return {
        'id': cve_data.cve_id,
        'desc': cve_data.descriptions[0]['value'],
        'baseScore': cve_data.get_cvss_base_score(),
        'impactScore': cve_data.get_impact_score(),
        'severity': cve_data.get_cvss_severity(),
        'cwes': data
    }


def __retrieve_cwe_data(cwe_id: str) -> dict:
    if cwe_id not in __invalid_cwe_ids:
        return __get_cwe(cwe_id)
    return {}


def _update_score(excluded_list: list, mode: int) -> tuple[float, list]:
    most_recent = db.read_most_recent_history()

    # Construct excluded cwe list
    excluded_cwes = []
    [excluded_cwes.extend(CVE(sc._get_cve_from_id(cve)).get_cwe_ids()) for cve in excluded_list]

    # Construct relevant cve list
    relevant_cves = []
    checked_cves = []
    for cve_json in most_recent['cveList']:
        cve = CVE(cve_json)
        if cve.cve_id not in excluded_list and not (set(cve.get_cwe_ids()) <= set(excluded_cwes)):
            relevant_cves.append(cve)
        else:
            checked_cves.append(cve.cve_id)
            
    
    match mode:
        case 0:
            return (sh.calculate_base_org_score(relevant_cves), checked_cves)
        case 1:
            return (sh.calculate_org_score_based_on_impact_score(relevant_cves), checked_cves)
        case 2:
            return (sh.calculate_org_score_based_on_exploitability(relevant_cves), checked_cves)
        case 3:
            return (sh.calculate_org_score_based_on_severity(relevant_cves), checked_cves)
        case 4:
            return (sh.calculate_org_score_based_on_cwes(relevant_cves), checked_cves)
        case 5:
            return (sh.calculate_org_score_based_on_assets(relevant_cves), checked_cves)
        case _:
            raise ValueError('Invalid mode selected')
        