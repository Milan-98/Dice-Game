let dice1 = Math.ceil(Math.random()*6);
let dice2 = Math.ceil(Math.random()*6);

let selection1 = document.querySelector("#img1");
selection1.setAttribute("src",`${dice1}.jpg`);

let selection2 = document.querySelector("#img2");
selection2.setAttribute("src",`${dice2}.jpg`);

if(dice1>dice2)
{
    document.querySelector("#winn").innerHTML = "<h1>Number 1 Winner</h1>";
}
else if(dice1<dice2)
{
    document.querySelector("#winn").innerHTML = "<h1>Number 2 Winner</h1>";
}
else
{
    document.querySelector("#winn").innerHTML = "<h1>Tie</h1>";
};

document.querySelector("button").addEventListener("click",()=>location.reload());