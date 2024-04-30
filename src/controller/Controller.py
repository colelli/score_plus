from flask import Flask
import sys
sys.path.append('src')
import model.Dao as db
from flask_cors import CORS, cross_origin

__app = Flask("score_plus")
__cors = CORS(__app)
__app.config['CORS_HEADERS'] = 'Content-Type'


@__app.route('/api/gethistory', methods=['GET'])
@cross_origin()
def get_history():
    data = db.read_history()
    for d in data:
        d["cve_count"]=d['#criticalvuln']+d['#highvuln']+d['#mediumvuln']+d['#lowvuln']
        d["cwe_count"]=d['#primaryweak']+d['#secondaryweak']
    return data

__app.run(port=7777)
