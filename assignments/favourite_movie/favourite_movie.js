const movies = [];

function favouriteMovie(operation, movie) {
    operation = operation.toLowerCase();
    if(operation =='add' || operation=='remove'){
        if(operation =='add'){
            movies.push(movie);
            console.log(movies);
        }
        else if(operation == 'remove' && movies[0]==null){
            console.log("There is nothing to remove");
        }
        else{
        movies.pop();
        console.log(movies)
        }
    }
    else{
        console.log('INVALID INPUT')
    }
}

module.exports = favouriteMovie;
