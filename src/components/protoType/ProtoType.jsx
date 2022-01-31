import React from 'react';
import './ProtoType.module.css';
import classes from './ProtoType.module.css'

const ProtoType = (props) => {

   const protoType = props.posts.map((post) =>
      <div key={post.id}>
      <p className={classes.protoType__title}>{post.title}</p>
      <p>{post.content}</p>
      <p>molly</p>
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
        {/* {props.posts.map((post) =>
        <li>{post.title}</li>
        )}
        <hr />

         {props.posts.map((post) =>
         <a>{post.body}</a>
         )}

        {content}
        <div className={classes.container}>
           <h2>sdcscsdcscccccc</h2>
        {props.posts.map((post) =>
         <a>{post.body}</a>
         )}
        {protoType}
        </div> */}


        <div className={classes.pt}> 
        {protoType}
        </div>
        
      </div>
    );

};

export default ProtoType;
