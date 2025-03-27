function calcular(){
    //recuperar valor da ação social digitado
    //declaração variavel sem tipo
    soma = 0
   let acaoSocial = document.getElementById("acaoSocial").value;
   soma = soma + Number(acaoSocial)
   //recupera o valor da homenagem digitado
   let homenagem = document.getElementById("homenagem").value;
   soma = soma + Number(homenagem)
   //vamos somar os valores
   let leite = document.getElementById("leite").value;
   soma = soma + Number(2* leite)
   //recupera qtd de leite
   let kitAvulso = document.getElementById("kitAvulso").value;
   soma = soma + Number(15* kitAvulso)
   let suplementoAvulso = document.getElementById("suplementoAvulso").value;
   soma = soma + Number(30 * suplementoAvulso)
   //devolve o resultado para o HTML
   document.getElementById("soma").innerHTML = soma.toFixed(2)

}