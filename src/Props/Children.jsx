import React from "react";
//Props: là thuộc tính nhận giá trị từ components cha
// function Children({ propsSource, titleCar, nameCar }) {
function Children(props) {

    let { src, name, title, array } = props.productCar;

    const renderData = () => {
        let{array} = props.productCar
        return(
            <div>
                {array.map((arr, index) => (
                    <button key={index}>{arr}</button>
                ))}
            </div>
        )
    }

  return (
    // <div>
    //   <div style={{width: "165px"}} className="card text-start">
    //     <img className="card-img-top" src={propsSource} alt="Image" />
    //     <div className="card-body">
    //       <h4 className="card-title">{titleCar}</h4>
    //       <p className="card-text">{nameCar}</p>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div style={{ width: "175px" }} className="card text-start">
        <img className="card-img-top" src={props.productCar.src} alt="Image" />
        <div className="card-body">
          <h4 className="card-title">{props.productCar.title}</h4>
          <p className="card-text">{props.productCar.name}</p>
          {renderData()}
        </div>
      </div>
    </div>
  );
}

export default Children;
