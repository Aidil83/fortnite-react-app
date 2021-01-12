import BlogCard from "./BlogCard";
import imageStore from "../../images/background_image/imageStore.png";
import { BlogContainer, BlogImageContainer, BlogMain } from "./Blog.elements";

const Blog = () => {
  return (
    <>
      <BlogMain>
        <BlogContainer>
          <BlogCard />
        </BlogContainer>
      </BlogMain>
      <BlogImageContainer>
        <img src={imageStore} alt="imageStore" />
      </BlogImageContainer>
    </>
  );
};

export default Blog;
