// Manajemen memori dapat dilakukan dengan memisahkan properti object yang berupa fungsi ke dalam object baru
const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Selamat makan ${this.nama}`)
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`Selamat bermain ${this.nama}`)
    }
}

function Mahasiswa(nama, energi){
    // Gunakan Object.create() untuk menghubungkan object baru (methodMahasiswa) dengan object lama (Mahasiswa)
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let Vissi = new Mahasiswa('Vissi', 10);