import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Loader = () => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black z-[99] hidden transition-all duration-1000 justify-center items-center "
            id="loader-wrapper"
        >
            <div className="flex flex-col items-center justify-center">
                <StaticImage
                    placeholder="blurred"
                    alt="logo"
                    src="../assets/logo.png"
                />
            </div>
        </div>
    );
};
export default Loader;
