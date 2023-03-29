import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

import Intake from "../components/pageComponents/NewPatient";


const NewPatients = () => (
    <Layout>

         <Intake/>

    </Layout>
);



export default NewPatients;

export const Head = () => (
    <Seo title="Dental Patient Intake Forms" />
    )