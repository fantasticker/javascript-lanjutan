// Cara membuat objek di javascript
// 1. Object Literal
// let mahasiswa = {
//     nama: 'Vissi',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     }
// }

// 2. Function Declaration
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`)
//     }

//     return mahasiswa;
// }

// let Vissi = Mahasiswa('Vissi', 10);

// 3. Constructor Function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`)
//     }
// }

// let Vissi = new Mahasiswa('Vissi', 10);