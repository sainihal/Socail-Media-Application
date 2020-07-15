class User{
    constructor(name,password){
        this.name = name;
        this.password=password;
        this.followers = [];
        this.userPosts = [];
    }
}

function createUser(name,password){
    return new User(name,password)
}

export default createUser;