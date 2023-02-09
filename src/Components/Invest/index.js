function Invest() {
    return (
        <div  id="sharddao" className="flex" style={{height: 944, marginTop: 126}}>
            <img className="absolute right-0" src="./assets/background_invest.png" alt="" />
            <div style={{marginTop: 100, marginLeft: 149}}>
                <p className="text-2xl">Join our</p>
                <p className="text-4xl mt-6 font-bold">Are You a Venture Capital /<br/>Angel Investor?</p>
                <p className="text-2xl mt-9"><b>300 Strong ShardDAO Community</b><br/>for Exclusive Vested & SAFE Deals</p>
                <p className="text-2xl mt-9">
                    The ShardDAO is a group of 300 carefully selected and thoroughly vetted<br/>
                    investors who are dedicated to supporting the ongoing growth and<br/>
                    advancement of the Web 3.0 ecosystem through exclusive investment<br/>
                    opportunities provided by ShardStarter and its partner Venture Capital firms. The<br/>
                    goal of the ShardDAO collective is to invest in innovative technologies and<br/>
                    talented individuals who have the potential to shape the future. We are currently<br/>
                    accepting inquiries for membership. If you are interested in joining, you can<br/>
                    apply by clicking on the provided link.
                </p>
                <button style={{
                        backgroundColor: "#BCCCE2",
                        width: 242,
                        height: 52,
                        borderRadius: "4px",
                        color: "black",
                    }}
                    className='text-center mt-11'
                    >
                    ApplyNow
                </button>
            </div>
        </div>
    )
}

export default Invest