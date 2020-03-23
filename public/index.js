const regbtn = document.getElementById('regbtn')
const name = document.getElementById('name')
const email = document.getElementById('email')
const Regpass = document.getElementById('pass')
const dmsg = document.getElementsByClassName('msg')[0]
const ldmsg = document.getElementsByClassName('lmsg')[0]
const logbtn = document.getElementById('loginbtn')
const user = document.getElementById('user')
const Logpass = document.getElementById('logpass')


logbtn.onclick = async () => {

    let logObj = {
        user: user.value,
        pass: Logpass.value
    }



    let log_data = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(logObj)

    })

    let res = await log_data.json()


    if (res.error) {
        ldmsg.style.display = "block"
        ldmsg.innerHTML = res.error

    }
    else if (res.token) {
        document.cookie = `token=${res.token} `
        window.location.replace("/list.html");
    }





}






regbtn.onclick = async () => {

    let regObj = {
        name: name.value,
        email: email.value,
        pass: Regpass.value
    }



    let reg_data = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(regObj)

    })

    let res = await reg_data.json()

    if (res.msg) {
        dmsg.style.display = "block"
        dmsg.innerHTML = res.msg
        dmsg.style.backgroundColor = "rgb(73,194,73) "
    }
    else if (res.error) {
        dmsg.style.display = "block"
        dmsg.innerHTML = res.error

    }



}