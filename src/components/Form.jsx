import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

//Datos de prueba: prueba@gmail.com 1234578

export default function LoginForm() {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);
    const emailValue = watch("email");
    const passValue = watch("password");
    try {
      await testFirebaseConnection(emailValue, passValue);
      setFirebaseError("");
      navigate("/");
    } catch (error) {
      setFirebaseError(error.message);
      console.error("Error en Firebase Auth:", {
        code: error.code,
        message: error.message,
      });
    }
  };

  const testFirebaseConnection = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  const [value, setValue] = useState("");

const handleGoogleSignIn = async () => {
    console.log("Click");
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Usuario creado con Google:", result.user);
      setFirebaseError("");
      navigate("/");
      
    } catch (error) {
      setFirebaseError(error.message);
      console.error("Error en Google Auth:", {
        code: error.code,
        message: error.message,
      });
    }
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-stone-800 rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Iniciar Sesión
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

            {firebaseError && (
              <div className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                {firebaseError}
              </div>
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

            {firebaseError && (
              <div className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                {firebaseError}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base md:text-lg transition duration-200 font-medium"
          >
            Iniciar Sesión
          </button>

          <div className="text-center text-xs sm:text-sm text-gray-400 mt-4">
            <a href="#" className="hover:text-blue-400 transition">
              ¿Olvidaste tu contraseña?
            </a>
            <span className="mx-2">•</span>
            <Link to="/create" className="hover:text-blue-400 transition">
              Crear cuenta
            </Link>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="mx-4 text-gray-400 text-sm">o</span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base md:text-lg transition duration-200 font-medium flex items-center justify-center gap-2"
          >
            <img
              src="https://freepnglogo.com/images/all_img/google-g-logo-85b2.png"
              alt="Google Logo"
              className="w-5 h-5"
            />
            Continuar con Google
          </button>
        </form>
      </div>
    </div>
  );
}
