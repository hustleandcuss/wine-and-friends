import helpers
import xml.etree.ElementTree as ET


def random_wine_handler(event, _):
    # TODO: implement logic here
    tree = ET.parse('https://www.systembolaget.se/api/assortment/products/xml')
    root = tree.getroot()
    root.tag

    return helpers.response("Red red wine!")
