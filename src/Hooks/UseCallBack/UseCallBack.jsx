import React, {useState, useCallback} from 'react'
import ChildUserCallBack from './ChildUserCallBack';

function UseCallBack() {
    const [like, setLike] = useState(0);

    const handleLike = () => {
        setLike(like + 1)
    }

    const renderNotify = () => {
        return `Like: ${like}`
    }

    //đích danh gọi hàm đó bằng callBack xem nó có cần thay đổi gtri hay không 
    //cần thì truyền vào [value] không thì để rỗng [ ]
    const callbackRedderNotify = useCallback(renderNotify, [like])

    //UseCallBack  đối với hàm
    //UseMemo đối với giá trị
    
  return (
    <div className='mb-3'>
      Like: {like} <i className="fa fa-heart"></i>
      <br/>
      <span style={{cursor: "pointer", color: "red", fontSize: 35}} onClick={() => {handleLike()}}>
        <i className='fa fa-heart'></i>
      </span>
      <small>{renderNotify()}</small>
      <br/>
      <br/>
      <ChildUserCallBack renderNotify={callbackRedderNotify}/>
    </div>
  )
}

export default UseCallBack
