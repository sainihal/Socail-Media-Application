document.querySelector('body').style.visibility = 'hidden'

var posts = [{'img': 'https://via.placeholder.com/1000x200', 'time': '< 2 minutes ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '12 minutes ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '14 minutes ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '28 minutes ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '42 minutes ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '1 hour ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '1 hours ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '2 hours ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '3 hours ago', 'desc': 'Post description here'},
            {'img': 'resources/landing_page_bg.jpg', 'time': '3 hours ago', 'desc': 'Post description here'},
            ]

function renderPosts() {
    let posts_div = document.querySelector('#posts')
    posts.forEach(post => {
        let img = post.img
        let time = post.time
        let desc = post.desc
        let card = document.createElement('div')
        card.setAttribute('class', 'card w-100 mb-4 ml-2 shadow')
        let img_container = document.createElement('img')
        img_container.setAttribute('class', 'card-img-top')
        img_container.setAttribute('src', img)
        let card_body = document.createElement('div')
        card_body.setAttribute('class', 'card-body mt-n3')
        let card_body_div1 = document.createElement('div')
        card_body_div1.setAttribute('style', 'text-align: right; font-size: small; font-weight: bold')
        card_body_div1.textContent = 'Posted ' + time
        let card_body_div2 = document.createElement('p')
        card_body_div2.setAttribute('class', 'card-text')
        card_body_div2.textContent = desc
        card_body_div3 = document.createElement('div')
        card_body_div3.setAttribute('class', 'd-flex justify-content-between')
        card_body_div31 = document.createElement('i')
        card_body_div31.setAttribute('class', 'fal fa-heart')
        card_body_div32 = document.createElement('i')
        card_body_div32.setAttribute('class', 'fal fa-comment')
        card_body_div3.append(card_body_div31, card_body_div32)
        card_body.append(card_body_div1, card_body_div2, card_body_div3)
        card.append(img_container, card_body)
        posts_div.append(card)
    })
}

function addDiscoverPeople(username) {
    username = username[0].toUpperCase() + username.slice(1)
    let discover_people_div = document.querySelector('#discover-people')
    let row = document.createElement('div')
    row.setAttribute('class', 'row w-100 mb-4')
    let img_div = document.createElement('div')
    img_div.setAttribute('class', 'col-3')
    let icon = document.createElement('i')
    icon.setAttribute('class', 'fad fa-user mr-2 border rounded-circle bg-light')
    icon.setAttribute('style', 'font-size: 23px; padding: 10px 12px;')
    img_div.append(icon)
    let name_div = document.createElement('div')
    name_div.setAttribute('class', 'col-9 align-self-center')
    name_div.textContent = username
    row.append(img_div, name_div)
    discover_people_div.appendChild(row)
}

window.onload = () => {
    document.querySelector('body').style.visibility = 'visible'
    let discover_people = JSON.parse(localStorage.getItem('all_users_data'))
    let current_user = JSON.parse(localStorage.getItem('loggedIn'))
    for(key in discover_people) {
        if(key !== current_user) {
            addDiscoverPeople(key)
        }
    }

    renderPosts()

    document.querySelector('#post-head').textContent = `Hello, ${current_user}. Here are the latest posts`
}