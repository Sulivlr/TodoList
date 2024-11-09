const Todos = () => {
  return (
    <div className="d-flex flex-column mt-3">
      <div className="d-flex flex-row gap-2">
        <input className="form-control"/>
        <button className="btn btn-primary">Create</button>
      </div>
      <div className="card mt-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <h3 className="p-1">Train hard</h3>
          </div>
          <div className="d-flex flex-row align-items-center">
            <input style={{width: '30px', height: '30px'}} type="checkbox" className="form-check-input me-5"/>
            <button className="btn btn-close btn-outline-danger" style={{width: '50px', height: '50px'}}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;