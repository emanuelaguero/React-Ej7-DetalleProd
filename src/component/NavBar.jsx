import Contacto from "./Contacto"

const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg fs-3 " >
                <a className="navbar-brand fs-2 text-primary" href="#"><i className="bi bi-cart-fill text-primary m-2"></i>ShoopingWines</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#about">About us </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contact</a>
                        </li>
                     
                    </ul>

                </div>
            </nav>

        </>
    )


}

export default NavBar