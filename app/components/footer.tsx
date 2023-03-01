import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <div className="bg-sky-700 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <span>© 2023 Pentomino's Pizza, All Rights Reserved</span>
        <div>
          <Link to="/">Privacy Policy</Link> &nbsp;
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
