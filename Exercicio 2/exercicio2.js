function calcular(){

    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);
    var taxaINSS;
    var inss;

    if (salario <= 1000) {
        taxaINSS = 0.08;
    } else if (salario <=1500) {
        taxaINSS = 0.085;
    } else {
        taxaINSS = 0.09;
    }

    inss = salario * taxaINSS;
    var salarioLiquido = salario - inss;

    console.log("Nome do funcionário: ",nome);
    console.log("Salário: ",salario);
    console.log("INSS: ",inss.toFixed(2));
    console.log("Salário Líquido: ",salarioLiquido);

};