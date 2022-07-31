import Head from "next/head";
import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title }) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="flex justify-center">
            <div style={{ width: '1100px', maxWidth: '100%' }}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    </React.Fragment>
);

export default Layout;