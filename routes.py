from flask import render_template, request, redirect, url_for, after_this_request
from model import Book

def register_routes(app, db):

    @app.route('/')
    def index():
        
        # books = Book.query.all()
        return render_template('indexOne.html')
        
    @app.route('/indexform', methods = ['GET', 'POST'])
    def indexform():
        if request.method == 'GET':   
             return render_template('indexForm.html')

        elif request.method == 'POST':
            title = request.form.get('name')
            author = request.form.get('author')
            genre = request.form.get('genre')
            pages = int(request.form.get('pages'))
            

            book = Book(title=title, author=author, genre=genre, pages=pages)

            db.session.add(book)
            db.session.commit()

            return ('', 204)