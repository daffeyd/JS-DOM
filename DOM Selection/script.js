// DOM Selection
// document. getElementById() -> element
const judul = document. getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor= '#ccc';
judul. innerHTML = 'Sandhika Galih';
 // document. getElementsByTagName -> HTMLCollection
const p = document. getElementsByTagName('p');
for( let i = 0; i < p. length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
    }   


const h1 = document. getElementsByTagName('h1')[0];
h1.style. fontSize = '50px';

 // document.getElementsByClassName
 // -> HTMLCollection
const p1 = document.getElementsByClassName ('p1');
p1[0].innerHTML = 'Ini dibah dari javascript';


// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';
const p2 =document.querySelectorAll('p')
p2[1].innerHTML = 'Ini dibah dari javascript query';

// document.querySelectorAll()-> Nodelist
const p5 = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightgreen';
}


// const sectionB = document.getElementById('b');
// const p6 = sectionB.querySelector('p');
// p6.style.backgroundColor = 'green';

const sectionB = document.querySelector('section#b');
const p6 = document. getElementsByTagName('p')[0];
p6.style.backgroundColor = 'orange';

//untuk memanggil yang tag lain yang memiliki label yang lain selain default
const sMerah = document. querySelector('input[name=sMerah]') ;
