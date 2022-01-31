import React from 'react';
import MyButton from '../UI/button/MyButton';
import './Post.module.css';
import classes from './Post.module.css'

const Post = (props) => {
  

    return (
      <div>
         
        <div className={classes.pt}> 
         <div className={classes.title}>
            <div className={classes.id}> {props.number}</div>
            <div className={classes.tt}> {props.posts.title}</div>
         </div>
         <div className={classes.body}>
           <div className={classes.d__body}>
           {props.posts.content}
           </div>
           <div className={classes.d__del}>
           <MyButton onClick={() => props.delPost(props.posts)}  >Delete</MyButton>
           </div>
            
            
         </div>
        </div>
      </div>
    );
};

export default Post;