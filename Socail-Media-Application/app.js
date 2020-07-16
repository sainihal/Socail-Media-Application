//login_page
//user_profile_page
//user_main_page
//see posts by username 

// var loggedIn = "username"
import createPost from './post.js'


var post1 = createPost("username1","desc1","url1")
var post2 = createPost("username2","desc2","url2")
var post3 = createPost("username3","desc3","url3")

var all_users_data = {
        username1: {
                name: "name",
                password: "password1",
                followers: ["username2"],
                userPosts: [post1],
            },
    username2: {
            name: "name",
            password: "password2",
            followers: ["username1", "username3"],
            userPosts: [post2],
        },
        username3: {
                name: "name",
                password: "password3",
                followers: ["username1", "username2"],
                userPosts: [post3],
            }
        }
        
localStorage.setItem("all_users_data",JSON.stringify(all_users_data))


// document.getElementById("login").addEventListener("click",function(e){
//     e.preventDefault()
//     validateLogin("username1","password1")
// })

// document.getElementById("getMainPosts").addEventListener("click",function(e){
//     e.preventDefault()
//     renderUsersMainPage()
// })


// var userMainPosts = ["post1", "post2", "post3"] //used to sort by likes, comments 

// var current_username = JSON.parse(localStorage.getItem("loggedIn"))


// var all_users_data = JSON.parse(localStorage.getItem("all_users_data"))

//giving default value into the all_users_data
// if(!all_users_data){
//     localStorage.setItem("all_users_data",JSON.stringify({}))
//     all_users_data = {}
// }

// var users_data = all_users_data.username

// var userMainPosts = getUsersMainPosts()

// var post = {
//     user: "name",
//     postDesc: "description",
//     postId: "id",
//     likes: { count: 0, personsLiked: ["username1", "username2", "username3"] },
//     comments: { count: 0, commentsUsers: { username1: "comment", username2: "comment2", username3: "commnet3" } },
//     imgURL: "url of image",
//     timeStamp: "time of post"
// }

// all datas are to be updated to local storage a creation,modification or deletion
                                                                                //created new User and Stored to db
// function onRegister({ name,username,pwd }) {                                             //pending implementation of creating modal getting info from modal and closing the modal
//     //crates a modal                                                            
//     let user = new User(name,pwd)
//     let totUsers = JSON.parse(localStorage.getItem("users_data"))
//     totUsers[username] = user
//     localStorage.setItem("users_data",JSON.stringify(totUsers))
//     //saves to db
//     //close the modal
// }

// function validateLogin(username, pwd) {
//     //on success redirects to user_main_page i.e call renderUSersMainPage(user)
//     let all_users_data = JSON.parse(localStorage.getItem("all_users_data"))
//     console.log("in validate login")
//     console.log(all_users_data,username)
//     console.log(all_users_data[username])
//     console.log()
//     if(!all_users_data[username]){
//         document.getElementById("login_error").innerText = "User Not Found! Register?"
//         return
//     }

//     if(all_users_data[username].password == pwd){
//         localStorage.setItem("loggedIn",JSON.stringify(username))
//         current_username = username;
//         location = "user_main_page.html"
        
//     }
//     else{
//         document.getElementById("login_error").innerText = "Invalid Password"
//     }
//     //on failure display appropraite error message //error in pwd or  user not found, register
// }

// function renderUsersMainPage() {
//     //renders all the posts by him and all his following people 
//     console.log("in render users main page")
//     let all_users_data = JSON.parse(localStorage.getItem("all_users_data"))
//     let current_username = JSON.parse(localStorage.getItem("loggedIn"))
//     let user_data = all_users_data[current_username]
//     let main_posts = getUsersMainPosts(user_data)
//     renderMainPosts(main_posts)
// }

// function renderMainPosts(posts){                                            //created div that should be appended to the page using id/ or append to sectrion directly
//     let post
//     let div = document.createElement("div")
//     let len = posts.length
//     let p
//     for(let i=0;i<len;i++){
//         // post = renderPostToDiv(posts[i],div)
//         p = document.createElement("p")
//         p.innerText = JSON.stringify(posts[i])
//         div.appendChild(p)
//     }
//     document.getElementById("mainPosts").appendChild(div)
// }

function renderPostsToDiv(post,div){                                        //it should render into whole div and return
return div
}

function renderUsersProfilePage(user) {
    //displays proifle info
    //renders all the posts only by user
}

function sort(option) {
    //sort by option
}

// function createNewPost(user) {
//     //opens a modal
//     // give data //create                                                                                                               //
//     //creates new post and stores to db
// }

function handlePostLikesComments(post, user) {
    //updates the likes and comments(changes the likes and comments and stores to local storage)
}

function handlePostOptions(user, postID, option) { //option can be edit or delete
    //user is the username in the post then only he can edit and delete
    //detets the corresponding post and updates local storage
}

function handleFollow(userName, followerName, value = true) {
    //adds or deletes followers and updates local storage
}

// function getUsersMainPosts(users_data){
//     let all_users_data =  JSON.parse(localStorage.getItem("all_users_data"))
//     let posts = []
//     users_data.userPosts.map(ele => posts.push(ele))
//     let following_users = users_data.followers
//     let len = following_users.length
//     for(let i=0;i<len;i++){
//         all_users_data[following_users[i]].userPosts.map(ele => posts.push(ele))
//     }
//     return posts
// }