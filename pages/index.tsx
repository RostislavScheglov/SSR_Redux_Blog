import React, { useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';
import {useDispatch, useSelector} from 'react-redux'
import getLatestsPosts from '../Redux/getLatestsPostsAction';
import deletePostAction from '../Redux/deletePostAction';
import style from '../styles/mainLayoutStyle.module.css'
import { collectionImg, today } from '../public/collection';



const LatestsPost: React.FC = () => {
  
  let lastPosts:string;
  const dispatch = useDispatch();
  const latestsPosts = useSelector(state => state.postsReducer.latestPosts);

  useEffect( () => {
    dispatch( getLatestsPosts() )
  },[])


function delLatest (id){
  dispatch(deletePostAction(id))
  setTimeout(()=>dispatch(getLatestsPosts()),200)
}

  if (latestsPosts != undefined) {

     lastPosts = latestsPosts.map(item=>(
      <div className={style.postItem} key ={item.id} > 
      <img className={style.contentImg} src={collectionImg[Math.random()*16|0]}  alt="Content Img"/>
    <div className={style.contentWrapper}>
      <p className={style.Date}>{today}</p>
      <p className={style.formTitle} key ={item.id + 1}>{item.title}</p>
      <p className={style.formBody}key ={item.id + 2}>{item.body}</p>
      <button className={style.deleteBtn} onClick={()=> delLatest(item.id)} ></button>
    </div>
    </div>))
}


    return(
      <MainLayout>
        <h1 className={style.pageTitle}>Latest Posts</h1>
        <div className={style.gridWrapper}>
        {lastPosts}
        </div>
      </MainLayout>
    )



}



export default LatestsPost;