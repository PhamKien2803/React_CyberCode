import { combineReducers, createStore } from "redux";
// import productListReducer from "./ProductItemCartFsaReducer";
// import PhoneStoreReducer from "../redux/PhoneStoreReducer";
// import TaiXiuReducer from "../redux/TaiXiuReducer";
// import OanTuXiReducer from "../redux/OanTuXiReducer";
// import BookingMovieReducer from "../redux/BookingTicketReducer";
// import StudentListReducer from "./StudentListReducer";
// import BurgerOrderReducer from "./BurgerOrderReducer"
// import faceBookReducer from "./FaceBookAppReducer";
import XBetGameData from "./XBetGameReducer"

const rootReducer = combineReducers({
  // stateCartPhone: PhoneStoreReducer,
  // stateTaiXiu: TaiXiuReducer,
  // stateOanTuXi: OanTuXiReducer,
  // stateMovieTicket: BookingMovieReducer,
  // stateStudentList : StudentListReducer,
  // stateBurgerOrder: BurgerOrderReducer,
  // faceBookReducer,
  // productListReducer,
  XBetGameData,
  
});

// Enable Redux DevTools
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export default store;
export default store;
