import { useEffect, useState } from 'react'
import { DummyProduct as DP } from './declarations/Dummyjson'
import { PuffLoader } from 'react-spinners'
import ProductsTable from './components/table/ProductsTable'

const App = () => {
    const [products, setProducts] = useState<Array<DP>>([])
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
                loading ? <PuffLoader /> : <ProductsTable products={products} />
            }
        </>
    )
}

export default App