from .constants import FOOD_PATH
import csv


class Foods:
    def __getitem__(self, ix):
        key = self.foods.keys()[ix]
        return (key, self.foods[key])

    def filterItems(self, item):
        mask = {
            key: val
            for key, val in self.foods.items()
            if key.lower().find(item.lower()) != -1
        }
        return mask

    def __init__(self):
        with open(FOOD_PATH, mode="r") as f:
            csvreader = csv.reader(f, delimiter=",", quotechar='"')
            next(csvreader)
            self.foods = {line[1]: float(line[-1]) for line in csvreader}
            print(self.foods)

    def all_foods(self):
        return self.foods.keys()


if __name__ == "__main__":
    f = Foods()
    print(f.filterItems("Wheat"))
