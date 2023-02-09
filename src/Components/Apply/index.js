function Apply() {
    return (
        <div style={{
            backgroundImage: `url('./assets/background_apply.png')`,
            height: 512,
            marginTop: 92
        }}
        className='w-full flex flex-col'
        id="raisecapital"
        >
            <p className="mt-24 text-4xl text-center text-white  font-bold">
                Maximize the potential of your project by raising<br/>funds and setting it up for success at launch
            </p>
            <p className="mt-4 text-2xl text-center text-white">
                ShardStarter has been created to provide the most value to your project and make the launch<br/>
                process as seamless and successful as possible preferably through Shardeum Network. Our<br/>
                priority is to offer efficient, effective, and convenient support for your launch.
            </p>
            <div className="mt-16 text-center">
                
                <button style={{
                        backgroundColor: "#BCCCE2",
                        width: 242,
                        height: 52,
                        borderRadius: "4px",
                        color: "black",
                    }}
                    className='text-center'
                    >
                    Apply For Launch
                </button>
            </div>
        </div>
    )
}

export default Apply