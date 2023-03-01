import { Link } from "@remix-run/react";

interface MyProps {
  text: string;
}

const Button = ({ text, ...otherProps }: MyProps) => {
  return (
    <button
      className="bg-rose-500 rounded-md text-white py-1.5 px-4 font-semibold"
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default Button;
