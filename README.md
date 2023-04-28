# OpenAED

## Introduction

OpenAED is an initiative to create easily usable AED maps. The project is starting out in the Netherlands, with a select few cities (or regions around them) to start with.

## Where can I find OpenAED?

OpenAED is available on the web at [https://openaed.nl](https://openaed.nl).
From there, you can select a city or region to view the AEDs in that area.
The maps use subdomains based on the name of the city and/or region.
For example, the map for the city of Amsterdam is available at [https://amsterdam.openaed.nl](https://amsterdam.openaed.nl).

## Data

Data for OpenAED is structured as such:

A map can be of a city, or a region. The name of the map is either the name of the city, or the name of the region. This name is used in the subdomain of the map.  
A map also has a list of the villages that are part of the region.

For example, the Amsterdam map contains only the city of Amsterdam, but the Nijmegen map contains the city of Nijmegen and the villages of Groesbeek, Beek, Berg en Dal, Heilig Landstichting, Ubbergen, Wijchen, Beuningen, Malden, Heumen, Nederasselt and Overasselt.

AED data looks like this:

```JSON
{
    "id": 1414423917,
    "access": "yes",
    "locked": null,
    "coordinates": {
        "lat": 51.7615842,
        "lon": 5.7858333
    },
    "indoor": "no",
    "operator": "De Stichting Hulp Bij Hartstilstand Gemeente Heumen",
    "operator:website": null,
    "phone": "+31 6 50936458",
    "location": "links naast hoofdingang",
    "location:en": "to the left of main entrance",
    "defibrillator:case:manufacturer": null,
    "defibrillator:case": null,
    "manufacturer": null,
    "level": 0,
    "image": null,
    "opening_hours": null
}
```

`id` is the ID of the node in OpenStreetMap.
`coordinates` is a dictionary containing the latitude and longitude of the AED.  
The rest of the keys are copied from OpenStreetMap keys.  
Any keys that do not have a value in OpenStreetMap are assigned a value of `null`.  
The key `operator` is "Onbekende beheerder" if the operator is unknown.  
Once OpenAED is international, this key will be translated to the local language.

## OpenStreetMap

OpenAED uses OpenStreetMap as its data source, licensed under the [Open Data Commons Open Database License](https://opendatacommons.org/licenses/odbl/). Therefore, the data exposed by OpenAED is available under the same license.
