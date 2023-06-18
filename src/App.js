// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Note from './Note';
import { useState } from 'react';
function App() {
  const [addItem,setaddItem]=useState([]);
const addNote=(note)=>{
  // alert(note.title)
  console.log(note)
  setaddItem((prevdata)=>{
    return [...prevdata,note]
   
  })
}
  const onDelete=(id)=>{
    setaddItem((prevdata)=>
    prevdata.filter((curdata,idx)=>{
      return idx!==id;
    })
    )

  }

  return (
<>
  <Header />;
  <CreateNote passNote={addNote}/>;
  {
    addItem.map((val,index)=>
    
        <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
      />
    )
   
    

    
  
  }
 
   
  <Footer/>;
</>
  );
}

export default App;
