# models.py
from app.extensions import mongo

# Example product model (no schema, flexible)
def get_products():
    return mongo.db.products.find()

def add_product(name, price):
    mongo.db.products.insert_one({"name": name, "price": price})

# Navigation/ menu info
def get_navigations():
    return mongo.db.navigations.find()