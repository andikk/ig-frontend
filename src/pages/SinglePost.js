import React, {useState, useEffect} from "react";
import Post from "../components/Post";
import {Link} from "react-router-dom";

const SinglePost = ({match, history}) => {
  const {id} = match.params;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState('');

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:1337/posts/${id}`);
    if (response.ok) {
      const data = await response.json();
      setPost(data);
      setDescription(data.description);
    }

    setLoading(false);
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'DELETE'
    });

    const data = await response.json();
    history.push('/');
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description
      })
    });

    fetchPost();
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="single-post">

      {loading && <p>Loading...</p>}
      {!loading &&
        <>
          {post.id &&
            <>
              <Post
                likes={post.likes}
                description={post.description}
                url={post.image && post.image.url}
              />
              <button onClick={handleDelete}>Delete</button>
              <button onClick={() => setEdit(true)}>Edit</button>
              {edit &&
                  <form onSubmit={handleEditSubmit}>
                    <input
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="New description"
                    />
                    <button>Confirm</button>
                  </form>
              }
            </>}
          {!post.id && <p>Publication not found</p>}
        </>
      }

    </div>
  )
};

export default SinglePost

