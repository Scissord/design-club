import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type AuthRouteTypes = {
  children: ReactNode
}

export const AuthRoute = (props: AuthRouteTypes) => {
  const { children } = props;

  const user = JSON.parse(localStorage.getItem("user") ?? '{}');

  if (user?.token){
    // if (permissions[user.permission][props.permission]){
    //   // user is good
    return <Navigate to='/' />;
    // }
  }

  // user is not authenticated
  return children;
}