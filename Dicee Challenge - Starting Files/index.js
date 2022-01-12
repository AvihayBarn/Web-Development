randomNumber1 = Math.floor(Math.random()*6+1);
randomNumber2 = Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","images/dice"+String(randomNumber1)+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+String(randomNumber2)+".png");

if(randomNumber1 > randomNumber2)
{
  text = "Player 1 wins";
}
else if (randomNumber2 > randomNumber1)
{
  text = "Player 2 wins";
}
else
{
  text = "Draw";
}

document.querySelector("h1").innerHTML = text;
