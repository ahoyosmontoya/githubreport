
const NavBar = () => {
	return (
	  
		<div>

		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
		  <a className="navbar-brand" href="#!">Barra para navegar</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="collapsibleNavbar">
		    <ul className="navbar-nav">
		      <li className="nav-item">
			<a className="nav-link" href="#!">Link 1</a>
		      </li>
		      <li className="nav-item">
			<a className="nav-link" href="#!">Link 2</a>
		      </li>
		      <li className="nav-item">
			<a className="nav-link" href="#!">Link 3</a>
		      </li>    
		    </ul>
		  </div>  
		</nav>
		</div> 
      
	);
      };
      
      export default NavBar;