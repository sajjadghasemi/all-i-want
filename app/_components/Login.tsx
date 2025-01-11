const Login = () => {
  return (
    <form className="w-full px-4 md:px-0 flex flex-col items-center justify-center space-y-4 py-8 *:w-full *:md:w-1/2">
      <input
        className="outline-none border border-black/50 py-1 px-2.5"
        placeholder="Enter your username"
        type="text"
      />
      <input
        className="outline-none border border-black/50 py-1 px-2.5"
        placeholder="Enter your password"
        type="password"
      />
      <button
        type="submit"
        className="bg-black text-white py-1.5 font-semibold"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
