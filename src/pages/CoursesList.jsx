import { NavLink } from "react-router-dom";
import PostCard from "../components/posts/PostCard";

const CoursesList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((post) => (
        <NavLink to={`${process.env.REACT_PUBLIC_API_URL}/products/${post.id}`}>
          <PostCard key={post.id} post={post} />
        </NavLink>
      ))}
    </div>
  );
};

export default CoursesList;
