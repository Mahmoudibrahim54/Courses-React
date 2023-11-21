import PostCard from "../components/posts/PostCard";
import CoursesList from "./CoursesList";

const HomePage = ({ data }) => {
  return (
    <div className="w-screen h-full">
      <PostCard post={data[0]} layout="horizontal" />
      <CoursesList data={data?.slice(1)} />
    </div>
  );
};

export default HomePage;
