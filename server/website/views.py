from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import Account, Instrument
from . import db
from flask_login import login_required

views = Blueprint('views', __name__)

@views.route('/instruments_lended', methods=['GET'])
@login_required
def get_instruments_lended():
    lender_id = request.form.get('lender_id')


@views.route('/instruments_lended', methods=['POST'])
@login_required
def add_instrument_lended():
    lender_id = request.form.get('lender_id')



    

