import { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextProps {
  cart: Cart[]
  addCoffeeToCart: ({ id, quantity }: Cart) => void
  coffeeAmountSum: number
  selectedCoffees: any[]
}

interface CartContextProviderProps {
  children: ReactNode
}

interface Cart {
  id: string
  img: string
  quantity: number
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
    (accumulator, { quantity }) => accumulator + quantity,
    initialValue
  )

  const selectedCoffees = cart.map(c => Object.values(c))

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON)
  }, [cart])

  const addCoffeeToCart = ({ id, img, quantity }: Cart) => {
    const coffeeAmount: Cart = {
      id,
      img,
      quantity
    }

    setCart(state => [...state, coffeeAmount])
  }

  return (
    <CartContext.Provider
      value={{ cart, addCoffeeToCart, coffeeAmountSum, selectedCoffees }}
    >
      {children}
    </CartContext.Provider>
  )
}
