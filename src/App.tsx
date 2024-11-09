const App = () => {
  return (
    <main className="container">
      <div className="d-flex flex-column mt-3">
        <div className="d-flex flex-row gap-2">
          <input className="form-control"/>
          <button className="btn btn-primary">Create</button>
        </div>
        <div className="card mt-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h3 className="p-1">Train hard</h3>
            <input style={{width: '30px', height: '30px'}} type="checkbox" className="form-check-input me-5"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
