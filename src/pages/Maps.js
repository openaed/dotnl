export default function GetMaps() {
  const maps = [
    // This will be a database in the future
    {
      name: "Nijmegen",
      locations: [
        "Groesbeek",
        "Beek",
        "Berg en Dal",
        "Heilig Landstichting",
        "Ubbergen",
        "Wijchen",
        "Beuningen",
        "Malden",
        "Heumen",
        "Nederasselt",
        "Overasselt",
        "Winssen",
        "Ewijk",
      ],
      url: "https://nijmegen.openaed.nl",
    },
    {
      name: "Maas en Waal",
      locations: [
        "Druten",
        "Beneden-Leeuwen",
        "Wamel",
        "Alphen",
        "Altforst",
        "Appeltern",
        "Batenburg",
        "Bergharen",
        "Boven-Leeuwen",
        "Dreumel",
        "Hernen",
        "Horssen",
        "Maasbommel",
        "Wijchen",
        "Beuningen",
      ],
      url: "https://maasenwaal.openaed.nl",
    },
    {
      name: "Arnhem",
      locations: ["Arnhem", "Huissen", "Westervoort", "Oosterbeek", "Velp"],
      url: "https://arnhem.openaed.nl",
    },
    {
      name: "Amsterdam",
      locations: ["Amsterdam"],
      url: "https://amsterdam.openaed.nl",
    },
  ];

  return maps;
}
