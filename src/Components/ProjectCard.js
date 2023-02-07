function ProjectCard(props) {
    return (
        <div 
            style={{
                backgroundImage: `url(${props.imgPath})`, 
                width: 376, 
                height: 376,
                borderRadius: '18px',
            }}
        >
            <div style={{
                width: 376, 
                height: 376, 
                backgroundColor: "rgba(44, 38, 38, 0.8)",
                borderRadius: '18px'}}
                className="text-center text-5xl font-bold items-center flex justify-center backdrop-blur-lg"
            >
                    <p>Coming Soon</p>
            </div>
        </div>
    )
}

export default ProjectCard