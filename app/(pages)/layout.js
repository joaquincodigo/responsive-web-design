import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-3 mt-16 md:mt-20">{children}</main>
      <Footer />
    </>
  );
}
