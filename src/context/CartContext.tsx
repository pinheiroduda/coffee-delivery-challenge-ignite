import { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextProps {
  cart: Cart[]
  addCoffeeToCart: ({ id, quantity }: Cart) => void
  coffeeAmountSum: number
  removeCoffeeFromCard: ({ id }: Cart) => void
  resetCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export interface Cart {
  id: number
  name?: string
  img?: string
  quantity?: number
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

  //todo - criar tipo pro coffee
  const addCoffeeToCart = (coffee: Cart) => {
    const coffeeExistInCart = cart.find(c => c.name === coffee.name)

    if (coffeeExistInCart) {
      setCart(state =>
        state.map(currentCoffee => {
          if (currentCoffee.name === coffee.name) {
            return {
              ...currentCoffee,
              quantity: (currentCoffee.quantity ?? 0) + 1
            }
          }
          return currentCoffee
        })
      )
    } else {
      setCart(state => [...state, coffee])
    }
  }

  const removeCoffeeFromCard = ({ id }: Cart) => {
    const selected = cart.filter(coffee => {
      return coffee.id !== id
    })

    setCart(selected)
  }

  const resetCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        coffeeAmountSum,
        removeCoffeeFromCard,
        resetCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
