import "./InitialPage.css";
import Header from "../header/Header";
import SearchBox from "../searchBox/SearchBox";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import Container from "../container/Container";
import Article1 from "../container/articles/Article1";


const InitialPage = () => {
  return (
    <>
      <div id="inital-page" className="card">
        <Header />
        <NavBar />
        <SearchBox />
        <div className="container" style={{ marginTop: "30px" }}>
          <SideBar />

          <Container />
          <Article1 />

        </div>
        <Footer />

      </div>
    </>
  );
};

export default InitialPage;
