import helpers
import random
import xml.etree.ElementTree as ET


def random_wine_handler(event, _):
    tree = ET.parse('systembolaget.xml')
    root = tree.getroot()

    wines = []

    for artikel in root.findall('artikel'):
        product_group = artikel.find('Varugrupp').text
        name = artikel.find('Namn').text
        product_id = artikel.find('Varnummer').text

        if "vin" in product_group:
            wines.append({"productId": product_id, "name": name, "productGroup": product_group})

    wine = random.choice(wines)

    return helpers.response(wine)
