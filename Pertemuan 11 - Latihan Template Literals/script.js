// 1. Template literals
// const mhs = {
//     nama : "Vissi",
//     umur : 21,
//     nim : "2010512033",
//     email : "2010512033@mahasiswa.upnvj.ac.id"
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`;


// 2. Template literals dalam looping

// const mhs = [
//     {
//         nama: "Vissi Varrel Vedatama",
//         email: "2010512033@mahasiswa.upnvj.ac.id"
//     },
//     {
//         nama: "Naila Noelany Maharani",
//         email: "2010512036@mahasiswa.upnvj.ac.id"
//     },
//     {
//         nama: "Rayhan Khaliq Azmy",
//         email: "2010512083@mahasiswa.upnvj.ac.id"
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Template literals dalam conditionals
// const lagu = [
//     {
//         judul: "Kau Adalah",
//         penyanyi: "Isyana Sarasvati",
//         featuring: "Rayi"
//     },
//     {
//         judul: "Di Dalam Jiwa",
//         penyanyi: "Isyana Sarasvati",
//     }
// ]

// const el = `<div class="lagu">
//     ${lagu.map(m => `<ul>
//         <li>${m.judul}</li>
//         <li>${m.penyanyi}${m.featuring ? `, (feat. ${m.featuring})` : ``}</li>
//     </ul>`).join('')}
// </div>`

// 4. Nested (HTML Fragment bersarang)
const mhs = {
    nama: 'Vissi Varrel Vedatama',
    semester: '8',
    matakuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Cloud Computing',
        'Data Warehouse and Data Mining'
    ]
};

function cetakMataKuliah(matakuliah){
    return `<ol>
        ${matakuliah.map( mk => {
            return `<li>${mk}</li>`
        })}
    </ol>`
}

const el = `<div class="mhs">
    <h1 class="nama">${mhs.nama}</h1>
    <span class="semester">semester ${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKuliah(mhs.matakuliah)}
</div>`

document.body.innerHTML = el;