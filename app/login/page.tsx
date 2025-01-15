import Login from "../_components/Login";
import fetcher from "../_lib/fetcher";

const LoginPage = async () => {
  const data = await fetcher("/hi", {});
  return <Login />;
};

export default LoginPage;
