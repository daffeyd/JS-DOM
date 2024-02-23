//Merubah warna menggunakan event click
const p3 = document.querySelector('.p3');

//merubah item darii p2 menjadi warna biru muda
function ubahWarna() {
    p2.style.backgroundColor = 'lightblue';
}
// meemilih item dengan class p2 
const p2 = document.querySelector('.p2');

//membaca click 
p2.onclick = ubahWarna();



const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru)
});

//perbedaan dari event handler dan juga event listener adalah 
//event handler overwrite function yang di buat sebelumnya
//event listener menambah function yang ada

//contoh 

// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function () {
//     p3.style.color = 'red';
// }
//result : color red, ignore : background color 

p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightblue';
});
    
p3.addEventListener('click', function () {
    //untuk memasukan variabel itu seperti ini
    let warna = 'blue'
    p3.style.color = 'light'+ warna +'';
});
//result : color red, backgroudn light blue

// Daftar event 
// Mouse Event
    // click
    // dblclick
    // mouseover
    // mouseenter
    // mouseup
    // wheel
    //...
// Keyboard Event
    // keydown
    // keypress
    // keyup
// Resources Event
    // resize
    // scroll
// Focus Event
// View Event
// Form Event
    // reset 
    // submit 
// CSS Animation & Transition Event
// Drag & Drop Event

//link *
// https://developer.mozilla.org/en-US/docs/Web/Events