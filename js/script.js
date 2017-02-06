var cardsNumber = 12;
var boardElement = document.getElementById("board");


for (var i = 0; i < cardsNumber/2; i++){
    var cardElement = document.createElement ("div");
    var cacheElement = document.createElement ("div");

    cardElement.innerHTML = i;

    cardElement.className = "card";
    cacheElement.className = "cache";

    boardElement.appendChild(cardElement);
    cardElement.appendChild(cacheElement);





    var cardElement = document.createElement ("div");
    var cacheElement = document.createElement ("div");

    cardElement.innerHTML = i;

    cardElement.className = "card";
    cacheElement.className = "cache";

    boardElement.appendChild(cardElement);
    cardElement.appendChild(cacheElement);
}


    // cacheElement.addEventListener("click",function(){
    //     document.getElementByClassName('cache').style.visibility='hidden';
    // }
