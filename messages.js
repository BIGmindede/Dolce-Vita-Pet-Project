var messages_marker = document.getElementById("message_marker");

var messages = document.querySelector("#messages ul");

var messages_amount = 0;

var message_timer = setInterval(() => add_message(), 3000);

messages_marker.onclick = function() {
    clearInterval(message_timer);
    setTimeout(() => {
        message_timer = setInterval(() => add_message(), 3000);
    }, 10000);
}

function add_message() {
    if (messages_amount < 11) {
        messages_marker.innerText = ++messages_amount;
        let message_number = document.createElement("span");
        message_number.innerText = messages_amount;
        let col1 =  document.createElement("td");
        col1.append(message_number);
        col1.className = "message_id";
        let message_header = document.createElement("h3");
        message_header.innerText = "Уведомление " + messages_amount;
        let message_content = document.createElement("p");
        message_content.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
        let closer = document.createElement("i");
        closer.className = "fa fa-window-close";
        closer.ariaHidden = "true";
        let col2 =  document.createElement("td");
        col2.className = "message_content";
        col2.append(message_header);
        col2.append(message_content);
        col2.append(closer);
        let row = document.createElement("tr");
        row.append(col1);
        row.append(col2);
        let message_table = document.createElement("table");
        message_table.append(row);
        let message = document.createElement("li");
        message.append(message_table);
        messages.append(message);
    }
}

function deleteMessage(mes){
    let mes_list = messages.getElementsByTagName("li")
    messages_marker.innerText = --messages_amount;
    mes.remove();
    for (let i = 0; i < mes_list.length; i++) {
        mes_list[i].getElementsByTagName("span")[0].innerText = i+1;
        mes_list[i].getElementsByTagName("h3")[0].innerText = "Уведомление " + (i+1);
    }
}

messages.addEventListener("click", () => {
    deleteMessage(event.target.parentElement.parentElement.parentElement.parentElement);
})

