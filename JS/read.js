const services = document.querySelector('.services');
const read = document.querySelector('.read');
const body = document.querySelector("body");

let x = 0;
        
services.addEventListener('click', e => {
    if(x == 0) {
        read.style.display = 'block';
        x = 1;
        console.log(x);
    }
});

body.addEventListener('click', e => {
    if(x == 1) {
        read.style.display = 'none';
        x = 0;
        console.log(x);
    }
}, {
    capture: true
})