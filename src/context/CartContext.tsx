import { createContext, ReactNode, useState } from 'react'

interface CartContextProps {
  cart: Cart[]
  addCoffeeToCart: ({ id, quantity }: Cart) => void
  coffeeAmountSum: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface Cart {
  id: string
  quantity: number
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])

  const initialValue = 0
  const coffeeAmountSum = Object.values(cart).reduce(
    (accumulator, { quantity }) => accumulator + quantity,
    initialValue
  )

  const addCoffeeToCart = ({ id, quantity }: Cart) => {
    const coffeeAmount: Cart = {
      id,
      quantity
    }

    setCart(state => [...state, coffeeAmount])
  }

  return (
    <CartContext.Provider value={{ cart, addCoffeeToCart, coffeeAmountSum }}>
      {children}
    </CartContext.Provider>
  )
}
