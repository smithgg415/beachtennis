//codigo da tela index.html
        $('#carouselPatrocinadores').carousel({
            interval: 1300,
            wrap: true
        })
        function showPopup() {
            document.getElementById('popup-container').classList.add('show');
        }

        function closePopup() {
            document.getElementById('popup-container').classList.remove('show');
        }

        window.onload = function() {
            showPopup();
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
        
        
        