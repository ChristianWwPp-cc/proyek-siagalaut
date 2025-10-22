// Data Pasang surut (Data Dummy - Kamu harus membuatnya lebih realistis)
// Data ini seharusnya DIBUAT OTOMATIS oleh script Phyton tim kamu!
const dataPasangSurut = [
    { hari: "Hari Ini", tanggal:"20 oktober", waktu_pasang: "15:30", tinggi_pasang: "2.1m", waktu_surut: "09:00", tinggi_surut: "0.5m" },
    { hari: "besok", tanggal:"21 oktober", waktu_pasang: "16:00", tinggi_pasang: "2.0m", waktu_surut: "09:45", tinggi_surut: "0.6m" },
    // Tambahkan 5 hari lagi di sini!
];

// Data Cuaca (Data Dummy Sederhana)
const dataCuaca = {
    lokasi: "pelabuhan Lamongan",
    suhu: "28°C",
    kecepatan_angin: "15 knot",
    kondisi: "Cerah Berawan"
};
// --- FUNGSI MODULAR: MENGISI DATA CUACA ---
function tampilkanCuaca() {
    const CuacaCard = document.getElementById('cuaca-card');
    cuacaCard.innerHTML = `
    <h3>${dataCuaca.lokasi}</h3>
    <p><strong>Suhu:</strong> ${dataCuaca.suhu}</p>
    <p><strong>Angin:</strong> ${dataCuaca.kecepatan_angin}</p>
    <p><strong>Kondisi:</strong> ${dataCuaca.kondisi}</p>
    `;
}

// --- FUNGSI MODULAR: MENGISI JADWAL PASANG SURUT ---
function tampilkanpasangsurut() {
    const listContainer = document.getElementById('pasang-surut-list');
    listContainer.innerHTML = ``; // kosongkan dulu

    dataPasangSurut.forEach(data => {
        const item = document.createElement('div');
        item.classList.add('data-item');
        item.innerHTML = `
        <h4>${data.hari}, ${data.tanggal}</h4>
        <p><strong>Pasang:</strong> ${data.waktu_pasang} (${data.tinggi_pasang})</p>
        <p><strong>surut:</strong> ${data.waktu_surut} (${data.tinggi_surut})</p>
        `;
        listContainer.appendChild(item);
    });
}
// --- FUNGSI MODULAR: PERINGATAN PASANG (Simulasi Logika) ---
function cekperingatanPasang() {
    const peringatanBox = document.getElementById('peringatan-cuaca');
    const waktuSekarang = new Date();
    const jamSekarang = waktuSekarang.getHours();

    // Asumsi pasang tertinggi hari ini adalah jam 15:30 (ambil dari dataPasangSurut[0])
    const jamPasang = 15; // Dari 15:30

    // Logika Sederhana: Beri peringatan jika 1 jam mendekati pasang Tertinggi
    if (jamSekarang >= (jamPasang - 1) && jamSekarang < jamPasang) {
        peringatanBox.style.display = `block`;
        peringatanBox.textContent = `PERINGATAN SIAGA! Pasang Tertinggi (${dataPasangSurut[0].waktu_pasang}) akan segera tiba. selalu waspada!`;
    } else {
        peringatanBox.style.display = 'none';
    }
    
}

// --- FUNGSI: TOGGLE MODE GELAP ---
document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Tmanbahkan logika penyimpanan preferensi mode di local storage di sini
     });

    // --- EKSEKUSI FUNGSI SAAT WEBSITE DIMUAT ---
    document. addEventListener('DOMContentLoaded', () => {
        tampilkanCuaca();
        tampilkanpasangsurut();
        cekperingatanpaasang(); // panggil cek peringatan setiap kali dimuat
        // kamu bisa menggunakan setInterval unntuk memanggil cekPeringatanPasang()
        // setiap beberapa menit agar peringatan update secara dinamis.
    });