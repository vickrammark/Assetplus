import React, { useState } from "react";
import Header from "./Header/Header";
import "./ContentCreation.css";
import axios from "axios";
const ContentCreation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Create a preview for the image
    const reader = new FileReader(file);
    reader.onloadend = () => {
      setImagePreview(reader.result); // Set the preview state
    };
    if (file) {
      let url = reader.readAsDataURL(file); // Trigger the image preview
      setImageUrl(url);
    }
  };

  const handleSave = async () => {
    console.log("called", title, description, imagePreview);
    const resp = await axios({
      method: "post",
      url: "http://localhost:8000/upload",
      data: {
        title,
        description,
        imagePreview,
      },
    });
  };
  return (
    <div>
      <Header handleSave={handleSave} />
      <div className="content-creation-detail-container">
        <div className="content-creation-form-container">
          <div className="content-creation-form-title-container">
            <div className="content-ceration-title-label-container">Title</div>
            <div className="content-creation-title-field-container">
              <input onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="content-creation-form-description-container">
            <div className="content-ceration-description-label-container">
              Description
            </div>
            <div className="content-creation-description-field-container">
              <input onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="content-creation-post-container">
          {imagePreview ? (
            <img src={imagePreview} />
          ) : (
            <input type="file" onChange={handleImageChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
