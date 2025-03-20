import { DummyProduct as DP } from '../../declarations/Dummyjson'
import DummyProduct from '../product/DummyProduct'

const ProductsTable = ({ products }: {
    products: Array<DP>
}) => {
    return (
        <table style={{ textAlign: 'left', fontFamily: 'System-ui' }}>
            <thead>
                <th>Foto</th>
                <th>Producto</th>
                <th>Precio</th>
            </thead>
            <tbody>
                {
                    products.map((product) => (
                        <DummyProduct product={product} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default ProductsTable