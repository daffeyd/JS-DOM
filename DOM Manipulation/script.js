//*note for selector : "#" means id, "." means class, "" means tag

//DOM Manipulation element.innerHTML

// const judul = document. getElementById('judul') ;
// judul.innerHTML = '<em>Sandhika Galih</em>';

// const sectionA = document.querySelector('section#a') ;

// sectionA.innerHTML = '<div><p>paragrafl</p></div>';

//DOM Manipulation element.style.<css_property>

// const judul = document. querySelector('#judul') ;
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

//element.setAttribute()
//it will make the tag has some attibutes 
//could be use as setting id

const judul = document. getElementsByTagName('h1') [0];
judul.setAttribute('name', 'daffeyd') ;
//result: <h1 name = "daffeyd"></h1>

//elements.getAttirbute()
//to retrieve attribute value of an elements
judul.getAttribute('name') ;
//result: daffeyd

//element.removeAttribute()
judul.removeAttribute
//result: <h1></h1>

//element.classList.add()
//it will add you class list
//<p class="p2">paragraf 2</p>

const p2 = document.querySelector('.p2');
p2.classList.add("label")
//result : <p class="p2 label">paragraf 2</p>

//element.classList.remove()
//it will add you class list
//<p class="p2">paragraf 2</p>

p2.classList.remove("label")
//result : <p class="p2 label">paragraf 2</p>

//element.classList.toggle()
//it will add you class list
//<p class="p2">paragraf 2</p>

p2.classList.toggle("label")
//result : <p class="p2 label">paragraf 2</p>
//if it used again it will remove
p2.classList.toggle("label")
//result : <p class="p2">paragraf 2</p>

//this feature can be use in toggle style 

//element.classList.item()
//return specific item from your element's classlist
p2.classList.toggle("label")
p2.classList.item(1)
//result: label, index mulai dari 0

//element.classList.contains()
p2.classList.contains("label")
//result: true,

//element.classList.replace()
p2.classList.replace("label", "QR")
//result : <p class="p2 QR">paragraf 2</p>

//DOM manipulation part 2

// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

//method baru 
parentNode.append()
parentNode.prepend()
childNode.before()
childNode.after()
childNode. remove ()
childNode.replaceWith()

//Creating new element

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
//save text into tag P
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


//membuat element baru yang dapat di sesuaikan penempatannya

//membuat elemen
const LiBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
LiBaru.appendChild(teksLiBaru) ;

//mencari list item dengan id "b" pada div section
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(LiBaru, li2);

//menghapus tag a
const Link = document. getElementsByTagName('a') [0];
sectionA.removeChild(Link) ;

//Menmilih tag "p" pada tag yang idnya "b"
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

//membuat item baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!')

h2Baru. appendChild(teksH2Baru) ;


//mengganti item yang lama dengan item yang baru
sectionB.replaceChild(h2Baru, p4);







