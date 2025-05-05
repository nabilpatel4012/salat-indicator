import { Link } from "react-router-dom";
import logo from "/company_logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <img width="80" src={logo}></img>
        </div>
        <h6 className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Mercury STAR Salat Indicator
        </h6>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Near Chand Tara Masjid, Besides Petrol Pump, Ambajogai Road, Latur -
          413512
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              to="/products"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              to="/resources"
            >
              Resources
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              to="/company"
            >
              About
            </Link>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <img
                src="https://img.icons8.com/?size=50&id=118467&format=png&color=9E9E9E"
                alt="Facebook"
                className="h-8 w-8"
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <img
                src="https://img.icons8.com/?size=50&id=59813&format=png&color=9E9E9E"
                alt="Instagram"
                className="h-8 w-8"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">WhatsApp</span>
              <img
                src="https://img.icons8.com/?size=50&id=62855&format=png&color=9E9E9E"
                alt="WhatsApp"
                className="h-8 w-8"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkedIn</span>
              <img
                src="https://img.icons8.com/?size=50&id=8808&format=png&color=9E9E9E"
                alt="LinkedIn"
                className="h-8 w-8"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
