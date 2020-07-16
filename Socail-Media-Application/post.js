var postId = 0

class Post {
    constructor(username, postDesc, imgURL){
        this.username = username
        this.postDesc = postDesc
        this.postId = postId++
        this.likes = {
            count: 0,
            usersLiked: [],
        }
        this.comments = {
            count:0,
            commentsUsers:[]
        }
        this.imgURL = imgURL;
        this.timeStamp = Date.now()
    }
}

function createPost(username="",postDesc="",imgURL=""){
    return new Post(username,postDesc,imgURL)
}

export default createPost;