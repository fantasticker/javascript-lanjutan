// Sebenarnya javascript sudah melakukan instansiasi object saat kita membuat object dengan metode Constructor Function
// Object yang di instansiasi dapat dirinci sebagai berikut
// let this = Object.create(Mahasiswa.prototype)
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Selamat makan, ${this.nama}`
// }
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Selamat bermain, ${this.nama}`
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam*2;
//     return `Selamat tidur, ${this.nama}`
// }

// let Vissi = new Mahasiswa('Vissi', 10);

class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Selamat makan, ${this.nama}`;
    }
    
    main(jam){
        this.energi -= jam;
        return `Selamat bermain, ${this.nama}`;
    }
    
    tidur(jam){
        this.energi += jam*2;
        return `Selamat tidur, ${this.nama}`;
    }
}


let Vissi = new Mahasiswa('Vissi', 10);