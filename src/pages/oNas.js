import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const oNas = () => (
    <Layout>
        <section className="relative px-5 py-5 lg:py-12 flex justify-center items-center">
            <div className="absolute top-0 opacity-20 max-w-[2000px] -z-30 min-h-[40rem] w-full h-full max-h-[55rem]">
                <StaticImage
                    className="absolute opacity-90 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                    placeholder="blurred"
                    src="../assets/bgOnas.png"
                    alt="samochód retro z otwarta maską"
                />
            </div>
            <div className="container mx-auto text-zinc-200">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2
                        data-sal="slide-left"
                        data-sal-delay="0"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1"
                    >
                        ROOF PARTY POLAROID
                    </h2>
                    <h1
                        data-sal="slide-right"
                        data-sal-delay="0"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className="sm:text-3xl text-2xl font-medium title-font mb-4"
                    >
                        Master Cleanse Reliac Heirloom
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table.
                        Franzen you probably haven't heard of them man bun deep
                        jianbing selfies heirloom prism food truck ugh squid
                        celiac humblebrag.
                    </p>
                </div>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-orange-300">
                            Shooting Stars
                        </h2>
                        <p className="leading-relaxed text-base mb-4">
                            Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery hexagon disrupt edison bulbche.
                        </p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-red-300">
                            The Catalyzer
                        </h2>
                        <p className="leading-relaxed text-base mb-4">
                            Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery hexagon disrupt edison bulbche.
                        </p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-orange-300">
                            Neptune
                        </h2>
                        <p className="leading-relaxed text-base mb-4">
                            Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery hexagon disrupt edison bulbche.
                        </p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="shadowScale text-lg sm:text-xl font-medium title-font mb-2 text-red-300">
                            Melanchole
                        </h2>
                        <p className="leading-relaxed text-base mb-4">
                            Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery hexagon disrupt edison bulbche.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="px-5 py-5 lg:py-12 flex justify-center items-center bg-none md:bg-black/30 text-zinc-200">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 class="mb-8 text-2xl lg:text-3xl tracking-tight font-extrabold">
                    Frequently asked questions
                </h2>
                <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                    <div>
                        <div class="mb-10">
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
                                What do you mean by "Figma assets"?
                            </h3>
                            <p class="text-gray-400">
                                You will have access to download the full Figma
                                project including all of the pages, the
                                components, responsive pages, and also the
                                icons, illustrations, and images included in the
                                screens.
                            </p>
                        </div>
                        <div class="mb-10">
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
                                What does "lifetime access" exactly mean?
                            </h3>
                            <p class="text-gray-400">
                                Once you have purchased either the design, code,
                                or both packages, you will have access to all of
                                the future updates based on the roadmap, free of
                                charge.
                            </p>
                        </div>
                        <div class="mb-10">
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
                                How does support work?
                            </h3>
                            <p class="text-gray-400">
                                We're aware of the importance of well qualified
                                support, that is why we decided that support
                                will only be provided by the authors that
                                actually worked on this project.
                            </p>
                        </div>
                        <div class="mb-10">
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
                                I want to build more than one project. Is that
                                allowed?
                            </h3>
                            <p class="text-gray-400">
                                You can use Windster for an unlimited amount of
                                projects, whether it's a personal website, a
                                SaaS app, or a website for a client. As long as
                                you don't build a product that will directly
                                compete with Windster either as a UI kit, theme,
                                or template, it's fine.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-10">
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
                                What does "free updates" include?
                            </h3>
                            <p class="text-gray-400">
                                The free updates that will be provided is based
                                on the that we have laid out for this project.
                                It is also possible that we will provide extra
                                updates outside of the roadmap as well.
                            </p>
                        </div>
                        <div class="mb-10">
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
                                What does the free version include?
                            </h3>
                            <p class="text-gray-400">
                                The of Windster includes a minimal style
                                guidelines, component variants, and a dashboard
                                page with the mobile version alongside it.
                            </p>
                            <p class="text-gray-400">
                                You can use this version for any purposes,
                                because it is open-source under the MIT license.
                            </p>
                        </div>
                        <div class="mb-10">
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
                                What is the difference between Windster and
                                Tailwind UI?
                            </h3>
                            <p class="text-gray-400">
                                Although both Windster and Tailwind UI are built
                                for integration with Tailwind CSS, the main
                                difference is in the design, the pages, the
                                extra components and UI elements that Windster
                                includes.
                            </p>
                            <p class="text-gray-400">
                                Additionally, Windster is a project that is
                                still in development, and later it will include
                                both the application, marketing, and e-commerce
                                UI interfaces.
                            </p>
                        </div>
                        <div class="mb-10">
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
                                Can I use Windster in open-source projects?
                            </h3>
                            <p class="text-gray-400">
                                Generally, it is accepted to use Windster in
                                open-source projects, as long as it is not a UI
                                library, a theme, a template, a page-builder
                                that would be considered as an alternative to
                                Windster itself.
                            </p>
                            <p class="text-gray-400">
                                With that being said, feel free to use this
                                design kit for your open-source projects.
                            </p>
                            <p class="text-gray-400">
                                Find out more information by
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export const Head = () => <Seo title="O Nas" />;

export default oNas;
