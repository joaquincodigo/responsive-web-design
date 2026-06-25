import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-3 mt-16 lg:px-6 md:pt-3 lg:pt-9 scrollbar-hidden">{children}</main>
      <Footer />
    </>
  );
}
