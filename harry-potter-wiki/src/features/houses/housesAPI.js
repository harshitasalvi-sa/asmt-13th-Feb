export const fetchHousesAPI = async () => {
  const res = await fetch(
    "https://potterapi-fedeperin.vercel.app/en/houses"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch houses");
  }

  return res.json();
};
