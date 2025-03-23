import React, {createContext, useState} from 'react'

type BasektItem = {
    id: number
    name: string
    price: number
    quantity?: number
}

type BasketContextType = {
    basket: Array<BasektItem>
    addToBasket: (item: BasektItem) => void
    removeFromBasket: (id: number) => void
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

const BasketProvider = ({children}: {children: React.ReactNode}) => {
	const [basket, setBasket] = useState<Array<BasektItem>>([])

	const addToBasket = (item: BasektItem) => {
        setBasket([...basket, item])
    }

	const removeFromBasket = (id: number) => {
        setBasket(basket.filter(item => item.id !== id))
    }

	return (
		<BasketContext.Provider
			value={{basket, addToBasket, removeFromBasket}}
		>
			{children}
		</BasketContext.Provider>
	)
}

export default BasketProvider

export const useBasketContext = () => {
	const context = React.useContext(BasketContext)
	if (context === undefined) {
		throw new Error('useBasketContext must be used within a BasketProvider')
	}
	return context
}