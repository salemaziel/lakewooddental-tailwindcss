import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

import ServiceTemplate from "../../components/pageComponents/Services/serviceTemplate"
import Footer from "../../components/layout/footer"
const Restoration = () => (
    <Layout>
        <ServiceTemplate
            title="Restorations"
            post={[
                <>

                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> Dental restorations are procedures used to repair or replace damaged or missing teeth. These procedures aim to restore the function and appearance of your teeth, and to prevent further damage or decay.</h3>
                    <h4 className="py-4 my-2 text-lg font-semibold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> At Lakewood Dental Care, we offer a range of dental restoration services, including:</h4>
                    <p>
                    </p>
                    <p className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
                        We offer the following services:
                    </p>
                    <p>
                        <h5 className=""> <strong>Fillings:</strong></h5> Fillings are used to repair teeth that have been damaged by decay. Our team uses tooth-colored fillings that blend in with your natural teeth, providing a seamless restoration.</p>
                    <p>
                        <h5 className=""> <strong>Crowns:</strong></h5> Crowns are used to cover and protect a damaged or weakened tooth. Our team can create custom crowns that match the shape, size, and color of your natural teeth.</p>
                    <p>
                        <h5 className=""> <strong>Bridges:</strong></h5> Bridges are used to replace one or more missing teeth. They consist of one or more artificial teeth that are anchored in place using adjacent natural teeth or dental implants.
</p>
                    <p>
                        <h5 className=""> <strong>Implants:</strong></h5> Dental implants are artificial tooth roots that are surgically implanted into your jawbone. They provide a permanent, stable base for a dental crown or bridge.</p>
                    <p>
                        <h5 className=""> <strong>Dentures:</strong></h5>  Dentures are removable appliances used to replace multiple missing teeth. We offer both complete dentures, which replace all of your teeth, and partial dentures, which replace only a few missing teeth.</p>
                    <p>
                    By offering these dental restoration services, we aim to help our patients achieve a healthy, functional, and beautiful smile. Our team will work with you to determine the best restoration options for your individual needs and goals.</p>

                </>
            ]} />

            <Footer />
    </Layout>

)

export default Restoration

export const Head = () => (
    <Seo title="Dental Services: Tooth Restoration" />
    )