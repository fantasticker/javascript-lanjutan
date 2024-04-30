// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang JAVASCRIPT LANJUTAN saja
// gunakan higher order function 'filter' yang callback functionnya mengambil tag html yang mengandung kata "JAVASCRIPT LANJUTAN"
const jsLanjut = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))


// ambil durasi masing-masing video
.map(item => item.dataset.duration)

// ubah durasi dari tipe string menjadi int, ubah menit menjadi detik
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0]*60) + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut % 3600) / 60);
const detik = (jsLanjut % 3600) % 60;

// simpan di DOM
// jumlah video
const jmlVideo = document.querySelector('.jumlah-video');
const teksJmlVideo = document.createTextNode(videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length);
jmlVideo.appendChild(teksJmlVideo);

// total durasi
const totalDurasi = document.querySelector('.total-durasi')
const teksTotalDurasi = document.createTextNode(jam + " Jam " + menit + " menit " + detik + " detik ");
totalDurasi.appendChild(teksTotalDurasi);