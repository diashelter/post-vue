export default class PostService {
    constructor(httpAdapter) {
        this.httpAdapter = httpAdapter;
    }

    getPosts() {
        return this.httpAdapter.get("http://localhost/api/posts");
    }

    savePost(post) {
        return this.httpAdapter.post("http://localhost/api/posts", post);
    }
    getPostsToSchedule() {
        return this.httpAdapter.get("http://localhost/api/schedule/posts");
    }

    schedulePost(id) {
        return this.httpAdapter.put("http://localhost/api/schedule/posts", id);
    }
}