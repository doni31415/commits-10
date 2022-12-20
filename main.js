
let url = "https://api.sampleapis.com/movies/";
async function getMovies(filmName) {
    const res = await fetch(url + filmName);
    const filmData = await res.text();
    renderFilms(filmData);
}
let div = document.querySelector("#root");
let btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.onclick = () => {
        getMovies(btn.textContent);
    };
});
function renderFilms(filmArray) {
    div.innerHTML = "";
    for (const film of filmArray) {
        div.innerHTML += `<div>
        <h3>${film.title}</h3>
        <img width="30%" src=${film.posterURL} alt="" />
        </div>`;
    }
}
