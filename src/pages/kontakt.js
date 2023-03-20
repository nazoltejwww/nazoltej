import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Kontakt = () => {
    const [formState, setFormState] = useState({
        imie: "",
        tel: "",
        mail: "",
        wiadomość: "",
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState }),
        })
            .then(
                () =>
                    (window.location.href =
                        "https://nazoltejwww.netlify.app/dziekujemy/")
            )
            .catch((error) => alert(error));

        e.preventDefault();
    };
    return (
        <Layout>
            <section>
                <div className="absolute top-0 -z-30 min-h-[40rem] h-full w-full">
                    <StaticImage
                        className="absolute opacity-100 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                        placeholder="blurred"
                        src="../assets/bgAboutUs.png"
                        alt="samochód retro z otwarta maską"
                    />
                </div>
                <div class="py-12">
                    <div class="max-w-screen-2xl flex flex-col items-center justify-center lg:flex-row lg:items-start px-4 md:px-8 mx-auto">
                        <div
                            data-sal="slide-down"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            class="mb-10 md:mb-16 flex flex-col items-center justify-center"
                        >
                            <h1 class="text-2xl text-amber-400 lg:text-3xl changeColor font-semibold text-center mb-4 md:mb-6">
                                Formularz Kontaktowy
                            </h1>

                            <p class="max-w-screen-md w text-white w-4/5 md:text-lg text-center mx-auto">
                                {" "}
                                Skorzystaj z naszego formularza kontaktowego,
                                aby wysłać do nas wiadomość. Prosimy o podanie
                                swoich danych kontaktowych oraz treści
                                wiadomości, a my postaramy się odpowiedzieć na
                                nią jak najszybciej. Jesteśmy do Twojej
                                dyspozycji i z przyjemnością odpowiemy na
                                wszystkie Twoje pytania.
                            </p>

                            <div className="flex flex-col items-center justify-center mt-4">
                                <Link
                                    to="tel:698947754"
                                    className="text-white flex items-center w-full justify-center"
                                >
                                    <svg
                                        className="w-10 h-auto mr-2"
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <g
                                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            fill="yellow"
                                            stroke="none"
                                        >
                                            <path
                                                d="M2395 4683 c-927 -81 -1677 -713 -1900 -1602 -46 -185 -59 -302 -59
                                            -521 0 -149 5 -235 18 -315 77 -474 273 -863 601 -1190 329 -329 726 -529
                                            1195 -602 158 -24 462 -24 620 0 470 73 866 272 1195 602 330 329 529 725 602
                                            1195 12 81 17 173 17 310 0 354 -67 647 -218 950 -286 577 -825 997 -1451
                                            1131 -180 38 -451 57 -620 42z m-432 -1010 c30 -18 287 -314 328 -378 29 -46
                                            25 -126 -9 -200 -36 -76 -131 -196 -211 -266 -33 -29 -61 -60 -61 -69 0 -36
                                            135 -210 290 -373 148 -156 416 -377 459 -377 9 0 41 28 70 61 70 80 190 175
                                            266 211 74 35 154 38 200 9 69 -45 361 -299 380 -331 15 -27 20 -52 20 -106
                                            -1 -100 -49 -198 -137 -280 -249 -230 -654 -195 -1084 92 -140 94 -231 171
                                            -412 349 -320 314 -495 564 -587 838 -94 281 -58 535 100 705 56 61 142 114
                                            211 131 54 14 139 6 177 -16z"
                                            />
                                        </g>
                                    </svg>
                                    <p>(+48)698-947-754</p>
                                </Link>
                                <Link
                                    to="mailto:rejestracjanazolte@gmail.com"
                                    className="text-white flex items-center w-full justify-center mt-2"
                                >
                                    <svg
                                        className="w-9 h-auto mr-2"
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <g
                                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            fill="yellow"
                                            stroke="none"
                                        >
                                            <path
                                                d="M2265 5109 c-487 -60 -917 -239 -1310 -547 -104 -82 -350 -334 -431
                                                -442 -289 -385 -454 -791 -510 -1250 -20 -168 -15 -550 10 -705 83 -517 320
                                                -995 679 -1371 394 -412 874 -667 1441 -766 174 -30 543 -37 727 -13 1188 149
                                                2110 1084 2239 2272 16 145 8 533 -14 667 -184 1134 -1088 2011 -2216 2151
                                                -135 16 -493 19 -615 4z m1757 -1422 c67 -33 121 -90 154 -162 l24 -53 -2
                                                -923 -3 -924 -23 -43 c-35 -66 -88 -119 -150 -149 l-57 -28 -1405 0 -1405 0
                                                -46 21 c-67 31 -124 87 -159 156 l-30 61 0 916 0 916 24 51 c43 93 114 156
                                                206 180 35 10 357 12 1430 11 l1385 -2 57 -28z"
                                            />
                                            <path
                                                d="M1440 3446 c59 -56 1117 -885 1126 -882 11 4 1087 856 1114 882 12
                                                12 -143 14 -1120 14 -974 0 -1132 -2 -1120 -14z"
                                            />
                                            <path
                                                d="M1170 2512 c0 -781 1 -820 18 -835 17 -16 127 -17 1374 -17 1300 0
                                                1356 1 1371 18 16 17 17 89 17 835 0 449 -2 817 -5 817 -3 0 -298 -233 -657
                                                -518 -359 -285 -663 -524 -675 -530 -28 -15 -78 -15 -106 0 -12 6 -316 245
                                                -675 530 -359 285 -654 518 -657 518 -3 0 -5 -368 -5 -818z"
                                            />
                                        </g>
                                    </svg>

                                    <p>rejestracjanazolte@gmail.com</p>
                                </Link>

                                <svg
                                    className="h-auto w-62 opacity-50 mt-12 hidden lg:flex"
                                    viewBox="0 0 512.000000 512.000000"
                                >
                                    <g
                                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="black"
                                        stroke="none"
                                    >
                                        <path
                                            d="M2185 5105 c-684 -101 -1270 -507 -1591 -1102 l-39 -73 -50 0 c-115
-1 -250 -53 -340 -132 -59 -52 -121 -149 -145 -227 -19 -61 -20 -95 -20 -1015
l0 -951 25 -70 c56 -159 192 -286 348 -325 l47 -12 0 -228 0 -228 26 -31 c20
-24 34 -31 63 -31 34 0 75 28 377 255 l340 254 980 3 979 3 59 23 c168 63 290
202 331 374 22 94 22 1842 0 1936 -41 173 -162 310 -331 374 l-59 23 -1008 3
-1009 3 28 37 c223 298 570 515 966 603 119 27 524 38 674 19 535 -67 997
-390 1243 -870 103 -202 144 -343 176 -606 l3 -32 -156 -4 c-173 -4 -202 -12
-266 -68 -20 -18 -47 -52 -59 -74 l-22 -41 -3 -749 -2 -748 23 -52 c28 -59 65
-99 122 -129 35 -19 60 -22 203 -25 l162 -4 0 -68 c0 -123 -56 -251 -144 -326
-22 -19 -70 -50 -106 -67 l-65 -32 -825 -3 -825 -3 -20 37 c-27 51 -91 102
-149 119 -73 22 -769 22 -842 0 -67 -20 -117 -64 -151 -133 l-28 -57 0 -225
c0 -256 4 -278 69 -348 76 -83 66 -82 529 -82 440 0 439 0 511 55 18 14 44 46
57 70 l24 45 826 0 c532 0 846 4 885 11 351 62 637 319 740 666 20 68 27 118
31 220 l6 131 44 13 c105 29 207 121 260 235 l28 59 0 630 0 630 -32 65 c-52
106 -152 194 -256 225 -36 10 -42 16 -45 41 -1 16 -9 87 -18 157 -116 959
-867 1717 -1832 1851 -143 20 -613 20 -747 1z m843 -199 c834 -179 1447 -838
1557 -1674 22 -167 28 -152 -64 -152 l-80 0 -6 48 c-26 215 -65 385 -121 522
-219 540 -673 938 -1232 1079 -171 44 -288 53 -576 48 -243 -4 -283 -7 -392
-30 -459 -99 -871 -372 -1117 -739 l-52 -78 -92 0 -93 0 49 80 c272 438 697
748 1204 876 184 47 259 53 587 50 285 -3 313 -5 428 -30z m184 -1189 c73 -36
150 -119 175 -189 17 -50 18 -106 18 -968 0 -862 -1 -918 -18 -968 -25 -70
-102 -153 -175 -189 l-57 -28 -997 -3 -997 -2 -278 -209 -278 -209 -6 191 c-3
106 -6 193 -7 194 -11 13 -67 31 -110 36 -122 14 -241 103 -282 213 -20 54
-20 72 -20 974 0 884 1 922 19 970 37 97 119 173 224 206 34 10 294 12 1387
11 l1345 -2 57 -28z m1048 -1582 l0 -765 -136 0 -136 0 -29 29 -29 29 0 704
c0 630 2 706 16 726 25 35 48 41 187 41 l127 1 0 -765z m536 737 c55 -28 103
-77 125 -127 17 -37 19 -80 19 -611 l0 -570 -26 -52 c-56 -112 -125 -142 -331
-142 l-143 0 0 766 0 766 158 -4 c137 -3 162 -7 198 -26z m-196 -1770 c0 -339
-249 -652 -581 -732 -81 -19 -118 -20 -896 -20 l-813 0 0 80 0 80 808 0 c687
0 817 2 867 15 268 68 455 308 455 582 l0 83 80 0 80 0 0 -88z m-2494 -456
l25 -28 -3 -200 c-3 -196 -3 -200 -27 -219 -22 -18 -44 -19 -395 -19 l-373 0
-24 26 c-23 25 -24 32 -27 193 -2 103 1 184 8 209 19 72 16 72 428 69 l364 -2
24 -29z"
                                        />
                                        <path
                                            d="M445 3128 c-22 -26 -26 -39 -21 -67 3 -19 15 -44 26 -55 20 -21 28
-21 853 -24 457 -1 842 0 854 3 63 15 85 104 38 150 l-24 25 -850 0 -849 0
-27 -32z"
                                        />
                                        <path
                                            d="M2418 3140 c-30 -23 -40 -62 -26 -102 20 -56 36 -58 387 -58 l319 0
31 26 c41 34 44 92 6 129 l-24 25 -334 0 c-318 0 -336 -1 -359 -20z"
                                        />
                                        <path
                                            d="M449 2621 c-20 -20 -29 -39 -29 -61 0 -22 9 -41 29 -61 l29 -29 1307
0 c1391 0 1351 -1 1369 45 8 21 8 69 0 90 -18 46 22 45 -1369 45 l-1307 0 -29
-29z"
                                        />
                                        <path
                                            d="M470 2127 c-53 -27 -64 -89 -24 -136 l26 -31 594 0 595 0 24 25 c36
35 34 88 -4 126 l-29 29 -579 0 c-443 0 -584 -3 -603 -13z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div
                            data-sal="slide-down"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className="bg-zinc-700/40 shadow-sm shadow-amber-200/10 p-4 lg:mx-6 lg:p-6 rounded-xl"
                        >
                            <form
                                name="contact"
                                action="/pages/dziekujemy"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                                className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
                                netlify
                            >
                                <div>
                                    <label
                                        htmlFor="imie"
                                        for="imie"
                                        className="inline-block text-zinc-300  text-sm sm:text-base mb-2"
                                    >
                                        Imię
                                    </label>
                                    <input
                                        name="imie"
                                        type="text"
                                        placeholder="Imię"
                                        value={formState.imie}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="tel"
                                        for="tel"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Tel
                                    </label>
                                    <input
                                        name="tel"
                                        type="tel"
                                        onChange={handleChange}
                                        value={formState.tel}
                                        placeholder="+48 521 521 500"
                                        pattern="[0-9+]{9,12}"
                                        required
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="mail"
                                        for="mail"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        name="mail"
                                        value={formState.mail}
                                        onChange={handleChange}
                                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
                                        placeholder="email@nażółtej.pl"
                                        class="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div class="sm:col-span-2">
                                    <label
                                        htmlFor="wiadomość"
                                        for="wiadomość"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Wiadomość
                                    </label>
                                    <textarea
                                        name="wiadomość"
                                        value={formState.wiadomość}
                                        onChange={handleChange}
                                        class="w-full h-64 bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    ></textarea>
                                </div>

                                <div class="sm:col-span-2 flex justify-between items-center">
                                    <p class="text-gray-400 text-xs">
                                        Szybki Kontakt
                                    </p>
                                    <button class="inline-block border-2 border-white bg-gray-800 hover:bg-gray-600 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-0 transition duration-200 hover:scale-95 px-8 py-3">
                                        Wyślij
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="Kontakt" />;

export default Kontakt;
