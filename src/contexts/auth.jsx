import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [nome, setNome] = useState("");
  
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
    
  const getName = () => {
    const user = JSON.parse(localStorage.getItem('user_token')); //retorno user_token
    const users = JSON.parse(localStorage.getItem('users_bd')); //retorno users_bd
    let firstName = "";

    if (user && users) {
      const completeName = users.find( u => u.email === user.email).nome;
      firstName = completeName.split(' ')[0];
    }
    
    setNome(firstName);
  }

  const checkCartItems = () => {
    const hasItems = localStorage.getItem("cart");
    if (!!hasItems) {
      let items = JSON.parse(localStorage.getItem('cart')).length; //retorna o número de itens no carrinho
      setCartItems(items);
    } else setCartItems(0);
    return;
  };

  const checkIsLoggedIn = () => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
    return;
  };

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "e-mail ou senha incorretos";
      }
    } else {
      return "usuário não cadastrado";
    }
  };

  const signup = (email, password, nome) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "já tem uma conta com esse e-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password, nome }];
    } else {
      newUser = [{ email, password, nome }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout, isLoggedIn, setIsLoggedIn, checkIsLoggedIn, cartItems, setCartItems, checkCartItems, getName, nome }}
    >
      {children}
    </AuthContext.Provider>
  );
};
