import Image from "next/image";
import Link from "next/link";
import TodaysDealsPage from "./home/page";

export default function Home() {
  return (
    <div>
      <TodaysDealsPage />
      <Link href={"/home"} className="m-0-auto text-red-400 font-bold">Welcome to  Exclusive electronic <br /> devices center!</Link>
    </div>
  );
}
