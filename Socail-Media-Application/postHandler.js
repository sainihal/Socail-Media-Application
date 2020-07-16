import createPost from './post.js'

document.getElementById("createPost").addEventListener("click", function (e) {
    e.preventDefault()
    createNewPost()
})
// document.getElementById("likePost").addEventListener("click",function(e){
//     e.preventDefault()
//     let id = Number(event.target.getAttribute("Id").split(",")[1])                                                                                         //for like or comment button give id same as the post id that is generated at time of creating the post
//     handlePostLikesComments(id,true)
// })
// document.getElementById("commentPost").addEventListener("click",function(e){
//     e.preventDefault()
//     let id = Number(event.target.getAttribute("commentId"))                                                                                         //for like or comment button give id same as the post id that is generated at time of creating the post
//     handlePostLikesComments(id)
// })

function createNewPost() {
    //opens a modal
    let current_username = JSON.parse(localStorage.getItem("loggedIn"))
    // let postDesc = document.getElementById("postDescription").value                                              //change these values to modal ids 
    // let imgURL = document.getElementById("postURL").value                                                         //change these values to modal ids 
    let postDesc = current_username + "    postDesc"
    let imgURL = current_username + "   imgURL"
    let post = createPost(current_username, postDesc, imgURL)
    let all_users_data = JSON.parse(localStorage.getItem("all_users_data"))
    all_users_data[current_username].userPosts.push(post)
    localStorage.setItem("all_users_data", JSON.stringify(all_users_data))
    // give data //create                                                                                                               //
    //creates new post and stores to db
}

function handlePostLikesComments(id, like) {
    console.log("id is", id)
    //updates the likes and comments(changes the likes and comments and stores to local storage)
    let current_username = JSON.parse(localStorage.getItem("loggedIn"))
    const all_users_data = JSON.parse(localStorage.getItem("all_users_data"))
    let post = getPostByID(id,all_users_data,current_username)
    if (like) {
        console.log("post likes are", post, post.likes.count)
        setPostById(post,id,true,all_users_data,current_username)
        console.log("after liking post likes are", post.likes.count)
        localStorage.setItem("all_users_data", JSON.stringify(all_users_data))
        console.log(JSON.parse(localStorage.getItem("all_users_data")))
    }
    else {
        // let comment = document.getElementById("postCommentDescription").value                                           //update this value by value from modal
        let comment = current_username + "    comment"
        post.comments.count =  post.comments.count+1
        let commentData = [current_username,comment]
        post.comments.commentsUsers.push(commentData)
        console.log("after commenting",post.comments.commentsUsers[current_username])
        localStorage.setItem("all_users_data", JSON.stringify(all_users_data))
        console.log(JSON.parse(localStorage.getItem("all_users_data")))
    }
}

function handlePostOptions(user, postId, option) { //option can be edit or delete
    //user is the username in the post then only he can edit and delete
    //detets the corresponding post and updates local storage
}

function getPostByID(id,all_users_data,current_username) {
    let user_data = all_users_data[current_username]
    let posts = []
    user_data.userPosts.map(ele => posts.push(ele))
    let userPostslen = user_data.userPosts.length
    let following_users = user_data.followers
    let len = following_users.length
    for (let i = 0; i < len; i++) {
        all_users_data[following_users[i]].userPosts.map(ele => posts.push(ele))
    }
    let totPosts = posts.length
    for (let i = 0; i < totPosts; i++) {
        if (posts[i].postId == id) {
            return posts[i]
        }
    }
}

function setPostById(post,id,bool,all_users_data,current_username){   
    let user_data = all_users_data[current_username]
    let posts = []
    user_data.userPosts.map(ele => posts.push(ele))
    let userPostslen = user_data.userPosts.length
    // for (let i = 0; i < userPostslen; i++) {
    //     posts.push(user_data.userPosts[i])
    // }
    let following_users = user_data.followers
    let len = following_users.length
    for (let i = 0; i < len; i++) {
        all_users_data[following_users[i]].userPosts.map(ele => posts.push(ele))
    }
    let totPosts = posts.length
    for (let i = 0; i < totPosts; i++) {
        if (posts[i].postId == id) {
            post.likes.count = post.likes.count + 1
            post.likes.usersLiked.push(current_username)
            break;
        }
    }

}

export default handlePostLikesComments;