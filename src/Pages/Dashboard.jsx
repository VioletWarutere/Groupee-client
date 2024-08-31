// src/components/Dashboard.jsx
import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import FilterComponent from '../Components/Filter';

import PaydWallet from "../Components/PaydWallet";

import Nav from "../Components/Nav";
import AddGroup from "../Components/AddGroup";
import Groups from "../Components/Groups";

const Dashboard = () => {
  const [balance, setBalance] = useState(3000.72);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBalance(1250.75);
      setTransactions([
        { id: 1, type: "Sent", amount: 200.0, date: "2024-04-01" },
        { id: 2, type: "Received", amount: 450.5, date: "2024-04-03" },
        { id: 3, type: "Sent", amount: 150.0, date: "2024-04-05" },
        { id: 4, type: "Received", amount: 300.0, date: "2024-04-07" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Nav />

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          <div className="flex flex-row justify-between  p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-gray-50" >
            {/* Balance Card */}
            <PaydWallet balance={balance} />

            {/* Add Group Modal */}
           <AddGroup />
          </div>

          
          <FilterComponent />
            <Groups />
         

          {/* Transactions Table */}
          <Card>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-4">
              Recent Transactions
            </h5>
            {loading ? (
              <p className="text-gray-700">Loading transactions...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn) => (
                      <tr
                        key={txn.id}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">{txn.id}</td>
                        <td className="px-6 py-4">{txn.type}</td>
                        <td className="px-6 py-4">${txn.amount.toFixed(2)}</td>
                        <td className="px-6 py-4">{txn.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
