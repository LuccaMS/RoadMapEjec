console.log("--- Calculadora --- \n ");
console.log("Opção 1: Soma de dois números \n");
console.log("Opção 2: Subtração de dois valores \n");
console.log("Opção 3: Divisão de dois valores \n");
console.log("Opção 4: Multiplicação de dois valores \n");
console.log("Opção 5: Exponenciação de dois valores \n");
console.log("Opção 6: Sair do programa \n ");

const prompt = require("prompt-sync")();

let op = true;

while (op) {
  var option = prompt("Informe a opção escolhida: ");

  switch (option) {
    case "1":
      var n1 = prompt("Informe o primeiro número: ");
      var value_check = isNaN(n1);
      if (value_check) {
        while (value_check) {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n1 = prompt("Informe o número novamente: ");
          value_check = isNaN(n1);
        }
      }

      var n2 = prompt("Informe o segundo número: ");
      value_check = isNaN(n2);
      if (value_check) 
      {
        while (value_check)
         {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n2 = prompt("Informe o número novamente: ");
          value_check = isNaN(n2);
        }
      }
      var n1_value = Number(n1);
      var n2_value = Number(n2);

      console.log("A soma dos dois valores é : ", n1_value + n2_value);

      break;
    case "2":
      var n1 = prompt("Informe o primeiro número: ");
      var value_check = isNaN(n1);
      if (value_check) {
        while (value_check) {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n1 = prompt("Informe o número novamente: ");
          value_check = isNaN(n1);
        }
      }
      var n2 = prompt("Informe o segundo número: ");
      value_check = isNaN(n2);
      if (value_check) 
      {
        while (value_check)
         {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n2 = prompt("Informe o número novamente: ");
          value_check = isNaN(n2);
        }
      }
      var n1_value = Number(n1);
      var n2_value = Number(n2);

      console.log("A subtração do primeiro número pelo segundo é : ", n1_value - n2_value);

      break;
    case "3":
      var n1 = prompt("Informe o primeiro número: ");
      var value_check = isNaN(n1);
      if (value_check) {
        while (value_check) {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n1 = prompt("Informe o número novamente: ");
          value_check = isNaN(n1);
        }
      }

      var n2 = prompt("Informe o segundo número: ");
      value_check = isNaN(n2);
      if (value_check || n2 == '0') 
      {
        while(n2 == 0)
        {
          console.log("Divisão por zero é indefinido, digite outro número: ");
          n2 = prompt("Informe o número novamente: ");
          value_check = isNaN(n2);
        }
        while (value_check)
         {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n2 = prompt("Informe o número novamente: ");
          while(n2 == 0)
          {
            console.log("Divisão por zero é indefinido, digite outro número: ");
            n2 = prompt("Informe o número novamente: ");
            value_check = isNaN(n2);
          }
          value_check = isNaN(n2);
        }
      }
      var n1_value = Number(n1);
      var n2_value = Number(n2);

      console.log("A soma dos dois valores é : ", (n1_value / n2_value));

      break;
    case "4":
      var n1 = prompt("Informe o primeiro número: ");
      var value_check = isNaN(n1);
      if (value_check) {
        while (value_check) {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n1 = prompt("Informe o número novamente: ");
          value_check = isNaN(n1);
        }
      }

      var n2 = prompt("Informe o segundo número: ");
      value_check = isNaN(n2);
      if (value_check) 
      {
        while (value_check)
         {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n2 = prompt("Informe o número novamente: ");
          value_check = isNaN(n2);
        }
      }
      var n1_value = Number(n1);
      var n2_value = Number(n2);

      console.log("A multiplicação dos dois valores é : ", n1_value * n2_value);
      
      break;
    case "5":
      var n1 = prompt("Informe o primeiro número: ");
      var value_check = isNaN(n1);
      if (value_check) {
        while (value_check) {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n1 = prompt("Informe o número novamente: ");
          value_check = isNaN(n1);
        }
      }

      var n2 = prompt("Informe o segundo número: ");
      value_check = isNaN(n2);
      if (value_check) 
      {
        while (value_check)
         {
          console.log("O valor digitado não é numérico, digite novamente: ");
          n2 = prompt("Informe o número novamente: ");
          value_check = isNaN(n2);
        }
      }
      var n1_value = Number(n1);
      var n2_value = Number(n2);

      console.log("O primeiro valor elevado ao segundo valor é igual a  : ", n1_value ** n2_value);
      
      break;
      break;
    case "6":
      console.log("Teste 6");
      op = false;
      break;
    default:
      console.log("A opção digitado não é numérica, digite novamente");
      break;
  }
}
