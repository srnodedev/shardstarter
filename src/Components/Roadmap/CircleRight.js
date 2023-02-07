function CircleRight(props) {
    return(
        <div className="relative">
            <p className="absolute text-white text-2xl"
                style={{
                    top: -35,
                    right: 38
                }}> {props.phase} </p>
            <div style={{ 
                height: 6,
                width: 140,
                backgroundColor: '#494C4F',
                right: -12,
                top: 13
             }} className="absolute" />
            <div style={{
                border: '56px solid #494C4F',
                width: 292,
                height: 292,
                borderRadius: '50%',
                borderBottom: "56px solid transparent",
                borderRight: "56px solid transparent",
                transform: "rotate(-45deg)",
            }} className="relative">
                <div style={{
                    height: 231,
                    width: 231,
                    border: '7px solid #494C4F',
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

export default CircleRight