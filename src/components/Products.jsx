import Product from "./Product";
import { products } from "../data/products";
import styles from "./Products.module.css";
import Container from "./UI/Container";
function Products() {
    return (
        <Container>
            <h1>Best of ARC</h1>
            <div className={styles.products}>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </Container>
    );
}

export default Products;
