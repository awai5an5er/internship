import Logo from "../assets/fibank logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
  balance?: number;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [toEmail, setToEmail] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (!storedUser) navigate("/");
    setCurrentUser(storedUser);
    setUsers(allUsers);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleTransfer = () => {
    if (!currentUser) return;

    const senderIndex = users.findIndex((u) => u.email === currentUser.email);
    const receiverIndex = users.findIndex((u) => u.email === toEmail);

    if (receiverIndex === -1) {
      setMessage(" Receiver not found");
      return;
    }

    const amt = Number(amount);
    if (amt <= 0) {
      setMessage(" Enter a valid amount");
      return;
    }

    const senderBalance = users[senderIndex].balance || 5000;

    //  Check for sufficient balance
    if (amt > senderBalance) {
      setMessage(" Insufficient balance");
      return;
    }

    // Perform the transfer
    users[senderIndex].balance = senderBalance - amt;
    users[receiverIndex].balance = (users[receiverIndex].balance || 5000) + amt;

    // Update localStorage and state
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users[senderIndex]));
    setCurrentUser(users[senderIndex]);
    setMessage(` Transferred ${amt} PKR to ${toEmail}`);
    setAmount(0);
    setToEmail("");
  };

  const date = new Date();

  return (
    <div>
      <div className="flex justify-between px-5 py-5">
        <img src={Logo} alt="Logo" />
        <h1 className="font-medium text-3xl">
          Hello, {currentUser?.email?.split("@")[0]}
        </h1>
        <button
          onClick={handleLogout}
          className="relative z-30 overflow-hidden bg-[#AFFF1D] w-40 font-medium rounded-4xl cursor-pointer 
          text-black transition-all duration-300 h-[50px]
          before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#FF0000] before:transition-all before:duration-300 hover:text-white
          hover:before:w-full before:z-10"
        >
          <span className="relative z-30 font-bold">LOGOUT</span>
        </button>
      </div>

      <div className="flex justify-between px-40 py-10">
        <div>
          <p className="font-medium text-[20px]">Current Balance</p>
          <p className="font-light">
            As of {date.toLocaleTimeString()} {date.toLocaleDateString()} (PKT)
          </p>
        </div>
        <p className="font-medium text-3xl">
          {(currentUser?.balance ?? 5000).toLocaleString()} PKR
        </p>
      </div>

      <div className="bg-[#AEFF1C] py-8 w-[1000px] mx-auto rounded-3xl">
        <h1 className="font-medium text-2xl px-10 italic">Transfer Money</h1>
        <div className="flex justify-around px-20 py-8">
          <div>
            <input
              value={toEmail}
              onChange={(e) => setToEmail(e.target.value)}
              className="bg-white rounded-2xl h-[50px] w-[300px] px-3"
              type="text"
              placeholder="Receiver Email"
            />
            <p className="italic py-3">Transfer to</p>
          </div>
          <div>
            <input
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="bg-white rounded-2xl h-[50px] w-[300px] px-3"
              type="number"
              placeholder="Amount"
            />
            <p className="italic py-3">Amount</p>
          </div>
          <button
            onClick={handleTransfer}
            className="relative z-30 overflow-hidden bg-white w-20 font-medium rounded-4xl cursor-pointer 
            text-black transition-all duration-300 h-[50px]
            before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#104042] before:transition-all before:duration-500 hover:text-white
            hover:before:w-full before:z-10"
          >
            <span className="relative z-30 font-bold">→</span>
          </button>
        </div>
        {message && (
          <p
            className={`text-center text-gray-800 italic`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
