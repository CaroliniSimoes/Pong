
// Var Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

// Var VelocidadeBolinha
let velocidadexBolinha = 6;
let velocidadeYBolinha = 6;

// Var Raquete1
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10; // weight
let hRaquete = 90; // height

// Var Raquete2
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeYRaquete2;

let colidiu = false

// Placar
let MeusPontos = 0;
let OponentePontos = 0;

function setup() 
{
    createCanvas(600, 400);
}

function mostraBolinha()
{
    fill(color(255,192,203));
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

function colisaoRaqueteBiblioteca(x,y)
{
    colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
    if (colidiu)
    {
        velocidadexBolinha *=-1;
    }
}

/*function verificaColisaoRaquete()
{
    if(xBolinha - raio < xRaquete + wRaquete 
    && yBolinha - raio < yRaquete + hRaquete
    && yBolinha + raio > yRaquete)
    {
        velocidadexBolinha *=-1;
    }
} */

function mostraPlacar()
{
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255,182,193));
    rect(150, 10, 40, 20); // caixa MeusPontos
    fill(255);
    text(MeusPontos, 170, 26);
    fill(color(255,182,193));
    rect(450, 10, 40, 20) // caixa OponentesPontos
    fill(255);
    text(OponentePontos, 470, 26);
}

function marcaPonto()
{
    if (xBolinha > 590 )
    {
        MeusPontos += 1;
    }
    if (xBolinha < 10 )
    {
        OponentePontos += 1;
    }
}

function draw() 
{
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBordas();
    mostraRaquete(xRaquete, yRaquete);
    movimentaRaquete1();
    //verificaColisaoRaquete();
    colisaoRaqueteBiblioteca(xRaquete, yRaquete);
    colisaoRaqueteBiblioteca(xRaquete2, yRaquete2);
    mostraRaquete(xRaquete2, yRaquete2);
    movimentaRaquete2();
    mostraPlacar();
    marcaPonto();
}