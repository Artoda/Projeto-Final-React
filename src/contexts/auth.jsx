import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [nome, setNome] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("user_db");

    checkCartItems();
    checkIsLoggedIn()  // para ficar verificando se pessoa está logada, importante
  }, []);

  const getName = () => {
    const user = localStorage.getItem('user_db'); //retorno users_db
    // console.log(user);    
    setNome(user);
  }

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

  // somente no localStorage
  // const signup = (email, password) => {
  //   const usersStorage = JSON.parse(localStorage.getItem("users_db"));
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
  //   localStorage.setItem("users_db", JSON.stringify(newUser));
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
        getName,
        nome
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
