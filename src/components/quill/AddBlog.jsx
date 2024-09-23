import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const AddBlog = () => {
  const [content, setContent] = useState();
  console.log('🚀 ~ AddBlog ~ content:', content);
  // const quillref = useRef();
  // const modules = {
  //   toolbar: {
  //     container: '#toolbar',
  //   },
  // };
  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'script',
    'header',
    'blockquote',
    'code-block',
    'indent',
    'list',
    'direction',
    'align',
    'link',
    'image',
    'video',
    'formula',
  ];
  return (
    <ReactQuill
      theme="snow"
      // modules={modules}
      modules={{ toolbar: true }}
      value={content}
      onChange={setContent}
      formats={formats}
      //   ref={quillref}
    />
  );
};

export default AddBlog;
