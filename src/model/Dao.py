import json
import logging
import sys
sys.path.append('src')
from utilsToDelete.ToFileUtils import get_json_from_file, save_to_json_file
from datetime import datetime
import time

# History
__DEFAULT_PATH = 'src/model/files/'
__HISTORY_DATA = 'HISTORY.json'

def read_history() -> list:
    """
        Desc:
            Retrieves the saved HISTORY DATA file. If no file is found,
            it creates a new empty list
        Returns:
            A list containing all the fetched history data
    """
    data = []
    try:
        data = get_json_from_file(__HISTORY_DATA, __DEFAULT_PATH)
        for d in data:
            d["cve_count"]=d['criticalVuln']+d['highVuln']+d['mediumVuln']+d['lowVuln']
            d["cwe_count"]=d['primaryWeak']+d['secondaryWeak']
    except:
        save_to_json_file([], __HISTORY_DATA, __DEFAULT_PATH)
    return data

def add_history(new_history: dict) -> bool:
    """
        Desc:
            Adds a new History field to the default HISTORY_DATA file
        Params:
            :param new_history: The new history dict
        Returns:
            True if the file is saved successfully, else False
    """
    try:
        curr_data = read_history()
        curr_data.sort(key=__sort_by_date)    
        new_id = __calculate_id((curr_data[-1])['id']) 
        
        # update new history field
        new_history['id'] = new_id
        new_history['date'] = datetime.now()

        curr_data.append(new_history)
        save_to_json_file(curr_data, __HISTORY_DATA, __DEFAULT_PATH)
    except:
        return False
    return True
        

def __calculate_id(id: str):
    letter = id[0]
    num = int(id[2:])
    
    if num == 999:
        letter = chr(ord(letter)+1)
        num = 0
    else:
        num += 1

    return f'{letter}-{str(num).rjust(3, '0')}'


def __sort_by_date(e):
    return time.mktime(time.strptime(e['date'], '%Y-%m-%d %H:%M:%S.%f'))
