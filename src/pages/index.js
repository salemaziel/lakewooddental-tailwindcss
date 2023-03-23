import React from "react";


import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Home from "../components/pageComponents/Home";
import ServicesPage from "../components/pageComponents/Services";

const IndexPage = () => (
    <Layout>
        <Home />
       

    </Layout>
);



export default IndexPage;

export const Head = () => (
<Seo title="Home" />
)