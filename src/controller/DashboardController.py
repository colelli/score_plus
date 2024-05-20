import sys
sys.path.append('src')
import model.Dao as db
import controller.cve.ScoreHelper as sh
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
    return {
        'id': cve_data.cve_id,
        'desc': cve_data.descriptions[0]['value'],
        'baseScore': cve_data.get_cvss_base_score(),
        'impactScore': cve_data.get_impact_score(),
        'severity': cve_data.get_cvss_severity(),
        'cwes': [__retrieve_cwe_data(id[0]) for id in cve_data.get_cwes()]
    }


def __retrieve_cwe_data(cwe_id: str) -> dict:
    if cwe_id not in __invalid_cwe_ids:
        return __get_cwe(cwe_id)
    return {}


def _update_score(excluded_list: list) -> float:
    most_recent = db.read_most_recent_history()
    
    # Construct relevant cve list
    relevant_cves = []
    for cve_json in most_recent['cveList']:
        cve = CVE(cve_json)
        if cve.cve_id not in excluded_list:
            relevant_cves.append(cve)
    
    return sh.calculate_base_org_score(relevant_cves)
