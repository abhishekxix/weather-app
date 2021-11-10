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

  if (response.status === 404) {
    alert(`${city} not found. Please try again.`);
    return;
  }
  if (response.status === 500) {
    alert(`Internal Server Error.`);
    return;
  }

  return await response.json();
};
