import './App.css';
import PostWithProps from './components/workWithProps/PostWithProps'
import ProtoType from './components/protoType/ProtoType';
import Post from './components/post/Post';
import PostList from './components/postList/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import {useEffect, useState} from 'react'
import AddPost from './components/addPost/AddPost';
import TryParent from './components/features/TryParent';
import CParent from './components/features/propsCallback/CParent';
import SortPosts from './components/UI/sort/SortPosts';
import MyModal from './components/UI/MyModal/MyModal';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';
import {useFetching} from './hooks/useFetcing';
import Header from './components/header/Header';

function App() {

  const posts1 = [
    {title: 'TTT', body: 'this is body'},
    {title: 'YYY', body: 'that are bodys'},
 ]
const postsWithOneRow = [
  {id: 1, title: 'heeey its my post', content: 'some new content to read', body: 'lolly bommb'},
];
const [posts3, setPosts3] = useState([
  {id: 1, title: 'heeey its my post', content: 'some new content to read Используйте элемент <em> element для выделения текста, который имеет выраженный акцент.', body: 'lolly bommb'},
  {id: 2, title: 'pooooost', content: 'начение ярлыков абзацев, которые представляют заметки или предупреждения в тексте страницы. you really should read it', body: 'lolly bommb'},
  {id: 3, title: 'psspspepsi', content: 'read', body: 'lolly bommb'},
  {id: 4, title: 'heeey its my post', content: 'some new content to read', body: 'lolly bommb'},
  {id: 5, title: 'heeey', content: 'some new content to read', body: 'lolly bommb'},
]);
// const posts3 = [
//   {id: 1, title: 'heeey its my post', content: 'some new content to read Используйте элемент <em> element для выделения текста, который имеет выраженный акцент.', body: 'lolly bommb'},
//   {id: 2, title: 'pooooost', content: 'начение ярлыков абзацев, которые представляют заметки или предупреждения в тексте страницы. you really should read it', body: 'lolly bommb'},
//   {id: 3, title: 'psspspepsi', content: 'read', body: 'lolly bommb'},
//   {id: 4, title: 'heeey its my post', content: 'some new content to read', body: 'lolly bommb'},
//   {id: 5, title: 'heeey', content: 'some new content to read', body: 'lolly bommb'},
// ];
//розібрався з пропсами
//поняв як з одним постом воркати
//тепер зі списком треба або реалізувати функціонал
//для цього що вже є
//нє краще спочатку список постів зробити


const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [selectedSort, setSelectedSort] = useState('')
const [searchQuery, setSearchQuery] = useState('')
const [modal, setModal] = useState(false)
const [totalCount, setTotalCount] = useState(0)
const [isPostsLoading, setIsPostsLoading] = useState(false)

// const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
//       const recivedPosts = await PostService.getAll()
//       setPosts3(recivedPosts)
// })//for all posts

// const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
//       const response = await PostService.getAll()
//       setPosts3(response.data)
//       console.log(response.headers['x-total-count'])
//       setTotalCount(response.headers['x-total-count'])
// })//to choose amount

const addNewPost = (e) =>{
  e.preventDefault()
      const newPost ={
        id: Date.now(), title, content 
      }
      console.log(newPost)
      setPosts3([...posts3, newPost])
      setTitle('')
      setContent('')
    }


    const createPost = (newPost) =>{
      console.log('woooooow')
      console.log(newPost)
      setPosts3([...posts3, newPost ])
      console.log(newPost)
      setModal(false)
    }
    const deletePost = (post) => {
      setPosts3(posts3.filter(p => p.id !== post.id))
    }
    
    const doSort = (sort) => {
      setSelectedSort(sort)
      setPosts3([...posts3].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    async function fetchPosts(){
      setIsPostsLoading(true)
      const recivedPosts = await PostService.getAll()
      setPosts3(recivedPosts)
      setIsPostsLoading(false)
    }
    // useEffect(() => {
    //   fetchPosts()
    // }, [])

    function getLoalPosts(){
      console.log('getLP')
      setIsPostsLoading(true)
      setPosts3(posts3)
      setIsPostsLoading(false)
    }

 
// but why
  return ( 
    <div className="App">
      <Header />
      <div className='app__container'>
        <div className='app__content'>
      {/* <ProtoType posts = {posts3} />ВИВЕДЕ ВСІ ПОСТИ ОДНИМ ОБЄКТОМ */}
      <form>
      <div className='add__post'>
      <h3>Add post using state</h3>
      <MyInput value={title} 
      onChange={e=> setTitle(e.target.value)}
      type="text" placeholder="Enter title" />
      <MyInput value={content} 
      onChange={e=> setContent(e.target.value)} 
      type="text" placeholder="Enter text" />
      <MyButton onClick={addNewPost} >Add new</MyButton>
      </div>
      </form>
      <br />

      <h3>Add post using component</h3>
      <AddPost create={createPost} /> 
      


      
      {/* {posts3.length !== 0
      ?
      <PostList posts={posts3} delPost={deletePost} /> 
      :
      <h1>There are no posts yet</h1>
      } */}


      
      {isPostsLoading
      ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}><Loader /></div>
      : <PostList posts={posts3} delPost={deletePost} /> 
      }
      {/* <PostList posts={posts3} delPost={deletePost} />  */}
      
      <h2>Some props practice</h2>
      <div className='SP'>
        
      <div className='SP1'>
      <TryParent />
      </div>
      <CParent />
      </div>
      


      
      {/* ВИВОДИТЬ ПОСТИ ОКРЕМИМИ ОБЄКТАМИ БЕРУЧИ З КОМПОНЕНТА ПОСТ */}
      
      
      {/* <Posts posts = {posts2} name = 'напряму переданий 1 пропс' /> */}
        </div>
        <div className='app__navbar'>
          <div className='nav__item1'>
          <MyButton  onClick={getLoalPosts}>Get local posts</MyButton>
          </div>
          <div className='nav__item'>
          <MyButton onClick={fetchPosts} className='nav__item'>Get JSON posts</MyButton>
          </div>
          <div className='nav__item'>
          <MyButton onClick={() => setModal(true)} className='nav__item'>Add Post</MyButton>
          </div>
          <div className='nav__item'>
          <h3>Sort posts</h3>
          <SortPosts 
          value={selectedSort}
          onChange={doSort}
          defaultValue={'Sort by'}
          options={[
            {value: 'title', name:'By name'},
            {value: 'content', name:'By content'}
          ]}/>
          </div>
          
          
          
          <MyModal visible={modal} setVisible={setModal}>
          <AddPost create={createPost} />  {/* add post using modal */}
          
          </MyModal>
          
          
        </div>
      

    </div>
      </div>
  );
}

export default App;
