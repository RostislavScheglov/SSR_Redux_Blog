import Link from "next/link";
import style from '../styles/mainLayoutStyle.module.css'
import {useDispatch} from 'react-redux'
import createNewPostAction from "../Redux/createNewPostAction";
import getLatestsPosts from "../Redux/getLatestsPostsAction";
import getPosts from "../Redux/getPostsAction";


 

export function MainLayout({children}) {

const dispatch = useDispatch();


function createNewPost () {
    if (typeof window !== 'undefined') {   
        let title = (document.querySelector('#create_new_post_form_input_title') as HTMLInputElement).value
        let body = (document.querySelector('#create_new_post_form_input_body') as HTMLInputElement).value
        dispatch(createNewPostAction(title,body))
        if(window.location.pathname === '/'){
            setTimeout(()=>dispatch(getLatestsPosts()),200)
        }else if (window.location.pathname === '/allPosts'){
            setTimeout(()=>dispatch(getPosts()),200)
        }
        closeModal()
      }
  }


function openModal(){
    if (typeof window !== 'undefined') {   
        let modal = document.getElementById('modalForm') as HTMLElement
        modal.style.display = 'block'
      }
}

function closeModal(){
    if (typeof window !== 'undefined') {   
        let modal = document.getElementById('modalForm') as HTMLElement
        modal.style.display = 'none'
      }
}


    return(
        <>
            <nav className = {style.navig}>
                <div className={style.navigContainer}>
                <div className={style.linkContainer}>
                <Link href="/allPosts"><a id=''  className={style.link} >All Posts</a></Link>
                <Link href="/"><a id='' className={style.link} >Latest Posts</a></Link>
                </div>
                <button id={style.createPost_button_create} onClick={()=> openModal()}>Create New Post</button>
                </div>
            </nav>
        <div id = 'modalForm' className={style.create_post_form_modal} >
            <div id={style.create_post_form}>
                <h2>Create New Post</h2>
                <input id="create_new_post_form_input_title" className={style.createPost_input_title} 
                    type = 'text' placeholder="Post Title" />
                <input id="create_new_post_form_input_body" className={style.createPost_input_body} 
                    type = 'text' placeholder="Post Body" />
                <button type='submit' id={style.createPost_button_submit} 
                    onClick={()=> createNewPost()}>Submit
                </button>
                <button id={style.createPost_button_cancel} onClick={()=> closeModal()}>Cancel</button>
            </div>
        </div>
            <main className ={style.main}>
                {children}
            </main>

        </>
    )
}