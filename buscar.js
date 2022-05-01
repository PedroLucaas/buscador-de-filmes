const API_KEY = "e4f6a4c9242a2ae28d81ed446acf4d41";
var nameSearch = document.getElementById("title").value;
const films = [
  {
    name: "documentaries",
    title: "Documentários",
    path: `/search/movie?api_key=${API_KEY}&language=pt-BR&query=${nameSearch}`,
  },
];

const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMovies: ", error);
  }
};

console.log(getMovies(films[0].path)); // eslint-disable-line no-console