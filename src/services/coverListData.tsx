import { Coffee, IconProps, Package, ShoppingCart, Timer } from "phosphor-react"

export interface FeatureItem {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  backgroundColor: string;
  text: string;
}

export const coverList: Array<FeatureItem> = [] = [
  {
    icon: ShoppingCart,
    backgroundColor: "#C47F17",
    text: 'Compra simples e segura',
  },
  {
    icon: Package,
    backgroundColor: "#574F4D",
    text: 'Embalagem mantém o café intacto',
  },
  {
    icon: Timer,
    backgroundColor: "#DBAC2C",
    text: 'Entrega rápida e rastreada',
  },
  {
    icon: Coffee,
    backgroundColor: "#8047F8",
    text: 'O café chega fresquinho até você'
  },
] 