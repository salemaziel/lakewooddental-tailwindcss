import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

import ServiceTemplate from "../../components/pageComponents/Services/serviceTemplate"
import Footer from "../../components/layout/footer"

import CTA from "../../components/bottomCTA"
import BGCTA from "../../images/botbg.png"



const Prevention = () => (
    <Layout>

        <ServiceTemplate
            title="Prevention"
            post={[
                <>
                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> Preventative dentistry is the use of dental procedures to ensure that your teeth and gums remain healthy.</h3>
                    <h4 className="py-4 my-2 text-lg font-semibold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> At Lakewood Dental Care, our team will provide you with the best care to ensure your oral health.</h4>
                    <p>
                    </p>
                    <p className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
                        We offer the following services:
                    </p>
                    <p>
                        <h5 className=""> <strong>Regular Dental Cleanings:</strong></h5> Regular dental cleanings are essential to prevent tooth decay and gum disease. Our team will thoroughly clean your teeth, removing any plaque or tartar buildup that can cause dental problems.</p>
                    <p>
                        <h5 className=""> <strong>Fluoride Treatments:</strong></h5> Fluoride is a mineral that helps strengthen your teeth and prevent tooth decay. Our team can provide fluoride treatments to protect your teeth and keep them healthy.</p>
                    <p>
                        <h5 className=""> <strong>Dental Sealants:</strong></h5> Dental sealants are a thin, protective coating that is applied to the surface of your teeth. They help prevent tooth decay by sealing out bacteria and food particles.</p>
                    <p>
                        <h5 className=""> <strong>Oral Cancer Screenings:</strong></h5> Oral cancer screenings are essential for early detection and treatment of oral cancer. Our team can perform regular screenings to ensure that any potential problems are caught early.</p>
                    <p>
                        <h5 className=""> <strong>Customized Treatment Plans:</strong></h5> Our team will work with you to create a customized treatment plan based on your individual needs and goals. We will help you develop a plan to prevent dental problems and maintain good oral health.</p>
                    <p>
                        <h5 className=""> <strong>Patient Education:</strong></h5> We believe that patient education is key to preventing dental problems. Our team will provide you with the information and tools you need to maintain good oral health at home.</p>
                    <p>
                        By offering these services, we aim to help our patients maintain healthy teeth and gums, and prevent dental problems before they occur.</p>



                </>
            ]} />

<CTA
bgImage={BGCTA}
/>
        <Footer />
    </Layout>

)

export default Prevention

export const Head = () => (
    <Seo title="Dental Services: Prevention" />
)