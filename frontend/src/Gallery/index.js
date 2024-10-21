import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Header from "./Header/Header";
import Modal from "react-bootstrap-modal";
import ContentCreation from "./ContentCreation/index";
import axios from "axios";
import Posts from "../Posts";
const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios({
        method: "get",
        url: "http://localhost:8000/get",
      });
      setPosts(resp?.data || []);
    };
    getPosts();
  }, []);
  // it should be called when component mounted
  const handleDelete = async (id) => {
    const resp = await axios({
      method: "delete",
      url: `http://localhost:8000/delete`,
      data: {
        id,
      },
    });
    setPosts(posts.filter((item) => item._id != id));
  };
  return (
    <div className="gallery-outer-container">
      <Header
        handleOpen={() => setOpen(true)}
        setSearchString={setSearchString}
      />
      <div className="gallery-header-divider" />
      <div className="gallery-post-outer-container"></div>
      <Modal show={open} onHide={() => setOpen(false)}>
        <ContentCreation />
      </Modal>
      <div>
        {posts
          .filter(
            (item) =>
              item.title.toLowerCase().includes(searchString.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchString.toLowerCase())
          )
          .map((item) => {
            return (
              <Posts
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                handleDelete={handleDelete}
                id={item._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
