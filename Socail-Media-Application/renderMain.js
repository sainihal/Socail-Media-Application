import handlePostLikesComments from './postHandler.js'

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
    renderMainPosts(main_posts,user_data,all_users_data,current_username)
}

function renderMainPosts(posts,user_data,all_users_data,current_username){                                            //created div that should be appended to the page using id/ or append to sectrion directly
    let post
    let div = document.createElement("div")
    let len = posts.length
    let p
    let like
    let comment
    for(let i=0;i<len;i++){
        // post = renderPostToDiv(posts[i],div)
        p = document.createElement("p")
        p.innerText = JSON.stringify(posts[i])
        console.log(posts[i].postId)
        like = document.createElement("button")
        like.innerHTML = "LIKE"
        like.setAttribute("Id","like,"+posts[i].postId)
        like.addEventListener("click",function(e){
            e.preventDefault()                                                                                         //for like or comment button give id same as the post id that is generated at time of creating the post
            handlePostLikesComments(posts[i].postId,true)
        })
        comment = document.createElement("button")
        comment.innerHTML = "COMMENT"
        comment.setAttribute("Id","comment,"+posts[i].postId)
        comment.addEventListener("click",function(e){
            e.preventDefault()
            handlePostLikesComments(posts[i].postId)
        })
        console.log(p,like,comment)
        div.append(p,like,comment)
    }
    let mainPostsSection = document.getElementById("mainPosts")
    mainPostsSection.innerHTML = ""
    mainPostsSection.appendChild(div)
    renderFollowersList(all_users_data,user_data,current_username)
}

function renderFollowersList(all_users_data,user_data,current_username){
    console.log(all_users_data)
    var all_users = Object.keys(all_users_data)
    let div = document.getElementById("usersList")
    div.innerHTML = ""
    let userList = document.createElement("div")
    let tot = all_users.length
    console.log("all users",all_users)
    console.log(user_data.followers)
    for(let i=0;i<tot;i++){
        if(user_data.followers.indexOf(all_users[i]) == -1){
            if(all_users[i] != current_username){
                console.log(all_users[i], current_username)
                let ele = document.createElement("button")
                ele.innerText = all_users[i]
                ele.setAttribute("username",all_users[i])
                ele.addEventListener("click",function(){
                    console.log("before pushing ",user_data.followers)
                    user_data.followers.push(ele.getAttribute("username"))
                    console.log("before pushing ",user_data.followers)
                    renderFollowersList(all_users_data,user_data,current_username)
                    console.log(all_users_data)
                })
                console.log("ele is "+ele)
                userList.appendChild(ele)
            }
           
        }
    }
    console.log(userList)
    div.appendChild(userList)
}

function getUsersMainPosts(user_data){
    let all_users_data =  JSON.parse(localStorage.getItem("all_users_data"))
    let posts = []
    // user_data.userPosts.map(ele => posts.push(ele))
     let userPostslen = user_data.userPosts.length
     for(let i =0;i<userPostslen;i++){
         posts.push(user_data.userPosts[i])
     }
    let following_users = user_data.followers
    let len = following_users.length
    for(let i=0;i<len;i++){
        all_users_data[following_users[i]].userPosts.map(ele => posts.push(ele))
    }
    console.log("in users main posts",posts)
    return posts
}