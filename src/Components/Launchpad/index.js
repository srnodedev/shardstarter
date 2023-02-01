import './index.css'

export default function Launchpad() {
    return (
        <div className=" ">
            <div className='flex flex-row relative launchpad'>
                <div style={{marginTop: 170}}>
                    <p style={{fontSize: "65px", lineHeight: "76px"}}><b>First Decentralized <br/>Launchpad on Shardeum</b></p>
                    <p className='mt-1.5 text-2xl'>The community-driven launchpad you have been waiting for</p>
                    <div className='flex flex-row mt-7'>
                        <button 
                            className='rounded bg-white text-black items-center text-lg'
                            style={{
                                width: "163px",
                                height: "46px"
                            }}>Lightpaper</button>
                        <div className='border-green-500 border-2 ml-2.5 rounded-lg'>
                            <button
                                className='rounded text-white items-center text-lg bg-gradient-to-b from-green-500 to-blue-400'
                                style={{
                                    width: "163px",
                                    height: "46px",
                                }}
                                >Join the Waitlist</button>
                            <input 
                                type="text" 
                                id="email" 
                                name="email"
                                placeholder='   Enter Your Email Address...'
                                className='z-0 bg-transparent text-white text-lg rounded border-none'
                                style={{
                                    // marginLeft: "-30px",
                                    width: 266,
                                    height: '100%'
                                    // paddingLeft: "30px",
                                }}/>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='absolute right-24 top-20 opacity-50'>
                        <img src="./assets/Vector Smart Object 3 (1).png" alt="" />
                    </div>
                    <div className='coin top-24'>
                        <img src="./assets/Vector Smart Object1 1 (1).png" alt="" />
                    </div>
                    {/* <div className='absolute right-24 top-2 bg-blend-color-dodge opacity-50'>
                        <img src="./assets/qw 1 (1).png" alt="" />
                    </div> */}
                </div>
            </div>
            <div className='justify-center text-center' style={{marginTop: 308}}>
                <p className='text-5xl'><b>A launchpad that prioritizes Safety<br/>Transparency, and Convenience</b></p>
                <p className='text-2xl' style={{marginTop: 29}}>ShardStarter is poised to revolutionize the crypto market<br/>with its innovative features and services</p>
            </div>
            <div style={{marginTop: 61}} className='relative'>
                <div className='absolute top-14'>
                    <img src='./assets/background-4.png' alt='' />
                </div>
                <div className='justify-center items-center flex relative'>
                    <img src='./assets/shardeum.png' alt="" className='relative' />
                    <div className='absolute top-24' style={{left: 'calc(50% - 150px)'}}>
                        <p style={{fontSize: 34}}><b>Supporting Shardeum</b></p>
                        <p className='text-2xl mt-4 leading-7'>We are deeply committed to the growth of Shardeum<br/>Ecosystem which supports Proof of Community and keeps<br/>the idea at the center of it’s development</p>
                    </div>
                </div>
                <div className='justify-center items-center flex pl-20 relative' style={{marginTop: 91}}>
                    <img src='./assets/dao.png' alt="" />
                    <div className='absolute top-28' style={{left: 'calc(50% - 450px)'}}>
                        <p style={{fontSize: 34}}><b>DAO Driven</b></p>
                        <p className='text-2xl mt-4 leading-7'>At ShardStarter, We value and prioritize our community.<br/>After a Careful due diligence, The projects we launch on<br/>our platform are chosen through community voting.</p>
                    </div>
                </div>
                <div className='justify-center items-center flex pl-20 relative' style={{marginTop: 91}}>
                    <img src='./assets/quality.png' alt="" />
                    <div className='absolute top-24' style={{left: 'calc(50% - 110px)'}}>
                        <p style={{fontSize: 34}}><b>Safe & Qaulity Projects</b></p>
                        <p className='text-2xl mt-4 leading-7'>Our team of experts will thoroughly vet every<br/>project to ensure it meets our strict standards.<br/>Safety is our top priority, so we will handle liquidity<br/>locks and vesting for all projects<br/></p>
                    </div>
                </div>
                <div className='justify-center items-center flex pl-20 relative' style={{marginTop: 91}}>
                    <img src='./assets/distribution.png' alt="" />
                    <div className='absolute top-20' style={{left: 'calc(50% - 450px)'}}>
                        <p style={{fontSize: 34}}><b>Fair Distribution</b></p>
                        <p className='text-2xl mt-4 leading-7'>Users earn allocations at ShardStarter based<br/>on the amount and duration of their $SHARD<br/>token staking, as determined by our Tier<br/>System. This system ensures that everyone has<br/>a fair chance to participate.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}