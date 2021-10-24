from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager
import urllib
import os

db = SQLAlchemy()
DB_NAME = "database.db"

#initialize website:

def create_app():
    app = Flask(__name__)
    conn_string = "cockroachdb://joao:vaitomarnocuquemtalendo@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=$HOME/.postgresql/root.crt&options=--cluster%3Dhack-duke-4316"
    db_uri = os.path.expandvars(conn_string)
    db_uri = urllib.parse.unquote(db_uri)
    psycopg_uri = db_uri.replace(
        'postgresql://', 'cockroachdb://').replace(
            'postgres://', 'cockroachdb://')
    app.config['SQLALCHEMY_DATABASE_URI'] = psycopg_uri
    db.init_app(app)

    # from .views import views
    from .auth import auth

    # app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')


    create_database(app)

    login_manager = LoginManager()
    login_manager.login_view='auth.login'
    login_manager.init_app(app)

    from .models import User

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
       db.create_all(app=app)
       print('Created Database!')