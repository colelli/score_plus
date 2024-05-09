import sys
sys.path.append('src')
import model.Dao as db
import controller.SearchController as sc


def _get_dashboard() -> dict:
    out = {}
    # construct response
    most_recent = db.read_most_recent_history()
    out = most_recent
    out['cveList'] = [__retrieve_cve_data(cve_id) for cve_id in most_recent['cveIdList']]
    
    return out

def __retrieve_cve_data(cve_id: str):
    cve_data = sc._get_cve_from_id(cve_id)
    return {
        'id': cve_data['id'],
        'desc': cve_data['descriptions'][0]['value'],
        'baseScore': cve_data['metrics']['cvssMetricV31'][0]['cvssData']['baseScore'],
        'impactScore': cve_data['metrics']['cvssMetricV31'][0]['impactScore'],
        'severity': cve_data['metrics']['cvssMetricV31'][0]['cvssData']['baseSeverity']
    }
