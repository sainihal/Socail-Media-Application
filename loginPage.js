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
var login_form = document.querySelector('#login-form')
login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let button = login_form.querySelector('.options > button')
    button.textContent = 'Logging In...'
    
    setTimeout(() => {
        button.textContent = 'Login'
        location.href = '#' // Add path to user page after login  <-----------------
    }, 2000)
})
// -------------- Handle login ---------------------

// -------------- Handle sign up ---------------------
var sign_up_form = document.querySelector('#sign-up-form')
sign_up_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let button = sign_up_form.querySelector('.options > button')
    button.textContent = 'Creating Account...'
    
    //Enter code to save user info into database          <-----------------
    
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



