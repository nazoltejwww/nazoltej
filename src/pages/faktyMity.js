import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

const FaktyMity = ({ data }) => {
    const { allDatoCmsFaktyMity } = data;
    return (
        <Layout>
            <div className="text-white flex flex-col items-center justify-center px-5 py-5 lg:py-12">
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
                <div class="flex flex-col text-center w-full">
                    <h2
                        data-sal="slide-left"
                        data-sal-delay="0"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        class="text-sm text-yellow-500 tracking-widest font-medium title-font mb-1"
                    >
                        Altualności
                    </h2>
                    <h1
                        data-sal="slide-right"
                        data-sal-delay="300"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        class="sm:text-3xl text-2xl font-medium title-font text-gray-100"
                    >
                        Fakty & Mity
                    </h1>
                </div>
                {allDatoCmsFaktyMity.edges.map(({ node }) => (
                    <div
                        className="flex flex-col items-start justify-center my-6 md:my-8 lg:my-12 w-[90%] lg:w-[60vw]"
                        key={node.id} style={{order: node.pozycja}}
                    >
                        {" "}
                        <h2 className="text-2xl lg:text-3xl flex items-center justify-center w-full text-center uppercase mb-2 text-yellow-500 tracking-wider shadowScale font-bold">
                            {node.tytul}
                        </h2>
                        <div
                            className="mt-4 lg:mt-8 px-2 mb-4"
                            dangerouslySetInnerHTML={{
                                __html: node.opis,
                            }}
                        />
                        <GatsbyImage
                            className="w-full h-auto rounded-lg"
                            image={getImage(node.zdjecie.gatsbyImageData)}
                            alt={node.zdjecie.alt}
                        />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsFaktyMity {
            edges {
                node {
                    opis
                    tytul
                    zdjecie {
                        alt
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    pozycja
                }
            }
        }
    }
`;

export const Head = () => <Seo title="FaktyMity" />;

export default FaktyMity;
