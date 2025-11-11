import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

interface User {
  email: string;
  password: string;
}

export default function LoginPopup({
  isOpen,
  onClose,
  onLoginSuccess,
}: LoginPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Close popup if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAuth = () => {
    const storedUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    if (isLoginMode) {
      // LOGIN
      const user = storedUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setMessage(" Login successful!");
        localStorage.setItem("currentUser", JSON.stringify(user));
        setTimeout(() => onLoginSuccess(), 1000);
      } else {
        setMessage("❌ Invalid email or password");
      }
    } else {
      // SIGNUP
      const exists = storedUsers.some((u) => u.email === email);
      if (exists) {
        setMessage(" User already exists. Try logging in.");
        return;
      }
      const newUser = { email, password };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setMessage(" Account created! You can now log in.");
      setIsLoginMode(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        ref={popupRef}
        className="bg-gray-100 rounded-2xl flex flex-col w-[300px] justify-center px-3 py-8 gap-3 relative"
      >
        <div
          onClick={onClose}
          className="absolute top-1 right-0 cursor-pointer px-2"
        >
          <X color="#000000" />
        </div>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-200 outline-none rounded-2xl px-3 py-2"
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-200 outline-none rounded-2xl px-3 py-2"
          placeholder="Password"
          type="password"
        />

        <button
          onClick={handleAuth}
          className="bg-emerald-500 flex justify-center rounded-2xl px-3 py-2 text-white cursor-pointer hover:bg-emerald-600"
        >
          {isLoginMode ? "Login" : "Sign Up"}
        </button>

        {message && (
          <p className="text-center text-sm text-gray-700 mt-2">{message}</p>
        )}

        <p className="flex justify-center gap-2 text-sm text-gray-700 mt-2">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setMessage("");
            }}
            className="text-emerald-500 hover:underline cursor-pointer"
          >
            {isLoginMode ? "Create One" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
