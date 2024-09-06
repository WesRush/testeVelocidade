let NomeCarro1,Vel1,NomeCarro2,Vel2

NomeCarro1 = prompt("Digite o nome do modelo do primeiro carro: ")
Vel1 = parseFloat(prompt("Digite a velocidade do primeiro carro em KM/H: "))
NomeCarro2 = prompt("Digite o nome do modelo do segundo carro: ")
Vel2 = parseFloat(prompt("Digite a velocidade do segundo carro em KM/H: "))

if(Vel1 > Vel2){
    alert(`${NomeCarro1} com velocidade de ${Vel1} KM/H é mais rápido que ${NomeCarro2} com velocidade ${Vel2} KM/H`)
}else if (Vel1 < Vel2){
    alert(`${NomeCarro2} com velocidade de ${Vel2} KM/H é mais rápido que ${NomeCarro1} com velocidade ${Vel1} KM/H`)
} else if (Vel1 == Vel2){
    alert(`Os carros ${NomeCarro1} e ${NomeCarro2} têm a mesma velocidade!`)
} else{
    alert("ERRO: Fechando programa!")
}
alert("Fechando programa!")

