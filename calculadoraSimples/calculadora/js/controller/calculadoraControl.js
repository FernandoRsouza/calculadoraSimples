
 class Calculadora {
  
  // criar metodo de somar
  somar(userSom) {
    // criar usuario para referenciar esse escopo
    userSom = new CalculadoraModel();
    userSom.lerDados();
    // criar variavel que recebe  a soma dos numeros
    let totalSom = userSom.num1 + userSom.num2;
    // ler o Tbody no DOM e colocar o resultado
    let TbodySom = document.getElementById("resultado");

    userSom.num1 =="" || userSom.num2 =="" ?TbodySom.innerHTML ='DIGITE OS NUMEROS  PARA SOMAR!!! <b>:(<b>':
    TbodySom.innerHTML = `TOTAL DA SOMA  É :<b> ${totalSom} <b>`; //usando o ternario
      
      
    userSom.limparDados();
    
  }

  subtrair() {
    // criar usuario para referenciar esse ecopo
    let userSub = new CalculadoraModel();
    // ler os dados
    userSub.lerDados();
    //criar variavel que recebe  a subtração dos numeros
    let totalSub = userSub.num1 - userSub.num2;
    let TbodySub = document.getElementById("resultado");
    TbodySub.innerHTML = `TOTAL DA SUBTRAÇÃO É :<b> ${totalSub}<b>`;

    if(userSub.num1 =="" && userSub.num2 == ""){
         TbodySub.innerHTML='DIGITE OS NUMEROS  PARA SUBTRAIR!!!  <b>:(<b>';
    }
    userSub.limparDados();
    
  } 

  mult() {
    // criar usuario para referenciar esse escopo
    let usersMult = new CalculadoraModel();
    // ler os dados
    usersMult.lerDados();
    // criar variavel que recebe a multiplicação
    let totalMult = usersMult.num1 * usersMult.num2;
    // criar variavel que recebe a tabela do resultado
    let TbodyMult = document.getElementById("resultado");
    TbodyMult.innerHTML = `O VALOR DA MULTIPLICAÇÃO É :<b>${totalMult}<b>`;
    if(usersMult.num1 == "" && usersMult.num2 == ""){
      TbodyMult.innerHTML = 'DIGITE OS NUMEROS  PARA MULTIPLICAR!!! <b>:(<b>'
    }
    usersMult.limparDados();

    
  }
  divisao() {
     // criar usuario para referenciar esse escopo
     let usersFrac = new CalculadoraModel();
    usersFrac.lerDados();
    let totalFra = usersFrac.num1 / usersFrac.num2;
    let TbodyFrac = document.getElementById("resultado");
    TbodyFrac.innerHTML = `O VALOR DA DIVISÃO É : <b>${totalFra}<b>`;
    if(usersFrac.num1 == "" && usersFrac.num2 == ""){
      TbodyFrac.innerHTML = 'DIGITE OS NUMEROS  PARA DIVIDIR!!! <b>:(<b>'
    }
    usersFrac.limparDados();

   
  }

 
}
var calcularControl = new Calculadora();
