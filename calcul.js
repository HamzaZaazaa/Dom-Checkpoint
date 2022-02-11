// adding all elements
var plus = document.querySelectorAll(".plusbtn");
var minus = document.querySelectorAll(".minusbtn");
var numplace = document.querySelectorAll(".numberplace");
var price = document.querySelectorAll(".unitprice");
var hearticons = document.querySelectorAll(".hearticon");
var trashicons = document.querySelectorAll(".trashicon");
var totalprice = document.querySelector(".globalprice");
// increment and decrement functions
for(let i = 0; i<plus.length;i++) {
    plus[i].addEventListener("click", function(){
        numplace[i].innerHTML = Number(numplace[i].innerHTML) + 1;
        pricecalcul()
    });
    minus[i].addEventListener("click", function(){
        if(numplace[i].innerHTML > 0) {
        numplace[i].innerHTML = Number(numplace[i].innerHTML) -1;
        pricecalcul()
        };
        
    });
};
// Trash icon function
for ( let i = 0; i<trashicons.length; i++) {
    trashicons[i].addEventListener("click", function(){
        trashicons[i].parentElement.parentElement.parentElement.remove()
    })
}

for (let i=0; i<hearticons.length; i++) {
    hearticons[i].addEventListener("click", function(){ 
            if(hearticons[i].style.color !="red") {
                hearticons[i].style.color = "red";
                
            } else { hearticons[i].style.color = "black";
                
            };
    });
};
function pricecalcul() {
    let sum = 0; 
    for(let i = 0; i<numplace.length; i++) {
        sum = Number(numplace[i].innerHTML)*Number(price[i].innerHTML)+sum;
    }
    totalprice.value = sum;
}
