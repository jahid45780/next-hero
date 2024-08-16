import React from 'react';

const slugPage = ({params}) => {

    const { title, detail } = blogs.find((blog) => blog.slug == params.slug )

    return (
        <div>
            <h1> {title} </h1>
            <h1> {detail} </h1>
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

export default slugPage;