import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

import Contact from "../components/pageComponents/Contact";

const ContactUs = () => (
    <Layout>

         <Contact/>
    </Layout>
);



export default ContactUs;

export const Head = () => (
    <Seo title="Contact" />
    )