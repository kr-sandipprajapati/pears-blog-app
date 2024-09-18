import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swarm from '../pears/swarm';
import { mainBase } from '../pears/base';

function AddBlog() {
  const BLOG_DETAILS = {
    INITITAL_STATE: 0,
    TITLE: 1,
    AUTHOR: 2,
    SOURCE: 3,
    URL: 4,
    DESCRIPION: 5,
    CONTENT: 6,
    PUBLISH_AT: 7,
  };

  const InititalState = {
    id: '',
    title: '',
    author: '',
    source: {
      id: null,
      name: '',
    },
    urlToImage: '',
    url: '',
    description: '',
    content: '',
    publishedAt: '',
  };
  const blogReducer = (state, action) => {
    switch (action.type) {
      case BLOG_DETAILS.TITLE:
        return {
          ...state,
          title: action.value,
        };
      case BLOG_DETAILS.AUTHOR:
        return {
          ...state,
          author: action.value,
        };
      case BLOG_DETAILS.SOURCE:
        return {
          ...state,
          source: {
            id: null,
            name: action.value,
          },
        };
      case BLOG_DETAILS.DESCRIPION:
        return {
          ...state,
          description: action.value,
        };
      case BLOG_DETAILS.CONTENT:
        return {
          ...state,
          content: action.value,
        };
      case BLOG_DETAILS.PUBLISH_AT:
        return {
          ...state,
          publishedAt: new Date().toUTCString(),
          id: Date.now(),
        };
      case BLOG_DETAILS.URL:
        return {
          ...state,
          urlToImage: action.value,
          url: action.value,
        };
      case BLOG_DETAILS.INITITAL_STATE:
        return InititalState;
      default:
        new Error('unknown type');
        break;
    }
    return state;
  };
  const [state, dispatch] = useReducer(blogReducer, InititalState);
  const [isSubmitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  console.log('swarm connections: ', swarm.connections);

  useEffect(() => {
    if (isSubmitted) {
      const appendInBase = async () => {
        await mainBase
          .append(Buffer.from(JSON.stringify(state)))
          .catch((err) => console.log('error message: ', err));
      };
      appendInBase();
      console.log('blog added');
      dispatch({
        type: BLOG_DETAILS.INITITAL_STATE,
      });
      setSubmitted(false);
      navigate('/')
    }
  }, [isSubmitted]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: BLOG_DETAILS.PUBLISH_AT,
          });
          setSubmitted(true);
        }}
      >
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Enter Title Name"
            onChange={(e) =>
              dispatch({
                type: BLOG_DETAILS.TITLE,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            placeholder="Enter Author name"
            onChange={(e) =>
              dispatch({
                type: BLOG_DETAILS.AUTHOR,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="source">Source:</label>
          <input
            id="source"
            type="text"
            placeholder="Enter Source name"
            onChange={(e) =>
              dispatch({
                type: BLOG_DETAILS.SOURCE,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="url">Image url:</label>
          <input
            id="url"
            type="text"
            placeholder="Enter URL"
            onChange={(e) =>
              dispatch({
                type: BLOG_DETAILS.URL,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            rows={2}
            cols={50}
            onChange={(e) =>
              dispatch({
                type: BLOG_DETAILS.DESCRIPION,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <br />
          <textarea
            id="content"
            name="content"
            placeholder="Enter Content"
            rows={10}
            cols={50}
            onChange={(e) =>
              dispatch({
                type: BLOG_DETAILS.CONTENT,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button type="submit" name="Submit">
            {' '}
            Submit{' '}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
