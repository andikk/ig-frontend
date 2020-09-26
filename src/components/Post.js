import React from "react";

const post = {
  "id": 1,
  "description": "Григориполисская",
  "likes": 10,
  "auth": null,
  "created_by": {"id": 1, "firstname": "Andrew", "lastname": "Dikansky", "username": null},
  "updated_by": {"id": 1, "firstname": "Andrew", "lastname": "Dikansky", "username": null},
  "created_at": "2020-09-26T06:08:17.832Z",
  "updated_at": "2020-09-26T06:08:17.846Z",
  "image": {
    "id": 1,
    "name": "20171022_135813.jpg",
    "alternativeText": "",
    "caption": "",
    "width": 800,
    "height": 600,
    "formats": {
      "thumbnail": {
        "name": "thumbnail_20171022_135813.jpg",
        "hash": "thumbnail_20171022_135813_3d2d9ef282",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "width": 208,
        "height": 156,
        "size": 9.28,
        "path": null,
        "url": "/uploads/thumbnail_20171022_135813_3d2d9ef282.jpg"
      },
      "medium": {
        "name": "medium_20171022_135813.jpg",
        "hash": "medium_20171022_135813_3d2d9ef282",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "width": 750,
        "height": 563,
        "size": 92.29,
        "path": null,
        "url": "/uploads/medium_20171022_135813_3d2d9ef282.jpg"
      },
      "small": {
        "name": "small_20171022_135813.jpg",
        "hash": "small_20171022_135813_3d2d9ef282",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "width": 500,
        "height": 375,
        "size": 43.77,
        "path": null,
        "url": "/uploads/small_20171022_135813_3d2d9ef282.jpg"
      }
    },
    "hash": "20171022_135813_3d2d9ef282",
    "ext": ".jpg",
    "mime": "image/jpeg",
    "size": 107.17,
    "url": "/uploads/20171022_135813_3d2d9ef282.jpg",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "created_by": 1,
    "updated_by": 1,
    "created_at": "2020-09-26T06:07:48.229Z",
    "updated_at": "2020-09-26T06:07:48.274Z"
  }
};

const API_URL = 'http://localhost:1337';

const formatImageUrl = (url) => `${API_URL}${url}`;

const Post = (props) => {

  const {description, likes, url} = props;
  console.log(props)
  return (
    <div className="post">
      <img className="post__image" src={formatImageUrl(url)}/>
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  )
};

export default Post
