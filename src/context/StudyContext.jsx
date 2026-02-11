import { createContext, useContext, useEffect, useState } from "react";

const StudyContext = createContext();

export const StudyProvider = ({ children }) => {
  const [isStudying, setIsStudying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [history, setHistory] = useState([]);

  // 🔁 Load history on start
  useEffect(() => {
    const savedHistory = localStorage.getItem("study-history");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // 💾 Save history
  useEffect(() => {
    localStorage.setItem("study-history", JSON.stringify(history));
  }, [history]);

  const startStudy = (video) => {
    setCurrentVideo(video);
    setIsStudying(true);

    setHistory((prev) => {
      const exists = prev.find(
        (item) => item.id.videoId === video.id.videoId
      );

      if (exists) {
        // Move existing item to top
        const filtered = prev.filter(
          (item) => item.id.videoId !== video.id.videoId
        );

        return [
          {
            id: video.id,
            snippet: video.snippet,
            studiedAt: new Date().toISOString(),
          },
          ...filtered,
        ].slice(0, 10);
      }

      return [
        {
          id: video.id,
          snippet: video.snippet,
          studiedAt: new Date().toISOString(),
        },
        ...prev,
      ].slice(0, 10);
    });
  };

  const endStudy = () => {
    setCurrentVideo(null);
    setIsStudying(false);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("study-history");
  };

  return (
    <StudyContext.Provider
      value={{
        isStudying,
        currentVideo,
        history,
        startStudy,
        endStudy,
        clearHistory,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => useContext(StudyContext);
