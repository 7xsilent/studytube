export default function VideoCard({ video, onSelect }) {
  return (
    <div className="video-card" onClick={() => onSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.channelTitle}</p>
    </div>
  );
}
