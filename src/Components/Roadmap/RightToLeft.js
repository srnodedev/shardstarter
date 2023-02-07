function RightToLeft() {
    return(
        <div>
            <div className="flex flex-row" style={{ marginTop: -6, marginLeft: -30 }}>
                <div style={{ 
                    marginLeft: 42,
                    marginTop: 70,
                    width: 354,
                    height: 13,
                    backgroundColor: "#BCCCE2",
                    borderRadius: '5px' }}/>
                <div style={{
                    width: 0, 
                    height: 0, 
                    marginTop: 60,
                    borderTop: "20px solid transparent",
                    borderBottom: "20px solid transparent",
                    borderRight: "30px solid #494C4F",
                    marginLeft: 30
                }} />
                <div style={{
                    width: 358.5,
                    height: 85.5,
                    border: "13px solid #494C4F",
                    borderLeft: 'none',
                    borderTop: 'none'
                }}/>
            </div>
            <div style={{ height: 77, width: 13, backgroundColor: '#BCCCE2', marginTop: -30, marginLeft: 2}}/>
        </div>
    )
}

export default RightToLeft