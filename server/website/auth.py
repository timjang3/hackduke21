from flask import Blueprint, render_template, request
from .models import Account
from werkzeug.security import generate_password_hash, check_password_hash
from website import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form.get('name')
        password = request.form.get('password')
        accounttype = request.form.get('accountType')
        print(accounttype)
        if accounttype == 'lender' or accounttype == 'borrower' :
            new_user = Account(name=name, password=generate_password_hash(password, method='sha256'), accounttype=accounttype)
            db.session.add(new_user)
            db.session.commit()
            return "200"
        else:
            return "500"



@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form.get('name')
        password = request.form.get('password') 
        user = Account.query.filter_by(name=name).first()
        if name:
            if check_password_hash(user.password, password): #checks user.password and password to see if they are the same
                    login_user(user, remember=True)
        return "500"


@auth.route('/logout', methods=['GET','POST'])
@login_required
def logout():
    if request.method == 'POST':
        logout_user()

    elif request.method == 'GET':
        return render_template("auth/logout.html")
