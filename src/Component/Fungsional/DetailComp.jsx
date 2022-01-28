import React from "react";
import { useLocation } from "react-router-dom";

const DetailComp = (props) => {
  const location = useLocation();
  const { judul, tanggal } = location.state;
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{judul}</h1>
          <p className="lead">{tanggal}</p>
          <p className="col-md-8 fs-4">
            Ut magna vulputate potenti dui ex pretium torquent integer et semper
            viverra erat dapibus nulla morbi fusce pulvinar porta consequat diam
            maecenas elit suscipit mus iaculis accumsan condimentum ad eu
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
