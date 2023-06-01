export default async function GetMaps() {
  const mapsResult = await (await fetch("https://api.openaed.nl/maps")).json();

  return Promise.all(
    mapsResult.data.map(async (map) => {
      const placesResult = await (
        await fetch(`https://api.openaed.nl/${map}/places`)
      ).json();

      return {
        name: placesResult.data.name,
        description: placesResult.data.description,
        url: `https://${map}.openaed.nl/`,
      };
    })
  );
}
