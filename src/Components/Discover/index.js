import ProjectCard from "../ProjectCard"

function Discover() {
    return (
        <div className="mt-28">
            <p className="text-5xl text-center font-bold">Discover Projects</p>
            <p className="mt-7 text-2xl text-center">
                At ShardStarter, we are extremely methodical when it comes to selecting the projects<br/>
                we provision. Our rigorous selection method ensures that we only offer the highest quality<br/>
                options with the ultimate potential for success to our Investors
            </p>
            <div style={{marginTop: 99, paddingLeft: "16%", paddingRight: "16%"}} className="flex flex-row justify-between">
                <ProjectCard imgPath="./assets/Project1.png"/>
                <ProjectCard imgPath="./assets/Project2.png"/>
                <ProjectCard imgPath="./assets/Project3.png"/>
            </div>
            <div className="mt-20 justify-center flex">
                <button style={{
                    backgroundColor: "#BCCCE2",
                    width: 242,
                    height: 52,
                    borderRadius: "4px",
                    color: "black",
                }}
                className='text-center'
                >
                    Explore More...
                </button>
            </div>
            <div className='mt-32 text-center'>
                <p className='text-5xl font-bold'>Take your investment strategy to the next level<br/>with our Investment Tiers</p>
                <p className='mt-5 text-2xl'>
                At ShardStarter, we are extremely methodical when it comes to selecting the projects we provision. Our<br/>
                rigorous selection method ensures that we only offer the highest quality options with the ultimate potential<br/>
                for success to our Investors
                </p>
            </div>
            <div className="flex items-center justify-center" style={{ fontSize: 39}}>
                <div className="flex flex-row relative">
                    <div className="flex flex-col relative">
                        <div style={{height: 50.64, width: 9.49, backgroundColor: '#BCCCE2'}}/>
                        <div style={{ height: 90.2, width: 90.2, borderRadius: '50%', 
                            backgroundColor: '#BCCCE2', marginTop: -2, marginLeft: -38}} />
                        <p className="absolute text-4xl text-center" style={{left: -200, top: 160, width: 429}}>
                            TBA Staked $SHARD<br/>
                            Guaranteed Allocation<br/>
                            8% of Pool Size Minimum<br/>
                            Staking – 7 days TBA
                        </p>
                    </div>
                    <div style={{ width: 524, height: 15, marginLeft: -51, backgroundColor: '#BCCCE2' }} />
                    <div style={{ width: 288.33, height: 283.27, borderRadius: '32px', 
                        transform: "rotate(-44.5deg)", backgroundColor: '#BCCCE2', marginLeft: -95}} />
                    <p className="absolute font-bold" style={{ left: 523, top: 118, color: 'black'}}> Amber </p>
                </div>
                <div className="flex flex-row relative" style={{marginTop: 460}}>
                    <div style={{ width: 288.33, height: 283.27, borderRadius: '32px', 
                        transform: "rotate(-44.5deg)", backgroundColor: '#494C4F', marginLeft: -95}} />
                    <div style={{ width: 522, height: 15, marginLeft: -201, marginTop: 133, backgroundColor: '#BCCCE2' }} />
                    <div className="flex flex-col relative" style={{marginLeft: -9.5}}>
                        <p className="absolute text-4xl text-center" style={{left: -200, top: -220, width: 429}}>
                            TBA Staked $SHARD<br/>
                            Guaranteed Allocation<br/>
                            16% of Pool Size<br/>
                            Minimum Staking <br/>
                            7 days TBA<br/>
                        </p>
                        <div style={{ height: 90.2, width: 90.2, borderRadius: '50%', 
                            backgroundColor: '#BCCCE2', marginTop: -2, marginLeft: -38}} />
                        <div style={{height: 50.64, width: 9.49, backgroundColor: '#BCCCE2'}}/>
                    </div>
                    <p className="absolute font-bold" style={{ left: -13, top: 118, color: 'white'}}> Chrome </p>
                </div>
            </div>
            <div className="flex items-center justify-center" style={{ fontSize: 39, marginTop: -430, marginLeft: -100}}>
                <div className="flex flex-row relative">
                    <div className="flex flex-col relative" style={{marginTop: 100}}>
                        <div style={{height: 50.64, width: 9.49, backgroundColor: '#494C4F'}}/>
                        <div style={{ height: 90.2, width: 90.2, borderRadius: '50%', 
                            backgroundColor: '#494C4F', marginTop: -2, marginLeft: -38}} />
                        <p className="absolute text-4xl text-center" style={{left: -200, top: 160, width: 429}}>
                        TBA Staked $SHARD<br/>
                        Guaranteed Allocation<br/>
                        32% of Pool Size<br/>
                        Minimum Staking <br/>
                        14 days TBA
                        </p>
                    </div>
                    <div style={{ width: 524, height: 15, marginLeft: -51, marginTop: 100, backgroundColor: '#494C4F' }} />
                    <div style={{ width: 288.33, height: 283.27, borderRadius: '32px', 
                        transform: "rotate(-44.5deg)", backgroundColor: '#494C4F', marginLeft: -195}} />
                    <p className="absolute font-bold" style={{ left: 433, top: 118, color: 'white'}}> Jade </p>
                </div>
                <div className="flex flex-row relative" style={{marginTop: 460}}>
                    <div style={{ width: 288.33, height: 283.27, borderRadius: '32px', 
                        transform: "rotate(-44.5deg)", backgroundColor: '#BCCCE2', marginLeft: -95,}} />
                    <div style={{ width: 522, height: 15, marginLeft: -91, marginTop: 263, backgroundColor: '#BCCCE2' }} />
                    <div className="flex flex-col relative" style={{marginLeft: -9.5}}>
                        <p className="absolute text-4xl text-center" style={{left: -200, top: -110, width: 429}}>
                        10,000 Staked $SHARD<br/>
                        Guaranteed Allocation<br/>
                        64% of Pool Size<br/>
                        Minimum Staking <br/>
                        14 days TBA
                        </p>
                        <div style={{ height: 90.2, width: 90.2, borderRadius: '50%', 
                            backgroundColor: '#BCCCE2', marginTop: 128, marginLeft: -38}} />
                        <div style={{height: 50.64, width: 9.49, backgroundColor: '#BCCCE2'}}/>
                    </div>
                    <p className="absolute font-bold" style={{left: -0, top: 118, color: 'black'}}> Topaz </p>
                </div>
            </div>
            {/* <div style={{marginTop: 207}} className='flex justify-center relative'>
                <img src="./assets/roadmap1.png" alt="" />
            </div> */}
        </div>
    )
}

export default Discover