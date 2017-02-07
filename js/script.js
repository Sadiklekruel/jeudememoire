
var boardElement = document.getElementById("board");
var cardsNumber = 12;
var stockCard1 = null;
var stockCard2 = null;

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

            if (stockCard1 == null && stockCard2 == null){
                stockCard1 = this

            }

            if (stockCard1!= null && stockCard2 == null){
                stockCard2 = this
            }

            if (stockCard1 != null && stockCard2 != null){


            
                stockCard1 = this
                stockCard2 = null
        }

                this.style.display = "none";





        });
    }
}
