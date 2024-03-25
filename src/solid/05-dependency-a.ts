import { HttpClient } from './03-open-close-c';
import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebPost } from './05-dependency-c';

// Main
(async () => {
    // const provider = new LocalDataBaseService();
    const httpClient = new HttpClient();
    const provider = new WebPost(httpClient);
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();