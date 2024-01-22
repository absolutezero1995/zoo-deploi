import React, { useState, useEffect, ReactElement, ReactEventHandler } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setIsAuth, isAuth }): ReactElement => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogOut: ReactEventHandler = async (e): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        credentials: "include",
      });
      if (response.ok) {
        console.log("Logout successful");
        console.log(user);
        console.log(error);
        setUser("");
        setError("");
        navigate("/");
        setIsAuth(false);
      } else {
        const errorData = await response.json();
        setError(`Logout failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setError("An error occurred during logout.");
    }
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:3000/api/check");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/animals">ANIMALS</NavLink>
          </li>
          <li>
            <NavLink to="/rates">RATES</NavLink>
          </li>
          {isAuth ? (
            <li>
              <button onClick={handleLogOut}>LOG OUT</button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/signin">SIGN IN</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SIGN UP</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
