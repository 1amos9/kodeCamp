let hambuger = document.getElementById("hambuger");
let close = document.getElementById("close");
let listItem = document.getElementById("listItems");

hambuger.addEventListener("click", function(){
       close.style.cssText  = "display: block; position: absolute; top: 27px";
       listItem.style.cssText  = "display: flex; position: absolute; right: .2rem; top: 30px; line-height: 25px";
       hambuger.style.display = "none";
});

close.addEventListener("click", function(){
       listItem.style.display = "none";
       hambuger.style.display = "block";
       close.style.display = "none";
});