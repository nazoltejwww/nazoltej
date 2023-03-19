import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Dziekujemy = () => (
    <Layout>
        <section className="py-24 lg:py-48 w-full flex flex-col items-center justify-center">
            <div className="absolute opacity-100 max-w-[2000px] -z-30 min-h-[40rem] w-full h-full max-h-[55rem]">
                <StaticImage
                    className="absolute opacity-90 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                    placeholder="blurred"
                    src="../assets/bgAboutUs.png"
                    alt="tło dokumenty"
                />
            </div>
            <h1
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="text-3xl text-white mb-12 w-1/3 text-center"
            >
                Dziękujemy za wysłanie formularza. Skontaktujemy się z Państwem
                najszybciej jak to możliwe.
            </h1>
            <Link to="/" className="btn text-end">
                Strona Główna
            </Link>
        </section>
    </Layout>
);

export const Head = () => <Seo title="Dziekujemy" />;

export default Dziekujemy;
