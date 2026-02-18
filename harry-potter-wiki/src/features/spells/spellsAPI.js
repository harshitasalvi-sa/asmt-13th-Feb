export const fetchSpellsAPI = async () => {
  const response = await fetch("https://potterapi-fedeperin.vercel.app/en/spells");
  
  if (!response.ok) {
    throw new Error("Failed to fetch spells");
  }

  return response.json();
};
