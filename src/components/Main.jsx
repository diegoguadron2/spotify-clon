import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FaPlay, FaHeart, FaEllipsisH } from "react-icons/fa";
//Datos de prueba: prueba@gmail.com 1234578

const MainContent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const recentPlaylists = [
    {
      id: 1,
      name: "Mix diario",
      description: "Tus canciones de cada día",
      cover:
        "https://i.discogs.com/G4iDWKd74CzJF5zVTt5yNG6-RJZDmrhyRmDwSXcGI_Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTM0/NTI0LTE2NjMzNDc3/MjctNDg3Ny5qcGVn.jpeg",
    },
    {
      id: 2,
      name: "Éxitos del momento",
      description: "Los temas más populares",
      cover:
        "https://i.discogs.com/pRxmIkN-EQaQu_glUz7RolCjrbKlWKHs2UXtHzLctdE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg5/MjM3LTE2MDQ5NjE1/NzUtODU1NS5wbmc.jpeg",
    },
    {
      id: 3,
      name: "Rock Clásico",
      description: "Lo mejor de Twice",
      cover:
        "https://i.discogs.com/Ll58hK_5Lqyz3ywJxTV9V7DSpjfHyl-fsW90w_eKPOI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTky/NDIyLTE2MDUwMjUz/NjAtMjI0My5wbmc.jpeg",
    },
    {
      id: 4,
      name: "Chill Out",
      description: "Relájate con estos beats",
      cover: "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
    },
    {
      id: 5,
      name: "Chill Out",
      description: "Relájate con estos beats",
      cover:
        "https://akamai.sscdn.co/letras/360x360/albuns/f/a/a/d/1485721731068565.jpg",
    },
  ];

  const madeForYou = [
    {
      id: 5,
      name: "Basado en tu historia",
      description: "Actualizado ayer",
      cover:
        "https://i.discogs.com/tXFNsEpG-O-0XXG2UJJhAq_6gTAVrSlEe1ChkMk7K64/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMTQ1/MzE4LTE2MzgwNDA4/OTctNzA4NS5qcGVn.jpeg",
    },
    {
      id: 6,
      name: "Nuevos lanzamientos",
      description: "Descubrimientos para ti",
      cover:
        "https://akamai.sscdn.co/letras/360x360/albuns/f/a/a/d/1485721731068565.jpg",
    },
  ];

  const currentSong = {
    title: "I can´t stop the loneliness",
    author: "Anri",
    duration: "4.23",
    cover:
      "https://i.discogs.com/tXFNsEpG-O-0XXG2UJJhAq_6gTAVrSlEe1ChkMk7K64/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMTQ1/MzE4LTE2MzgwNDA4/OTctNzA4NS5qcGVn.jpeg",
  };

  return (
    <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-gradient-to-b from-green-900 to-gray-900">
      <section className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Buenos días{user && `, ${user.displayName || user.email}`}{" "}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {recentPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-stone-900 hover:bg-stone-800 rounded-lg p-4 transition-all cursor-pointer group"
            >
              <div className="relative aspect-square w-full rounded-md mb-3 overflow-hidden">
                <img
                  src={playlist.cover}
                  alt={playlist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=No+Image";
                  }}
                />
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105">
                  <FaPlay className="text-black text-xs" />
                </button>
              </div>
              <h3 className="font-bold line-clamp-1">{playlist.name}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {playlist.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold">Hecho para ti</h2>
          <button className="text-sm text-gray-400 hover:text-white">
            Mostrar todo
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {madeForYou.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900 hover:bg-stone-800 rounded-lg p-4 transition-all cursor-pointer group"
            >
              <div className="relative aspect-square w-full rounded-md mb-3 overflow-hidden">
                <img
                  src={item.cover}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=No+Image";
                  }}
                />
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105">
                  <FaPlay className="text-black text-xs" />
                </button>
              </div>
              <h3 className="font-bold line-clamp-1">{item.name}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Episodios para ti
        </h2>
        <div className="bg-stone-900 hover:bg-stone-800 rounded-lg p-4 transition-all">
          <div className="flex gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-md flex-shrink-0 overflow-hidden">
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x300?text=No+Image";
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">{currentSong.title}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {currentSong.author} • {currentSong.duration}
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-green-500 text-black rounded-full p-2 hover:scale-105 transition-transform">
                  <FaPlay className="text-xs" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <FaHeart className="text-lg" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <FaEllipsisH className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
