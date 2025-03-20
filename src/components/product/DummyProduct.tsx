import { DummyProduct as DP } from '../../declarations/Dummyjson'

const DummyProduct = ({ product }: {
    product: DP
}) => {
    return (
        <tr key={product.id}>
            <td>
                <img loading='lazy' style={{ width: 50 }} src={product.thumbnail} alt={product.title} />
            </td>
            <td>{product.title}</td>
            <td>S/. {product.price}</td>
        </tr>
    )
}

export default DummyProduct