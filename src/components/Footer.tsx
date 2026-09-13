import React from "react";

import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={Logo} alt="Logo" className="mb-4 h-9 w-auto" />
            <p className="max-w-md text-sm leading-6 text-gray-600">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            {/* Social Links */}
            <ul className="mt-6 flex gap-5 text-sm font-medium">
              <li>
                <a href="#"
                  className="text-gray-500 transition hover:text-gray-900">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#"
                  className="text-gray-500 transition hover:text-gray-900" >
                  Twitter
                </a>
              </li>
              <li>
                <a href="#"
                  className="text-gray-500 transition hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          {/* Product */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-gray-900">
              PRODUCT
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#"
                  className="text-gray-600 transition hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-gray-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#"
                  className="text-gray-600 transition hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-gray-900">
              RESOURCES
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-gray-900">
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-gray-900" >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-gray-900">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-gray-900">
              LEGAL
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-gray-900" >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p> © 2026 DevStack. All rights reserved. </p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="transition hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
