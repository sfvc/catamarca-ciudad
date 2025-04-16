import HeaderLg from './headerLg';
import HeaderMobile from './headerMobile';
import MarqueeHeader from './marquee';

const Header = () => {

    return (
        <header>
            <div style={{ backgroundColor: "#001529" }}>
                <MarqueeHeader />
            </div>
            <HeaderLg />
            <HeaderMobile />
        </header>
    );
};

export default Header;
