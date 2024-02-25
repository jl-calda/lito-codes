interface BannerSuccessProps {
  message: string;
}

interface BannerSuccessProps {
  message: string;
}

export const BannerSuccess = ({ message }: BannerSuccessProps) => {
  return <div className="absolute top-4 left-4">{message}</div>;
};
