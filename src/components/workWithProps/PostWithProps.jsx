import React from 'react';

const Post = (props) => {

   const protoType = props.posts.map((post) =>
   <div key={post.id}>
      <p>{post.title}</p>
      <p>{post.content}</p>
   </div>
   )


        

    const content = props.posts.map((post) =>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {props.posts.map((post) =>
        <li>{post.title}</li>
        )}
        <hr />

         {props.posts.map((post) =>
         <a>{post.body}</a>
         )}
         

        {content}
        <div className='protoType'> 
        {protoType}
        </div>

        {props.name}
        
      </div>
    );

};

export default Post;