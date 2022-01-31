import React from 'react';
import Post from '../post/Post'

const PostList = (props) => {

     const protoType = props.posts.map((post) =>
      <div key={post.id}>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>molly</p>
      </div>
   )
   
  return(
    <div>
     <h2>List of Posts</h2>
        <div > 
         {/* {protoType} */}
         {props.posts.map((post, index) =>
         <Post delPost={props.delPost} number={index+1} posts={post} key={post.id}/>
         )}
        </div>
    </div>
    )
  
};

export default PostList;

// const Post = (props) => {

//    const protoType = props.posts.map((post) =>
//       <div key={post.id}>
//       <p className={classes.protoType__title}>{post.title}</p>
//       <p>{post.content}</p>
//       <p>molly</p>
//       </div>
//    )

//     const content = props.posts.map((post) =>
//     <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         <div className={classes.pt}> 
//         {protoType}
//         </div>
//       </div>
//     );

// };
