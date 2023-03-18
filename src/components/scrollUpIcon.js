import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";

const ScrollUpIcon = () => {
    const [ScrollUpIcon, setScrollUp] = useState(false);

    const scrollUp = () => {
        if (window.scrollY >= 1200) {
            setScrollUp(true);
        } else {
            setScrollUp(false);
        }
    };

    useEffect(() => {
        scrollUp();
        window.addEventListener("scroll", scrollUp);
    });

    return (
        <Link
            aria-label="Przewiń do góry"
            className={
                !ScrollUpIcon
                    ? "fixed right-6 bottom-24 transition-transform duration-1000 z-50 translate-x-[200%]"
                    : "fixed right-6 hover:scale-110 bottom-24 translate-x-0 transition-transform duration-500 z-50 "
            }
            to="#"
        >
            <svg
                className="h-11 w-11 md:h-12 md:w-12"
                width="571"
                height="571"
                viewBox="0 0 571 571"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="121" y="147" width="337" height="256" fill="black" />
                <path
                    d="M264.31 0.658076C202.976 5.72474 147.643 28.3914 100.843 67.5914C52.7097 107.725 18.3097 165.858 5.64301 228.125C-15.0237 329.858 22.043 436.525 100.976 502.658C208.31 592.525 361.643 592.525 468.976 502.658C517.11 462.391 551.643 404.258 564.31 341.991C581.643 256.658 559.11 168.525 502.443 100.925C455.243 44.3914 384.976 7.99141 310.31 1.19141C295.91 -0.141924 276.576 -0.408591 264.31 0.658076ZM296.176 203.058C298.443 204.125 321.776 226.525 347.91 252.791C396.843 301.725 398.31 303.591 398.31 313.591C398.31 327.458 384.71 340.925 370.576 341.058C359.91 341.058 356.576 338.525 319.91 301.991L284.976 267.058L249.91 301.991C213.376 338.525 210.043 341.058 199.376 341.058C185.243 340.925 171.643 327.458 171.643 313.591C171.643 303.591 173.11 301.725 222.043 252.791C248.176 226.525 271.376 204.258 273.643 203.058C278.843 200.525 290.71 200.525 296.176 203.058Z"
                    fill="yellow"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1033_163"
                        x1="78.0807"
                        y1="465.591"
                        x2="607.558"
                        y2="-42.9764"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0416667" stop-color="#FF8A00" />
                        <stop offset="1" stop-color="#5CFF58" />
                    </linearGradient>
                </defs>
            </svg>
        </Link>
    );
};

export default ScrollUpIcon;
