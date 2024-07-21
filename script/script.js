//codigo da tela index.html
$('#carouselPatrocinadores').carousel({
    interval: 2000,
    wrap: true
});
//codigo da tela inscricao.html
        $('form').on('submit', function (event) {
            event.preventDefault();
            $('#confirmationModal').modal('show');
        });

       
        document.getElementById('copyPixButton').addEventListener('click', function() {
            var pixKey = document.getElementById('pix-key').innerText;
            navigator.clipboard.writeText(pixKey).then(function() {
                alert('Chave PIX copiada para a área de transferência!');
            }, function(err) {
                console.error('Erro ao copiar a chave PIX: ', err);
            });
        });