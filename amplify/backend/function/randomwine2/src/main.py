import helpers
import xml.etree.ElementTree as ET


def random_wine_handler(event, _):
    # TODO: implement logic here
    tree = ET.parse('systembolaget.xml')
    root = tree.getroot()
    print root.tag

    return helpers.response("Red red wine!")
