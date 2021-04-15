from flask import Blueprint, jsonify
from . import foods


api_bp = Blueprint("api_bp", __name__)


@api_bp.route("/api/foods", methods=["GET"])
def all_food():
    return jsonify(foods.get_all_foods)
