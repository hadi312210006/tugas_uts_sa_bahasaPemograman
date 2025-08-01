// Contoh interaktif sederhana
console.log("Website interaktif aktif!");

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Supaya tidak reload halaman
  alert("Formulir berhasil dikirim!");
});
