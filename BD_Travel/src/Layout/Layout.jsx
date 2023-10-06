import { Outlet, useLoaderData } from "react-router-dom"; //builin function oi jaiga tuko change hobe




import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";


export default function Layout() {
  const fetchData =useLoaderData();
  console.log(fetchData)
  return (
    <div>
      <Navbar/>


      <Outlet />  
  
     
      <Footer/>
     
    </div>
  )
}
