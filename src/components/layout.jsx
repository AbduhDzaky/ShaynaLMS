import { Link, Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Courses from "../pages/manager/home/courses";
import Students from "../pages/manager/home/students";

export default function LayoutDashoard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
