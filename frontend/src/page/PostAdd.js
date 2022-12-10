import { useRef, useState } from "react";
import { API } from "../API";
import { Posts } from "./BlogPosts";
import { Header } from "./header";

export const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    coverImage: "",
    description: "",
  });
  const [res, setRes] = useState("");
  const file = useRef(null);

  const add = async () => {
    try {
      API.post("/posts", {
        title: post.title,
        body: post.body,
        coverImage: post.coverImage,
        description: post.description,
      })
        .then((el) => {
          setRes("post added");
        })
        .catch((err) => setRes("err"));
    } catch (err) {
      if (err.response.status === 401) {
        setRes("unauthorized");
      }
      if (err.response.status === 400) {
        setRes("dutuu bogolson ");
      }
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Header></Header>
      <h1>Add Post</h1>
      <Posts />
      <input
        placeholder="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        placeholder="body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <input
        placeholder="description"
        value={post.description}
        onChange={(e) => setPost({ ...post, userId: e.target.value })}
      />
      <input
        placeholder="coverImage"
        value={post.coverImage}
        onChange={(e) => setPost({ ...post, coverImage: e.target.value })}
      />

      <button onClick={add}>Add</button>

      <h3>{res}</h3>
    </div>
  );
};
