// creo il container per gli elementi da aggingere dinamicamente
const elementsContainer = document.getElementById('elementsContainer')

// creo gli elementi dinamici
const fizz = '<div class="col-1 box fizz">Fizz</div>'
const buzz = '<div class="col-1 box buzz">Buzz</div>'
const fizzBuzz = '<div class="col-1 box fizz_buzz">FizzBuzz</div>'

// creo il ciclo per renderizzare gli elementi dinamici
for (i = 1; i <= 100; i++){

    // condizioni per il corretto rendering degli elementi
    if (i % 5 == 0 && i % 3 == 0){
        elementsContainer.innerHTML += fizzBuzz
    } else if (i % 5 == 0){
        elementsContainer.innerHTML += buzz
    } else if (i % 3 == 0){
        elementsContainer.innerHTML += fizz
    } else{
        elementsContainer.innerHTML += '<div class="col-1 box normal">'+i+'</div>'
    }
    
}