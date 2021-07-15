import './InitialPage.css';
import Header from "../header/Header";
import SearchBox from "../searchBox/SearchBox";
import Footer from "../footer/Footer";

const InitialPage = () => {
  return (
    <>
      <div id= "inital-page" className="card">
        <Header />
        <SearchBox />
        <Footer />
      </div>
    </>
  );
};

export default InitialPage;
