
let apuesta=prompt("Favor elejir entre (Tijeras,Papel,Piedra,Lagarto,Spock): ")


let elecciones=["Tijeras", "Papel", "Piedra", "Lagarto", "Spock"];

let index = Math.floor(Math.random()*4);

let eleccion =elecciones[index];

if (apuesta != "Tijeras" && apuesta !="Papel" && apuesta !="Piedra" && apuesta != "Lagarto" && apuesta != "Spock"){
    console.log(" Ingrese un valor valido!!!!!!!!!");
}
else if ( apuesta == "Tijeras" && eleccion == "Tijeras"){
        console.log(" Empate");
}
else if( apuesta == "Tijeras" && eleccion == "Papel"){
    console.log("Tijeras corta papel:Ganaste!!!");
}else if( apuesta == "Tijeras" && eleccion == "Piedra"){
    console.log("Tijeras contra Piedra:Perdiste!!!");
}else if( apuesta == "Tijeras" && eleccion == "Lagarto"){
    console.log("Tijeras decapita al Lagarto:Ganaste!!!");
}else if( apuesta == "Tijeras" && eleccion == "Spock"){
    console.log("Tijeras son rotas por Spock:Perdiste!!!");
}else if ( apuesta == "Papel" && eleccion == "Papel"){
    console.log(" Empate");
}else if( apuesta == "Papel" && eleccion == "Tijera"){
    console.log("Tijeras corta papel:Perdiste!!!");
}else if( apuesta == "Papel" && eleccion == "Piedra"){
    console.log("Papel envuelve a Piedra:Ganaste!!!");
}else if( apuesta == "Papel" && eleccion == "Lagarto"){
    console.log("Papel es devorado por Lagarto:Perdiste!!!");
}else if( apuesta == "Papel" && eleccion == "Spock"){
    console.log("Papel desautoriza a Spock:Ganaste!!!");
}else if ( apuesta == "Piedra" && eleccion == "Piedra"){
    console.log(" Empate");
}else if ( apuesta == "Piedra" && eleccion == "Tijera"){
    console.log("Piedra rompe Tijera:Ganaste!!!");
}else if ( apuesta == "Piedra" && eleccion == "Papel"){
    console.log("Piedra es envuelta por Papel:Perdiste!!!");
}else if ( apuesta == "Piedra" && eleccion == "Lagarto"){
    console.log("Piedra aplasta a Lagarto:Ganaste!!!");
}else if ( apuesta == "Piedra" && eleccion == "Spock"){
    console.log("Piedra es vaporizada por Spock:Perdiste!!!");
}else if ( apuesta == "Lagarto" && eleccion == "Lagarto"){
    console.log("Empate");
}else if( apuesta == "Lagarto" && eleccion == "Tijeras"){
    console.log("Lagarto es decapitado por tijera: Perdiste!!!");
}else if( apuesta == "Lagarto" && eleccion == "Papel"){
    console.log("Lagarto devora Papel: Perdiste!!!");
}else if ( apuesta == "Lagarto" && eleccion == "Piedra"){
    console.log("Lagarto es aplastado por Piedra: Perdiste!!!");
}else if( apuesta == "Lagarto" && eleccion == "Spock"){
    console.log("Lagarto envenena a Spock: Ganaste!!!");
}else if ( apuesta == "Spock" && eleccion == "Spock"){
    console.log("Empate");
}else if ( apuesta == "Spock" && eleccion == "Tijera"){
    console.log("Empate");
}else if( apuesta == "Spock" && eleccion == "Tijeras"){
    console.log("Spock Rompe Tijeras: Ganaste!!!");
}else if( apuesta == "Spock" && eleccion == "Papel"){
    console.log("Spock es desautorizado por el Papel: Perdiste!!!");
}else if ( apuesta == "Spock" && eleccion == "Piedra"){
    console.log("Spock vaporiza Piedra: Ganaste!!");
}else {
    console.log("Spock es envenenado por el Lagarto: Perdiste!!!");
}