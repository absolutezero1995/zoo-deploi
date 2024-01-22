import React, {useState, useEffect} from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home.js";
import Animals from "../components/animals/Animals.js";
import Navbar from "../components/navbar/Navbar.js";
import Error from "../components/404/Error.js";
import Signup from "../components/signup/Signup.js";
import Signin from "../components/signin/Signin.js";
import Rates from "../components/rates/Rates.js";
import RatesForm from "../components/ratesForm/RatesForm.js";


type User = {
  id: number,
  admin: boolean,
}

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/check")
    .then((data) => data.json())
    .then((data: User) => {
      if (data) {
        setIsAuth(true);
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/api/check")
      .then((data) => data.json())
      .then((data: User) => {
        if (data) {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [isAuth]);
  
  
  
console.log(isAuth, 'isAuth');
  return (
    <Routes>
      <Route path="/" element={<Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>}>
        <Route index element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/signin" element={<Signin setIsAuth={setIsAuth} />} />
        <Route path="/rates" element={user && user.admin ? <RatesForm /> : <Rates />}  />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
