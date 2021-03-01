class UI {
  constructor() {
    this.film = document.querySelector(".movie");
    this.filmInfo = document.getElementById("movie-info");
    this.overviewInfo = document.getElementById("overview");
    this.main = document.getElementById("main")
    this.image_url = "https://image.tmdb.org/t/p/w1280";
   
  }

  showMoviesInfo = (movies) => {
    movies.forEach((movie) => {
        this.main.innerHTML+=`
        <div class="movie">
            <img src="${this.image_url + movie.poster_path}"
            alt="">
        <div class="movie-info" id="movie-info">
            <h3>${movie.title}</h3>
            <span class="red">${movie.vote_average}</span>
        </div>
        <div class="overview" id="overview">
            <h3>Overview</h3>
            ${movie.overview}
        </div>
    </div>
        `
    });
  };



  searchMovies = (inputs) =>{
    this.main.innerHTML="";
    inputs.forEach((input) => {
       this.main.innerHTML+=`
       <div class="movie">
               <img src="${this.image_url + input.poster_path}"
                alt="">
            <div class="movie-info" id="movie-info">
                <h3>${input.title}</h3>
                <span class="red">${input.vote_average}</span>
            </div>
           <div class="overview" id="overview">
                <h3>Overview</h3>
               ${input.overview}
            </div>
       </div>
       
       `
    });
  }
}



