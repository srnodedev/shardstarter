import './header.css'
import { menus } from './menu'
function Header(){
    

    return (
        <div className="header items-center">
            <div className='flex flex-row text-center text-2xl space-x-1'>
                <img src="./assets/logo.png" alt="Logo" />
                <p>Shardstarter</p>
            </div>
            <div className='ml-auto' />
            {
                menus.map((item) => 
                    <div key={item.title} className='text-lg font-normal mr-10'><a href='#top'>{item.title}</a></div>
                    // <div>{item.title}</div>
                )
            }
            <img src="./assets/card.png" className='ml-5' alt="card" />
            <button className='ml-2.5 text-lg font-normal'>Connect Wallet</button>
        </div>
    )
}

export default Header