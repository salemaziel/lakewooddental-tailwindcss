import React from "react";
import { Link } from "gatsby";

import BlogExcerpt from "./blogExcerpt";
import Crown from "../../../images/2023/crown.jpg"
import Cracked from "../../../images/2023/cracked-tooth.jpg"
import Flossing from "../../../images/2023/floss.jpg"

const S1Blog = (props) => {
    return (
        <section>
        {/*<div className="skew skew-top mr-for-radius">
            <svg className="w-full h-8 md:h-12 lg:h-20 text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 10 0 10" /></svg></div>*/}
            {/*<div className="skew skew-top ml-for-radius">
                <svg className="w-full h-8 md:h-12 lg:h-20 text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" /></svg></div>*/}
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center mb-16">
                        <div className="w-full text-center lg:w-1/2 lg:text-left">
                            {/*<h2 className="text-4xl font-bold lg:text-5xl font-heading">Our Blog</h2>*/}
                        </div>
                    </div>
                    <BlogExcerpt
                        items={[
                            {
                                title: "Crowns",
                                image: Crown,
                                imageAlt: "Dental Crowns",
                                excerpt: "A dental crown, sometimes referred to as a cap, is a tooth-shaped cover that is placed over a tooth to restore its shape, size, strength, and improve its appearance. Crowns are typically used to restore a tooth that is badly decayed or becomes damaged.",
                                slug: "crowns",
                                title2: "Cracked Teeth",
                                image2: Cracked,
                                imageAlt2: "Cracked Teeth",
                                excerpt2: "Many teeth, when carefully viewed, may exhibit small crack lines in the enamel. A more deeply cracked tooth may become noticeable when you feel a sharp pain when chewing food or with having a hot or cold drink. It is sometimes difficult to tell which tooth hurts or whether the pain comes from an upper or lower tooth.",
                                slug2: "cracked-teeth"
                            },
                            {
                                title: "Importance of Flossing",
                                image: Flossing,
                                imageAlt: "Flossing",
                                excerpt: "When we eat, some of the food that is not digested stays trapped in the cavities of your teeth. If these particles stay there for a long time, this can result in the growth of bacteria and decay of teeth. Knowing this, now we can see the benefits of flossing in day to day life.",
                                slug: "importance-of-flossing",
                            },

                        ]}
                    />
                    {/*<div className="flex flex-wrap mb-8 overflow-hidden rounded-lg shadow">
                        <div className="w-full rounded-l lg:w-1/2">
                            <img className="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt /></div>
                        <div className="w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10">
                            {/*<span className="text-sm text-gray-400">24 Jan, 2021</span>* /}
                            <h2 className="my-4 text-2xl font-bold">Crowns</h2>
                            <p className="mb-4 leading-loose text-gray-400">A dental crown, sometimes referred to as a cap, is a restoration placed by the dentist to replace the enamel covering of a tooth .A crown is placed to restore and sometimes improve the normal shape, size, and function of a tooth. Often a crown makes a tooth stronger and improves its appearance.</p>
                            <Link to="#" className="font-bold text-logo-blue-500 hover:text-light-blue-500" href="#">Learn More</Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-8 overflow-hidden rounded-lg shadow">
                        <div className="order-1 w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10 lg:order-0">
                            {/*<span className="text-sm text-gray-400">24 Jan, 2021</span>* /}
                            <h2 className="my-4 text-2xl font-bold">Cracked Teeth</h2>
                            <p className="mb-4 leading-loose text-gray-400">Many teeth, when carefully viewed, may exhibit small crack lines in the enamel. A more deeply cracked tooth may become noticeable when you feel a sharp pain when chewing food or with having a hot or cold drink. It is sometimes difficult to tell which tooth hurts or whether the pain comes from an upper or lower tooth.</p>
                            <a className="font-bold text-green-600 hover:text-green-700" href="#">Learn More</a>
                        </div>
                        <div className="w-full rounded-l lg:w-1/2 order-0 lg:order-1">
                            <img className="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt /></div>
                    </div>
                    <div className="flex flex-wrap mb-8 overflow-hidden rounded-lg shadow">
                        <div className="w-full rounded-l lg:w-1/2">
                            <img className="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt /></div>
                        <div className="w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10">
                            {/*<span className="text-sm text-gray-400">24 Jan, 2021</span>* /}
                            <h2 className="my-4 text-2xl font-bold">The Importance of Flossing</h2>
                            <p className="mb-4 leading-loose text-gray-400">When we eat, some of the food that is not digested stays trapped in the cavities of your teeth. If these particles stay there for a long time, this can result in the growth of bacteria and decay of teeth. Knowing this, now we can see the benefits of flossing in day to day life.</p>
                            <a className="font-bold text-green-600 hover:text-green-700" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-8 overflow-hidden rounded-lg shadow">
                        <div className="order-1 w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10 lg:order-0">
                            <span className="text-sm text-gray-400">24 Jan, 2021</span>
                            <h2 className="my-4 text-2xl font-bold">Morbi scelerisque nulla et lectus dignissim eleifend nulla eu nulla a metus</h2>
                            <p className="mb-4 leading-loose text-gray-400">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                            <a className="font-bold text-green-600 hover:text-green-700" href="#">Learn More</a>
                        </div>
                        <div className="w-full rounded-l lg:w-1/2 order-0 lg:order-1">
                            <img className="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt /></div>
                    </div>
                    <div className="flex flex-wrap mb-16 overflow-hidden rounded-lg shadow">
                        <div className="w-full bg-white rounded-l lg:w-1/2">
                            <img className="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt /></div>
                        <div className="w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10">
                            <span className="text-sm text-gray-400">24 Jan, 2021</span>
                            <h2 className="my-4 text-2xl font-bold">Morbi scelerisque nulla et lectus dignissim eleifend nulla eu nulla a metus</h2>
                            <p className="mb-4 leading-loose text-gray-400">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                            <a className="font-bold text-green-600 hover:text-green-700" href="#">Learn More</a>
                        </div>
                    </div>*/}
                    {/*<div className="flex justify-center">
                        <nav className="flex items-center bg-white rounded shadow" aria-label="Pagination"><a className="px-4 text-gray-400 hover:text-gray-500" href="#">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></a>
                            <div className="p-2 text-gray-500 border-l border-r">
                                <a className="px-2 mx-1 rounded hover:bg-gray-50 hover:text-gray-800" href="#">1</a><a className="px-2 mx-1 font-bold text-gray-800 rounded bg-gray-50" href="#">2</a><a className="px-2 mx-1 rounded hover:bg-gray-50 hover:text-gray-800" href="#">3</a><a className="px-2 mx-1 rounded hover:bg-gray-50 hover:text-gray-800" href="#">4</a>
                                <span className="mx-3">...</span>
                                <a className="px-2 mx-1 rounded hover:bg-gray-50 hover:text-gray-800" href="#">16</a><a className="px-2 mx-1 rounded hover:bg-gray-50 hover:text-gray-800" href="#">17</a><a className="px-2 mx-1 rounded hover:bg-gray-50 hover:text-gray-800" href="#">18</a>
                            </div>
                            <a className="px-4 text-gray-400 hover:text-gray-500" href="#">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></a>
                        </nav></div>*/}
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="w-full h-8 md:h-12 lg:h-20 text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="w-full h-8 md:h-12 lg:h-20 text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 10 10" /></svg></div>
        </section>


    )
}

export default S1Blog