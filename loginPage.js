// -------------- Handles input animation ---------------------

window.onload = () => {
    document.querySelectorAll(".input-container").forEach(function(e){
        e.querySelector('input').addEventListener('blur', function(event){
            if(event.target.value !== '') {
                e.querySelector('label').setAttribute('style', 'translate: 0px -30px; background-color: white; color: #0059ff; padding-left: 5px; padding-right: 5px; font-size: 15px;')
            }
            else {
                if(e.querySelector('label') !== null) {
                    e.querySelector('label').removeAttribute('style') 
                }  
            }
        })
    })
}

// -------------- Handles input animation ---------------------

// -------------- Toggles Modals ---------------------

var modal = document.querySelector("#sign-up-modal");
var modal2 = document.querySelector("#reset-pwd-modal");
var trigger = document.querySelector(".trigger");
var reset_pwd = document.querySelector("#reset-pwd")
var closeButton = document.querySelectorAll(".close-button");

function toggleModal(ele = undefined) {
    if(ele.target !== undefined && ele.target.tagName === 'A') {
        modal2.classList.toggle('show-modal')
    }
    else if(ele.target !== undefined && ele.target.tagName === 'BUTTON') {
        modal.classList.toggle('show-modal')
    }
    else {
        if(modal.classList.contains('show-modal')) {
            modal.classList.toggle('show-modal')
        }
        if(modal2.classList.contains('show-modal')) {
            modal2.classList.toggle('show-modal')
        }
    }
}

function windowOnClick(event) {
    if (event.target === modal || event.target === modal2) {
        toggleModal(event.target);
    }
}
reset_pwd.addEventListener("click", toggleModal)
trigger.addEventListener("click", toggleModal);
closeButton.forEach(e => {
    e.addEventListener("click", toggleModal);
})
window.addEventListener("click", windowOnClick);

// -------------- Toggles Modals ---------------------

// -------------- Handle login ---------------------

function validateLogin(username, pwd) {
    console.log(username, pwd)
    //on success redirects to user_main_page i.e call renderUSersMainPage(user)
    let all_users_data = JSON.parse(localStorage.getItem("all_users_data"))
    console.log(all_users_data)
    if(!all_users_data.hasOwnProperty(username)){
        document.getElementById("sub-head").innerText = "User Not Found! Register?"
        return false
    }

    else if(all_users_data[username].password === pwd){
        localStorage.setItem("loggedIn",JSON.stringify(username))
        current_username = username;
        return true
    }
    else{
        document.getElementById("sub-head").innerText = "Invalid Password"
        return false
    }
    //on failure display appropraite error message //error in pwd or  user not found, register
}

var login_form = document.querySelector('#login-form')
login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let button = login_form.querySelector('.options > button')
    button.textContent = 'Logging In...'
    
    let username = login_form.querySelector('#username').value
    let pwd = login_form.querySelector('#pwd').value

    let valid_login = validateLogin(username, pwd)

    setTimeout(() => {
        button.textContent = 'Login'
        document.getElementById("sub-head").innerText = "Sign in to continue"
        if(valid_login) {
            location.href = 'mainPage.html'
        }
    }, 2000)
})
// -------------- Handle login ---------------------

// -------------- User Class -----------------------
class User{
    constructor(name,password){
        this.name = name;
        this.password=password;
        this.followers = [];
        this.userPosts = [];
    }
}
// -------------- User Class -----------------------

// -------------- Handle sign up ---------------------

function onRegister({ name,username,pwd }) {                       
    //crates a modal                                                            
    let user = new User(name,pwd)
    if(JSON.parse(localStorage.getItem("all_users_data")) === null) {
        localStorage.setItem("all_users_data", JSON.stringify({}))
    }
    let totUsers = JSON.parse(localStorage.getItem("all_users_data"))
    totUsers[username] = user
    localStorage.setItem("all_users_data",JSON.stringify(totUsers))
    //saves to db
    //close the modal
}

var sign_up_form = document.querySelector('#sign-up-form')
sign_up_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let button = sign_up_form.querySelector('.options > button')
    button.textContent = 'Creating Account...'
    let username = sign_up_form.querySelector("#username").value
    let name = sign_up_form.querySelector("#email").value
    let pwd = sign_up_form.querySelector("#pwd").value
    ///Add register code here <-----------------------------------
    onRegister({name, username, pwd})
    
    setTimeout(() => {
        button.textContent = 'Done!'
    }, 2000)
    setTimeout(() => {
        button.textContent = 'Sign Up'
        modal.classList.toggle('show-modal')
    }, 3000)

})
// -------------- Handle sign up ---------------------

// -------------- Handle reset pwd ---------------------
var pwd_reset_form = document.querySelector('#pwd-reset-form')
pwd_reset_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let button = pwd_reset_form.querySelector('.options > button')
    button.textContent = 'Email Sent!'
    
    setTimeout(() => {
        button.textContent = 'Reset Password'
        modal2.classList.toggle('show-modal')
    }, 2000)

})
// -------------- Handle reset pwd ---------------------



