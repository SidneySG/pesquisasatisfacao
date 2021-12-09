import json
import os
from pathlib import Path
from . import lottus

with open(os.path.join(Path(__file__).resolve().parent, 'menu.json'),encoding='utf-8', mode="r") as f:
    windows = json.load(f)

def get_lottus_app():
    lottus_app = lottus.Lottus('INITIAL', windows, InMemorySessionManager(), None)

    @lottus_app.window('INITIAL')
    def process_english_window(session, request):
        options = [lottus.create_option("1", "Esqueci do NIC", "ESQUECI_NIC"), lottus.create_option("0", "Sair", "FIM"),  lottus.create_option("-1", "", "NIC")]
        window = lottus.create_window("INITIAL", "STM, TRANSPARENCIA E SEGURANÇA", "Introduza o seu NIC", options)

        return window, session

    return lottus_app


def create_window_response(window):
    """
    """
    return {
        'message': window['message'] if 'message' in window else None,
        'title': window['title'] if 'title' in window else None,
        'options': [x for x in create_option_response(window['options'])]
    } if window else None

def create_option_response(option):
    """
    """
    return {
        'option': option['option'],
        'value': option['display']
    } if option else None

class InMemorySessionManager(lottus.SessionManager):
    def __init__(self):
        self._sessions = []

    def get(self, session_nr, cell_nr):
        #print(self._sessions)
        return next((s for s in self._sessions if s['session_id'] == session_nr and s['phone'] == cell_nr), None)

    def save(self, session):
        self._sessions.append(session)

class InMemoryWindowCache(lottus.WindowCache):
    def __init__(self):
        self.windows = {}

    def get(self, window_name, session_nr=None):
        return self.windows[window_name] if window_name in self.windows else None

    def cache(self, window, session_nr=None):
        self.windows[window['name']] = window