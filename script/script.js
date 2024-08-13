//codigo da tela index.html
function closePopup() {
    document.getElementById('popup-container').classList.remove('show');
}

// Display the popup only once when the main page loads
window.onload = function () {
    var hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
        document.getElementById('popup-container').classList.add('show');
        sessionStorage.setItem('hasVisited', 'true');
    }
};
//codigo da tela inscricao.html
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    $('#confirmationModal').modal('show');
});

document.getElementById('copyPixButton').addEventListener('click', function () {
    const pixKeyElement = document.getElementById('pix-key');
    const range = document.createRange();
    range.selectNode(pixKeyElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        alert('Chave PIX copiada ' + msg);
    } catch (err) {
        console.error('Falha ao copiar a chave PIX: ', err);
    }

    window.getSelection().removeAllRanges();
});


