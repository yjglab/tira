import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// index, profile, signup공통
const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>루트홈</a>
        </Link>
        <Link href="/profile">
          <a>회원정보</a>
        </Link>
        <Link href="/signup">
          <a>회원되기</a>
        </Link>
      </div>
      {children}
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
