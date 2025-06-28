import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import { useNavigate } from "react-router-dom"; 

import "../firebase"; 
//Datos de prueba: prueba@gmail.com 1234578
export default function CreateUser() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const emailValue = watch("email");
    const passValue = watch("password");
    testFirebaseConnection(emailValue, passValue);
    navigate("/");
  };
  // Función para probar la conexión con Firebase Auth y Crear el usuario
  const testFirebaseConnection = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("✅ Usuario creado:", userCredential.user.uid);
      })
      .catch((error) => {
        console.error("❌ Error en conexión Firebase:", error.message);
      });
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-stone-800 rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Crear Cuenta
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 sm:space-y-6"
        >
          <div>
            <label className="block text-sm sm:text-base font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
              <input
                type="email"
                {...register("email", {
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
                className={`pl-10 w-full p-2 sm:p-3 text-sm sm:text-base bg-stone-700 border rounded-lg focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-stone-600 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                <FaExclamationCircle className="mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm sm:text-base font-medium mb-2">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
              <input
                type="password"
                {...register("password", {
                  required: "La contraseña es requerida",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
                className={`pl-10 w-full p-2 sm:p-3 text-sm sm:text-base bg-stone-700 border rounded-lg focus:outline-none focus:ring-1 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-stone-600 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                <FaExclamationCircle className="mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base md:text-lg transition duration-200 font-medium"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
