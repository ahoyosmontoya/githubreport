import "./searchBox.css";
const SearchBox = () => {
  return (
    <div className = "big-square">
      <div className="square">
        <div className="text-center" id="border">
          <input type="text" placeholder="ingrese usuario"></input>
        </div>
        <div className="text-center" id="button">
          <button type="button" className="btn btn-success">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
