import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card"; // Ensure the path matches where Card.js is located
import Footer from "./Footer"; // Import the Footer component

// Create your first component
const Home = () => {
    const characters = [
        {
            name: "Trillian",
            text: "Tricia McMillan is a mathematician and astrophysicist whom Arthur Dent attempted to talk to at a party in Islington.",
            image: "https://th.bing.com/th/id/OIP.FuGC6QwXaAvJqOzycDeEyAHaFj?rs=1&pid=ImgDetMain",
            buttonLabel: "Learn more",
            buttonLink: "https://en.wikipedia.org/wiki/Trillian_(character)",
        },
        {
            name: "Arthur Dent",
            text: "Arthur Dent barely escapes from Earth as it is demolished to make way for a hyperspace bypass.",
            image: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/3739514/ArthurDent.jpg?1364178096",
            buttonLabel: "Learn more",
            buttonLink: "https://en.wikipedia.org/wiki/Arthur_Dent",
        },
        {
            name: "Ford Prefect",
            text: "Ford takes an existential view on the universe, sometimes bordering on joyful nihilism.",
            image: "https://i.pinimg.com/originals/31/3d/23/313d236e45d136214954226b87951a74.jpg",
            buttonLabel: "Learn more",
            buttonLink: "https://en.wikipedia.org/wiki/Ford_Prefect_(character)",
        },
        {
            name: "Zaphod Beeblebrox",
            text: "Zaphod invented the Pan Galactic Gargle Blaster.",
            image: "https://i.pinimg.com/originals/cc/f8/04/ccf80499b470cec353c04aab9e707a8c.jpg",
            buttonLabel: "Learn more",
            buttonLink: "https://en.wikipedia.org/wiki/Zaphod_Beeblebrox",
        },
    ];

    const menuItems = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Services", link: "/services" },
        { label: "Contact", link: "/contact" },
    ];

    return (
        <div>
            {/* Use the NavBar component */}
            <NavBar brandName="My Website" brandLink="/" menuItems={menuItems} />

            {/* Center the Jumbotron component with the same width as the cards */}
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <Jumbotron
                            title="Hitchhiker's Guide to the Galaxy"
                            description="Don't Panic."
                            buttonLabel="Learn more"
                            buttonLink="https://www.imdb.com/title/tt0371724/"
                            backgroundImage="https://www.giantfreakinrobot.com/wp-content/uploads/2024/10/Hitchhikers-Guide-to-the-Galaxy.jpg"
                            textColor="white"
                            overlayColor="rgba(0, 0, 0, 0.5)"
                        />
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="container my-5">
                <div className="row">
                    {characters.map((character, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <Card
                                name={character.name}
                                text={character.text}
                                image={character.image}
                                buttonLabel={character.buttonLabel}
                                buttonLink={character.buttonLink}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Use the Footer component */}
            <Footer />
        </div>
    );
};

export default Home;
