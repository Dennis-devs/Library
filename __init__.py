from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_vite import Vite


db = SQLAlchemy()

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static', static_url_path='/')
    
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////Users/celestineakoth/Desktop/Python/Python_excercises/pprojects/Library/library.db"


    db.init_app(app)

    vite = Vite(app)

    from routes import register_routes
    register_routes(app, db)


    migrate = Migrate(app, db)

    return app
