element = document.getElementsByClassName('grid');
// element.addEventListener('click', onClick);
function initialize()
{
    score = 0;
    elementClicked = false;
    archer = document.getElementById("archer");
    king = document.getElementById("king");
    stopsign = document.getElementById("stopsign");
    wizard = document.getElementById("wizard");
    troll = document.getElementById("troll");
    knight = document.getElementById("knight");
    fakecard = document.getElementById("fakecard");
    healer = document.getElementById("healer");
    scoreCounter = document.getElementById("score");
    archer1 = document.getElementById("archer1");
    king1 = document.getElementById("king1");
    stopsign1 = document.getElementById("stopsign1");
    wizard1 = document.getElementById("wizard1");
    troll1 = document.getElementById("troll1");
    knight1 = document.getElementById("knight1");
    fakecard1 = document.getElementById("fakecard1");
    healer1 = document.getElementById("healer1");
    scoreCounter = document.getElementById("score1");
}
function onClick()
{
    elementClicked = true;
}
function reset()
{
    score = 0;
    scoreCounter.innerHTML = `Score: ${score}`;
}
archer1.onclick = function(){
    archer1.src = "archer.png";
}
archer.onclick = function(){
    archer.src = "archer.png";
}
king.onclick = function(){
    king.src = "buff king.png";
}
king1.onclick = function(){
    king1.src = "buff king.png";
}
stopsign.onclick = function(){
    stopsign.src = "STOPSIGN.png";
}
stopsign1.onclick = function(){
    stopsign1.src = "STOPSIGN.png";
}
wizard.onclick = function(){
    wizard.src = "wizard.png";
}
wizard1.onclick = function(){
    wizard1.src = "wizard.png";
}
troll.onclick = function(){
    troll.src = "troll.png";
}
troll1.onclick = function(){
    troll1.src = "troll.png";
}
knight.onclick = function(){
    knight.src = "knight.png";
}
knight1.onclick = function(){
    knight1.src = "knight.png";
}
fakecard.onclick = function(){
    fakecard.src = "FAKECARDBACK.png";
}
fakecard1.onclick = function(){
    fakecard1.src = "FAKECARDBACK.png";
}
healer.onclick = function(){
    healer.src = "HEALER.png";
}
healer1.onclick = function(){
    healer1.src = "HEALER.png";
}