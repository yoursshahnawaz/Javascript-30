const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('what\'s up?');

// Interpolated
console.log('Hello I am a %s string!', ';)')

// Styled
console.log('%c I am some great text', 'font-size:20px; background: red')

// warning!
console.warn('It\'s a warning!');

// Error :|
console.error('It\'s an error!');

// Info
console.info('Some fun facts!');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

console.clear();
// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);  
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old!`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Hey!');
console.count('Hey!');
console.count('Hello!');
console.count('Hey!');
console.count('Hey!');
console.count('Hello!');
console.count('Hello!');
console.count('Hey!');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json()) 
    .then(data => {
        console.timeEnd('fetching data'); 
        console.log(data);
    });