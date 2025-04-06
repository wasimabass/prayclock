
import { Readex_Pro } from "next/font/google";
import { Orbitron } from "next/font/google";

import { Clock } from "./clock";



const readexPro = Readex_Pro({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <div className="wrapper flex w-full justify-center items-center">
        <div className="clock-contianer w-full min-h-screen max-w-[1000px] p-10 pt-[20rem] bg-cover text-yellow-400">
          <Clock />
        </div>
      </div>
    </main>
  );
}
