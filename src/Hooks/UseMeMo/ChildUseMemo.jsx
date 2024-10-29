import React, { memo } from 'react'

function ChildUseMemo(props) {
    let title = "Hello World";
    let object = {
      name: "Kien",
      age: 18
    }
   
    console.log(title);
    console.log(object);
    
    
   
     return (
      
       <div>
         <small>{props.renderNotify()}</small>
         <textarea></textarea>
         <br/>
         <button className='btn btn-danger'>Send</button>
       </div>
     )
}

export default memo(ChildUseMemo);
