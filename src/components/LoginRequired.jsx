import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { AuthContext } from "@src/contexts/authContext.js";

export default function LoginRequired({ children }) {
  const { store } = useContext(AuthContext);
  const redirect = useNavigate();

  const { isLoading } = useQuery(
    "check auth",
    () => console.log("call api"), // todo: enter your API call func
    {
      onSuccess: () => {
        store.setAuth(true);
      },
      onError: (err) => {
        console.error(err);
        redirect("/login");
      },
      enabled: !store.isAuth,
      retry: false,
    }
  );

  return isLoading ? <div>Loading</div> : children;
}
