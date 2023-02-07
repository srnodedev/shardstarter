function CircleLeft(props) {
    return(
        <div className="relative">
            <p className="absolute text-white text-2xl"
                style={{
                    top: -40,
                    left: -13
                }}> {props.phase} </p>
            <div style={{ 
                height: 6,
                width: 140,
                backgroundColor: '#BCCCE2',
                left: -18,
                top: 5
             }} className="absolute" />

            <div style={{
                border: '56px solid #BCCCE2',
                width: 292,
                height: 292,
                borderRadius: '50%',
                borderTop: "56px solid transparent",
                borderLeft: "56px solid transparent",
                transform: "rotate(-45deg)",
            }} className="relative">
                <div style={{
                    height: 231,
                    width: 231,
                    border: '7px solid #BCCCE2',
                    borderRadius: '50%',
                    right: -25,
                    bottom: -25
                }} className="absolute" />
                <div className="w-full h-full bg-white items-center flex justify-center"
                    style={{
                        borderRadius: '50%',
                        transform: "rotate(45deg)"
                    }}>
                    <img src={props.imgPath} alt='' />
                </div>
            </div>
        </div>
    )
}

export default CircleLeft