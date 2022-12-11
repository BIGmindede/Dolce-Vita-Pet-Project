var goods = document.getElementsByClassName("one_good");


var carted = {};
if (localStorage["carted"] != undefined) {
    carted = JSON.parse(localStorage["carted"]);
}

for (let i = 0; i < goods.length; i++) {
    goods[i].getElementsByClassName("add_to_cart")[0].onclick = function() {
        
        let articul = goods[i].getAttribute("data-art");
        let img = goods[i].getElementsByTagName("img")[0].src;
        let name = goods[i].getElementsByTagName("h2")[0].innerText;
        let desc = goods[i].getElementsByClassName("good_desc")[0].innerText;
        let price = goods[i].getAttribute("price");
        if (articul in carted) carted[articul][0]++;
        else carted[articul] = [1,name,img,desc,price]; 
        localStorage["carted"] = JSON.stringify(carted);
        
    }
}

