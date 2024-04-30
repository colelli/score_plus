import firebase_admin
from firebase_admin import firestore, credentials

__cred = credentials.Certificate('src/model/creds/serviceAccountKey.json')
__app = firebase_admin.initialize_app(__cred)
__db = firestore.client()

__HISTORY_TABLE = 'HISTORY'

def read_history():
    users_ref = __db.collection(__HISTORY_TABLE)
    docs = users_ref.stream()
    out = []

    for doc in docs:
        out.append(doc.to_dict())

    return out