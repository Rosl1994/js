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

//let num = 50;

/* while (num < 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++; 
}
while (num < 55); */

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
} */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i =0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a != a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }   
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();