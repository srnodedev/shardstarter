import CircleLeft from "./CircleLeft"
import CircleRight from "./CircleRight"
import RightToLeft from "./RightToLeft"
import LeftToRight from "./LeftToRight"

function  Roadmap() {
    return (
        <div id="roadmap" className="mt-32">
            <p className="text-5xl text-center  font-bold">RoadMap</p>
            <div className="items-center flex justify-center mt-32">
                <div className="flex flex-col">
                    <div style={{ width: 826, height: 16, backgroundColor: '#BCCCE2', borderRadius: '8px' }}/>
                    <div style={{ marginLeft: -225, marginTop: -50}} className="flex flex-row" >
                        <CircleLeft imgPath="./assets/magnifying_glass.png" phase="Phase 1" />
                        <div className="items-center flex ml-12">
                            <p className="text-2xl">
                                - Research<br/>
                                - Website & dApp Development
                            </p>
                        </div>
                    </div>
                    <LeftToRight />
                    <div className="flex justify-end  flex-row" style={{ marginRight: -80, marginTop: -5}}>
                        <div className="items-center flex mr-16">
                            <p className="text-2xl">
                                - Team Development<br/>
                                - Shardeum Integration<br/>
                                - ShardDAO Development 1v<br/>
                                - Cross-Chain Integration<br/>
                                - Contract Audit<br/>
                                - Marketing & Partnerships<br/>
                                - EVM Integration
                            </p>
                        </div>
                        <CircleRight imgPath="./assets/people.png" phase="Phase 2"/>
                    </div>
                    <RightToLeft />
                    <div style={{ marginLeft: -185, marginTop: -10}} className="flex flex-row">
                        <CircleLeft imgPath="./assets/star.png" phase="Phase 3" />
                        <div className="items-center flex ml-12">
                            <p className="text-2xl">
                                - Beta Testnet<br/>
                                - Seed Sale<br/>
                                - ShardDAO Development 2<br/>
                                - Private Sales<br/>
                                - WEB 3. 0 Marketing<br/>
                                - Projects Onboarding<br/>
                                - Ambassador Program
                            </p>
                        </div>
                    </div>
                    <div style={{ height: 99, width: 13, backgroundColor: '#BCCCE2', marginTop: -20, marginBottom: 23 }} />
                    <LeftToRight />
                    <div className="flex justify-end flex-row" style={{ marginRight: -80, marginTop: -5}}>
                        <div className="items-center flex mr-16">
                            <p className="text-2xl">
                                - Team Development<br/>
                                - Shardeum Integration<br/>
                                - ShardDAO Development 1<br/>
                                - Cross-Chain Integration<br/>
                                - Contract Audit<br/>
                                - Marketing & Partnerships<br/>
                                - EVM Integration<br/>
                            </p>
                        </div>
                        <CircleRight imgPath="./assets/handshake.png" phase="Phase 4" />
                    </div>
                    <RightToLeft />
                    <div style={{ marginLeft: -185, marginTop: -20}} className="flex flex-row">
                        <CircleLeft imgPath="./assets/pie.png" phase="Phase 5" />
                        <div className="items-center flex ml-12">
                            <p className="text-2xl">
                                - Non<br/>
                                - EVM Integrations<br/>
                                - ShardWallet<br/>
                                - SAFE Deals<br/>
                                - CEX Listin<br/>
                                - Accelerator Program
                            </p>
                        </div>
                    </div>
                    <div style={{ 
                        height: 99, 
                        width: 867, 
                        border: "13px solid #BCCCE2",
                        marginTop: -20, 
                        marginBottom: 23,
                        borderTop: 'none',
                        borderRight: 'none' }} />
                </div>
            </div>
            {/* <p className="mt-32 text-2xl" style={{marginLeft: 'calc(50% - 600px)'}}>Phase 1</p>
            <div className="flex justify-center relative">
                <img src="./assets/roadmap.png" alt=""/>
                <p className="absolute text-2xl" style={{top: 120, left: 'calc(50% - 250px)'}}>- Research<br/>- Website & dApp Development</p>
                
                <p className="absolute text-2xl" style={{top: 308, left: 'calc(50% + 470px)'}}>Phase2</p>
                <p className="absolute text-2xl" style={{top: 386, left: 'calc(50% - 60px)'}}>
                    - Team Development<br/>
                    - Shardeum Integration<br/>
                    - ShardDAO Development 1<br/>
                    - Cross-Chain Integration<br/>
                    - Contract Audit<br/>
                    - Marketing & Partnerships<br/>
                    - EVM Integration
                </p>

                <p className="absolute text-2xl" style={{top: 751, left: 'calc(50% - 600px)'}}>Phase 3</p>
                <p className="absolute text-2xl" style={{top: 826, left: 'calc(50% - 220px)'}}>
                    - Beta Testnet<br/>
                    - Seed Sale<br/>
                    - ShardDAO Development 2<br/>
                    - Private Sales<br/>
                    - WEB 3. 0 Marketing<br/>
                    - Projects Onboarding<br/>
                    - Ambassador Program
                </p>

                <p className="absolute text-2xl" style={{top: 1200, left: 'calc(50% + 470px)'}}>Phase 4</p>
                <p className="absolute text-2xl" style={{top: 1277, left: 'calc(50% - 70px)'}}>
                    - Public Sale<br/>
                    - Token Generation Event<br/>
                    - Diamond Hands Program<br/>
                    - Project Deals<br/>
                    - INO Deals<br/>
                    - Vested Deals<br/>
                    - Referral Program
                </p>

                <p className="absolute text-2xl" style={{top: 1596, left: 'calc(50% - 600px)'}}>Phase 5</p>
                <p className="absolute text-2xl" style={{top: 1681, left: 'calc(50% - 230px)'}}>
                    - Non<br/>
                    - EVM Integrations<br/>
                    - ShardWallet<br/>
                    - SAFE Deals<br/>
                    - CEX Listin<br/>
                    - Accelerator Program
                </p>
            </div> */}
        </div>
    )
}

export default Roadmap