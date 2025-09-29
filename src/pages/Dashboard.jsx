import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const API_URL = import.meta.env.VITE_API_URL || "";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(null);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const tryFetch = async (endpoints) => {
      for (const path of endpoints) {
        try {
          const res = await fetch(`${API_URL}${path}`, { headers });
          if (res.ok) {
            return await res.json();
          }
        // eslint-disable-next-line no-unused-vars
        } catch (_) {
          // continue to next endpoint option
        }
      }
      throw new Error("Unable to fetch data. Please verify API endpoints.");
    };

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const user = await tryFetch(["/user/me", "/users/me", "/me", "/user"]);
        setProfile(user);

        const data = await tryFetch([
          "/data",
          "/user/data",
          "/users/data",
          "/items",
        ]).catch(() => null);
        setAllData(data);
      } catch (e) {
        setError(e.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [API_URL]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-gray-200">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-red-900/20 border border-red-700 text-red-200 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
          {JSON.stringify(profile, null, 2)}
        </pre>
      </section>

      {allData && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Your Data</h2>
          <pre className="bg-gray-800/70 p-4 rounded overflow-auto text-sm">
            {JSON.stringify(allData, null, 2)}
          </pre>
        </section>
      )}
    </div>
  );
}
