import React, {memo} from 'react'

function ChildUserCallBack(props) {

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
//Sẽ có sự so sánh về kiểu dữ liệu nguyên thủy
//var let (kiểu dữ liệu có thể thay đổi giá trị)
//const(kiểu dữ liệu không thể thay đổi giá trị)

//useMemo() sẽ so sánh xem là kiểu dữ liệu đó có props thay đổi hay không
//Nếu có thì thì render lại data 1 lần nữa, còn không thì ngược lại

export default memo(ChildUserCallBack) 
// export default ChildUserCallBack
