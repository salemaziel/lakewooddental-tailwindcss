import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import InsurancePage from "../components/pageComponents/FessInsurance";

const FessInsurance = () => (
    <Layout>

       <InsurancePage/>

    </Layout>
);



export default FessInsurance;

export const Head = () => (
    <Seo title="Fees and Insurance" />
    )