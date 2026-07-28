const Options = ({ options }) => {
  return (
    <div className="options">
      {options.map((o) => {
        return (
          <button className="btn btn-option" key={o}>
            {o}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
