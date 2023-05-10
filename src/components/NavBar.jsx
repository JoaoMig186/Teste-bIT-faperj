import '../styles/NavBar.css'
import Logo from '../assets/generic-logo.png'

function NavBar(){
    return(
        <div>
            <div className='navbar'>
                {/* Imagem de logo genérica*/}
                <div className='logo'>
                    <img src={Logo}/>
                    <p>Genric Name</p>
                </div>
                <a href="#"><span>Home</span></a>
                <a href="#"><span>About us</span></a>
                <a href="#"><span>Contact</span></a>
            </div>
        </div>
    )
}

export default NavBar
