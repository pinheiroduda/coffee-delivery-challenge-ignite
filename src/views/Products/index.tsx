import { ProductCard } from "../../components/ProductCard";
import { ProductsContainer } from "./styles";

export function Products() {
  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>
      <ProductCard />
    </ProductsContainer>
  )
}