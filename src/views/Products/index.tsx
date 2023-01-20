import { Card } from "../../components/Card";
import { coffeeCardsList } from "../../services/coffeeCardData";
import { ProductsContainer } from "./styles";

export function Products() {

  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>
      <div>
        {coffeeCardsList.map(coffeeCard => {
          return (
            <Card
              image={coffeeCard.image}
              type={coffeeCard.type}
              name={coffeeCard.name}
              description={coffeeCard.description}
            />
          )
        })}
      </div>
    </ProductsContainer>
  )
}