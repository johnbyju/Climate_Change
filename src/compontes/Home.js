import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons'



const home =()=>{

    let coloring ={
        color:"green",
        fontSize:"100px"
    }
    return(
       <>

        <h1 className="container" style={coloring}> Johnbyju </h1>
        <FontAwesomeIcon icon={faYahoo}/>
        <FontAwesomeIcon icon={faTwitter} className='h-25'/>
        <img src ='https://www.pexels.com/photo/sharp-point-19552777/'/>
        </>
    )
}
export default home;
// const home1 =() =>{
//     return(
//         <>z</>
//     )
// }