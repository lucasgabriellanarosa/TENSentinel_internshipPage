import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const Layout = () => {
    
  return (
    <div className="bg-bgColor min-h-screen flex flex-col items-center font-greatPrimer">

        <Header />
        <Outlet />

    </div>
  )
}
