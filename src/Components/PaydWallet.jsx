//import React from 'react'
import { Card } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const PaydWallet = ({ balance }) => {
    //const balance = 2025;
  return (
    <Card>
      <a
        href="#"
        className="block w-[300px] h-[150px] max-w-4xl p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center "
        style={{ backgroundColor: "#18D26E"}}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         PaydWallet
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          ${balance}
        </p>
      </a>
    </Card>
  );
};

export default PaydWallet;
