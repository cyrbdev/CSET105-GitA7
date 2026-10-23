let input = document.getElementById("number");
let result = document.getElementById("result")

function presiono(){
    result.innerHTML = "";
    let number = Number(input.value);
    for (let i = 0; i <= 12; i++) {
        let add = document.createElement("p")
        add.innerHTML += `${number}x${i} = ${number*i}<br>`;
        result.appendChild(add);
    }
}