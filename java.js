function authh(){
    var usr = document.getElementById('usr_n').value;
    var pas = document.getElementById('pass').value;
    if (usr == "admin"){
        if(pas == "password"){
            window.location.href = "http://34.222.33.233/Admin_ID=123/";
            alert( "Login as " + usr);
        }
        else{
            alert("Invalid password !");
        }
    }
    else{
        alert("Spoof detected !")
    }
}

function redir(){
    window.location.href='/html/gist.html';
}

function ment(){
    window.location.href='http://18.183.24.207/Home';
    alert('Login success')
}


function svcnf(){
    window.location.href='http://18.183.24.207/';
}

function Mentor_log(){
    let data = document.getElementById('Mentor')
    let usrr = document.getElementById('usr').value;
    let pass = document.getElementById('pswd').value;
    if (data.value == 'Ramesh'){
        if(usrr == 'admin'){
            if(pass == '12345678'){
                ment()
            }
            else{
                alert('Wrong password')
            }
        }
        else{
            alert('Wrong user name')
        }
    }
}