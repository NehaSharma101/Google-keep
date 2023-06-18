import React from 'react'
export default function Note(props){
    const deleteNote=()=>{
            props.deleteItem(props.id);
    }
    return(
      
            <div className='note'>
                <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button className='btn' onClick={deleteNote}>Delete</button>
            </div>
            
        
    )
}