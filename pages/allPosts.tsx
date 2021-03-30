import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../components/MainLayout';
import { collectionImg, today } from '../public/collection';
import deletePostAction from '../Redux/deletePostAction';
import getPosts from '../Redux/getPostsAction';
import style from '../styles/mainLayoutStyle.module.css';

const AllPosts: React.FC = () => {

 


const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getPosts())
},[])

const posts:any = useSelector(state => state.postsReducer.posts);

function delAllPost (id){
  dispatch(deletePostAction(id))
  setTimeout(()=>dispatch(getPosts()),230)
}



let allPosts:any[] = posts.map(item=>(
  <div className={style.postItem} key ={item.id} > 
    <img className={style.contentImg} src={collectionImg[Math.random()*16|0]}  alt="Content Img"/>
  <div className={style.contentWrapper}>
    <div className={style.Date}>{today}</div>
    <p className={style.formTitle} key ={item.id + 1}>{item.title}</p>
    <p className={style.formBody}key ={item.id + 2}>{item.body}</p>
    <button className={style.deleteBtn} onClick={()=> delAllPost(item.id)} ></button>
  </div>
  </div>))


    
return(
      <MainLayout>
        <h1 className={style.pageTitle}>All Posts</h1>
        <div className={style.gridWrapper}>
          {allPosts}
        </div>
      </MainLayout>
    )


}



export default AllPosts;