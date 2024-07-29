import Navbar from './navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <header className="w-full h-16 px-6  border-b-[1.2px] dark:border-[#333333] border-slate-200">
        <Navbar />
      </header>
      <main className="px-6 py-3">{children}</main>
    </div>
  );
};

export default Layout;
