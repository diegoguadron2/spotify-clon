import { FiSearch, FiBell } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaHouse, FaSpotify } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

//Datos de prueba: prueba@gmail.com 1234578

export default function Header() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md z-50 px-4 py-2 flex items-center">
      <Link to="/">
        <div className="flex-shrink-0 mr-4">
          <FaSpotify className="text-2xl sm:text-3xl md:text-4xl text-white" />
        </div>
      </Link>

      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 sm:gap-4 w-full max-w-2xl">
          <Link to="/">
            <div className="bg-stone-900 rounded-full flex items-center justify-center aspect-square w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
              <FaHouse className="text-sm sm:text-xl md:text-2xl text-white" />
            </div>
          </Link>

          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full bg-stone-900 bg-opacity-20 rounded-full py-1 sm:py-2 md:py-3 pl-8 sm:pl-10 pr-4 text-xs sm:text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition h-8 sm:h-10 md:h-12"
              placeholder="Buscar"
            />
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 ml-4">
        <div className="flex items-center gap-2 sm:gap-4">
          {!user && <Link to="/form">Iniciar sesion</Link>}

          <button className="text-gray-300 hover:text-white transition">
            <FiBell className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="relative group">
            <div
              className="rounded-full flex items-center justify-center aspect-square w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 overflow-hidden bg-transparen"
              onClick={() => user && setIsMenuOpen(!isMenuOpen)}
            >
              {user? (
                <img
                  src={user.photoURL}
                  alt="User profile"
                  className="w-full h-full object-cover bg-gray-200"
                />
              ) : (
                <FaUser className="text-xs sm:text-sm md:text-base text-white" />
              )}
            </div>

            {user && isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-stone-900 rounded-md shadow-lg py-1 z-50 border border-gray-700">
                <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                  {user.email}
                </div>

                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-b-md"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
