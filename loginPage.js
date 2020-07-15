// -------------- Handles input animation ---------------------

window.onload = () => {
    document.querySelectorAll(".input-container").forEach(function(e){
        e.querySelector('input').addEventListener('blur', function(event){
            if(event.target.value !== '') {
                e.querySelector('label').setAttribute('style', 'translate: 0px -20px; background-color: white; color: #0059ff; padding-left: 5px; padding-right: 5px; font-size: 15px;')
            }
            else {
                e.querySelector('label').removeAttribute('style')   
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