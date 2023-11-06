element.addEventListener('click', onClick);
function initialize()
{
    score = 0;
    elementClicked = false;
    element = document.getElementsByClassName('grid');
    archer = document.getElementById("archer");
    king = document.getElementById("king");
    stopSign = document.getElementById("stopsign");
    wizard = document.getElementById("wizard");
    troll = document.getElementById("troll");
    knight = document.getElementById("knight");
    fakeCard = document.getElementById("fakecard");
    healer = document.getElementById("healer");
    scoreCounter = document.getElementById("score");
    archer1 = document.getElementById("archer1");
    king1 = document.getElementById("king1");
    stopSign1 = document.getElementById("stopsign1");
    wizard1 = document.getElementById("wizard1");
    troll1 = document.getElementById("troll1");
    knight1 = document.getElementById("knight1");
    fakeCard1 = document.getElementById("fakecard1");
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
