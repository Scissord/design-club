import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteTypes = {
  children: ReactNode
}

export const PrivateRoute = (props: PrivateRouteTypes) => {
  const { children } = props;

  const user = JSON.parse(localStorage.getItem("user") ?? '{}');

  if (user?.token){
    // if (permissions[user.permission][props.permission]){
    //   // user is good
      return children;
    // }
  }

  // user is not authenticated
  return <Navigate to='/login' />;
}