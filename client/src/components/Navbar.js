import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../App'

const NavBar = ()=>{
        const {state,dispatch} = useContext(UserContext)
        const navigate = useNavigate();
        const renderList = ()=>{
            console.log(state)
            if(state){
                return[
                    <li><a href="/create">Create Post</a></li>,
                    <li>
                       <button className="btn #c62828 red darken-3" onClick={()=>{ 
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        navigate('/signin')
                       }}
                       >
                        Logout
                    </button> 
                    </li>
                ]
            }else{
                return[
                    <li><a href="/signin">Signin</a></li>,
                    <li><a href="/signup">Signup</a></li>
                ]
            }
        }
    return(
        <nav>
        <div className="nav-wrapper white">
            <a href={state?"/":"/signin"} className="brand-logo left">Surge Global</a>
            <ul id="nav-mobile" className="right">
                {renderList()}
            </ul>
        </div>
        </nav>
    )
}

export default NavBar


