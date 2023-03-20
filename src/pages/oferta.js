import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Oferta = ({ data }) => {
    const { allDatoCmsOferty } = data;
    return (
        
        <Layout>
            <section class="text-gray-600 body-font">
                <div className="absolute max-w-[2000px] top-0 -z-30 min-h-[40rem] h-full w-full">
                    <div className="absolute opacity-100 max-w-[2000px] -z-30 min-h-[40rem] w-full h-full max-h-[55rem]">
                        <StaticImage
                            className="absolute opacity-90 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                            placeholder="blurred"
                            src="../assets/bgAboutUs.png"
                            alt="samochód retro z otwarta maską"
                        />
                    </div>
                </div>
                <div class="container px-5 py-5 lg:py-12 mx-auto">
                    <div class="flex flex-col text-center w-full mb-8 lg:mb-12">
                        <h2
                            data-sal="slide-left"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            class="text-sm text-yellow-500 tracking-widest font-medium title-font mb-1"
                        >
                            Nasza Oferta
                        </h2>
                        <h1
                            data-sal="slide-right"
                            data-sal-delay="200"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            class="sm:text-3xl text-2xl font-medium title-font text-gray-100"
                        >
                            Zobacz Wszystkie Nasze Oferty
                        </h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {allDatoCmsOferty.edges.map(({ node }) => (
                            <div class="p-4 md:w-1/3">
                                <div
                                    data-sal="slide-down"
                                    data-sal-delay="0"
                                    data-sal-duration="600"
                                    data-sal-easing="ease"
                                    class="flex rounded-lg h-full  p-8 flex-col bg-white"
                                >
                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                class="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 class="text-gray-900 text-lg title-font font-medium">
                                            {node.tytul}
                                        </h2>
                                    </div>
                                    <p class="mt-3 text-yellow-500 inline-flex items-center text-2xl">
                                        {node.cena}
                                    </p>
                                    <div class="flex-grow">
                                        <p class="leading-relaxed text-base">
                                            {node.opis}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsOferty {
            edges {
                node {
                    tytul
                    cena
                    opis
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Oferta" />;

export default Oferta;
