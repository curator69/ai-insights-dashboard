export const fetchData = async () => {
  return await fetch("/ai-data.json")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
