let tasks;


function reflist() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            list.innerHTML = ""
            tasks = JSON.parse(this.response)
            for (let taskobj of tasks) {
                let c;
                if (taskobj.checked) {
                    c = 'checked'
                }
                else c = " "
                let newtask = document.createElement('div')
                newtask.innerHTML = `<input class="checkbox" type="checkbox" ${c}><span>${taskobj.text}</span>`
                list.appendChild(newtask)
            }
        }
    };
    xhttp.open("GET", "/task", true);
    xhttp.send();
}


const list = document.getElementById('list')
const inputText = document.getElementById('input-text')
const addBtn = document.getElementById('add-btn')



reflist()
// for (let len = 0, len < )