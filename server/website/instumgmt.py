from flask import Blueprint, render_template, request
from .models import Account, Instrument
from website import db
from flask_login import login_user, login_required, logout_user, current_user

instrumgmt = Blueprint('instrumgmt', __name__)

@instrumgmt.route('/createitem', methods=['GET', 'POST'])
@login_required
def createitem():
    if current_user.account_type=='lender':
        if request.method == 'POST':
            name = request.form.get('name')
            type = request.form.get('type')
            # TODO: picture
            
            new_instrument = Instrument(name=name, type=type, lender_id=current_user.id)
            db.session.add(new_instrument)
            db.session.commit
    else:
        return "500 - account_type not allowed"

@instrumgmt.route('/requestitem', methods=['GET', 'POST'])
@login_required
def requestitem():
    if current_user.account_type=='borrower':
        if request.method == 'POST':
            instrument = Instrument.query.filter_by()