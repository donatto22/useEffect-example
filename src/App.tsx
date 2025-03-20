import { useEffect, useState } from 'react'
import { DummyProduct } from './declarations/Dummyjson'

const App = () => {
    const [products, setProducts] = useState<Array<DummyProduct>>([])
    const [loading, setLoading] = useState(true)

    const traerProductos = async () => {
        setLoading(true)

        const API = 'https://dummyjson.com/products'

        const response = await fetch(API)
        const data = await response.json()

        setProducts(data.products)


        setLoading(false)
    }

    useEffect(() => {
        traerProductos()
    }, [])

    return (
        <>
            {
                loading ? <div>Cargando...</div> : <>
                    <table style={{ textAlign: 'left', fontFamily: 'System-ui' }}>
                        <thead>
                            <th>Foto</th>
                            <th>Producto</th>
                            <th>Precio</th>
                        </thead>
                        <tbody>
                            {
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <img style={{ width: 50 }} src={product.thumbnail} alt={product.title} />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>S/. {product.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </>
            }

        </>
    )
}

export default App