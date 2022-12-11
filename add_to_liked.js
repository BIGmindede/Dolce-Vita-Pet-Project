var goods = document.getElementsByClassName("one_good");


var liked = {};
if (localStorage["liked"] != undefined) {
    liked = JSON.parse(localStorage["liked"]);
}

for (let i = 0; i < goods.length; i++) {
    let articul = goods[i].getAttribute("data-art");
    let solid = goods[i].querySelector(".fa-heart");
    if (localStorage["liked"] != undefined && articul in JSON.parse(localStorage["liked"])) {
        solid.style.opacity = "1";
    }
}

for (let i = 0; i < goods.length; i++) {
    goods[i].getElementsByClassName("like_btn")[0].onclick = function() {
        let solid = goods[i].querySelector(".fa-heart");
        
        if (solid.style.opacity == 0) {
            solid.style.opacity = "1";
            var articul = goods[i].getAttribute("data-art");
            var img = goods[i].getElementsByTagName("img")[0].src;
            var name = goods[i].getElementsByTagName("h2")[0].innerText;
            var price = goods[i].getAttribute("price");
            var desc = goods[i].getElementsByClassName("good_desc")[0].innerText;
            console.log(price);
            liked[articul] = [name,img,desc,price];
            console.log(liked[articul]);
        }
        else if (solid.style.opacity == 1) {
            solid.style.opacity = "0";
            var articul = goods[i].getAttribute("data-art");
            delete liked[articul];
        }
        localStorage["liked"] = JSON.stringify(liked);
        
    }
}

