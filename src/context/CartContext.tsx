import { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextProps {
  cart: Cart[]
  addCoffeeToCart: ({ id, quantity }: Cart) => void
  coffeeAmountSum: number
  removeCoffeeFromCard: ({ id }: Cart) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export interface Cart {
  id: number
  name?: string
  img?: string
  quantity?: number | undefined
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>(() => {
    const storedCoffees = localStorage.getItem('@coffee-delivery:cart-1.0.0')
    if (storedCoffees) return JSON.parse(storedCoffees)
    return []
  })

  const initialValue = 0
  const coffeeAmountSum = Object.values(cart).reduce(
    (accumulator, { quantity }) => accumulator + (quantity ?? 0),
    initialValue
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON)
  }, [cart])

  const addCoffeeToCart = ({ id, name, img, quantity }: Cart) => {
    const coffeeAmount: Cart = {
      id,
      name,
      img,
      quantity
    }

    setCart(state => [...state, coffeeAmount])
  }

  const removeCoffeeFromCard = ({ id }: Cart) => {
    const selected = cart.filter(coffee => {
      return coffee.id !== id
    })

    setCart(selected)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        coffeeAmountSum,
        removeCoffeeFromCard
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
