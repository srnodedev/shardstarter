function Footer() {
    return (
        <div>
            <img src="./assets/social/logo.svg" alt="" className="-mt-10" style={{width: 300, height: 300, marginLeft: 80}} />
            <div className="flex flex-row mb-10 -mt-10" style={{paddingLeft: 149}}>
                <div className="w-2/5">
                    <p className="text-4xl">
                        ShardStarter is the first Launchpad built on<br/>
                        Shardeum that supports incubation of high<br/>
                        yield crypto & NFT projects.<br/>
                    </p>
                </div>
                <div className="flex justify-center w-3/5">
                    <div className="flex flex-col">
                        <p className="text-4xl">Join our Community of Investors</p>
                        <div className="flex flex-row">
                            <img src="./assets/social/twitter.svg" alt="" style={{width: 100, height: 100}} />
                            <img src="./assets/social/telegram.svg" alt="" style={{width: 100, height: 100}} />
                            <img src="./assets/social/discord-new.svg" alt="" style={{width: 100, height: 100}} />
                            <img src="./assets/social/medium.svg" alt="" style={{width: 100, height: 100}} />
                            <img src="./assets/social/youtube.svg" alt="" style={{width: 100, height: 100}} />
                        </div>
                        <div className="flex flex-row text-2xl ">
                            <p>Terms & Conditions</p>
                            <p className="ml-5 mr-5">Privacy Policy</p>
                            <p>Cookies Policy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center w-full items-center" style={{height: 30, backgroundColor: "blue"}}>
                <p>Copyright © 2022 ShardStarter Limited. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer