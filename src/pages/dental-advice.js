import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

import DentalAdvice from "../components/pageComponents/DentalAdvice";

const DentalAdvicePage = () => (
    <Layout>

            <DentalAdvice/>

    </Layout>
);



export default DentalAdvicePage;

export const Head = () => (
    <Seo title="Dental Advice" />
    )