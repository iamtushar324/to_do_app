

async function fetchDataFromDB() {
    let task = await fetch('/task', {
        method: 'GET'
    })

    let res = await task.json()
    return res
}

async function getusername() {
    let task = await fetch('/task/user', {
        method: 'GET'
    }).catch(() => {
        alert("server not responding")
    })

    task = await task.json()



    let listname = document.getElementById('listname')

    listname.innerHTML = `${task.name}'s List`

}


async function checked(id) {

    let k = document.getElementById(`box${id}`).value
    console.log(k)

    let c = {
        id: id,
        checked: k
    }

    await fetch(`/task/checked`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(c)
    }).catch(() => {
        alert("server not responding")
    })
        .then((res) => { console.log(res) })


}


function reprint() {

    list.innerHTML = ""

    for (let taskobj of tasks) {
        let c;
        if (taskobj.checked) {
            c = 'checked'
        }
        else c = " "
        let newtask = document.createElement('div')
        newtask.id = taskobj.task_id
        newtask.innerHTML = `<input id="box${taskobj.task_id}" onclick="chec(${taskobj.task_id})" type="checkbox" ${c}><span id="text${taskobj.task_id}">${taskobj.text}</span> <button onclick="del(${taskobj.task_id})">X</button>`
        list.appendChild(newtask)

        let k = document.getElementById(`box${taskobj.task_id}`)
        let t = document.getElementById(`text${taskobj.task_id}`)


        if (k.checked) {
            t.style.textDecoration = "line-through"
        }
        else {
            t.style.textDecoration = "none"


        }


    }
}

const list = document.getElementById('list')
const inputText = document.getElementById('input-text')
const addBtn = document.getElementById('add-btn')
const clrBtn = document.getElementById('clr-btn')

let tasks;


window.onload = async () => {
    await getusername()
    tasks = await fetchDataFromDB();
    reprint()
    console.log(tasks)
}

clrBtn.onclick = async () => {


    await fetch('/task/checked', {
        method: 'DELETE'
    }).catch(() => {
        alert("cant be cleared")
    }).then(async () => {
        tasks = await fetchDataFromDB();

        reprint()
    })



}





addBtn.onclick = async () => {
    let aaa = { "task": inputText.value }
    let a = await fetch('/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aaa)
    }).catch(() => {
        alert("connection error")
    })

    let newtask = document.createElement('div')
    newtask.id = a.task_id
    newtask.innerHTML = `<input id="box${a.task_id}" onclick="chec(${a.task_id})" type="checkbox" ><span id="text${a.id}">${inputText.value}</span> <button onclick="del(${a.task_id})">X</button>`
    list.appendChild(newtask)

    inputText.value = ""

}

function del(id) {
    fetch(`/task/del/${id}`, {
        method: "DELETE",
    }).then(() => {
        deleted()
    }).catch(() => {
        alert("Not deleted , connection fail")
    })

    let aa = document.getElementById(id)
    aa.remove()



}

async function chec(id) {

    // console.log(id)

    let k = document.getElementById(`box${id}`)
    let t = document.getElementById(`text${id}`)


    if (k.checked) {
        t.style.textDecoration = "line-through"
    }
    else {
        t.style.textDecoration = "none"


    }

    // console.log(k)

    let c = {
        id: id,
        checked: k.checked
    }

    await fetch(`/task/checked`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(c)
    }).catch(() => {
        alert("server not responding")
    })
        .then((res) => { console.log(res) })


}

function deleted() {
    document.getElementById('del').style.display = "block";
    setTimeout(() => {
        document.getElementById('del').style.display = "none";

    }, 2000)


}


let out = document.getElementById('out-btn')

out.onclick = () => {
    document.cookie = `token=`
    window.location.replace("/");

}
