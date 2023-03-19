import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const oNas = ({ data }) => {
    const { allDatoCmsZdjecieTlo, allDatoCmsN1, allDatoCmsPytaniaN2 } = data;
    return (
        <Layout>
            <section className="relative px-5 py-5 lg:py-12 flex justify-center items-center">
                {allDatoCmsZdjecieTlo.edges.map(({ node }) => (
                    <div className="absolute top-0 opacity-20 max-w-[2000px] -z-30 min-h-[40rem] w-full h-full max-h-[55rem]">
                        <GatsbyImage
                            loading="eager"
                            className="absolute opacity-90 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                            image={getImage(
                                node.zdjecieTlaSekcjiONas.gatsbyImageData
                            )}
                            alt={node.zdjecieTlaSekcjiONas.alt}
                        />
                    </div>
                ))}
                {allDatoCmsN1.edges.map(({ node }) => (
                    <div className="container mx-auto text-zinc-200">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2
                                data-sal="slide-left"
                                data-sal-delay="0"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1"
                            >
                                {node.malyNaglowek}
                            </h2>
                            <h1
                                data-sal="slide-right"
                                data-sal-delay="0"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="sm:text-3xl text-2xl font-medium title-font mb-4"
                            >
                                {node.naglowek}
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                {node.opis}
                            </p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-orange-300">
                                    {node.kartaNaglowek1}
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    {node.kartaMalyText1}
                                </p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-red-300">
                                    {node.kartaNaglowek1Copy1}
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    {node.kartaMalyText1Copy1}
                                </p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-orange-300">
                                    {node.kartaNaglowek1Copy2}
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    {node.kartaMalyText1Copy2}
                                </p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-red-300">
                                    {node.kartaNaglowek1Copy3}
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    {node.kartaMalyText1Copy3}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className="px-5 py-5 lg:py-12 flex justify-center items-center bg-none md:bg-black/30 text-zinc-200">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 class="mb-8 text-2xl lg:text-3xl tracking-tight font-extrabold">
                        Najczęsciej Zadawane Pytania:
                    </h2>
                    <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                        {allDatoCmsPytaniaN2.edges.map(({ node }) => (
                            <div class="mb-10 md:mb-4 lg:mb-0">
                                <h3 class="flex items-center mb-4 text-lg font-medium">
                                    <svg
                                        class="flex-shrink-0 mr-2 w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    {node.pytanie}
                                </h3>
                                <p class="text-gray-400">{node.odpowiedz}</p>
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
        allDatoCmsN1 {
            edges {
                node {
                    kartaNaglowek1
                    kartaNaglowek1Copy1
                    kartaNaglowek1Copy2
                    kartaNaglowek1Copy3
                    malyNaglowek
                    naglowek
                    kartaMalyText1
                    kartaMalyText1Copy1
                    kartaMalyText1Copy2
                    kartaMalyText1Copy3
                    opis
                }
            }
        }
        allDatoCmsZdjecieTlo {
            edges {
                node {
                    zdjecieTlaSekcjiONas {
                        alt
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
        allDatoCmsPytaniaN2 {
            edges {
                node {
                    pytanie
                    odpowiedz
                }
            }
        }
    }
`;

export const Head = () => <Seo title="O Nas" />;

export default oNas;
