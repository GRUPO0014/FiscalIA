const Image = props => {
    return (
        <img
            src={props.src}
            alt="datos"
            style={{
                width: props.width || "100%",
                height: props.height || "auto",
                borderRadius: props.borderRadius || "0px",
            }}
        />
    );
}

export default Image;