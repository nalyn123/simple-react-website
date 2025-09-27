import "./login.scss";

import { useLogin } from "./login-model";
import { Input } from "@components/index";

const Login = () => {
  const { inputs, handleSubmit, onSubmit } = useLogin();

  return (
    <div className="container container--py">
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...inputs?.email} />
          <Input {...inputs?.password} />
          <Input {...inputs?.submit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
