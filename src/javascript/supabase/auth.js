// src\javascript\supabase\auth.js
import supabase from "./supabaseClient"; // Asume que este es el camino correcto a tu cliente de Supabase

const registerUser = async (email, password) => {
  console.log(email, password);
  // Corrección: Ahora llamamos correctamente a supabase.auth.signUp
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error; // Lanzamos el error si existe
  return { data }; // Retornamos el usuario registrado
};

const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error; // Lanzamos el error si existe
  return { data }; // Retornamos el usuario que inició sesión
};

export { loginUser, registerUser };

