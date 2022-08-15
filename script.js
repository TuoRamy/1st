const numberOfFilms = +prompt (`how much films?`, ``);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt(`Last film?`, ``),
      b = prompt(`rating`, ``),  
      c = prompt(`Last film?`, ``),
      d = prompt(`rating`, ``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);