let criar = document.getElementById("btnCria");

criar.addEventListener("click", () => {
  return (location = "../html/login.html");
});

const userInf = () => {
  localStorage.setItem("email", user);
};

const userInf2 = () => {
  localStorage.setItem("senha", password);
};

const userInf3 = () => {
  localStorage.setItem("nome", inputName);
};

let nome = document.getElementById("inputName");
let email = document.getElementById("inputEmail4");
let senha = document.getElementById("inputPassword4");
let registro = document.getElementById("btnLogin");
var user;
var password;
var inputName;

// registro.addEventListener("change", () => {
//   inputName = nome.value;
//   user = email.value;
//   password = password.value;
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
