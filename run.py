from server.main import create_app
from server.config import DevConfig

app = create_app(DevConfig)

print("🔗 Using DB:", app.config["SQLALCHEMY_DATABASE_URI"])

if __name__ == "__main__":
    app.run()