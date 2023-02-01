import './header.css'
import { menus } from './menu'
function Header(){
    

    return (
        <div className="header items-center">
            <img src="./assets/logo.png" alt="Logo" />
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