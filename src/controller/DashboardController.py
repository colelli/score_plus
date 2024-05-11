import sys
sys.path.append('src')
import model.Dao as db
import controller.SearchController as sc
from controller.cve.CVEHelper import CVE


def _get_dashboard() -> dict:
    out = {}
    # construct response
    most_recent = db.read_most_recent_history()
    out = most_recent
    out['cveList'] = [__retrieve_cve_data(cve_id) for cve_id in most_recent['cveIdList']]
    
    return out

def __retrieve_cve_data(cve_id: str):
    cve_data = CVE(sc._get_cve_from_id(cve_id))
    return {
        'id': cve_data.cve_id,
        'desc': cve_data.descriptions[0]['value'],
        'baseScore': cve_data.get_cvss_base_score(),
        'impactScore': cve_data.get_impact_score(),
        'severity': cve_data.get_cvss_severity()
    }
