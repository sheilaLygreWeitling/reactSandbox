
import About from "./About";
import Contact from "./Contact";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
import ProfileText from "./ProfileText";
import SoMe from "./SoMe";

const ProfileCard = () => {
    return (
        <main classname="Main" style={Main__style}>
            <section classname="Main__Section-top-card" style={Main__SectionTopCard__style}>
                <ProfileImage />
                <ProfileName name="Sheila" lastname="Lygre Weitling" />

            </section>
            <section classname="Main__Section-bottom-card" style={Main__SectionBottomCard__style}>
                <About />
                <ProfileText />
                <Contact />
                <SoMe />
            </section>
        </main>


    );
}

const Main__style = {
    width: "25vw",
    borderRadius: "10px",
    boxShadow: "0px 0px 2px 2px lightgrey",
    backgroundColor: "#FFE5B4",

}

const Main__SectionTopCard__style = {
    display: "grid",
    gridTemplate: "1fr 1fr / 1fr 1fr",
    width: "25vw",
    borderRadius: "10px",
    boxShadow: "0px 0px 2px 2px lightgrey",
    overflow: "hidden",
    borderBottom: "none"
}

const Main__SectionBottomCard__style = {
    width: "25vw",
    overflow: "hidden",
    backgroundColor: "#FFE5B4",
}

export default ProfileCard;

