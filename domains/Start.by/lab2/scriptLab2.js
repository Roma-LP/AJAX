window.onload = function(){
    document.querySelector("#buttonv2").onclick = function(){
        //alert("dd");
        ajaxGet();
    }
}

function ajaxGet(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
    // 0 - запрос не инициализирован
    // 1 - выполнена настройка запроса
    // 2 - запрос отправлен
    // 3 - запрос находится в процессе обработки на сервере
    // 4 - запрос завершён
        if(req.readyState == 4 && req.status == 200) {
            document.querySelector("#textOutput").innerHTML = req.responseText;
        }
        
    }

    req.open('GET','text.txt',false);
    req.send();
}

