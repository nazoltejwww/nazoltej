import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import ScrollUpIcon from "./scrollUpIcon";
import Footer from "./footer";
import Messenger from "./messenger";
import Loader from "./loader";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="text-base text-black max-w-[2000px] mx-auto">
            <Loader />
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div>
                <main className="w-full overflow-hidden">{children}</main>
                <ScrollUpIcon />
                <Messenger />

                <Footer />
            </div>
        </div>
    );
};

export default Layout;
