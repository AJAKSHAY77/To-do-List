const button = document.getElementById("submitbtn");
const userinput = document.getElementById("task");
const clear = document.getElementById("clear");
const output = document.getElementById("todotask");
const check = document.getElementById("check");
const del = document.getElementById("del")

button.addEventListener("click", () => {
    check.style.display = "flex"
    inputvalue = userinput.value
    if (inputvalue !== "") {
        const listitem = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const span = document.createElement("span")
        span.innerText = inputvalue;
        listitem.appendChild(span)
        listitem.appendChild(checkbox)
        output.appendChild(listitem)

        

    } else {
      alert("please enter your task");
      check.style.display = "none";
    }
    

   
})
del.addEventListener("click",() => {
    output.remove()
})

clear.addEventListener("click", () => {
    output.style.display="none"
})


