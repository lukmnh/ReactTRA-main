import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const User = () => {
  const [authenticated, setauthenticated] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    alert("You're not login, please login");
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        <h1>Dashboard</h1>
        <h3>Welcome</h3>
      </>
    );
  }
};

export default User;
