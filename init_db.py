from server.main import create_app
from server.models import db
from server.config import DevConfig , ProdConfig # Or ProdConfig/TestConfig as needed
from server.exts import db
from server import models


app = create_app(DevConfig)

with app.app_context():
    db.create_all()
    print("✅ Database tables created.")
