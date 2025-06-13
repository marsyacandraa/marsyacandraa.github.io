const soalContainer = document.getElementById("soal");
const jawabanContainer = document.getElementById("jawaban");
const submitButton = document.getElementById("submit");
const hasilContainer = document.getElementById("hasil");
 
const pertanyaan = [
    {
        soal: "Benda langit yang mengelilingi bumi adalah?",
        jawaban: ["Matahari", "Mars", "Bulan", "Bintang"],
        jawabanBenar: "Bulan",
    },
    {
        soal: "Hewan pemakan tumbuhan disebut?",
        jawaban: ["Karnivora", "Herbivora", "Omnivora", "Insektivora"],
        jawabanBenar: "Herbivora",
    },
    {
        soal: "Organ untuk bernapas manusia adalah?",
        jawaban: ["Hati", "Ginjal", "Paru-paru", "Usus"],
        jawabanBenar: "Paru-paru",
    },
    {
        soal: "Warna primer terdiri dari warna apa saja?",
        jawaban: ["merah, kuning, biru", "hijau, putih, hitam", "cokelat, pink, ungu", "jingga, ungu,emas"],
        jawabanBenar: "merah, kuning, biru",
    },
    {
        soal: "Simbol sila pertama pancasila adalah?",
        jawaban: ["rantai", "pohon beringin", "kepala banteng", "bintang"],
        jawabanBenar: "bintang",
    }
];
 
let skor = 0;
let soalSaatIni = 0;
 

function tampilkanSoal() {
    const soal = pertanyaan[soalSaatIni];
    soalContainer.textContent = soal.soal;
 
    jawabanContainer.innerHTML = "";
    soal.jawaban.forEach((jawaban) => {
        const tombol = document.createElement("button");
        tombol.textContent = jawaban;
        tombol.addEventListener("click", () => cekJawaban(jawaban));
        jawabanContainer.appendChild(tombol);
    });
}

 
function cekJawaban(jawaban) {
    const soal = pertanyaan[soalSaatIni];
    if (jawaban === soal.jawabanBenar) {
        skor++;
    }
 
    soalSaatIni++;
    if (soalSaatIni < pertanyaan.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}
 
function tampilkanHasil() {
    hasilContainer.textContent = `Skor Anda: ${skor} dari ${pertanyaan.length}`;
}
 
tampilkanSoal();