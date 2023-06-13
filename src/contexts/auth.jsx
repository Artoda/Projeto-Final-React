import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    checkCartItems();

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const checkCartItems = async () => {
    const hasItems = localStorage.getItem("cart");
    if (hasItems) {
      let items = JSON.parse(localStorage.getItem("cart")).length; //retorna o número de itens no carrinho
      console.log(items);
      setCartItems(items);
    } else setCartItems(0);
    return;
  };

  const checkIsLoggedIn = () => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("user_db");

    if (userToken && usersStorage) {
      setIsLoggedIn(true);
      return true;
    }
    else {
      setIsLoggedIn(false);
      return false;
    }
    return;
  };

  // const signup = (email, password) => {
  //   const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
  //   const hasUser = usersStorage?.filter((user) => user.email === email);

  //   if (hasUser?.length) {
  //     return "já tem uma conta com esse e-mail";
  //   }

  //   let newUser;

  //   if (usersStorage) {
  //     newUser = [...usersStorage, { email, password }];
  //   } else {
  //     newUser = [{ email, password }];
  //   }

  //   localStorage.setItem("users_bd", JSON.stringify(newUser));

  //   return;
  // };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        // signin,
        // signup,
        signout,
        isLoggedIn,
        setIsLoggedIn,
        checkIsLoggedIn,
        cartItems,
        setCartItems,
        checkCartItems,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
