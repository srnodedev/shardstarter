function LeftToRight() {
    return(
        <div>
            <div className="flex flex-row" style={{ marginTop: -36, marginLeft: 0 }}>
            <div style={{ height: 13, width: 348, backgroundColor: '#BCCCE2' }}/>
            <div style={{
                width: 0, 
                height: 0, 
                borderTop: "20px solid transparent",
                borderBottom: "20px solid transparent",
                borderLeft: "30px solid #BCCCE2",
                marginTop: -12
            }} />
            <div style={{
                marginLeft: 42,
                width: 358.5,
                height: 85.5,
                border: "13px solid #494C4F",
                borderLeft: 'none',
                borderBottom: 'none'
            }}/>
            </div>
        </div>
    )
}

export default LeftToRight