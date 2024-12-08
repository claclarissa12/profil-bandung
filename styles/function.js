// Ambil tombol dengan id 'download'
const downloadButton = document.getElementById('download');

// Tambahkan event listener untuk tombol download
downloadButton.addEventListener('click', function() {
    // Tentukan URL atau path file CV (misalnya PDF)
    const fileURL = 'asset/CV.pdf'; // Ganti dengan path file Anda

    // Buat elemen link sementara untuk memicu pengunduhan
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'CV.pdf';  // Nama file yang akan diunduh

    // Simulasikan klik pada elemen link
    link.click();
});
