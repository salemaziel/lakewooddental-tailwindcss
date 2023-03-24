import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

import BlogPost from "../../components/pageComponents/DentalAdvice/blogPost"

const Flossing = () => (
    <Layout>

<BlogPost
            title="Importance of Flossing"
            image="https://images.unsplash.com/photo-1589950000000-0c0c0c0c0c0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            imageAlt="Flossing"
            post={[
                <>
                    <h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4"> Flossing is Important!</h3>
                    <p>When we eat, some of the food that is not digested stays trapped in the cavities of your teeth. If these particles stay there for a long time, this can result in the growth of bacteria and decay of teeth. Knowing this, now we can see the benefits of flossing in day to day life.
                    </p>

                    <p>Dental floss is made of thin plastic or nylon filaments and is used to remove food and plaque from the teeth. This flossing of teeth can help us in the following manner:</p>
                    <ol>
                        <li> Remove Bad Breath</li>
                        <p>There are about 90% of people who have bad breath problem because of odor-causing bacteria. It is known that brushing the teeth removes only 70% of these bacteria. We can remove remaining thirty percent with the help of flossing.</p>
                        <p>Floss is thin and reaches in between small cavities of teeth and also gum-line where bristles would never reach. This helps to remove odor-causing bacteria.</p>

                        <li>Prevents the Development of Tartar</li>
                        <p>Flossing helps to prevent the formation of tartar, also known as calculus which can be removed only by a dentist.</p>

                        <li> Removes Tiny Food Particles</li>
                        <p>Regular flossing removes tiny food content that gets entrapped within the small cavities of teeth.</p>

                        <li>Protects from Heart Attack</li>
                        <p>It is known that, presence of unwanted particles in teeth cavities leads to gum diseases. There are chances that these diseases can cause risk of a heart attack. Regular flossing stops the rate of gum diseases and as a result protects a person form massive heart attack.</p>

                        <li>Protects People from Gingivitis</li>
                        <p>Bacteria present in tartar / calculus produce acids that can damage the gums and also cause swelling gum. This condition is called gingivitis. Time to time elimination of bacteria helps in defending people form gingivitis.</p>

                        <li>Protects from Tooth Loss</li>
                        <p>Untreated gingivitis can lead to periodontal disease and causes tooth loss. Removal of bacteria using flossing technique can prevent the occurrence of gingivitis.</p>
                    </ol>

                    <p>
                    In this way, flossing removes bacteria, food particles, and plague that are stuck in your teeth or gum lines. We can say that by simply taking a few minutes to check your teeth and quick flossing can make sure that you do not feel awkward while talking to others. If you are thinking of getting pregnant, then you should start flossing. This avoids periodontal disease that can cause premature birth.
                    </p>

                    <p>
                    One very important benefit of flossing, along with good dental hygiene can actually reduce the chance of cardiovascular disease in future. Sometimes, it is possible that harmful bacteria can enter via mouth and work its way into the bloodstream causing blocked arteries which can lead to heart problems. Keep in mind that flossing is not hard, but it does take time. If you don’t floss on a regular basis, hopefully these benefits can change your mind.
                    </p>

                </>
            ]} />

    </Layout>

)

export default Flossing

export const Head = () => (
    <Seo title="Importance of Flossing" />
    )