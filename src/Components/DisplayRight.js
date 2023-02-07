function DisplayRight(props) {
    return (
        <div className='justify-center items-center flex relative'>
            <div className='flex flex-row items-center'>
                <div style={{
                    width: 828,
                    height: 249,
                    paddingLeft: 24,
                    borderRadius: '14px',
                    backgroundColor: '#494C4F',
                }} className='items-center flex' >
                    <div >
                        <p style={{fontSize: 34}}><b>{props.heading}</b></p>
                        <p className='text-2xl mt-4 leading-7' dangerouslySetInnerHTML={{__html: props.content}}></p>
                    </div>
                </div>
                <div style={{
                    height: 376,
                    width: 376,
                    backgroundColor: '#BCCCE2',
                    borderRadius: '50%',
                    marginLeft: -159,
                }} className='items-center flex justify-center'>
                    <img src={props.imgPath} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DisplayRight