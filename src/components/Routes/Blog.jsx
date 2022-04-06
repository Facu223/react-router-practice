import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState({});

  const { id } = useParams();
  console.log(id)
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const fetchBlog = async (url) => {
    const fetchBlog = await fetch(url);
    const Blog = await fetchBlog.json();
    setBlog(Blog);
    console.log(Blog)
  };

  useEffect(() => {
    fetchBlog(url);
  }, []);

  return (
    <div style={{marginTop: "20px"}}>
      {blog.id} - {blog.title} - {blog.body}
    </div>
  );
};

export default Blog;
