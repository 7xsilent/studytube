import { useEffect, useState } from "react";
import { useStudy } from "../context/StudyContext";

export default function Notes() {
  const { currentVideo } = useStudy();
  const videoId = currentVideo?.id?.videoId;
  const videoTitle = currentVideo?.snippet?.title || "study-notes";

  const [notes, setNotes] = useState("");

  // 🔁 Load saved notes
  useEffect(() => {
    if (!videoId) return;
    const savedNotes = localStorage.getItem(`notes-${videoId}`);
    setNotes(savedNotes || "");
  }, [videoId]);

  // 💾 Auto-save notes
  useEffect(() => {
    if (!videoId) return;
    localStorage.setItem(`notes-${videoId}`, notes);
  }, [notes, videoId]);

  // ⬇️ Download notes
  const downloadNotes = () => {
    if (!notes.trim()) return;

    const blob = new Blob([notes], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    const date = new Date().toISOString().split("T")[0];

    a.href = url;
    a.download = `${videoTitle.replace(/[^a-z0-9]/gi, "_")}_${date}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  if (!videoId) return null;

  return (
    <div className="notes">
      <h3>Notes</h3>

      <textarea
        placeholder="Write your notes here… (auto-saved)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* ⬇️ Always-visible download button */}
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={downloadNotes}
          disabled={!notes.trim()}
          style={{
            background: "transparent",
            border: "1px solid #38bdf8",
            color: "#38bdf8",
            padding: "8px 16px",
            borderRadius: "999px",
            fontSize: "13px",
            cursor: notes.trim() ? "pointer" : "not-allowed",
            opacity: notes.trim() ? 1 : 0.4,
          }}
        >
          Download Notes
        </button>
      </div>
    </div>
  );
}
