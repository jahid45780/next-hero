import Link from 'next/link';
import React from 'react';
import error from '../error';

const BlogPage = () => {
    return (
        <div>
           {
            blogs.map((blog)=>(
                 <div key={blog.slug} className=' p-3 mt-3 border-2 border-red-400' > 
                 
                   <h1> {blog.title} </h1>
                   <h1> {blog.detail} </h1>     
                    <button 
                    className=' btn text-3xl border-e-2 border-y-4 p-2 mt-3 border-orange-200' >

                         <Link href={`blog/${blog.slug}`} > View Detail </Link> 
                         
                         </button>            
                  </div>
            ))
           }
        </div>
    );
};

const blogs = [
    {
        slug: "how-to-start-a-garden",
        title: "How to Start a Garden: A Beginner's Guide",
        detail: "This blog post covers the basics of starting your own garden, including choosing the right plants, preparing the soil, and tips for maintaining a thriving garden throughout the seasons."
    },
    {
        slug: "top-10-travel-destinations",
        title: "Top 10 Travel Destinations for 2024",
        detail: "Explore the top 10 must-visit travel destinations for 2024, featuring stunning landscapes, vibrant cities, and unique cultural experiences from around the globe."
    },
    {
        slug: "healthy-eating-on-a-budget",
        title: "Healthy Eating on a Budget: Tips and Tricks",
        detail: "Learn how to maintain a healthy diet without breaking the bank. This blog post offers practical advice on meal planning, grocery shopping, and making nutritious choices on a budget."
    },
    {
        slug: "improve-your-productivity",
        title: "10 Ways to Improve Your Productivity Today",
        detail: "Discover ten actionable strategies to boost your productivity, from time management techniques to creating an efficient workspace and minimizing distractions."
    },
    {
        slug: "sustainable-living-habits",
        title: "Sustainable Living: 5 Habits for a Greener Lifestyle",
        detail: "This post outlines five simple yet impactful habits you can adopt to lead a more sustainable lifestyle, helping to reduce your carbon footprint and live more eco-consciously."
    }
]


export default BlogPage;