import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-4 text-center text-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        <div className="flex justify-between">
          <div>
            <p>Powered by FARMSTACK</p>
            <p>Email : datahub@kalro.org</p>
            <p>Datahub admin phone : +254 722206986</p>
            <ul>
              <li>
                <a href="https://www.kalro.org/" className="hover:underline">
                  KALRO
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-left">Explore</h3>
            <ul className="text-left">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="https://farmstack.co/" className="hover:underline">
                  About Farmstack
                </a>
              </li>
              <li>
                <a
                  href="https://kadp.kalro.org/home/contact"
                  className="hover:underline"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://kadp.kalro.org/home/legal"
                  className="hover:underline"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="https://kadp.kalro.org/home/get-started"
                  className="hover:underline"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="https://kadp.kalro.org/login"
                  className="hover:underline"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://kadp.kalro.org/home/legal"
                  className="hover:underline"
                >
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-left">Contacts</h3>
            <address className="text-left">
              Kenya Agricultural and Livestock Research Organisation.
              <br />
              P.O. Box 57811, 00200 City Square, Nairobi, Kenya.
              <br />
              <Link
                to=""
                href="mailto:info@kalro.org"
                className="hover:underline"
              >
                info@kalro.org
              </Link>
              <br />
              Phone: +254 722 206986, +254 733 707000
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
