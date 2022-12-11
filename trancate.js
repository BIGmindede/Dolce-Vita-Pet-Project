let nickname = document.getElementById("user_name").getElementsByTagName("a")[0];
let maxlen = 11;
if (nickname.innerText.length > maxlen) nickname.innerText = nickname.innerText.substring(0,9) + "...";