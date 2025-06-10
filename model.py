from app import db

class Book(db.Model):
    __tablename__ = 'Books'

    pid = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    author = db.Column(db.Text, nullable=False)
    genre = db.Column(db.Text, nullable=False)
    pages = db.Column(db.Integer)

    