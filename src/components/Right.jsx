import {
  FaPlay,
  FaPause,
  FaHeart,
  FaRegHeart,
  FaEllipsisH,
  FaVolumeUp,
} from "react-icons/fa";
import { BsThreeDotsVertical, BsMusicNoteList } from "react-icons/bs";
import { MdDevices, MdQueueMusic } from "react-icons/md";

const RightSidebar = ({ currentSong, queue, isPlaying }) => {
  (currentSong = {
    title: "Feel Special",
    artist: "Twice",
    cover: "https://i.discogs.com/Ll58hK_5Lqyz3ywJxTV9V7DSpjfHyl-fsW90w_eKPOI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTky/NDIyLTE2MDUwMjUz/NjAtMjI0My5wbmc.jpeg",
    duration: "3:26",
    currentTime: "1:00",
    progress: 23,
    isLiked: true,
  }),
    (queue = [{
    title: "FANCY",
    artist: "TWICE",
    cover: "https://i.discogs.com/pRxmIkN-EQaQu_glUz7RolCjrbKlWKHs2UXtHzLctdE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg5/MjM3LTE2MDQ5NjE1/NzUtODU1NS5wbmc.jpeg",
    duration: "3:33",
    currentTime: "0:00",
    progress: 0,
    isLiked: false
  },
  {
    title: "What is Love?",
    artist: "TWICE",
    cover: "https://i.discogs.com/Bkhb9i113sTan-w36z34PVAJF1iwqBJ9LRd2ndDo6OM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODc4/NzA2LTE3MjExNjcz/NzAtMzk2MS5qcGVn.jpeg",
    duration: "3:28",
    currentTime: "0:00",
    progress: 0,
    isLiked: false
  },

  {
    title: "Hype Boy",
    artist: "NewJeans",
    cover: "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
    duration: "2:59",
    currentTime: "0:00",
    progress: 0,
    isLiked: true
  },
  {
    title: "OMG",
    artist: "NewJeans",
    cover: "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
    duration: "3:32",
    currentTime: "0:00",
    progress: 0,
    isLiked: false
  },
  {
    title: "Ditto",
    artist: "NewJeans",
    cover: "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
    duration: "3:05",
    currentTime: "0:00",
    progress: 0,
    isLiked: true
  },

  {
    title: "How You Like That",
    artist: "BLACKPINK",
    cover: "https://i.discogs.com/G4iDWKd74CzJF5zVTt5yNG6-RJZDmrhyRmDwSXcGI_Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTM0/NTI0LTE2NjMzNDc3/MjctNDg3Ny5qcGVn.jpeg",
    duration: "3:01",
    currentTime: "0:00",
    progress: 0,
    isLiked: true
  },
  {
    title: "Kill This Love",
    artist: "BLACKPINK",
    cover: "https://i.discogs.com/G4iDWKd74CzJF5zVTt5yNG6-RJZDmrhyRmDwSXcGI_Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTM0/NTI0LTE2NjMzNDc3/MjctNDg3Ny5qcGVn.jpeg",
    duration: "3:11",
    currentTime: "0:00",
    progress: 0,
    isLiked: false
  },
  {
    title: "Pink Venom",
    artist: "BLACKPINK",
    cover: "https://i.discogs.com/G4iDWKd74CzJF5zVTt5yNG6-RJZDmrhyRmDwSXcGI_Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTM0/NTI0LTE2NjMzNDc3/MjctNDg3Ny5qcGVn.jpeg",
    duration: "3:06",
    currentTime: "0:00",
    progress: 0,
    isLiked: true
  },

  {
    title: "Remember Summer Days",
    artist: "Anri",
    cover: "https://i.discogs.com/tXFNsEpG-O-0XXG2UJJhAq_6gTAVrSlEe1ChkMk7K64/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMTQ1/MzE4LTE2MzgwNDA4/OTctNzA4NS5qcGVn.jpeg",
    duration: "4:55",
    currentTime: "0:00",
    progress: 0,
    isLiked: false
  },
  {
    title: "Cat's Eye",
    artist: "Anri",
    cover: "https://i.discogs.com/tXFNsEpG-O-0XXG2UJJhAq_6gTAVrSlEe1ChkMk7K64/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMTQ1/MzE4LTE2MzgwNDA4/OTctNzA4NS5qcGVn.jpeg",
    duration: "4:30",
    currentTime: "0:00",
    progress: 0,
    isLiked: true
  }]),
    (isPlaying = true);
  
  return (
    <div className="hidden lg:flex flex-col w-80 h-full bg-black text-gray-300 border-l border-gray-800 p-5 overflow-y-auto">
      <div className="flex items-center justify-between mb-6 p-2 bg-gray-900 rounded-lg">
        <div className="flex items-center">
          <MdDevices className="text-lg mr-2" />
          <span className="text-sm">Dispositivo disponible</span>
        </div>
        <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full">
          Activo
        </span>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-400 mb-4">SONANDO AHORA</h3>

        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden mr-3">
            <img
              src="https://th.bing.com/th/id/OIP.Ne57Wl1sHS8IMpIaDb-9ywAAAA?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-white">
              {currentSong.title}
            </h4>
            <p className="text-xs text-gray-400">{currentSong.artist}</p>
          </div>
          <button className="text-gray-400 hover:text-white">
            {currentSong.isLiked ? (
              <FaHeart className="text-green-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>

        <div className="mb-2">
          <div className="h-1 w-full bg-gray-700 rounded-full">
            <div
              className="h-1 bg-green-500 rounded-full"
              style={{ width: `${currentSong.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-400 mb-6">
          <span>{currentSong.currentTime}</span>
          <span>{currentSong.duration}</span>
        </div>

        <div className="flex justify-between items-center">
          <button className="text-gray-400 hover:text-white">
            <MdQueueMusic className="text-xl" />
          </button>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <FaVolumeUp className="text-lg" />
            </button>
            <button className="bg-green-500 text-black rounded-full p-3 hover:scale-105 transition-transform">
              {isPlaying ? (
                <FaPause className="text-lg" />
              ) : (
                <FaPlay className="text-lg" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white">
              <BsMusicNoteList className="text-xl" />
            </button>
          </div>
          <button className="text-gray-400 hover:text-white">
            <BsThreeDotsVertical className="text-xl" />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-gray-400">
            COLA DE REPRODUCCIÓN
          </h3>
          <button className="text-xs text-green-500 hover:underline">
            Mostrar todo
          </button>
        </div>

        <div className="space-y-3">
          {queue.map((song, index) => (
            <div
              key={index}
              className="flex items-center p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-700 rounded mr-3 overflow-hidden flex-shrink-0">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm ${
                    index === 0 ? "text-green-500 font-medium" : "text-white"
                  } truncate`}
                >
                  {song.title}
                </p>
                <p className="text-xs text-gray-400 truncate">{song.artist}</p>
              </div>

              <div className="flex items-center space-x-3 text-gray-400">
                <span className="text-xs">{song.duration}</span>
                <button className="hover:text-white">
                  <FaEllipsisH className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
