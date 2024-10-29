
const initProductCart = {
  product: [
    {
      id: 1,
      image: "../ProductCartFSA/Images/image-waffle-thumbnail.jpg",
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    },
    {
      id: 2,
      image: "../ProductCartFSA/Images/image-creme-brulee-thumbnail.jpg",
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.0,
    },
    {
      id: 3,
      image: "../ProductCartFSA/Images/image-macaron-thumbnail.jpg",
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
    },
    {
      id: 4,
      image: "../ProductCartFSA/Images/image-tiramisu-thumbnail.jpg",
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
    },
    {
      id: 5,
      image: "../ProductCartFSA/Images/image-baklava-thumbnail.jpg",
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.0,
    },
    {
      id: 6,
      image: "../ProductCartFSA/Images/image-meringue-thumbnail.jpg",
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.0,
    },
    {
      id: 7,
      image: "../ProductCartFSA/Images/image-cake-thumbnail.jpg",
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
    },
    {
      id: 8,
      image: "../ProductCartFSA/Images/image-brownie-thumbnail.jpg",
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.5,
    },
    {
      id: 9,
      image: "../ProductCartFSA/Images/image-panna-cotta-thumbnail.jpg",
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
    },
  ],
};

const productListReducer = (state = initProductCart, action) => {
    switch(action.type){

        default:
            return { ...state };
    }
}

export default productListReducer;
