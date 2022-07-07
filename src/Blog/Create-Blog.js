import React, { useRef } from 'react'

import {
  AiOutlineBold, AiOutlineLink,
  AiOutlineItalic, AiOutlineOrderedList,
  AiOutlineUnorderedList
} from 'react-icons/ai';
import { RiHeading, RiDoubleQuotesL } from 'react-icons/ri'
import { FiCode } from 'react-icons/fi'
import { FaImage } from 'react-icons/fa'
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import BlogHeader from '../components/Blog.Header';

const CreatePost = () => {

  const formikRef = useRef();
  const postSchema = Yup.object().shape({
    // email: Yup.string().email().required("Enter Email Address"),
    // password: Yup.string().min(6).required("Enter The Password")
  });

  let initial_Values = {
    title: "",
    tags: "",
    post: ""
  }

  const handleSubmit = (values) => {
    console.log(values)
  };

  return (
    <>
    <BlogHeader/>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Formik
              innerRef={formikRef}
              initialValues={initial_Values}
              validationSchema={postSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}>
              {({ errors, touched }) => (
                <Form>
                  <>
                    <div className="editor ">

                      <div className="preview">

                        <button type="button" className="btn btn-light" id='draft'>Edit</button>
                        <button type="button" className="btn btn-light" id='draft'>Preview</button>
                      </div>

                      <input type="file" id='uploadfile' /><br />
                      <Field
                        name="title"
                        as="textarea"
                        className="textarea1"
                        placeholder='Your new post Title here...'
                      /><br />

                      <Field
                        name="tags"
                        as="textarea"
                        className="textarea2"
                        placeholder='Add up to 4 tags'
                      /><br />

                      <div className="editoricon">
                        <button className='boldbtn'><AiOutlineBold /></button>
                        <button className='boldbtn'><AiOutlineItalic /></button>
                        <button className='boldbtn'><AiOutlineLink /></button>
                        <button className='boldbtn'><AiOutlineOrderedList /></button>
                        <button className='boldbtn'><AiOutlineUnorderedList /></button>
                        <button className='boldbtn'><RiHeading /></button>
                        <button className='boldbtn'><RiDoubleQuotesL /></button>
                        <button className='boldbtn'><FiCode /></button>
                        <button className='boldbtn'><FaImage /></button>
                      </div>

                      <Field
                        name="post"
                        as="textarea"
                        className="textarea3"
                        placeholder='Write post content here...'
                      /><br />

                      <input type="submit" className="btn btn-primary" value="Publish" />
                      <button type="button" className="btn btn-outline-secondary" id='draft'>Save draft</button>

                    </div>
                  </>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-4">

            <div className="sidebar editor mt-5">
              <h3>Tagging Guidelines
              </h3>
              <ul>
                <li>Tags help people find your post.</li>
                <li>Think of tags as the topics or categories that best describe your post</li>
                <li>Add up to four comma-separated tags per post. Combine tags to reach the appropriate subcommunities.</li>
                <li>Use existing tags whenever possible.</li>
                <li>Some tags, such as “help” or “healthydebate”, have special posting guidelines.</li>
              </ul>
            </div>
            <div id="radius-shape-2" className="position-relative shadow-5-strong createposttechninow">
              <img src="images/Akashdeveloper.png" alt="Developer" id="developer" />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost;