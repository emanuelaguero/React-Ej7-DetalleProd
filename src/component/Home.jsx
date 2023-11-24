import Datos from "./datos"
import Footer from "./Footer"
import ItemCard from "./ItemCard"
import NavBar from "./NavBar"

const Home = () => {

    return (
        <>
            <NavBar />
            <section className="Home">
                <h3 className=" ext center mt-3 "> Todos los Productos</h3>
                <section className="py-6 container">
                    <div className="row justify-content-center">
                        {Datos.productos.map((producto, index) => {

                            return (<ItemCard title={producto.title} url={producto.url} descripcion={producto.descripcion} sku={producto.sku} precio={producto.precio} disponible={producto.disponible} key={index} />)
                        })}
                    </div>
                </section>
            </section>
            <Footer />
        </>

    )
}

export default Home