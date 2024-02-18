interface VideoPageParams {
  searchParams: { url: string };
}

const VideoPage = ({ searchParams: { url } }: VideoPageParams) => {
  return (
    <video
      src={url}
      className="rounded-lg object-cover object-center shadow-lg p-8"
      autoPlay
      muted
      loop
    />
  );
};

export default VideoPage;
