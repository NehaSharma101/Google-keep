// import Button from '@material-ui/core/Button';

import { useState } from "react"

// import AddIcon from '@material-ui/icon/Add';
export default function CreateNote(props){
    const [note,setnote]=useState({
        title:'',
        content:''
    })
    const[expand,setexpand]=useState(false)
    const InputEvent=(e)=>{
        const {name,value}=e.target;
        setnote((prevdata)=>{
            // console.log(prevdata)
            return {
                ...prevdata,
                [name]:value,
              
            }
        })
    }
   const  addEvent=()=>{
      props.passNote(note)
      setnote({
        title:'',
        content:''
      })
    }
    const expandit=()=>{
        setexpand(true)
    }
    const back=()=>{
        setexpand(false);
    }
    return(
        <>
            <div className="main_note "  onDoubleClick={back}>
            
                <form className="form">
                {
                    expand?
               
                    <input className="input"
                     type="text" 
                     placeholder="Title" 
                     autoComplete="off" 
                     value={note.title} 
                     onChange={InputEvent} 
                     name="title" />:null
                     }
                    <br/>
                    <textarea className="textarea"  
                    placeholder="Write a note" 
                    value={note.content} 
                    onChange={InputEvent}
                     name="content"
                      onClick={expandit}
                       
                      />
                    </form>
                    {
                        expand? <button onClick={addEvent}>
                    Add
                </button>:null
                    }
               
                </div>
           
        </>
    )
}