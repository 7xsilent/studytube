export default function VideoPlayer({ video }) {
  if (!video || !video.id || !video.id.videoId) {
    return null;
  }

  const videoId = video.id.videoId;

  return (
    <div
      style={{
        marginTop: "20px",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <iframe
        title="study-video"
        width="100%"
        height="420"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
