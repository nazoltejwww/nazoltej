import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => (
    <footer class="text-gray-300 body-font bg-black/70 relative bottom-0 w-full px-6">
        <div class="container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col">
            <Link
                aria-label="Nażółtej.pl"
                to="/"
                class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
                <StaticImage
                    className="h-auto w-32"
                    alt="logo"
                    src="../assets/logo.png"
                />
            </Link>
            <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">
                © 2023 Nażółtej.pl —
                <Link
                    aria-label="seovileo.pl"
                    href="https://seovileo.pl/"
                    class="text-gray-300 ml-1"
                    target="_blank"
                >
                    @seovileo.pl
                </Link>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <Link
                    aria-label="facebook"
                    to="https://www.facebook.com/rejestracjanazolte"
                    class="text-gray-400"
                >
                    <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </Link>
                <Link
                    aria-label="instagram"
                    to="https://www.instagram.com/nazoltej.pl/"
                    class="ml-3 text-gray-400"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </Link>
            </span>
        </div>
    </footer>
);

export default Footer;
