//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200; 
let tamBolinha = 25; 
function setup () {
    //aqui vou criar minha "mesa"
    createCanvas (600,400);
}

function draw(){
    //aqui vou por a cor d "mesa"
    background (75,0,130);
    //chamado a função
    criaBolinha (xBolinha, yBolinha, tamBolinha)

}



//função bolinha
function criarBolinha (Bolinha, yBolinha, tamBolinha)[
    circle (xBolinha, yBolinha, tamBolinha);
]