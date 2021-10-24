from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey

class Account(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    password = db.Column(db.String(150))
    account_type = db.Column(db.String(150))

    # instrumentslend = db.relationship('Instrument', backref="user")
    # instrumentsborrowed = db.relationship('Instrument', backref="user")

class Instrument(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lender_id = db.Column(db.Integer, ForeignKey('user.id'))
    borrowed_id = db.Column(db.Integer, ForeignKey('user.id'))
    instrument_type = db.Column(db.String(150))
    picture = db.Column(db.String(500))
