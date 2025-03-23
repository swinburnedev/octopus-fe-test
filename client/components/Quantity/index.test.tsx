import { render, screen, fireEvent } from "@testing-library/react"
import Quantity from "./"

describe("Quantity Component", () => {
	const quantity = 2
	const setQuantity = jest.fn()

	afterEach(() => {
		jest.clearAllMocks()	
	})

	it("renders the component with initial quantity", () => {
		render(<Quantity quantity={quantity} setQuantity={setQuantity} />)
		expect(screen.getByTitle("Current quantity")).toHaveTextContent("2")
	})

	it("calls setQuantity with incremented value when '+' button is clicked", () => {
		render(<Quantity quantity={quantity} setQuantity={setQuantity} />)
		const incrementButton = screen.getByText("+")
		fireEvent.click(incrementButton)
		expect(setQuantity).toHaveBeenCalledWith(3)
	})

	it("calls setQuantity with decremented value when '-' button is clicked", () => {
		render(<Quantity quantity={quantity} setQuantity={setQuantity} />)
		const decrementButton = screen.getByText("-")
		fireEvent.click(decrementButton)
		expect(setQuantity).toHaveBeenCalledWith(1)
	})

	it("does not decrement below 1", () => {
		render(<Quantity quantity={1} setQuantity={setQuantity} />)
		const decrementButton = screen.getByText("-")
		fireEvent.click(decrementButton)
		expect(setQuantity).not.toHaveBeenCalled()
	})

	it("disables the '-' button when quantity is 1", () => {
		render(<Quantity quantity={1} setQuantity={setQuantity} />)
		const decrementButton = screen.getByText("-")
		expect(decrementButton).toBeDisabled()
	})
})