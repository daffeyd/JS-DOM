// //memilih item dengan class card
// const card = document.querySelector('.card');
// //memilih item dengan class container
// const container = document.querySelector('.container');
// //memilih item dengan class close
// const xButton = document.querySelector('.close');

// xButton.addEventListener('click', function () {
//     //untuk menutup card
//     // container.removeChild(card) ;
//     //bisa juga 
//     card.style.display = 'none';
// });

// //Menggunakan DOM transversal
// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// });

//macam macam DOM Transversal
// parentNode
// parentElement
// nextSibling
// nextElementSibling
// previousSibling
// previousElementSibling

//pada kasus prevent default a akan merefresh website sehingga popup tidak dapat hilang
//sehingga penggunaaan prevent default akan mencegah a merefresh halaman
const close = document.querySelectorAll('.close');
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        // close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        //stop propagation berfungsi untuk membuat event parent tidak terpanggil pada saat memanggil event child
        e.stopPropagation();
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        alert('ok')
    });
});