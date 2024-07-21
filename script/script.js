//codigo da tela index.html
$('#carouselPatrocinadores').carousel({
    interval: 2000,
    wrap: true
});
//codigo da tela inscricao.html
$('form').on('submit', function(event) {
    event.preventDefault();
    $('#confirmationModal').modal('show');
});