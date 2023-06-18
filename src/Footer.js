import React from 'react'
export default function Header(){
    const year=new Date().getFullYear();
    return(
    
            <footer>
            <p>Copyright ©{year} All rights reserved | This template is made by neha sharma</p>
            </footer>
            
        
    )
}