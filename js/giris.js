window.onload = ()=>{
    this.sessionStorage.setItem("username", "admin");
    this.sessionStorage.setItem("password", "admin123");
}

var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = ()=>{return false}

login.onclick = ()=>{
    if((input[1].value != "") && (input[2].value != "")) 
    {
        if((input[1].value == sessionStorage.getItem("username")) && (input[2].value == sessionStorage.getItem("password")))
        {
            form.onsubmit = ()=>{return 1}
        }
        else
        {
            if((input[1].value != sessionStorage.getItem("username")))
            {
                alert("Username is incorrect");
                return 0;
            }

            if((input[2].value != sessionStorage.getItem("password")))
            {
                alert("Password is incorrect");
                return 0;
            }
        }
    }
    else 
    {
        if(input[1].value == "") 
        {
            alert("Username field is empty");
            return 0;
        }

        if(input[2].value == "") 
        {
            alert("Password field is empty");
            return 0;
        }
    }
}
