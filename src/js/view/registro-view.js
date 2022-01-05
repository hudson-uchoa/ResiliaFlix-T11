function render(apiResponse) {
  $("#inputEstado").val(`${apiResponse.uf}`);
  $("#inputAddress").val(`${apiResponse.bairro}`);
  $("#inputAddress").val(`${apiResponse.logradouro}`);
  $('#inputCity').val(`${apiResponse.localidade}`)
}

function erro(error) {
  $(".alert").css('display', 'flex')
  $(".alert").text(`${error}`);
}

function cadastroConcluido(){
    $("#concluido").css('display', 'block')
    $('.form-group').css('display', 'none')
    $(".alert").css('display', 'none')
    $('#criar').css('display', 'none')
    $('#log').css('display', 'none')
    $('form').css('text-align', 'center')
    $("#btnCriar").css('display', "none")
}