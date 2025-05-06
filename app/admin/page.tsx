"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Keep if used elsewhere

interface Appointment {
  _id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
  timestamp: string;
  status: string;
}

const ITEMS_PER_PAGE = 10; // Define how many items per page

export default function AdminDashboard() {
  // const router = useRouter(); // Keep if needed
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  // ------------------------

  // IMPORTANT: Use environment variables for credentials in production
  const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin";
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (isLoggedIn === "true") {
      setIsAuthenticated(true);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (loginData.username === ADMIN_USERNAME && loginData.password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminLoggedIn", "true");
      setCurrentPage(1); // Reset page on login
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminLoggedIn");
    setAppointments([]);
    setSearchTerm("");
    setStatusFilter("all");
    setCurrentPage(1); // Reset page on logout
    setLoginError("");
    setLoginData({ username: "", password: "" });
  };

  const fetchAppointments = async () => {
    if (!isAuthenticated) return;

    setLoading(true); // Set loading true before fetching
    try {
      // NOTE: This fetches ALL appointments matching filters.
      // For large datasets, backend pagination would be more efficient.
      const response = await fetch(`/api/appointments?search=${encodeURIComponent(searchTerm)}&status=${statusFilter}`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();

      if (data.success) {
        const sortedAppointments = data.data.sort((a: Appointment, b: Appointment) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setAppointments(sortedAppointments);
        // Reset to page 1 IF the current page becomes invalid after filtering/searching
        // (This is handled more directly in the search/filter useEffect now)
      } else {
        console.error("Failed to fetch appointments:", data.error || "Unknown error");
        setAppointments([]); // Clear appointments on fetch failure
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setAppointments([]); // Clear appointments on catch error
    } finally {
      setLoading(false);
    }
  };

  // Fetch when auth status changes
  useEffect(() => {
    if (isAuthenticated) {
      fetchAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]); // Only depends on auth status

  // Re-fetch and reset page when search/filter changes
  useEffect(() => {
    if (isAuthenticated) {
      setCurrentPage(1); // Reset to page 1 on new search/filter
      fetchAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, statusFilter]); // Depends on search/filter

  const formatDate = (dateString: string) => {
    // ... (keep your existing formatDate function)
    if (!dateString) return "Invalid Date";
    try {
      return new Date(dateString).toLocaleString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true // Use AM/PM
      });
    } catch (e) {
      return "Invalid Date";
    }
  };

  const updateStatus = async (id: string, status: string) => {
    const originalAppointments = [...appointments];
    setAppointments(prev =>
      prev.map(app => app._id === id ? { ...app, status } : app)
    );

    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!data.success || !response.ok) {
        setAppointments(originalAppointments); // Revert on failure
        alert(`Failed to update status: ${data.error || `Server error ${response.status}`}`);
      }
      // Optional: Could refetch if needed, but optimistic update handles the visual change
      // fetchAppointments();
    } catch (error) {
      setAppointments(originalAppointments); // Revert on error
      alert('Error updating status. Please check your connection.');
      console.error("Update error:", error);
    }
  };

  // --- Pagination Calculations ---
  const totalPages = Math.ceil(appointments.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentAppointments = appointments.slice(indexOfFirstItem, indexOfLastItem);
  // -----------------------------

  // --- Pagination Handlers ---
  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };
  // ---------------------------

  // Login Screen UI (no changes needed here)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
          {/* ... (rest of your existing login form) ... */}
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Dashboard Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {loginError && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                <p className="font-bold">Login Failed</p>
                <p>{loginError}</p>
              </div>
            )}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Main Dashboard UI (Authenticated)
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between mb-6">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Appointment Dashboard
          </h1>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Filters and Search Section */}
          <div className="p-4 sm:p-6 border-b border-gray-200">
             {/* ... (keep your existing search and filter inputs) ... */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-grow">
                <label htmlFor="search-appointments" className="sr-only">Search appointments</label>
                <input
                  type="text"
                  id="search-appointments"
                  placeholder="Search by name, phone, email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex-shrink-0">
                <label htmlFor="status-filter" className="sr-only">Filter by status</label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Attended</option>
                  <option value="cancelled">Not Attended</option>
                </select>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : appointments.length === 0 ? (
            // Empty State (Shows if NO appointments match filters)
            <div className="text-center py-16 px-4">
               {/* ... (keep your existing empty state SVG and text) ... */}
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No appointments found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || statusFilter !== 'all' ? 'Try adjusting your search or filter.' : 'No appointments have been scheduled yet.'}
              </p>
            </div>
          ) : (
            // Table View
            <> {/* Use Fragment to wrap table and pagination */}
              <div className="overflow-x-auto">
                <div className="align-middle inline-block min-w-full">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg md:rounded-none">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        {/* ... (keep your existing table header) ... */}
                         <tr>
                            <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Date & Time
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Contact
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Treatment
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Message
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {/* Map over CURRENT page's appointments */}
                        {currentAppointments.map((appointment) => (
                          <tr
                            key={appointment._id}
                            className={`hover:bg-gray-50 transition-colors duration-150 ease-in-out ${
                              appointment.status === 'completed' ? 'bg-green-50' :
                              appointment.status === 'cancelled' ? 'bg-red-50' : ''
                            }`}
                          >
                            {/* ... (keep your existing table cells - td) ... */}
                             <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                                {formatDate(appointment.timestamp)}
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{appointment.name}</div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{appointment.phone}</div>
                                {appointment.email && (
                                  <div className="text-xs text-gray-500">{appointment.email}</div>
                                )}
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                                {appointment.treatment || "N/A"}
                              </td>
                              <td className="px-3 py-4 text-sm text-gray-600 max-w-xs whitespace-normal break-words">
                                {appointment.message || "N/A"}
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                                  appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                                  appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {appointment.status === 'completed' ? 'Attended' :
                                   appointment.status === 'cancelled' ? 'Not Attended' :
                                   appointment.status}
                                </span>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm">
                                <select
                                  value={appointment.status}
                                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateStatus(appointment._id, e.target.value)}
                                  className={`text-xs rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-1 pl-2 pr-7 ${
                                    appointment.status === 'completed' ? 'bg-green-100 border-green-300' :
                                    appointment.status === 'cancelled' ? 'bg-red-100 border-red-300' :
                                    'bg-white'
                                  }`}
                                >
                                  <option value="pending">Pending</option>
                                  <option value="completed">Attend</option>
                                  <option value="cancelled">Not Attend</option>
                                </select>
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* --- Pagination Controls --- */}
              {totalPages > 1 && ( // Only show pagination if there's more than one page
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 rounded-b-lg">
                  {/* Mobile view: Simple Prev/Next */}
                   <div className="flex-1 flex justify-between sm:hidden">
                      <button
                          onClick={handlePreviousPage}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          Previous
                      </button>
                      <button
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          Next
                      </button>
                  </div>
                  {/* Desktop view: More detailed info */}
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                          <p className="text-sm text-gray-700">
                              Showing <span className="font-medium">{indexOfFirstItem + 1}</span>{' '}
                              to <span className="font-medium">{Math.min(indexOfLastItem, appointments.length)}</span>{' '}
                              of <span className="font-medium">{appointments.length}</span> results
                          </p>
                      </div>
                      <div>
                          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                              <button
                                  onClick={handlePreviousPage}
                                  disabled={currentPage === 1}
                                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                  <span className="sr-only">Previous</span>
                                  {/* Heroicon name: solid/chevron-left */}
                                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                              </button>
                              {/* Current Page Indicator (optional, could add page numbers here if needed) */}
                               <span aria-current="page" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                  Page {currentPage} of {totalPages}
                              </span>
                              <button
                                  onClick={handleNextPage}
                                  disabled={currentPage === totalPages}
                                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                  <span className="sr-only">Next</span>
                                  {/* Heroicon name: solid/chevron-right */}
                                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                              </button>
                          </nav>
                      </div>
                  </div>
                </div>
              )}
              {/* --- End Pagination Controls --- */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
