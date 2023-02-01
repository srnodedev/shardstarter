function Roadmap() {
    return (
        <div className="mt-32">
            <p className="text-5xl text-center  font-bold">RoadMap</p>
            <p className="mt-32 text-2xl" style={{marginLeft: 'calc(50% - 600px)'}}>Phase 1</p>
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
            </div>
        </div>
    )
}

export default Roadmap