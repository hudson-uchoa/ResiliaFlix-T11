const userInf = () => {
  localStorage.setItem("email", usuario);
};

const userInf2 = () => {
  localStorage.setItem("senha", password);
};

const userInf3 = () => {
  localStorage.setItem("nome", inputName);
};

let nome = document.getElementById("inputEmail1");
let email = document.getElementById("inputEmail4");
let senha = document.getElementById("inputPassword3");
let senha2 = document.getElementById("inputPassword4");
let registro = document.getElementById("btnCriar");
var usuario;
var password;
var inputName;

// registro.addEventListener("click", () => {
//   inputName = nome.value
//   usuario = email.value
//   password = password.value
//   userInf();
//   userInf2();
//   userInf3();
//   console.log("Check");
// });

$("#inputCEP").on("change", async function () {
  let cep = document.getElementById("inputCEP").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  let apiResponse = await fetch(url).then(response => response.json());
  console.log(apiResponse);
  render(apiResponse);
});

$("#btnCriar").click(function(){
  try{
      if(senha.value == senha2.value){
          cadastroConcluido()
      } else {
          throw new Error ('As senhas estão diferentes.')
      }
  } catch(error){
      erro(error)
  }
  
});