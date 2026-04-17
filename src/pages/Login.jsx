import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
