from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey

class Account(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    password = db.Column(db.String(150))
    accounttype = db.Column(db.String(150))

    #instrumentslent = db.relationship('Instrument', backref="user")
    #instrumentsborrowed = db.relationship('Instrument', backref="user")

class Instrument(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    type = db.Column(db.String(150))
    picture = db.Column(db.String(500))

    lender_id = db.Column(db.Integer, ForeignKey('user.id'))
    borrowed_id = db.Column(db.Integer, ForeignKey('user.id'))