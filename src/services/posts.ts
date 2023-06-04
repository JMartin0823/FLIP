import { Post } from "../types/posts";
import { posts } from "../mocks/getPosts";

class Posts {
  async get(): Promise<Post[]> {
    console.log("starting fetch...");
    const value: Post[] = await new Promise((resolve) => {
      setTimeout(() => resolve(posts), 3000);
    });
    return value;
  }
}

export default new Posts();