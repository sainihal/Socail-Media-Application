//login_page
//user_profile_page
//user_main_page
//see posts by username 

var loggedIn = "username"

var users_data = {
    username1: {
        name: "name",
        password: "password1",
        followers: ["username", "username", "username"],
        userPosts: [post, post, post],
    },
    username2: {
        name: "name",
        password: "password2",
        followers: ["username", "username", "username"],
        userPosts: [post, post, post],
    },
    username3: {
        name: "name",
        password: "password3",
        followers: ["username", "username", "username"],
        userPosts: [post, post, post],
    }
}

var userMainPosts = ["post1", "post2", "post3"] //used to sort by likes, comments 

var post = {
    user: "name",
    postDesc: "description",
    postId: "id",
    likes: { count: 0, personsLiked: ["username1", "username2", "username3"] },
    comments: { count: 0, commentsUsers: { username1: "comment", username2: "comment2", username3: "commnet3" } },
    imgURL: "url of image",
    timeStamp: "time of post"
}

// all datas are to be updated to local storage a creation,modification or deletion

function onRegister({ name, username, pwd }) {
    //crates a modal
    //saves to db
    //close the modal
}

function validateLogin(username, pwd) {
    //on success redirects to user_main_page i.e call renderUSersMainPage(user)
    //on failure display appropraite error message //error in pwd or  user not found, register
}

function renderUSersMainPage(user) {
    //renders all the posts by him and all his following people 
}

function renderUsersProfilePage(user) {
    //displays proifle info
    //renders all the posts only by user
}

function sort(option) {
    //sort by option
}

function createNewPost(user) {
    //opens a modal
    // give data //create                                                                                                               //
    //creates new post and stores to db
}

function handleLikesComments(post, user) {
    //updates the likes and comments(changes the likes and comments and stores to local storage)
}

function handlePostOptions(user, postID, option) { //option can be edit or delete
    //user is the username in the post then only he can edit and delete
    //detets the corresponding post and updates local storage
}

function handleFollow(userName, followerName, value = true) {
    //adds or deletes followers and updates local storage
}
