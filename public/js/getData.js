export const getData = async (url, city, coord) => {
  let useCoord = true;
  if (!coord) useCoord = false;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      city,
      lat: useCoord ? coord.lat : undefined,
      lon: useCoord ? coord.lon : undefined,
      units: 'metric',
    }),
  });

  return [await response.json(), response.status];
};
