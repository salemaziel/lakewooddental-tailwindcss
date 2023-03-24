import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

import ServiceTemplate from "../../components/pageComponents/Services/serviceTemplate"

const DentalImplants = () => (
    <Layout>

<ServiceTemplate
            title="Dental Implants"
            post={[
                <>


                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> Dental implants are artificial tooth roots that are surgically placed into your jawbone to support a replacement tooth or bridge. They provide a permanent, stable base for a dental crown or bridge, and can also be used to anchor dentures in place.</h3>
                    <h4 className="py-4 my-2 text-lg font-semibold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> At Lakewood Dental Care, we offer dental implant services to help our patients restore their smiles and improve their oral health.</h4>
                    <p>
                    </p>
                    <p className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
                    The dental implant process typically involves several steps:
                    </p>
                    <p>
                        <h5 className=""> <strong>Consultation: </strong></h5>  During your initial consultation, our team will evaluate your dental health and determine if dental implants are right for you. We will also discuss the procedure and answer any questions you may have.</p>
                    <p>
                        <h5 className=""> <strong>Implant placement: </strong></h5>  The first step in the implant process is the placement of the implant itself. Our team will surgically implant a small post into your jawbone, which will serve as the foundation for your replacement tooth or bridge.</p>
                    <p>
                        <h5 className=""> <strong>Healing and integration: </strong></h5> After the implant has been placed, your jawbone will need time to heal and the implant will need time to integrate with your natural bone. This process typically takes several months.</p>
                    <p>
                        <h5 className=""> <strong>Abutment placement:</strong></h5>  Once your implant has fully integrated with your jawbone, our team will attach an abutment to the post. The abutment is a small connector piece that attaches the replacement tooth or bridge to the implant.</p>
                    <p>
                        <h5 className=""> <strong>Replacement tooth or bridge: </strong></h5>The final step in the process is the attachment of the replacement tooth or bridge to the abutment. Our team will create a custom replacement tooth or bridge that matches the shape, size, and color of your natural teeth.</p>

                    <p>
                    Dental implants offer a long-lasting, natural-looking solution for missing teeth. They can improve your oral health and help you regain your confidence in your smile. Our team at Lakewood Dental Care is committed to providing the highest quality dental implant services to our patients.</p>

           

                </>
            ]} />


    </Layout>

)

export default DentalImplants

export const Head = () => (
    <Seo title="Dental Services: Implants" />
    )