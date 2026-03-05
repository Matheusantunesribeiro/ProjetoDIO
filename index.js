let nomeHeroi = "Matheus"
let experiencia = 4000
let nivel = " "
switch (true) {
    case experiencia < 1000:
        nivel = "ferro";
        break;
    case experiencia >= 1001 && experiencia <= 2000:
        nivel = "bronze";
        break;
    case experiencia >= 2001 && experiencia <= 5000:
        nivel = "prata";
        break;
    case experiencia >= 5001 && experiencia <= 7000:
        nivel = "ouro";
        break;
    case experiencia >= 7001 && experiencia <= 8000:
        nivel = "platina";
        break;
    case experiencia >= 8001 && experiencia <= 9000:
        nivel = "ascendente";
        break;
    case experiencia >= 9001 && experiencia <= 10000:
        nivel = "imortal";
        break;
    default:
        nivel = "radiante";
}
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel) 
