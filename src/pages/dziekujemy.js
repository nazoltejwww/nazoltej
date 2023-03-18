import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Dziekujemy = () => (
    <Layout>
        <section className="py-24 lg:py-48 w-full flex flex-col items-center justify-center">
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
