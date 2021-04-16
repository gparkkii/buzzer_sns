import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Link href="/">
        <a>Buzzer</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/signup">
        <a>SignUp</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/logout">
        <a>Logout</a>
      </Link>
    </>
  );
};

export default Header;
