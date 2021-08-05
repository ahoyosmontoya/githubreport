import hamburgesa from "../imgs/img/hamburguesa.jpg"
import Card from "react-bootstrap/Card";

const SideBar =()=>{
	return(

    <div className="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of hamburger:</h5>
      <Card.Img variant="top" src={hamburgesa} />
      <div className="fakeimg" src = {hamburgesa}>Prueba la mejor hamburgesa, con la preparación de carnes seleccionadas</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#!">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#!">Disabled</a>
        </li>
      </ul>
      <hr className="d-sm-none"/>
    </div>
	);
};
export default SideBar