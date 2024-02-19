interface VideoPageParams {
  searchParams: { url: string };
}

const VideoPage = ({ searchParams: { url } }: VideoPageParams) => {
  return (
    <video
      src={url}
      className="rounded-lg object-cover object-top shadow-lg"
      autoPlay
      muted
      loop
    />
  );
};

export default VideoPage;
