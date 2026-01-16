document.getElementById('submitBtn').addEventListener('click', function() {
    const form = document.getElementById('quizForm');
    const totalQuestions = 5;
    let score = 0;
    let answeredCount = 0;

    // 1. Validasi: Pastikan semua soal sudah diisi
    for (let i = 1; i <= totalQuestions; i++) {
        if (form.querySelector(`input[name="q${i}"]:checked`)) {
            answeredCount++;
        }
    }

    if (answeredCount < totalQuestions) {
        alert("Ups! Ada soal yang belum dijawab. Mohon lengkapi semua soal.");
        return;
    }

    // 2. Alert konfirmasi sebelum menampilkan skor
    alert("Kuis Selesai! Klik OK untuk melihat skor dan evaluasi.");

    // 3. Logika Pemeriksaan (Tandai yang SALAH)
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = form.querySelector(`input[name="q${i}"]:checked`);
        const allOptionsInQuestion = form.querySelectorAll(`input[name="q${i}"]`);

        // Jika jawaban salah
        if (selectedOption.value === "wrong") {
            selectedOption.parentElement.classList.add('wrong-answer');
        } 
        // Jika jawaban benar
        else if (selectedOption.value === "correct") {
            score += 20;
        }

        // Nonaktifkan semua input agar tidak bisa diubah setelah submit
        allOptionsInQuestion.forEach(opt => opt.disabled = true);
    }

    // 4. Tampilkan Area Hasil
    const resultArea = document.getElementById('resultArea');
    const finalScoreTxt = document.getElementById('finalScore');
    const statusTxt = document.getElementById('status');

    resultArea.style.display = "block";
    finalScoreTxt.innerText = "Skor: " + score;

    if (score >= 70) {
        statusTxt.innerText = "LULUS";
        statusTxt.style.color = "#00ee37ff";
    } else {
        statusTxt.innerText = "TIDAK LULUS";
        statusTxt.style.color = "#ff0000ff";
    }

    // Sembunyikan tombol submit
    document.getElementById('submitBtn').style.display = "none";
});

// Reset Kuis
document.getElementById('resetBtn').addEventListener('click', function() {
    location.reload(); 
});