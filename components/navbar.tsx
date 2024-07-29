import NavbarRoutes from './navbar-routes';
import HamburgerMenu from './hamburger-menu';
import Logo from './logo';
import ThemeSwitch from './theme-switch';

const Navbar = () => {
  return (
    <nav className="w-full h-full flex gap-x-12 items-center justify-between">
      <Logo />
      <div className="hidden md:block">
        <NavbarRoutes />
      </div>
      <div className="hidden md:block">
        <ThemeSwitch />
      </div>
      <div className="md:hidden flex items-center gap-x-5">
        <ThemeSwitch />
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
