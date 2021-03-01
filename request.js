class Request{
    constructor(){
        this.apiUrl ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8cba133be2f0f978fe078523f7423e95&page=1";
       this.search_url =
       'https://api.themoviedb.org/3/search/movie?api_key=8cba133be2f0f978fe078523f7423e95&query="';
    }

    async get(){
        const response = await fetch(this.apiUrl)
        const data = await response.json()
        return data    
       
    }


    async search(input){
        const res= await fetch(this.search_url+input)
        const data=await res.json()
        return data
    }
    
}



