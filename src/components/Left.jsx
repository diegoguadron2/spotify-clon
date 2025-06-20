import {
  FaHome,
  FaSearch,
  FaBook,
  FaPlus,
  FaHeart,
  FaDownload,
  FaCog
} from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";

const LeftSidebar = () => {
  return (
    <div className="h-full w-16 md:w-60 bg-black flex flex-col p-2 md:p-4 overflow-y-auto">
      <div className="space-y-6 md:space-y-6 mb-6">
        <nav className="space-y-4 md:space-y-2">
          <button className="flex justify-center md:justify-start items-center w-full p-2 rounded hover:bg-gray-800 hover:text-white text-white">
            <FaHome className="text-xl" />
            <span className="hidden md:block font-medium ml-4">Inicio</span>
          </button>
          <button className="flex justify-center md:justify-start items-center w-full p-2 rounded hover:bg-gray-800 hover:text-white text-gray-400">
            <FaSearch className="text-xl" />
            <span className="hidden md:block font-medium ml-4">Buscar</span>
          </button>
          <button className="flex justify-center md:justify-start items-center w-full p-2 rounded hover:bg-gray-800 hover:text-white text-gray-400">
            <MdLibraryMusic className="text-xl" />
            <span className="hidden md:block font-medium ml-4">
              Tu biblioteca
            </span>
          </button>
        </nav>
      </div>

      <div className="hidden md:block bg-gray-800 rounded-lg p-3 mb-4 flex-1">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center space-x-2 hover:text-white text-gray-400">
            <FaBook className="text-lg" />
            <span className="font-medium">Listas de reproducción</span>
          </button>
          <button className="text-gray-400 hover:text-white p-1">
            <FaPlus />
          </button>
        </div>

        <div className="space-y-3">
          <button className="flex items-center space-x-3 text-sm hover:text-white w-full text-left">
            <div className="bg-gradient-to-br from-purple-600 to-blue-400 p-2 rounded">
              <FaHeart className="text-white" />
            </div>
            <div>
              <p className="text-white">Tus me gusta</p>
              <p className="text-xs text-gray-400">Lista • 120 canciones</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 text-sm hover:text-white w-full text-left">
            <div className="bg-gray-700 p-2 rounded">
              <FaDownload className="text-white" />
            </div>
            <div>
              <p className="text-white">Descargas</p>
              <p className="text-xs text-gray-400">Lista • 45 canciones</p>
            </div>
          </button>
        </div>
      </div>

      <div className="hidden md:block mt-auto pt-4 border-t border-gray-700">
        <a
          href="/form"
          className="text-xs text-gray-400 hover:text-white block mb-2"
        >
          Cookies
        </a>
        <button className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white w-fulld m-2">
          <FaCog className="text-xl" />
          <span className="ml-2 text-sm">Configuración</span>
        </button>
        <button className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white w-fulld m-2">
          <BiNetworkChart className="text-xl" />
          <span className=" ml-2 text-sm">Conexiones</span>
        </button>
        <button className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white w-full">
          <div className="bg-gray-700 p-1 rounded">
            <FaDownload />
          </div>
          <span>Instalar aplicación</span>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
