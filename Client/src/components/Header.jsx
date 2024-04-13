import { Button, Navbar, NavbarCollapse, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <div>
      <Navbar className="border-b-2 py-4">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-xl font-semibold sm:text-2xl dark:text-white"
        >
          Imposter{" "}
          <span className="px-2 py-2 text-white rounded-md bg-slate-800 dark:bg-slate-100 dark:text-slate-900">
            UX
          </span>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray">
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 lg:inline hidden border-slate-800"
            color="gray"
          >
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button className="bg-slate-800 hover:bg-slate-700 focus:ring-slate-500">
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path == "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path == "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path == "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
