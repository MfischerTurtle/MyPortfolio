import React from "react";
import NavTabs from "../NavTabs";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Matthew Fischer Portfolio</h1>
          </div>
          <div>
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></NavTabs>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
          <h2>Welcome</h2>
          <p>
           To  
          </p>
          <p>
  Matthew Fischer Portfolio Page .
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;