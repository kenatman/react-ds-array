import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./header";

const Login = ({ auth }) => {
  const history = useHistory();
  const goToMain = (uid) => {
    history.push({ pathname: "/main", state: { uid } });
  };

  useEffect(() => {
    auth.authChanged((user) => {
      if (user) {
        goToMain(user.uid);
      }
    });
  }, []);

  const handleLogin = async (e) => {
    const provider = e.currentTarget.textContent;
    const {
      user: { uid },
    } = await auth.login(provider);
    console.log(uid);
    history.push({ pathname: "/main", state: { uid } });
  };

  return (
    <div>
      <Header />
      <button onClick={handleLogin}>Google</button>
      <button onClick={handleLogin}>Github</button>
    </div>
  );
};

export default Login;
