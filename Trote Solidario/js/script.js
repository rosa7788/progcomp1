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
   let kit = Number (document.getElementById("kit").value);
   soma = soma + Number(15* kit)
   //
   let equipe = document.getElementById("equipe").value
   //recupera a cor da equipe
   if (equipe == "Laranja") {
    let pontoKit = 0
    //equipe é laranja
        if ((kit) >=97) { 
            pontosKit = 5000 + ((kit-97)*30)
        }
        else if ((kit) >=78) {
            pontosKit = 4000 + ((kit-78)*30)
        }
        else if ((kit) >=49) {
            pontosKit = 2500 + ((kit-49)*30)
        }
        else if ((kit) >=19) {
            pontosKit = 1000 + ((kit-19)*30)
        }
        else {
            pontosKit = 0
        }

    }
   

   let suplemento= document.getElementById("suplemento").value;
   soma = soma + Number(30 * suplemento)
   //
   let pacoteArroz = document.getElementById("pacoteArroz").value;
   soma = soma + Number(1 * pacoteArroz)
   //
   let pacoteFeijao = document.getElementById("pacoteFeijao").value;
   soma = soma + Number(1 * pacoteFeijao)
   //
   let pacoteMacarrao = document.getElementById("pacoteMacarrao").value;
   soma = soma + Number(0.5 * pacoteMacarrao)
   //
   let oleo = document.getElementById("oleo").value;
   soma = soma + Number(1 * oleo)
   //devolve o resultado para o HTML
   document.getElementById("soma").innerHTML = soma.toFixed(2)


}

