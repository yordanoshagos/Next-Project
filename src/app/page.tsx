import Image from "next/image";
import Header from "./shared-components/Header";
import Navbar from "./shared-components/Navbar";
import HomePage from "./home/components/category";
import SellingProducts from "./home/components/selling-products";
import SidebarVoucher from "./home/components/on-boarding";
// import SignIn from "./login";
// import Signup from "./signup";
import Footer from "./shared-components/footer";
import ProductCarousel from "./home/components/flash-sales";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <Header/>
      <Navbar />
      <SidebarVoucher />
      <HomePage />
      
      <SellingProducts />
      <Footer /> */}
      <Link href="/home">Home</Link>  
    </div>
  );
}
