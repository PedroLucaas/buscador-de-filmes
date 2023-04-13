const API_KEY = "e4f6a4c9242a2ae28d81ed446acf4d41";
var submit = document.querySelector("#input");
let nameSearch;
var movieNames = [];

var list = document.getElementById("myList");

const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("error getMovies: ", error);
  }
  return response.json();
};

function createElements(id, src, txt) {
  const div = document.createElement('div');
  div.style = "background-color: transparent; border-radius: 6%; margin: 5px; border: 2px solid #f4b41a; max-width: 300px;  flex-wrap: wrap;";

  const img = document.createElement('img');
  img.src = src;
  img.style = "max-width: 250px;"

  const text = document.createElement('p');
  text.innerText = "|" + txt + "|";
  text.style = "color: #fff; font-size: 30px;"

  div.appendChild(img);
  div.appendChild(text);
  list.appendChild(div);

}

const clearResult = () => list.innerHTML = "";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  nameSearch = document.querySelector("#title").value;
  const path = `/search/movie?api_key=${API_KEY}&language=en-US&query=${nameSearch}`;
  const getter = getMovies(path).then((res) => {
    clearResult();
    for (let i = 0; i < 20; i++){
      let pathImage = res.results[i].poster_path;
      if (pathImage != null)
        var urlImage = `https://image.tmdb.org/t/p/w500${pathImage}`;
      let text = res.results[i].title;
      createElements(i, urlImage, text);
    }
  });
  

});

