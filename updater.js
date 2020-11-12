import Navbar from './components/navbar/Navbar.js'
import Hero from './components/hero/Hero.js'
import HeroDesc from './components/hero_desc/Hero_desc.js'
window.updater = () => {

    document.getElementById('root').innerHTML +=
    `${Navbar()}
    ${Hero()}
    ${HeroDesc()}
    `;
};

updater()
export default updater