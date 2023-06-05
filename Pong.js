
//Var Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Var VelocidadeBolinha
let velocidadexBolinha = 6;
let velocidadeYBolinha = 6;

//Var Raquete1
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10; // weight
let hRaquete = 90; // height

//Var Raquete2
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeYRaquete2;

let colidiu = false

function setup() 
{
    createCanvas(600, 400);
}

function mostraBolinha()
{
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha()
{
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBordas()
{
    if (xBolinha + raio > width ||
        xBolinha - raio < 0)
    {
        velocidadexBolinha *= -1;
    }
    if (yBolinha + raio > height ||
        yBolinha - raio <0)
      {
        velocidadeYBolinha *= -1;
      }
}

function mostraRaquete(x,y)
{
    rect(x, y, wRaquete, hRaquete); //rect=rectangle
}

function mostraRaquete2()
{
    rect(xRaquete2, yRaquete2, wRaquete, hRaquete);
}


function movimentaRaquete1() 
{
    if (keyIsDown(UP_ARROW)) 
    {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) 
    {
        yRaquete += 10;
    }
}

function movimentaRaquete2()
{
    velocidadeYRaquete2 = yBolinha - yRaquete2 - wRaquete /2 -30;
    yRaquete2 += velocidadeYRaquete2;
}

function colisaoRaquete1Biblioteca()
{
    colidiu = collideRectCircle(xRaquete,yRaquete,wRaquete,hRaquete,xBolinha,yBolinha,raio);
    if (colidiu)
    {
        velocidadexBolinha *=-1;
    }
}

function colisaoRaquete2Biblioteca()
{
    colidiu = collideRectCircle(xRaquete2,yRaquete2,wRaquete,hRaquete,xBolinha,yBolinha,raio);
    if (colidiu)
    {
        velocidadexBolinha *=-1;
    }
}

function verificaColisaoRaquete()
{
    if(xBolinha - raio < xRaquete + wRaquete 
    && yBolinha - raio < yRaquete + hRaquete
    && yBolinha + raio > yRaquete)
    {
        velocidadexBolinha *=-1;
    }
}

function draw() 
{
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBordas();
    mostraRaquete(xRaquete,yRaquete);
    movimentaRaquete1();
    //verificaColisaoRaquete();
    colisaoRaquete1Biblioteca();
    colisaoRaquete2Biblioteca();
    mostraRaquete(xRaquete2,yRaquete2);
    movimentaRaquete2();
}