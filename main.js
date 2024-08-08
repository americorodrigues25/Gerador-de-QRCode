const input = document.querySelector('input');
const qrcode = document.querySelector('#qrcode');
const button = document.querySelector('button');

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        genQRCode();
    }
});

button.addEventListener('click', () => {
    genQRCode();
})

function genQRCode() {
    if (!input.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
}