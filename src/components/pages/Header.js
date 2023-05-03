import React from "react";
import NavTabs from "../NavTabs";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Matthew Fischer</h1>
          </div>
          <div>
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></NavTabs>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;