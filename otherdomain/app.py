#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
from functools import wraps
from flask import redirect, request, current_app


from flask import Flask
app = Flask(__name__)

def remove_last(s):
    return s[0:-1]

def support_jsonp(f):
    """Wraps JSONified output for JSONP"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        callback = request.args.get('callback', False)
        if callback:
            content = str(callback) + '(' + str( f()) + ')'
            return current_app.response_class(content, mimetype='application/json')
        else:
            return f(*args, **kwargs)
    return decorated_function

# then in your view
@app.route('/test', methods=['GET'])
@support_jsonp
def test():
    return json.dumps({"result":"ok", "name":"Charles Hyungsoo"})


if __name__ == "__main__":
    app.run(port=5500, debug=True, host="0.0.0.0")

