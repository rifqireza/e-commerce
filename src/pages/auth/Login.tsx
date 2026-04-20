import { Link } from "react-router";
import Button from "../../components/general/Button";
import Card from "../../components/general/Card";
import Input from "../../components/general/Input";
import type React from "react";
import Form from "../../components/general/Form";

const Login: React.FC = () => {
  const onFinish =(data: Object) => {
    console.log(data);
    
  }
  return (
    <Card className="w-[480px] h-2/3 flex flex-col justify-around">
      <h1 className="text-black font-bold">LOGIN</h1>
      <Form className="flex flex-col h-2/3 justify-around" onFinish={onFinish}>
        <Input
          id="username"
          type="text"
          label="Username"
          placeholder="Insert Username"
        />
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="Insert Password"
        />
        <Button variant="primary">Submit</Button>
      </Form>

      <div>
        <Link
          to="/forgot-password"
          className="font-bold uppercase text-red-500"
        >
          Forgot Password?
        </Link>

        <p className="text-gray-500 uppercase text-sm">
          New architect? &nbsp;
          <Link
            to="/register"
            className="font-bold underline uppercase text-black text-base"
          >
            &nbsp; Register &nbsp;
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default Login;
