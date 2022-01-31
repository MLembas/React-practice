import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import { useState } from 'react';


const AddPost = ({create}) => {
   const [posts, setPosts] = useState({title: '', content: ''})


   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')

   const addNewPost = (e) =>{
      e.preventDefault()
      console.log('rr')
      const newPost ={
         ...posts, id: Date.now(), title, content
      }
      console.log(newPost)
      create(newPost)
      setTitle('')
      setContent('')
   }
   const deletePost = () => {
      
   }
   
      // setTitle('')
      // setContent('')
      
      // const newPost = {
      //    ...posts, id: Date.now(), title, content 
      // }
      // console.log(newPost)
      // setPosts({title: '', content: ''})
      
   
   // const addNewPost = () =>{
   //    const newPost ={
   //      id: Date.now(), title, content 
   //    }
   //    console.log(newPost)
   //    setPosts3([...posts3, newPost])
   //    setTitle('')
   //    setContent('')
   //  }

  return(
   <div>
      <MyInput value={title} 
      onChange={e=> setTitle(e.target.value)}
      type="text" placeholder="Enter title"/>

      <MyInput value={content} 
      onChange={e=> setContent(e.target.value)}
      type="text" placeholder="Enter content"/>
      {/* <MyInput value={posts.title} 
      onChange={e=> setPosts({...posts, title: e.target.value})}
      type="text" placeholder="Enter title"/>

      <MyInput value={posts.content} 
      onChange={e=> setPosts({...posts, content: e.target.value})}
      type="text" placeholder="Enter title"/> */}
      <MyButton onClick={addNewPost}>Add new</MyButton>
      {/* <form>

      <MyInput value={props.posts.title} onChange={e=> setTitle(e.target.value)}
      type="text" placeholder="Enter title" />
      <MyInput value={props.posts.content} onChange={e=> setContent(e.target.value)} 
      type="text" placeholder="Enter text" />
      <MyButton onClick={addNewPost} >Add new</MyButton>
      </form> */}
   </div>
  )
};

export default AddPost;
