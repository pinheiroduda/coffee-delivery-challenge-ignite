import { Card } from "../../components/Card";
import { coffeeCardsList } from "../../services/mockData";
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
              type={coffeeCard.type.map(coffeeType => coffeeType.split(','))}
              name={coffeeCard.name}
              description={coffeeCard.description}
            />
          )
        })}
      </div>
    </ProductsContainer>
  )
}