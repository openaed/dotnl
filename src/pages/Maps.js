// export default async function GetMaps() {
//   const maps = [];
//   const mapsResult = await (await fetch("https://api.openaed.nl/maps")).json();

//   mapsResult.data.forEach(async (map) => {
//     const placesResult = await (
//       await fetch(`https://api.openaed.nl/${map}/places`)
//     ).json();
//     maps.push({
//       name: placesResult.data.name,
//       locations: placesResult.data.places,
//       url: `https://${map}.openaed.nl/`,
//     });
//   });
//   return maps;
// }

export default async function GetMaps() {
  const mapsResult = await (await fetch("https://api.openaed.nl/maps")).json();

  return Promise.all(
    mapsResult.data.map(async (map) => {
      const placesResult = await (
        await fetch(`https://api.openaed.nl/${map}/places`)
      ).json();

      return {
        name: placesResult.data.name,
        locations: placesResult.data.places,
        url: `https://${map}.openaed.nl/`,
      };
    })
  );
}
