function DisplayLeft(props) {
    return (
        <div className='justify-center items-center flex relative'>
            <div className='flex flex-row items-center'>
                <div style={{
                    height: 376,
                    width: 376,
                    backgroundColor: '#494C4F',
                    borderRadius: '50%'
                }} className='items-center flex justify-center' >
                    <img src={props.imgPath} alt="" style={{
                        width: 183,
                        height: 166
                    }} />
                </div>
                <div style={{
                    width: 828,
                    height: 249,
                    marginLeft: -94,
                    paddingLeft: 144,
                    borderRadius: '14px',
                    backgroundColor: '#494C4F'
                }} className='items-center flex'>
                    <div >
                        <p style={{fontSize: 34}}><b>{props.heading}</b></p>
                        <p className='text-2xl mt-4 leading-7' dangerouslySetInnerHTML={{__html: props.content}}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayLeft