import Image from "next/image";

interface PhotoPageParams {
  searchParams: { url: string };
}

const PhotoPage = ({ searchParams: { url } }: PhotoPageParams) => {
  return (
    <Image
      src={url}
      fill
      alt="image"
      className="rounded-lg object-cover object-center shadow-lg p-8"
    />
  );
};

export default PhotoPage;
