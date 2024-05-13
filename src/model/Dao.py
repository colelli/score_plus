import sys
sys.path.append('src')
from utilsToDelete.ToFileUtils import get_json_from_file, save_to_json_file
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
    except:
        save_to_json_file([], __HISTORY_DATA, __DEFAULT_PATH)
    return data


def read_most_recent_history() -> dict:
    """
        Desc:
            Retrieves the most recent history saved
        Returns:
            A dict representing the most recent history element
    """
    curr_data = read_history()
    if len(curr_data) > 0 and curr_data != {}:
        curr_data.sort(key=__sort_by_date) 
        return curr_data[-1]
    return {}


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
        curr_data.append(new_history)
        save_to_json_file(curr_data, __HISTORY_DATA, __DEFAULT_PATH)
    except FileNotFoundError:
        return False
    return True


def __sort_by_date(e):
    return time.mktime(time.strptime(e['date'], '%Y-%m-%d %H:%M:%S.%f'))
