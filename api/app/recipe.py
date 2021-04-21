from .foods import Foods
from .constants import PRODUCT_DESCRIPTION, TOTAL_WATER
import pandas as pd

QUANTITY = "Quantity"


class Recipe:
    def __init__(self, ingredients: dict):
        """
        Recipe

        Args:
            ingredients (list[tuple[int, pd.Series]]): List of Tuples containing quantity and ingredient
        """

        if isinstance(ingredients, pd.DataFrame):
            self.ingredients = ingredients
            if QUANTITY not in ingredients.columns:
                raise ValueError("Recipe doesn't contain quantities.")
        elif isinstance(ingredients, list):
            self.ingredients = pd.DataFrame([i[1] for i in ingredients])
            self.ingredients[QUANTITY] = [i[0] for i in ingredients]

    def total_water(self):
        return sum(
            [i[TOTAL_WATER] * i[QUANTITY] for _, i in self.ingredients.iterrows()]
        )

    def scale_recipe(self, factor):
        if factor < 0:
            raise ValueError("variable factor has to be greater 0")
        new_ingredients = self.ingredients.copy()
        new_ingredients[QUANTITY] = new_ingredients[QUANTITY].map(lambda x: x * factor)
        return Recipe(new_ingredients)

    def add_ingredient(self, item, quantity):
        item[QUANTITY] = quantity
        self.ingredients = self.ingredients.append(item)

    def __str__(self):
        return ", ".join(
            [
                " of ".join((str(i[QUANTITY]), i[PRODUCT_DESCRIPTION]))
                for _, i in self.ingredients.iterrows()
            ]
        )


if __name__ == "__main__":
    f = Foods()
    r = Recipe([(0.3, f[3]), (0.5, f[10]), (1, f[20])])
    print(r.total_water())
    print(r)
    print()
    r.add_ingredient(f[5], 3)
    print(r.total_water())
    print(r)