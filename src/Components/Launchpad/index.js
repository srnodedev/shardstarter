import './index.css'
import DisplayLeft from '../DisplayLeft'
import DisplayRight from '../DisplayRight'
// import Animation from '../Layout/Animation'

export default function Launchpad() {
    return (
        <div id="about">
            <div className='flex flex-row relative launchpad'>
                <div style={{marginTop: 170}}>
                    <p style={{fontSize: "65px", lineHeight: "76px"}}><b>First Decentralized <br/>Launchpad on Shardeum</b></p>
                    <p className='mt-1.5 text-2xl'>The community-driven launchpad you have been waiting for</p>
                    <div className='flex flex-row mt-7'>
                        <a 
                            className='rounded bg-white text-black items-center text-lg text-center justify-center flex'
                            href="https://shardstarter-io.gitbook.io/shardstarter/"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                width: "163px",
                                height: "46px"
                            }}>Lightpaper</a>
                        <div className= 'border-2 ml-2.5 rounded-lg' style={{borderColor: '#494C4F'}}>
                            <button
                                className='rounded text-white items-center text-lg'
                                style={{
                                    width: "163px",
                                    height: "46px",
                                    backgroundColor: '#494C4F'
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
                    <div className='absolute right-16 top-20'>
                        <img src="./assets/background-1.png" className='vert-move' alt="" />
                    </div>
                    {/* <Animation /> */}
                </div>
            </div>
            <div className='justify-center text-center' style={{marginTop: 308}}>
                <p className='text-5xl'><b>A launchpad that prioritizes Safety<br/>Transparency, and Convenience</b></p>
                <p className='text-2xl' style={{marginTop: 29}}>ShardStarter is poised to revolutionize the crypto market<br/>with its innovative features and services</p>
            </div>
            <div style={{marginTop: 61}} className='relative'>
                <div className='absolute' style={{top: 338, left: 104}}>
                    <img src='./assets/background-4.png' className='vert-move' alt='' />
                </div>
                <div>
                    <DisplayLeft 
                        imgPath="./assets/shardeum_logo.png" 
                        heading="Supporting Shardeum"
                        content="We are deeply committed to the growth of Shardeum<br/>Ecosystem which supports Proof of Community and keeps<br/>the idea at the center of it’s development"
                    />
                </div>
                <div style={{marginTop: 91, marginLeft: 100}}>
                    <DisplayRight
                        imgPath="./assets/network.png" 
                        heading="DAO Driven"
                        content="At ShardStarter, We value and prioritize our community.<br/>After a Careful due diligence, The projects we launch on<br/>our platform are chosen through community voting."
                    />
                </div>
                <div style={{marginTop: 91}}>
                    <DisplayLeft 
                        imgPath="./assets/guard.png" 
                        heading="Safe & Qaulity Projects"
                        content="Our team of experts will thoroughly vet every<br/>project to ensure it meets our strict standards.<br/>Safety is our top priority, so we will handle liquidity<br/>locks and vesting for all projects"
                    />
                </div>
                <div style={{marginTop: 91}}>
                    <DisplayRight
                        imgPath="./assets/distribution.png" 
                        heading="Fair Distribution"
                        content="Users earn allocations at ShardStarter based<br/>on the amount and duration of their $SHARD<br/>token staking, as determined by our Tier<br/>System. This system ensures that everyone has<br/>a fair chance to participate."
                    />
                </div>
            </div>
        </div>
    )
}