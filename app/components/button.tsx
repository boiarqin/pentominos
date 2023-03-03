import { Link } from "@remix-run/react";

interface MyProps {
  text: string;
  asLink: boolean;
  to?: string;
}

const Button = ({ asLink = false, to, text, ...otherProps }: MyProps) => {
  return asLink && to ? (
    <Link
      to={to}
      className="bg-rose-500 rounded-md text-white py-1.5 px-4 font-semibold inline-block"
      {...otherProps}
    >
      {text}
    </Link>
  ) : (
    <button
      className="bg-rose-500 rounded-md text-white py-1.5 px-4 font-semibold"
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default Button;
