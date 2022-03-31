export default class PostService {
    constructor(httpAdapter) {
        this.httpAdapter = httpAdapter;
    }

    getPosts() {
        return this.httpAdapter.get("https://post-app-api.herokuapp.com/api/posts");
    }
    
    savePost(post) {
        return this.httpAdapter.post("https://post-app-api.herokuapp.com/api/posts", post);
    }

    getPostsToSchedule() {
        return this.httpAdapter.get("https://post-app-api.herokuapp.com/api/schedule/posts");
    }

    schedulePost(id) {
        return this.httpAdapter.put("https://post-app-api.herokuapp.com/api/schedule/posts", id);
    }
}