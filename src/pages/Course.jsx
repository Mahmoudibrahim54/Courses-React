import { useEffect, useState } from "react";
import { API } from "../api/api";
import { useParams } from "react-router-dom";

const Course = () => {
  const { product_id } = useParams();
  console.log(product_id);

  const [postData, setPostData] = useState({});

  useEffect(() => {
    API.get(`products/`).then((response) => setPostData(response.data.data));
  }, []);
  return (
    <div className="">
      <video src={postData.video_url}></video>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Course;
