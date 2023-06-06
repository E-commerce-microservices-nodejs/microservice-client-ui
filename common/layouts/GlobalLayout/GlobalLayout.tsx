import { FC, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

interface GlobalLayoutProps {
  children: ReactNode;
}
const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userCookie = Cookies.get("user");
      const storedUser = userCookie ? JSON.parse(userCookie) : null;
      dispatch({ type: "SET_USER", payload: storedUser });
    }
  }, []);
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default GlobalLayout;
