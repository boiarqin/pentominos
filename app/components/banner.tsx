import { Link } from "@remix-run/react";

interface MyProps {
  title: string;
  secondaryText?: string;
  //   buttonText?: string;
}

const Banner = ({
  title,
  secondaryText = "Pizza ipsum dolor amet sausage ad burnt mouth laborum sauteed onions meatball stuffed crust peppers platter",
}: MyProps) => {
  return (
    <div className="bg-sky-900 text-white p-4">
      <div className="container mx-auto py-16 ">
        <h1 className="text-4xl text-center pb-4">{title}</h1>
        <p className="text-2xl text-center">{secondaryText}</p>
      </div>
    </div>
  );
};

export default Banner;
