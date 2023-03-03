import { Link } from "@remix-run/react";
import Button from "./button";

interface MyProps {
  title: string;
  secondaryTitle?: string;
  buttonText: string;
  ctaUrl: string;
  backgroundImageUrl: string;
}

const HomeBanner = ({
  title,
  secondaryTitle,
  buttonText,
  ctaUrl,
  backgroundImageUrl,
}: MyProps) => {
  return (
    <div
      className="bg-sky-900 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="h-full w-full  bg-black/20 p-8 ">
        <div className="container mx-auto py-24 ">
          <p className="text-4xl pb-4">{secondaryTitle}</p>
          <h2 className="text-5xl pb-8">{title}</h2>
          <Button asLink to={ctaUrl} text={buttonText} />
          {/* <Link  /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
