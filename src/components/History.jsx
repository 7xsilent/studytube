import { useStudy } from "../context/StudyContext";

export default function History() {
  const { history, startStudy, clearHistory } = useStudy();

  if (!history.length) return null;

  return (
    <div style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px",
        }}
      >
        <h3 style={{ fontSize: "16px", margin: 0 }}>Recent Study</h3>

        <button
          onClick={clearHistory}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#9ca3af",
            padding: "7px 14px",
            borderRadius: "999px",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Clear History
        </button>
      </div>

      <div style={{ display: "grid", gap: "12px" }}>
        {history.map((item) => (
          <div
            key={item.id.videoId}
            onClick={() => startStudy(item)}
            style={{
              display: "flex",
              gap: "12px",
              padding: "10px",
              background: "#0f172a",
              borderRadius: "14px",
              cursor: "pointer",
              transition: "0.15s",
            }}
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              style={{
                width: "120px",
                borderRadius: "10px",
              }}
            />

            <div>
              <div style={{ fontSize: "14px", fontWeight: 500 }}>
                {item.snippet.title}
              </div>

              <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                {item.snippet.channelTitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
