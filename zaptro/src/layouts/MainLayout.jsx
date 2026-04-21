import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children, navbarProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar {...navbarProps} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
