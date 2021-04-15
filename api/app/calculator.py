from .constants import TOTAL_WATER, BLUE_WATER, GREEN_WATER, GREY_WATER


class Calculator:
    def get_total_water(self, item, fraction) -> float:
        return item[TOTAL_WATER] * fraction

    def get_green_water(self, item, fraction) -> float:
        return item[GREEN_WATER] * fraction

    def get_blue_water(self, item, fraction) -> float:
        return item[BLUE_WATER] * fraction

    def get_grey_water(self, item, fraction) -> float:
        return item[GREY_WATER] * fraction
