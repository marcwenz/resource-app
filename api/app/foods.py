from .constants import FOOD_PATH, PRODUCT_DESCRIPTION
import pandas as pd


class Foods:
    def __getitem__(self, ix) -> pd.Series:
        return self.foods.iloc[ix]

    def filterItems(self, item) -> pd.DataFrame:
        mask = self.foods[PRODUCT_DESCRIPTION].str.contains(item)
        return self.foods[mask]

    def __init__(self):
        self.foods = pd.read_csv(FOOD_PATH)

    def get_all_names(self):
        return self.foods[PRODUCT_DESCRIPTION]


if __name__ == "__main__":
    f = Foods()
    f.findItem("Wheat")
