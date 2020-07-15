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