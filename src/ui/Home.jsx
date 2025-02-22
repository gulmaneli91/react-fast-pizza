import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {

  const username = useSelector(state=>state.user.username);
  return (
    <div className="text-center">
        <h1 className="text-xl font-semibold text-center">The best pizza.</h1>
      <h1 className="text-xl text-yellow-500 font-semibold text-center">
        Straight out of the oven, straight to you.
      </h1>
      {username === ""? (<CreateUser/>): (<Button to ="/menu"type= "primary">Continue ordering, {username}</Button>)}
    </div>
  );
}

export default Home;
