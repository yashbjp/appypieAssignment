/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";




export default function CollapsedBreadcrumbs() {
    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
  return (
    <div onClick={handleClick}>
      <Breadcrumbs
        separator=""
        aria-label="breadcrumb"
        style={{ color: "white", fontSize: "14px" }}
      >
        <Link underline="hover" color="inherit" href="#">
          WHY CONNECT
        </Link>
        <Link underline="hover" color="inherit" href="#">
          APP DIRECTORY
        </Link>
        <Link underline="hover" color="inherit" href="#">
          APP INTEGRATIONS
        </Link>
        <Link underline="hover" color="inherit" href="#">
          PRICING
        </Link>
        <Link underline="hover" color="inherit" href="#">
          STARTFREE
        </Link>
        <button
          style={{
            background: "transparent",
            border: "1px solid #fff",
            color: "#fff",
            height: "35px",
            width: "100px",
            cursor:'pointer'
          }}
        >
          Login
        </button>
      </Breadcrumbs>
    </div>
  );
}
