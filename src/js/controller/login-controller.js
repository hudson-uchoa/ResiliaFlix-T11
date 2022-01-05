let email = document.getElementById('exampleInputEmail1')

$(".btn").click(function(){
    try{
        if(email.indexOf('@') > 0){
            return location ('../../index.html')
        } else {
            throw new Error ('E-mail não encontrado.')
        }
    } catch(error){
        error(error)
    }
    
  });