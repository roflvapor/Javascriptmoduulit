

    button = document.getElementById("start");
    button.addEventListener("click", function(evt)  {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let option1 = document.getElementById("operation");
        let value2 = option1.value;
        if(value2 == "add"){
            document.getElementById("result").innerHTML = String(num1+num2);
        }
        if(value2 == "sub"){
            document.getElementById("result").innerHTML = String(num1 - num2);
        }
        if(value2 == "multi"){
            document.getElementById("result").innerHTML = String(num1 * num2);
        }
        if(value2 == "div"){
            document.getElementById("result").innerHTML = String(num1 / num2);
        }
    })
