import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const Appcontext = createContext();
export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(false);

  const themeStyle = {
    day: {
      backgroundColor: "rgb(228, 228, 228)",
      color: "black",
    },
    night: {
      backgroundColor: "black",
      color: "white",
    },
  };
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(userData);

  return (
    <>
      <Appcontext.Provider
        value={{
          userData,
          isOpen,
          setIsOpen,
          themeStyle: themeStyle[isDay ? "day" : "night"],
          isDay,
          setIsDay,
        }}
      >
        {children}
      </Appcontext.Provider>
    </>
  );
};
