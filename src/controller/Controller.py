from flask import Flask, request, abort
from flask_cors import CORS, cross_origin
import sys
sys.path.append('src')
from controller.cve.CVEHelper import CVE
import model.Dao as db
import logging
import requests

__cvwelibapi = "http://127.0.0.1:8080/api/"

__app = Flask("score_plus")
__cors = CORS(__app)
__app.config['CORS_HEADERS'] = 'Content-Type'


@__app.route('/api/gethistory', methods=['GET'])
@cross_origin()
def get_history():
    return db.read_history()


@__app.route('/api/addhistory', methods=['GET'])
@cross_origin()
def add_history():
    return db.add_history()


@__app.route('/api/getdashboard', methods=['GET'])
@cross_origin()
def get_dashboard():
    out = {}
    data = db.read_history()
    most_recent = data[-1]

    # construct response
    out = most_recent
    out['cve_list'] = [__get_cve_json(cve_id) for cve_id in most_recent['cve_id_list']]


@__app.route('/api/getcve', methods=['GET'])
@cross_origin()
def get_cve():
    args = request.args.to_dict()
    logging.debug(args)

    if len(args) == 0:
        abort(403)
    
    for arg in args:
        if arg == 'cveId':
            result = requests.get(f"{__cvwelibapi}get_cve?cveId={args[arg]}") if args[arg].strip() != "" else abort(400)
            return result.content
        
    abort(400) # No matching function found

def __get_cve_json(cve_id: str):
    pass

__app.run(port=7777)