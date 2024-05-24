import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img
            src="/src/assets/Logo-Game_of_Thrones.png"
            alt="Game of Thrones logo"
            className="logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
