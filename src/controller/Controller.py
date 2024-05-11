from flask import Flask, request, abort
from flask_cors import CORS, cross_origin
import sys
sys.path.append('src')
import controller.DashboardController as dc
import controller.SearchController as sc
import controller.HistoryController as hc
import controller.ConvertController as cc
import controller.NewResearchController as nc
from controller.utils.ControllerUitls import check_cve, check_cvss
import logging

__app = Flask("score_plus")
__cors = CORS(__app)
__app.config['CORS_HEADERS'] = 'Content-Type'


@__app.route('/api/gethistory', methods=['GET'])
@cross_origin()
def get_history():
    args = request.args.to_dict()
    logging.debug(args)

    if len(args) == 0:
        return hc._get_history()

    for arg in args:
        if arg == 'keyword':
            print(args[arg])
            return hc._search_history_id(args[arg])
    
    abort(400) # No matching function found


@__app.route('/api/addhistory', methods=['GET'])
@cross_origin()
def add_history():
    args = request.args.to_dict()
    logging.debug(args)

    if len(args) == 0:
        abort(403)

    for arg in args:
        if arg == 'cveId':
            result = hc._add_history(nc._new_research(args[arg] if check_cve(args[arg]) else abort(400)))
            return {'success': result}

    abort(400) # No matching function found


@__app.route('/api/getdashboard', methods=['GET'])
@cross_origin()
def get_dashboard():
    return dc._get_dashboard()


@__app.route('/api/getcve', methods=['GET'])
@cross_origin()
def get_cve():
    args = request.args.to_dict()
    logging.debug(args)

    if len(args) == 0:
        abort(403)
    
    for arg in args:
        if arg == 'cveId':
            return sc._get_cve_from_id(args[arg]) if check_cve(args[arg]) else abort(400)
        
    abort(400) # No matching function found


@__app.route('/api/convertcvss', methods=['GET'])
@cross_origin()
def convert_cvss():
    args = request.args.to_dict()
    logging.debug(args)

    if len(args) == 0:
        abort(403)

    for arg in args:
        if arg == 'vector':
            print(check_cvss(args[arg]))
            return cc._convert_cvss_to_v4(args[arg]) if check_cvss(args[arg]) else abort(400)
    
    abort(400) # No matching function found


@__app.route('/api/cvssdata', methods=['GET'])
@cross_origin()
def get_cvss_data():
    args = request.args.to_dict()
    logging.debug(args)

    if len(args) == 0:
        abort(403)

    for arg in args:
        if arg == 'vector':
            print(check_cvss(args[arg]))
            return cc._get_cvss_data(args[arg]) if check_cvss(args[arg]) else abort(400)
    
    abort(400) # No matching function found


__app.run(port=7777)
