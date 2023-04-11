import menuLinksData from "./data/menu_links.json";

const Header = () => {
  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Australia Hotel</h1>
          <h2>Eat, Drink & Stay</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Australia <span>Hotel</span>
            </a>
          </div>
          <ul>
            {menuLinksData.map((link) => {
              return (
                <li>
                  <a className={`icon ${link.class}`} href={link.href}>
                    <span>{link.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
