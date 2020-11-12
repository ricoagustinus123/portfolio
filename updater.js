import Navbar from './components/navbar/Navbar.js'
import Hero from './components/hero/Hero.js'
window.updater = () => {

    document.getElementById('root').innerHTML +=
    `${Navbar()}
    ${Hero()}
    `;
};

updater()
export default updater