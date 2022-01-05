let email = document.getElementById('exampleInputEmail1')


$(".btn").click(function(){
    try{
        if(email.value.indexOf('@') > 0){
            recuperaConcluido()
        } else {
            throw new Error ('E-mail não encontrado.')
        }
    } catch(error){
        erro(error)
    }
    
  });