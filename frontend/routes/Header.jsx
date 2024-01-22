import "../ExternalApp.css";

import {
    SignedInOrRedirect,
    SignedOut,
    SignedOutOrRedirect,
    Provider,
  } from "@gadgetinc/react";
  import {
    Outlet,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Link,
  } from "react-router-dom";
import SignInPage from "./sign-in";
import SignUpPage from "./sign-up";

const Header = () => {
    return (
      <div className="header">
        <a
          href="/"
          target="_self"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="logo">{process.env.GADGET_PUBLIC_APP_SLUG}</div>
        </a>
        <div className="header-content">
            
          <SignedOut>
            <Link to="/sign-in" style={{ color: "black" }}>
              Sign in
            </Link>
            <Link to="/sign-up" style={{ color: "black" }}>
              Sign up
            </Link>
          </SignedOut>
          
        </div>
      </div>
    );
  };


  export default Header;