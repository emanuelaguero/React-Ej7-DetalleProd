import { useState } from "react";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const ItemCard = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);







    return (
        <>
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidedn h-100 shadow text-center">
                    <img src={props.url} className="card-img-top" alt="..." style={{ width: "" }} />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{props.title}</strong></h5>
                        <p className="card-text">{props.descripcion}</p>
                        <p className="card-text sku"><strong>SKU:</strong> {props.sku}</p>
                        <p className="card-text sku"><strong>Disponible:</strong> {props.disponible}</p>
                        <h4 >${props.precio}</h4>

                        {/* -------modal----------- */}
                        <Button variant="primary" onClick={handleShow}>
                            Comprar
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{props.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Gracias por su Compra</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Cerrar
                                </Button>
                              
                            </Modal.Footer>
                        </Modal>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard