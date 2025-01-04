import {Link} from 'react-router-dom';
import MainLogoImg from  '../icons_assets/restaurant.jpg';
function Header() {
    return (
        <header className='header'>
            <section>
                <div className='headerText'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce id ullamcorper ante.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Donec hendrerit est ut purus mattis
                    </p>

                </div>
                <Link to="/booking" className='button '>
                    Reserve now
                </Link>
            </section>
            <img src={MainLogoImg} alt='Main Logo'></img>
        </header>

    );
}

export default Header;