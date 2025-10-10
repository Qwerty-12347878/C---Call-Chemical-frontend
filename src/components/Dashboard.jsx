// import React, { useEffect, useState } from "react";

// export default function Dashboard() {
//   const API_URL = import.meta.env.VITE_API_URL || "";
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [profile, setProfile] = useState(null);
//   const [allData, setAllData] = useState(null);
//   const [users, setUsers] = useState([]); // for admin

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const headers = token ? { Authorization: `Bearer ${token}` } : {};

//     const tryFetch = async (endpoints) => {
//       for (const path of endpoints) {
//         try {
//           const res = await fetch(`${API_URL}${path}`, { headers });
//           if (res.ok) return await res.json();
//         } catch (_) {}
//       }
//       throw new Error("Unable to fetch data. Please verify API endpoints.");
//     };

//     const load = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         // get current user info
//         const user = await tryFetch(["/user/me", "/users/me", "/me", "/user"]);
//         setProfile(user);

//         // get user-specific data
//         const data = await tryFetch(["/data", "/user/data", "/items"]).catch(() => null);
//         setAllData(data);

//         // if admin, get all users
//         if (user?.role === "admin") {
//           const allUsers = await tryFetch(["/admin/users", "/users", "/all-users"]).catch(() => []);
//           setUsers(allUsers);
//         }
//       } catch (e) {
//         setError(e.message || "Failed to load dashboard");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [API_URL]);

//   if (loading) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-10 text-gray-200">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-7xl pt-24 mx-auto px-4 py-10">
//         <div className="bg-red-900/20 border border-red-700 text-black-200 px-4 py-3 rounded">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl pt-10 mx-auto px-4 py-10 text-gray-100">
//       <h1 className="text-3xl font-bold mb-6">
//         {profile?.role === "admin" ? "Admin Dashboard" : "User Dashboard"}
//       </h1>

//       {/* Profile section */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Profile</h2>
//         <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
//           {JSON.stringify(profile, null, 2)}
//         </pre>
//       </section>

//       {/* Data section */}
//       {allData && (
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-2">Your Data</h2>
//           <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
//             {JSON.stringify(allData, null, 2)}
//           </pre>
//         </section>
//       )}

//       {/* Admin-only section */}
//       {profile?.role === "admin" && (
//         <section>
//           <h2 className="text-xl font-semibold mb-2">All Users (Admin Only)</h2>
//           {users.length > 0 ? (
//             <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
//               {JSON.stringify(users, null, 2)}
//             </pre>
//           ) : (
//             <p>No users found or API not available.</p>
//           )}
//         </section>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const API_URL = import.meta.env.VITE_API_URL || "";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(null);
  const [allData, setAllData] = useState(null);
  const [users, setUsers] = useState([]); // For admin panel

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const tryFetch = async (endpoints) => {
      for (const path of endpoints) {
        try {
          const res = await fetch(`${API_URL}${path}`, { headers });
          if (res.ok) return await res.json();
        } catch (err) {
          console.warn(`Failed to fetch ${path}:`, err);
        }
      }
      throw new Error("Unable to fetch data. Please verify API endpoints.");
    };

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        // 1️⃣ Get current logged-in user
        const user = await tryFetch(["/auth/me"]);
        setProfile(user);

        // 2️⃣ Get user-specific data (optional, fallback to null)
        const data = await tryFetch(["/auth/data"]).catch(() => null);
        setAllData(data);

        // 3️⃣ If user is admin, fetch all users
        if (user?.role === "admin") {
          const allUsers = await tryFetch(["/auth/all"]).catch(() => []);
          setUsers(allUsers);
        }
      } catch (e) {
        setError(e.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [API_URL]);

  // 🔄 Loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-gray-200">
        Loading...
      </div>
    );
  }

  // ❌ Error state
  if (error) {
    return (
      <div className="max-w-7xl pt-24 mx-auto px-4 py-10">
        <div className="bg-red-900/20 border border-red-700 text-black-200 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  // ✅ Dashboard content
  return (
    <div className="max-w-7xl pt-10 mx-auto px-4 py-10 text-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        {profile?.role === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </h1>

      {/* Profile section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
          {JSON.stringify(profile, null, 2)}
        </pre>
      </section>

      {/* User-specific data */}
      {allData && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Your Data</h2>
          <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
            {JSON.stringify(allData, null, 2)}
          </pre>
        </section>
      )}

      {/* Admin-only section */}
      {profile?.role === "admin" && (
        <section>
          <h2 className="text-xl font-semibold mb-2">All Users (Admin Only)</h2>
          {users.length > 0 ? (
            <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
              {JSON.stringify(users, null, 2)}
            </pre>
          ) : (
            <p>No users found or API not available.</p>
          )}
        </section>
      )}
    </div>
  );
}
