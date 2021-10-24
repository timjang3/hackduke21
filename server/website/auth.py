from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from website import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form.get('name')
        password = request.form.get('password')
        accountType = request.form.get('accounttype')

        if accountType == 'lender' or accountType == 'borrower':
            new_user = User(name=name, password=generate_password_hash(password, method='sha256'), accounttype=accountType)
            db.session.add(new_user)
            db.session.commit()

    return render_template('/client/src/pages/signup.js')


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form.get('name')
        password = request.form.get('password') 

    user = User.query.filter_by(name=name).first()
    if name:
         if check_password_hash(user.password, password): #checks user.password and password to see if they are the same
                login_user(user, remember=True)
                flash('Logged in successfully!', category='success')


@auth.route('/logout', methods=['GET','POST'])
@login_required
def logout():
    if request.method == 'POST':
        logout_user()