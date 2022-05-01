const API_KEY = "e4f6a4c9242a2ae28d81ed446acf4d41";
var submit = document.querySelector("#input");
let nameSearch;
var movieData = [];

const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("error getMovies: ", error);
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  nameSearch = document.querySelector("#title").value;
  const movies = [
    {
      title: "Documentários",
      path: `/search/movie?api_key=${API_KEY}&language=en-US&query=${nameSearch}`,
    },
  ];
});



