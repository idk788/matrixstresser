const stressForm = document.getElementById('stress-form');
const urlInput = document.getElementById('url');
const stressBtn = document.getElementById('stress-btn');
const resultDiv = document.getElementById('result');

stressForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = urlInput.value;
    // Fungsi untuk melakukan stress test
    stressTest(url);
});

function stressTest(url) {
    // Menghubungkan ke API untuk melakukan stress test
    fetch('https://api.yourserver.com/stress-test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ targetUrl: url }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            resultDiv.innerHTML = `Stress test berhasil! Response status: ${data.status}`;
        } else {
            resultDiv.innerHTML = `Stress test gagal! Response status: ${data.status}`;
        }
    })
    .catch((error) => {
        resultDiv.innerHTML = `Error: ${error.message}`;
    });
}