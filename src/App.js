import { useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import DoneButton from "./components/DoneButton";
import Notes from "./components/Notes";
import StudyTimer from "./components/StudyTimer";
import History from "./components/History";
import EmptyState from "./components/EmptyState";
import { searchVideos } from "./services/youtubeApi";
import { useStudy } from "./context/StudyContext";
import "./styles/app.css";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDoneMessage, setShowDoneMessage] = useState(false);

  const { isStudying, startStudy, endStudy, currentVideo } = useStudy();

  const handleSearch = async (query) => {
    if (isStudying) return;

    setShowDoneMessage(false);
    setLoading(true);

    const results = await searchVideos(query);
    setVideos(results);

    setLoading(false);
  };

  const handleDone = () => {
    endStudy();
    setVideos([]);
    setShowDoneMessage(true);
  };

  return (
    <div className="app">
      <h1>StudyTube</h1>

      <SearchBar onSearch={handleSearch} disabled={isStudying} />

      {/* 🎥 Video */}
      {currentVideo && <VideoPlayer video={currentVideo} />}

      {/* ⏱️ Gentle timer */}
      {isStudying && <StudyTimer />}

      {/* 🧘 Calm focus message */}
      {isStudying && (
        <EmptyState message="Focus mode on. You’re doing well." />
      )}

      {/* 📝 Notes */}
      {isStudying && <Notes />}

      {/* 🛑 Done */}
      {isStudying && <DoneButton onDone={handleDone} />}

      {/* 📺 Video list */}
      {!isStudying && !loading && videos.length > 0 && (
        <VideoList videos={videos} onSelect={startStudy} />
      )}

      {/* 🌱 Before search */}
      {!isStudying && !loading && videos.length === 0 && !showDoneMessage && (
        <EmptyState message="Search a topic to begin focused learning." />
      )}

      {/* 🌤️ After done */}
      {!isStudying && showDoneMessage && (
        <EmptyState message="Good work today. Come back when you’re ready." />
      )}

      {/* 🔄 Loading */}
      {loading && <EmptyState message="Finding focused study videos…" />}

      {/* 📚 History */}
      {!isStudying && !loading && <History />}
    </div>
  );
}
