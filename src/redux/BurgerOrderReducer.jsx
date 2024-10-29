const burgerStateDefault = {
  burger: { salad: 1, cheese: 2, beef: 1 }, // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}]

  menu: { salad: 10, cheese: 20, beef: 55 },

  total: 85,
};

const burgerOrder = (state = burgerStateDefault, action) => {
  switch (action.type) {
    case "INCREASE_BURGER": {
      //Tạo biến increase và dùng Object.asign() để sao chép 
      //các giá trị của tất cả thuộc tính có thể liệt kê 
      //từ một hoặc nhiều đối tượng
      let increase = Object.assign({}, state.burger);
      //gọi action để thực hiện chức năng
      increase[action.payload] += 1;
      //biển tổng sẽ lấy tổng số lượng được tăng lên cộng với số lượng trong menu
      let total = state.total + state.menu[action.payload];
      //render lại dữ liệu khi tăng thành công
      return {...state, burger: increase, total: total}
    }

    case "DECREASE_BURGER": {
      let decrease = Object.assign({}, state.burger);
      if(decrease[action.payload] >= 1){
        decrease[action.payload] -= 1;
      }
      let total = state.total - state.menu[action.payload];
      return { ...state, burger: decrease, total: total };
    }
    default:
      return { ...state };
  }
};

export default burgerOrder;
