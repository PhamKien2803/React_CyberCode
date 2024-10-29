const dataDefault = {
  comments: [
    {
      name: "Yone",
      content: "Hi ! yasuo !",
      avatar: `https://i.pravatar.cc/150?u=yone`,
    },
    {
      name: "Yasuo",
      content: "Hi ! brother !",
      avatar: `https://i.pravatar.cc/150?u=yasuo`,
    },
  ],
};

const faceBookReducer = (state = dataDefault, action) => {
    switch(action.type){

        case "ADD_COMMENT":{
            state.comments = [...state.comments, action.payload]
            return {...state}
        }
        default:
            return {...state}
    }
}

export default faceBookReducer;


