import React from 'react';

const InvalidRoute: React.FC = () => (
  <div data-name="invalid-route-component">
    <div className="col-lg-12 bg-dark mx-auto">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-xl-4 my-5">
          <div className="text-center">
            <h6 className="text-uppercase text-muted mb-4">404 error</h6>
            <h1 className="display-4 mb-3">Component not found</h1>
            <p className="text-muted mb-4">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InvalidRoute;
