var current_username = JSON.parse(localStorage.getItem("loggedIn"))

document.getElementById("login").addEventListener("click",function(e){
    e.preventDefault()
    validateLogin("username1","password1")
})

function validateLogin(username, pwd) {
    //on success redirects to user_main_page i.e call renderUSersMainPage(user)
    let all_users_data = JSON.parse(localStorage.getItem("all_users_data"))
    console.log("in validate login")
    console.log(all_users_data,username)
    console.log(all_users_data[username])
    console.log()
    if(!all_users_data[username]){
        document.getElementById("login_error").innerText = "User Not Found! Register?"
        return
    }

    if(all_users_data[username].password == pwd){
        localStorage.setItem("loggedIn",JSON.stringify(username))
        current_username = username;
        location = "user_main_page.html"
        
    }
    else{
        document.getElementById("login_error").innerText = "Invalid Password"
    }
    //on failure display appropraite error message //error in pwd or  user not found, register
}

function onRegister({ name,username,pwd }) {                                             //pending implementation of creating modal getting info from modal and closing the modal
    //crates a modal                                                            
    let user = new User(name,pwd)
    let totUsers = JSON.parse(localStorage.getItem("users_data"))
    totUsers[username] = user
    localStorage.setItem("users_data",JSON.stringify(totUsers))
    //saves to db
    //close the modal
}