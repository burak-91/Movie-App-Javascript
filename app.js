const request = new Request();
const ui = new UI()

const form = document.getElementById("form")
const searchInput = document.getElementById("search")

eventListener=()=>{
    document.addEventListener("DOMContentLoaded",()=>getMoviesFromDB())
    form.addEventListener("submit",(e)=>searchMovie(e))
}

eventListener()


getMoviesFromDB=()=>{
    request.get()
    .then(movies => ui.showMoviesInfo(movies.results))
}


searchMovie=(e)=>{
    let input = searchInput.value
    if(input && input !==""){
        request.search(input)
        .then(res =>ui.searchMovies(res.results))
        
        input.value=""
    }
    else{
        window.location.reload()
    }
    
    e.preventDefault()
}
