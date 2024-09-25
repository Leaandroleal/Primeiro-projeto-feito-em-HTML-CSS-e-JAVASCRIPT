$(document).ready(function () {
       
    $('#TemaClaro').click(function () {
        $('#TemaClaro').hide();
        $('#TemaEscuro').show();
        $('html').removeClass('TemaEscuro').addClass('TemaClaro');    
    });

    $('#TemaEscuro').click(function () {
        $('#TemaEscuro').hide();
        $('#TemaClaro').show();
        $('html').removeClass('TemaClaro').addClass('TemaEscuro');    
        });
    $(".Botao").click(function(){
       window.location.href="trabalho02.html"; 
    });

    $("#Enviar").click(function(){
        alert("Agendamento confirmado com sucesso. Aguardamos você!");
        $('#recarregar').hide();
     });
    

});
