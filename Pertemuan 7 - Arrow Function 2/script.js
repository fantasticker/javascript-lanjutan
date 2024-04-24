// // Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'sandhika';
//     this.umur = '33';
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur}`)
//     }

//     setInterval(() => {
//         console.log(this.umur++)
//     }, 500)
// }

// let sandhika = new Mahasiswa();

// Arrow function tidak menerapkan konsep 'this'. Jika di dalam arrow function terdapat this maka akan mencari nilai this ke lexical scope/parentnya. Dalam kasus di bawah, this.classList.toggle('caption') nilai this akan berisi box yang merupakan lexical scopenya
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600)
})