function render(apiResponse) {
  $("#inputEstado").val(`${apiResponse.uf}`);
  $("#inputAddress").val(`${apiResponse.bairro}`);
  $("#inputAddress").val(`${apiResponse.logradouro}`);
  $('#inputCity').val(`${apiResponse.localidade}`)
}

function erro(error) {
  $("#titulo-field").html(`${error}`);
}

function registroConcluido(){
    $("#concluido").css('display', 'block')
    $('.form-group').css('display', 'none')
    $("#btnCriar").css('display', "none")
}