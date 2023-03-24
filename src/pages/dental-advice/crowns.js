import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Footer from "../../components/layout/footer"
import BlogPost from "../../components/pageComponents/DentalAdvice/blogPost"
const Crowns = () => (
    <Layout>
        <BlogPost
            title="Crowns"
            image="https://images.unsplash.com/photo-1589950000000-0c0c0c0c0c0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            imageAlt="Cracked Teeth"
            post={[
                <>
                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> What is a crown?</h3>
                    <p>A dental crown, sometimes referred to as a cap, is a restoration placed by the dentist to replace the enamel covering of a tooth .A crown is placed to restore and sometimes improve the normal shape, size, and function of a tooth. Often a crown makes a tooth stronger and improves its appearance.
                    </p>

                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">When is a crown needed?</h3>
                    <p>You may need a crown if:</p>
                    <ul>
                        <li>A large portion of a tooth fractures off</li>
                        <li>A large or larger filling would leave a tooth weak and subject to fracture</li>
                        <li>You have a tooth that is cracked, severely worn, or otherwise weakened</li>
                        <li>You have had endodontic (root canal) treatment on a tooth</li>
                        <li>A missing tooth is to be replaced by a bridge</li>
                        <li>An implant must be restored</li>
                        <li>A badly discolored or misshaped tooth is to be improved</li>
                    </ul>

                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">What does the crown procedure entail?</h3>
                    <p>A crown procedure generally involves two dental office visits. In the case of crowns on front teeth, when optimal esthetic matching is desired, a third visit is sometimes necessary.
                    </p>
                    <ul>
                        <li>The tooth is shaped by circumferentially removing the enamel layer so that a crown can fit over the remaining tooth. Any decay and old filling material is also removed to ensure clean, sound dentin to support the crown</li>
                        <li>An impression is taken of the prepared tooth and the teeth that the crowned tooth would bite against. These impressions are sent to a dental laboratory, with specific directions for making the crown.</li>
                        <li>A comfortable temporary crown is cemented over the tooth. The temporary crown protects the tooth from exposure to foods and drinks and holds the space of the tooth.</li>
                        <li>When the permanent crown is ready, the dentist makes technical checks and adjustments to ensure its proper function. When you and the dentist are mutually satisfied with the appearance and feel, the crown is cemented with a permanent cement.</li>
                        <li>A missing tooth is to be replaced by a bridge</li>
                        <li>An implant must be restored</li>
                        <li>A badly discolored or misshaped tooth is to be improved</li>
                    </ul>

                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">What materials are crowns made from?</h3>
                    <p>Crowns can be constructed of several types of materials. The materials selected for crown use in this office are all known to have high biocompatibility and of reliable source:
                    </p>
                    <ul>
                        <li>All porcelain (Porcelain over zirconia substrate and Porcelain over porcelain substrate)</li>
                        <li>Porcelain fused to metal (Porcelain over ISO certified noble metal alloy or Porcelain over ISO certified high noble alloy)</li>
                        <li>All metal (ISO certified 68% gold alloy or ISO certified 50% gold alloy)</li>
                    </ul>
                    <p>
                    Each material has unique characteristics of esthetics, strength, and durability. Considerations for which is the most suitable material include tooth location, the shade and coloration of the tooth, the position of the surrounding gum tissue, the biting forces on the tooth, and the patient’s preference.</p>
                </>
            ]} />

        <Footer />
    </Layout>

)

export default Crowns

export const Head = () => (
    <Seo title="Crowns" />
    )