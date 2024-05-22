// src/hooks/useIngredients.js
import { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";

const useIngredients = (userId) => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const { data, error } = await supabase
          .from("Ingredients")
          .select("al_id")
          .eq("user_id", userId); // Suponiendo que tienes un campo user_id en la tabla Ingredients

        if (error) throw error;

        setIngredients(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, [userId]);

  return { ingredients, loading, error };
};

export default useIngredients;
