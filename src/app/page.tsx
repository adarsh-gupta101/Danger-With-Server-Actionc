import Image from "next/image";
// import { useState } from 'react';
import { reboot, logout, shutdown } from "@napi-rs/system-shutdown";

// const LogOut=()=>{
//   logout();
// }

export default function Home() {
  // const [output, setOutput] =  useState(null);

  return (
    <div className="w-full  mx-auto dark:bg-gray-800 shadow-md rounded-lg py-4 px-6">
      <form className="flex w-full justify-center items-center mt-1 h-screen">
        <button
          className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 w-full p-4 bg-white m-2"
          formAction={async () => {
            "use server";
            reboot();
          }}
        >
          📴Reboot
        </button>
        <button
          className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 w-full p-4 bg-white m-2"
          formAction={async () => {
            "use server";
            logout();
          }}
        >
          🛑Logout
        </button>
        <button
          className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 w-full p-4 bg-white m-2"
          formAction={async () => {
            "use server";
            shutdown();
          }}
        >
          ☠️Shutdown
        </button>
      </form>
    </div>
  );
}
