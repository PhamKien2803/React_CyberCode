import React from "react";
import Children from "./Children";

function Parent() {
  const API = [
    {
      id: 1,
      src: "https://deluxevietnam.com/wp-content/uploads/2023/08/Caption-1-2-scaled.jpg",
      title: "Audi RS7 SportBack",
      name: "Audi",
    },

    {
      id: 2,
      src: "https://deluxevietnam.com/wp-content/uploads/2023/08/Caption-1-2-scaled.jpg",
      title: "Audi RS4 SportBack",
      name: "Audi",
    },

    {
      id: 3,
      src: "https://deluxevietnam.com/wp-content/uploads/2023/08/Caption-1-2-scaled.jpg",
      title: "Audi RS5 SportBack",
      name: "Audi",
    },
  ];

  const objectCar = {
    id: 1,
    src: "https://deluxevietnam.com/wp-content/uploads/2023/08/Caption-1-2-scaled.jpg",
    title: "Audi RS7 SportBack",
    name: "Audi",
    array: [
        1,2,3,4,5,6,7,8,9,10
    ]
  };

  return (
    // <div>
    //   {API.map((api) => (
    //     <Children
    //       key={api?.id}
    //       propsSource={api?.src}
    //       titleCar={api?.title}
    //       nameCar={api?.name}
    //     />
    //   ))}
    // </div>

    <div>
        <Children productCar={objectCar}/>
    </div>
  );
}

export default Parent;
