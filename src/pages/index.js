import React from "react";


import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Home from "../components/pageComponents/Home";

import OGImage from "../images/favion.png"

const IndexPage = () => (
    <Layout>
        <Home />
       

    </Layout>
);



export default IndexPage;

export const Head = () => (
<Seo 
title="Lakewood Dental | Serving Lakewood, CA area for over 30 years."
description="Lakewood Dental has been serving the Lakewood, CA area for over 30 years."
ogImage={OGImage}
 />
)