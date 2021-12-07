import profileimage from "./assets/image/depresso.jpg"

const ProfileImage = () => {
    return (
        <header style={{ gridArea: "1/1/3/3" }}>
            <img style={{ width: "100%", display: "block" }} src={profileimage} alt="More espresso, less depresso" />
        </header>
    );
};







export default ProfileImage;