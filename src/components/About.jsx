import Link from "next/link";

const About = () => {
    return (
        <div>
            <h1> this About Page </h1>

         <Link href={'about/turu'} > <button className=" font-bold mt-2" > Colo Jai </button> </Link> <br />

 

        </div>
    );
};

export default About;