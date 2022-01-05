let email = document.getElementById('exampleInputEmail1')
let btnLog = document.querySelector(".btn")

btnLog.addEventListener('click', () => {
    return location = ('../../index.html')
})

$(".btn").click(function(){
    try{
        if(email.indexOf('@') > 0){
            cadastroConcluido()
        } else {
            throw new Error ('As senhas estão diferentes.')
        }
    } catch(error){
        error(error)
    }
    
  });