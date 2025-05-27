/* eslint-disable jsx-a11y/anchor-is-valid */
function Ex1() {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header */}
            <div className="container-fluid bg-light py-5 mb-5">
                <h1 className="text-center">Let's test the grid!</h1>
            </div>

            {/* Navigation */}
            <div className="mb-5">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="container mb-5">
                <div className="row">
                    <div className="col border" style={{ height: 50 }}>First col</div>
                    <div className="col border" style={{ height: 50 }}>Second col</div>
                </div>

                <div className="row">
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                </div>

                <div className="row">
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-auto container-fluid text-center py-3" style={{ backgroundColor: '#d9c9c7' }}>
                <h3><strong>Created by ABC!</strong></h3>
            </footer>
        </div>
    );
}

export default Ex1;
