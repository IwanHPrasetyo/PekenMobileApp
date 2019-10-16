import { createStackNavigator } from "react-navigation-stack";
import Login from "./Pages/Login";
import { createAppContainer } from "react-navigation";

const Navigation = createStackNavigator(
  {
    Login
  },
  {
    headerMode: "none",
    initialRouteKey: "Login"
  }
);

export default createAppContainer(Navigation);
