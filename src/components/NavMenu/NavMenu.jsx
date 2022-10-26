import blackCross from "../../assets/images/black-cross.png";
import "./NavMenu.scss";
import { Link } from "react-router-dom";

const NavMenu = (props) => {
  const { toggleNav } = props;

  return (
    <div className="nav-menu">
    <div className="nav-menu__content">
      <img
        src={blackCross}
        alt="Close menu"
        className="nav-menu__cross"
        onClick={toggleNav}
      />
      <p className="nav-menu__item">Home</p>
      <p className="nav-menu__item">All Beers</p>
      <p className="nav-menu__item">Food Pairing</p>
    </div>
  </div>

    // <div className="nav-menu">
    //   <div className="nav-menu__content">
    //     <img
    //       src={blackCross}
    //       alt="Close menu"
    //       className="nav-menu__cross"
    //       onClick={toggleNav}
    //     />
    //     <Link className="nav-menu__item" to="/" onClick={toggleNav}>
    //       Home
    //     </Link>
    //     <Link className="nav-menu__item" to="/beers" onClick={toggleNav}>
    //       All Beers
    //     </Link>

    //     <Link className="nav-menu__item" to="/food_pairing" onClick={toggleNav}>
    //     Food Pairing 
    //     </Link>
    //   </div>
    // </div>
  );
};

export default NavMenu;