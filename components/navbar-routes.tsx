'use client';

import NavbarItem from './navbar-item';

interface NavbarItemProps {
  onClick?: () => void;
}

const Routes = [
  {
    name: 'Home',
    path: '/',
  },

  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const NavbarRoutes = ({ onClick }: NavbarItemProps = {}) => {
  return (
    <div className="flex gap-x-6 flex-col h-16  gap-y-5 md:gap-y-0 md:flex-row">
      {Routes.map((route) => (
        <NavbarItem
          key={route.name}
          name={route.name}
          path={route.path}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default NavbarRoutes;
