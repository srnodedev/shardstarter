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
                <img src="./assets/Project1.png" alt="" />
                <img src="./assets/Project2.png" alt="" />
                <img src="./assets/Project3.png" alt="" />
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
            <div style={{marginTop: 207}} className='flex justify-center relative'>
                <img src="./assets/roadmap1.png" alt="" />
                <p className='absolute text-2xl'style={{top: 210, left: 'calc(50% - 700px)'}}>
                    10,000 Staked $SHARD<br/>Guaranteed Allocation<br/>8% of Pool Size<br/>Minimum Staking – 7 days
                </p>
                <p className='absolute text-2xl'style={{top: 160, left: 'calc(50% + 500px)'}}>
                    10,000 Staked $SHARD<br/>Guaranteed Allocation<br/>16% of Pool Size<br/>Minimum Staking – 7 days
                </p>
                <p className='absolute text-2xl'style={{top: 660, left: 'calc(50% - 650px)'}}>
                    10,000 Staked $SHARD<br/>Guaranteed Allocation<br/>28% of Pool Size<br/>Minimum Staking – 14 days
                </p>
                <p className='absolute text-2xl'style={{top: 623, left: 'calc(50% + 390px)'}}>
                    10,000 Staked $SHARD<br/>Guaranteed Allocation<br/>28% of Pool Size<br/>Minimum Staking – 14 days
                </p>
            </div>
        </div>
    )
}

export default Discover