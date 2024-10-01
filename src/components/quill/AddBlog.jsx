import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { mainBase } from '../../pears/base';
import { useNavigate } from 'react-router-dom';
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/imageResize", ImageResize)

const AddBlog = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const [titleText, setTitleText] = useState();
  console.log("🚀 ~ AddBlog ~ title:", title)
  console.log('🚀 ~ AddBlog ~ content:', content);
  // const quillref = useRef();
  // const modules = {
  //   toolbar: {
  //     container: '#toolbar',
  //   },
  // };

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setTitle(content)
    setTitleText(editor.getText())
  };

  const blogSubmitted = async () => {
    if (content === '<p><br></p>' || content === undefined || title === undefined || title === '<p><br></p>') {
      alert("please enter value")
      return
    }

    const blogData = {
      title: `<h1 class="Blog--title">${titleText}</h1>`,
      content: content,
      timestamp: Date()
    }

    await mainBase
      .append(Buffer.from(JSON.stringify(blogData)))
      .catch((err) => console.log('error message: ', err));

    navigate('/')
  }

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [
        { list: 'ordered' },
        { list: 'bullet' }
      ],
      ['link', 'image'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image'
  ];
  return (
    <>
      <div className="Button--div">
        <button className="Button--submit" type='submit' onClick={blogSubmitted}>Submit</button>
      </div>
      <ReactQuill
        className="Button--blurred-editor"
        value={title}
        placeholder={"Write a title..."}
        onChange={handleProcedureContentChange}
      />
      <br />
      <ReactQuill
        modules={modules}
        value={content}
        onChange={setContent}
        formats={formats}
      //   ref={quillref}
      />
    </>
  );
};

export default AddBlog;
