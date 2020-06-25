 class CalculadoraModel{
// criar constructor para ser acessados nos metodos
    constructor(){
        this.num1;
        this.num2;

    } 
    // ler os dados do DOM e pegar o valor convertido em numeros
    lerDados(){
       this.num1 =Number(document.getElementById('n1').value);
       this.num2 = Number(document.getElementById('n2').value);
    
    }
    // limpar os dados dos inputs[n1 e n2] apos ser calculado
    limparDados(){
        Number(document.getElementById('n1').value ="");
        Number(document.getElementById('n2').value ="");
    }

} var user = new CalculadoraModel(); 