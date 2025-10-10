// import React, { useState } from "react";
// import { toast } from "react-toastify";

// export default function Login({ onLoginSuccess }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
  
//   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

//   // Function to get user initials
//   const getUserInitials = (userData) => {
//     let firstName = 'U'; // Default to 'U' for User
//     let lastName = '';

//     if (userData.firstName && userData.lastName) {
//       firstName = userData.firstName.charAt(0);
//       lastName = userData.lastName.charAt(0);
//     } else if (userData.name) {
//       const nameParts = userData.name.split(' ');
//       firstName = nameParts[0] ? nameParts[0].charAt(0) : 'U';
//       lastName = nameParts[1] ? nameParts[1].charAt(0) : '';
//     } else if (userData.email) {
//       firstName = userData.email.charAt(0).toUpperCase();
//     }

//     return { firstName: firstName.toUpperCase(), lastName: lastName.toUpperCase() };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       console.log("API_URL:", API_URL);
      
//       const res = await fetch(`${API_URL}/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       console.log("Login response:", data);
      
//       if (data.success) {
//         // Save token if the backend returns it
//         if (data.token) {
//           localStorage.setItem("authToken", data.token);
//           if (data.user) {
//             // Get user initials
//             const initials = getUserInitials(data.user);
            
//             // Store user data with initials
//             const userWithInitials = {
//               ...data.user,
//               initials: `${initials.firstName}${initials.lastName}`
//             };
            
//             localStorage.setItem("user", JSON.stringify(userWithInitials));
//           }
//         }
//         toast.success("🎉 Login successful! Redirecting...", {
//           position: "top-right",
//           autoClose: 2000,
//         });
//         setTimeout(() => {
//           onLoginSuccess();
//         }, 1000);
//       } else {
//         const errorMsg = data.message || "Login failed";
//         toast.error(`❌ ${errorMsg}`, {
//           position: "top-right",
//           autoClose: 4000,
//         });
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("🌐 Network error! Please check if the server is running.", {
//         position: "top-right",
//         autoClose: 4000,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm mb-2 text-gray-600">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 text-gray-500 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-600">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full py-2 rounded-lg transition duration-200 ${
//               isLoading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-500 hover:bg-blue-600 text-white"
//             }`}
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a href="/register" className="text-blue-500 hover:text-blue-600 font-semibold">
//               Register here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   ); 
// }


import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  // Function to get user initials
  const getUserInitials = (userData) => {
    let firstName = "U";
    let lastName = "";
    if (userData.firstName && userData.lastName) {
      firstName = userData.firstName.charAt(0);
      lastName = userData.lastName.charAt(0);
    } else if (userData.name) {
      const nameParts = userData.name.split(" ");
      firstName = nameParts[0] ? nameParts[0].charAt(0) : "U";
      lastName = nameParts[1] ? nameParts[1].charAt(0) : "";
    } else if (userData.email) {
      firstName = userData.email.charAt(0).toUpperCase();
    }
    return { firstName: firstName.toUpperCase(), lastName: lastName.toUpperCase() };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          if (data.user) {
            const initials = getUserInitials(data.user);
            const userWithInitials = {
              ...data.user,
              initials: `${initials.firstName}${initials.lastName}`,
            };
            localStorage.setItem("user", JSON.stringify(userWithInitials));
          }
        }
        toast.success("🎉 Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          if (data.user && data.user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/dashboard");
          }
          if (onLoginSuccess) onLoginSuccess();
        }, 1000);
      } else {
        const errorMsg = data.message || "Login failed";
        toast.error(`❌ ${errorMsg}`, {
          position: "top-right",
          autoClose: 4000,
        });
      }
    } catch (error) {
      toast.error("🌐 Network error! Please check if the server is running.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 text-gray-500 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-lg transition duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-600 font-semibold">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

