'use strict';

//alert('Hello!');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = prompt('Вам есть 18?', '');
//console.log(typeof(answer));

//const answers = [];

//answers[0] = prompt('Ваше имя', '');
//answers[1] = prompt('Ваша фамилия', '');
//answers[2] = prompt('Ваш возраст', '');

//document.write(answers);

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//let  incr = 10;
//let decr = 10;

//++incr;
//--decr;

//console.log(++incr);
//console.log(--decr);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);