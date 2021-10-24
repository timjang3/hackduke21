from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager
import os

db = SQLAlchemy()

#initialize website:

def create_app():
    app = Flask(__name__)
    connect(app)
    
    # from .views import views
    from .auth import auth

    # app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')


    create_database(app)

    login_manager = LoginManager()
    login_manager.login_view='auth.login'
    login_manager.init_app(app)

    from .models import Account, Instrument

    @login_manager.user_loader
    def load_user(id):
        return Account.query.get(int(id))

    return app

def connect(app):
    db_type = 'cockroachdb'
    username = 'joao'
    password = 'vaitomarnocuquemtalendo'
    host = 'free-tier.gcp-us-central1.cockroachlabs.cloud'
    port = '26257'
    db_name = 'hack-duke-4316.main'
    conn_string = f'{db_type}://{username}:{password}@{host}:{port}/{db_name}'
    app.config['SQLALCHEMY_DATABASE_URI'] = conn_string
    db.init_app(app)

def create_database(app):
    db.create_all(app=app)
    print('Created Database!')