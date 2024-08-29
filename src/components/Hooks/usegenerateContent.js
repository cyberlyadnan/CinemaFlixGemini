import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MOVIE_SEARCH_API, OPTIONS_TMDB } from "../../Utils/constants";

const useGenerateContent = (searchQuery, triggerSearch) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery || !triggerSearch) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_API_KEY);

        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          generationConfig: { responseMimeType: "application/json" },
        });

        const prompt = `
          List 20 movies based on the user's search query "${searchQuery}" using this JSON schema:
          {
            "type": "object",
            "properties": {
              "movie_title": { "type": "string" }
            }
          }`;

        const result = await model.generateContent(prompt);
        const text = result.response.candidates[0].content.parts[0].text;

        // Remove the trailing newline character (\n) if present
        const cleanText = text.replace(/\n$/, "");
        // Parse the JSON string
        const data = JSON.parse(`[${cleanText}]`);
        const gemini_response = data.map((movie) => movie.movie_title);

        const getMoviesData = async (movieQuery) => {
          const apidata = await fetch(MOVIE_SEARCH_API + movieQuery, OPTIONS_TMDB);
          const jsondata = await apidata.json();
          return jsondata?.results[0];
        };

        const moviesData = await Promise.all(gemini_response.map(name => getMoviesData(name)));
        setMovies(moviesData.filter(movie => movie !== undefined)); // Filter out any undefined results
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, triggerSearch]);

  return { movies, loading, error };
};

export default useGenerateContent;
