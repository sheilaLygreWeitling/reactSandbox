const ProfileName = (props) => {
    return (
        <p style={styleParagraph}>{props.name} {props.lastname}</p>
    );
}

const styleParagraph = {
    gridArea: "2/2/3/3",
    fontSize: "30px",
    color: "pink",
    paddingTop: "2.5em"
}

export default ProfileName;