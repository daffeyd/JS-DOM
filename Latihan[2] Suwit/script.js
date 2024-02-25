function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.33) return 'gajah';
    if ((comp >= 0.33) && (comp >= 0.33)) return 'orang';
    return semut;
}

function getHasil(comp, player) {
    if (comp == player) return 'SERI!';
    if (player == 'gajah') {
        return comp == 'orang' ? 'MENANG!' : 'KALAH!';
    }
    if (player == 'orang') {
        return comp == 'semut' ? 'MENANG!' : 'KALAH!';
    }
    if (player == 'semut') {
        return comp == 'gajah' ? 'MENANG!' : 'KALAH!';
    }
}

function putar() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
        imgComp.setAttribute('src', `img/${gambar[i++]}.jpg`);
        if (i == gambar.length) {
            i = 0;
        }


    }, 100)

}
const pilihanUser = document.querySelectorAll('li img')
pilihanUser.forEach((item) => item.addEventListener('click', function () {

    // ambil nilai dari inputan user
    const userInput = item.className;
    // generate random computer choice
    const pilihanComp = getPilihanComputer();

    const hasil = getHasil(pilihanComp, userInput);
    putar();

    setTimeout(function () {
        //mengubah gambar dari elemen dengan class img-komputer dengan gambar sesuai dengan pilihan komputer
        const imgComp = document.querySelector('.img-komputer');
        imgComp.setAttribute('src', `img/${pilihanComp}.jpg`)
        // tampilkan hasil ke layar
        console.log(`Anda memilih ${userInput}. Komputer memilih ${pilihanComp}. Hasil: ${hasil}`)
        //menampilkan hasil ke elemen dengan class info
        document.querySelector('.info').innerHTML = `${hasil}`
    }, 1000);



}));


// // seleksi element dengan class gajah
// const elemenGajah = document.querySelector('.gajah');

// elemenGajah.addEventListener('click', () => {
//     // ambil nilai dari inputan user
//     const userInput = elemenGajah.className;
//     // generate random computer choice
//     const pilihanComp = getPilihanComputer();

//     const hasil = getHasil(pilihanComp, userInput);

//     //mengubah gambar dari elemen dengan class img-komputer dengan gambar sesuai dengan pilihan komputer
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('img', `img/${pilihanComp}.jpg`)
//     // tampilkan hasil ke layar
//     console.log(`Anda memilih ${userInput}. Komputer memilih ${pilihanComp}. Hasil: ${hasil}`)
//     //menampilkan hasil ke elemen dengan class info
//     document.querySelector('.info').innerHTML = `${hasil}`
// });