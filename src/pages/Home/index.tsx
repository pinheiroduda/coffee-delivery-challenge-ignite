import { Cover } from "../../views/Cover";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";

export function Home() {
  return (
    <>
      <Header />
      <Cover />
      <ProductCard />
    </>
  )
}