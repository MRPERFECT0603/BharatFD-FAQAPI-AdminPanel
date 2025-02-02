const Navbar = () => {
    return (
      <nav className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">FAQ Admin Panel</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;