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

//Cycles
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


//Callback function
/* function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('Javascript', done); */

/* let counter = 0;
const obj = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

obj.makeTest();

console.log(Object.keys(obj).length);

const {border, bg} = obj.colors;
console.log(border); */

/* for (let key in obj) {
    if (typeof(obj[key]) == 'object') {
        for (let i in obj[key]) {
            console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${obj[key]}`);
        counter++;
    }  
}

console.log(counter); */

//Massive
/* const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} в массиве ${arr}`);
}); */

//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);

//arr.pop(); // удаляет последний елемент в массиве и возвращает его
//arr.push(10); // добавляет элемент в конец массива

//console.log(arr);

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === "" || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
            
            // Альтернативный вариант
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};