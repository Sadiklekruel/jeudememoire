
var boardElement = document.getElementById("board");
var cardsNumber = 12;

for (var i = 0; i < cardsNumber/2; i++){
    for (var j = 0; j < 2; j++) {
        var cardElement = document.createElement ("div");
        var cacheElement = document.createElement ("div");

        cardElement.innerHTML = i;

        cardElement.className = "card";
        cacheElement.className = "cache";

        boardElement.appendChild(cardElement);
        cardElement.appendChild(cacheElement);

        cacheElement.addEventListener("click",function(){

            if (this.style.display == "none"){
                console.log("je montre");
                this.style.display = "block";

            }
            else {
                console.log("je cache");
                this.style.display = "none";
            }
            
        });
    }
}
