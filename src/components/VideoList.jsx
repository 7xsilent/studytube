import VideoCard from "./VideoCard";

export default function VideoList({ videos, onSelect }) {
  if (!videos || videos.length === 0) {
    return <p>No videos found. Try another topic.</p>;
  }

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          video={video}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
