var current_username = JSON.parse(localStorage.getItem("loggedIn"))

document.getElementById("getMainPosts").addEventListener("click",function(e){
    e.preventDefault()
    renderUsersMainPage()
})

function renderUsersMainPage() {
    //renders all the posts by him and all his following people 
    console.log("in render users main page")
    let all_users_data = JSON.parse(localStorage.getItem("all_users_data"))
    let current_username = JSON.parse(localStorage.getItem("loggedIn"))
    let user_data = all_users_data[current_username]
    let main_posts = getUsersMainPosts(user_data)
    renderMainPosts(main_posts)
}

function renderMainPosts(posts){                                            //created div that should be appended to the page using id/ or append to sectrion directly
    let post
    let div = document.createElement("div")
    let len = posts.length
    let p
    for(let i=0;i<len;i++){
        // post = renderPostToDiv(posts[i],div)
        p = document.createElement("p")
        p.innerText = JSON.stringify(posts[i])
        div.appendChild(p)
    }
    document.getElementById("mainPosts").appendChild(div)
}

function getUsersMainPosts(users_data){
    let all_users_data =  JSON.parse(localStorage.getItem("all_users_data"))
    let posts = []
    users_data.userPosts.map(ele => posts.push(ele))
    let following_users = users_data.followers
    let len = following_users.length
    for(let i=0;i<len;i++){
        all_users_data[following_users[i]].userPosts.map(ele => posts.push(ele))
    }
    return posts
}