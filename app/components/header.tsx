import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <div className="bg-sky-700 text-white p-4">
      <div className="container mx-auto flex">
        {/* Logo */}
        <div className="grid w-10 h-10 grid-cols-3 gap-0.5 bg-white border-2">
          <div className=" bg-sky-700 "></div>
          <div className=" bg-rose-500"></div>
          <div className=" bg-sky-700 "></div>
          <div className=" bg-rose-500 "></div>
          <div className=" bg-rose-500 "></div>
          <div className=" bg-rose-500 "></div>
          <div className=" bg-rose-500 "></div>
          <div className=" bg-sky-700 "></div>
          <div className=" bg-sky-700 "></div>
        </div>
        <Link to="/">Pentomino's Pizza</Link>
        <label>
          Find a store near me: <input placeholder="Enter City or State" />
        </label>
        Menu Deals Order Now
      </div>
    </div>
  );
};

export default Header;
