import HeaderLg from '@components/common/headerLg';
import HeaderMobile from '@components/common/headerMobile';
import MarqueeHeader from '@components/common/marquee';

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
