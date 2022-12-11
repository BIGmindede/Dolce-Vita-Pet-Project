var list_of_items =
document.getElementById("cart_list").getElementsByTagName("ul")[0];

var carted = {};
if (localStorage["carted"] != {}) {
    carted = JSON.parse(localStorage["carted"]);
}

draw_carted();
 function draw_carted() {
    console.log("wodrking");
    if (Object.keys(carted).length > 0) {
        document.getElementById("empty").style.display = "none";
        var items = JSON.parse(localStorage["carted"]);
        for (var key in items) {
            let pic = document.createElement("img");
            pic.src = items[key][2];
            let name = document.createElement("h3");
            name.innerText = items[key][1];
            let desc = document.createElement("cite");
            desc.innerText = items[key][3];
            let price = document.createElement("span");
            price.className = "price";
            price.innerText = "Цена: " + items[key][4] + " руб.";
            let minus = document.createElement("button");
            minus.className = "minus_btn";
            minus.innerText = " - ";
            let amount = document.createElement("span");
            amount.innerText = items[key][0];
            let plus = document.createElement("button");
            plus.className = "plus_btn";
            plus.innerText = " + ";
            let del = document.createElement("button");
            del.className = "del_btn";
            del.innerText = "Удалить";
            let item = document.createElement("li");
            item.setAttribute("data-art", key);
            item.setAttribute("price", items[key][4]);
            item.append(pic);
            item.append(name);
            item.append(desc);
            item.append(price);
            item.append(minus);
            item.append(amount);
            item.append(plus);
            item.append(del);
            list_of_items.append(document.createElement("hr"));
            list_of_items.append(item);
        }
    }
    else {
        document.getElementById("empty").style.display = "block";
    }
}

cart_sum();

var carted = {};
if (localStorage["carted"] != {}) {
    carted = JSON.parse(localStorage["carted"]);
}

var lis = list_of_items.getElementsByTagName("li");

actions();

function actions() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].getElementsByClassName("plus_btn")[0].onclick = function() {
            var articul = lis[i].getAttribute("data-art");
            lis[i].getElementsByTagName("span")[1].innerText++;
            carted[articul][0]++;
            localStorage["carted"] = JSON.stringify(carted);
            cart_sum();
        }
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].getElementsByClassName("minus_btn")[0].onclick = function() {
            let articul = lis[i].getAttribute("data-art");
            if (carted[articul][0] > 1) { 
                lis[i].getElementsByTagName("span")[1].innerText--;
                carted[articul][0]--;
                localStorage["carted"] = JSON.stringify(carted);
                cart_sum();
            }
            else {
                delete carted[articul];
                localStorage["carted"] = JSON.stringify(carted);
                list_of_items.getElementsByTagName("hr")[i].remove();
                lis[i].remove();
                if (Object.keys(carted).length == 0) draw_carted();
                cart_sum();
                actions();
            }  
        }
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].getElementsByClassName("del_btn")[0].onclick = function() {
            let articul = lis[i].getAttribute("data-art");
            delete carted[articul];
            localStorage["carted"] = JSON.stringify(carted);
            list_of_items.getElementsByTagName("hr")[i].remove();
            lis[i].remove();
            if (Object.keys(carted).length == 0) draw_carted();
            cart_sum();
            actions();
        }
    }
}

function cart_sum() {
    let sum = document.getElementById("text_cart_page").getElementsByTagName("cite")[0];
    let count = 0;
    for (key in carted) {
        count += carted[key][4] * carted[key][0];
    }
    sum.innerText = "Итого: " + count + " руб.";
}
