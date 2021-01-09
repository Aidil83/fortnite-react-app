import { BlogContainer, BlogMain } from "./Blog.elements";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <BlogMain>
        <BlogContainer>
          <BlogCard />
        </BlogContainer>
      </BlogMain>
    </>
  );
};

export default Blog;
