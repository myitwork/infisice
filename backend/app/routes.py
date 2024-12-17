# routes.py
from flask import Blueprint, jsonify, request
from app.models import get_products, add_product, get_navigations

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/products', methods=['GET'])
def get_all_products():
    products = get_products()
    return jsonify([{'id': str(product['_id']), 'name': product['name'], 'price': product['price']} for product in products])

@api_bp.route('/api/product', methods=['POST'])
def create_product():
    data = request.json
    add_product(data['name'], data['price'])
    return jsonify({"message": "product added!"}), 201


@api_bp.route('/api/navigations', methods=['GET'])
def get_all_navigations():
    navigations = get_navigations()
    return jsonify([{'id': str(item['_id']), 'name': item['name'], 'url': item['url'], 'level': item['level']} for item in navigations])