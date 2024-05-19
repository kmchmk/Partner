import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import LoginButton from "./LoginButton";

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Profile />
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default Login;
