# Octopus Frontend Code Test Approach

## Tech Approach

### Setup
- Used the existing Next.js version in the project to demonstrate the ability to work with older versions.
- Selected Sass modules for ease of use and compatibility with the Next.js version.
- Server-side rendered application.

### Server
- Next.js SSR product page using `getServerSideProps`.
- Localhost GraphQL call using `fetch` to retrieve product data.
- Passed data to the product page to render components.

### Client
- The product page houses a series of React UI components.
- The majority are UI components using Sass modules.
- `Layout` handles Next.js `head` metadata and the header/footer.
- Responsive layout using CSS Grid with a two-column layout on desktop and a single-column layout on mobile, as per designs.
- `BasketContext` is used to share basket data between the Header and Product page, allowing `addToBasket` calls.
- `Quantity` component handles user interaction and updates the quantity.
- The `Add to cart` button calls the basket context function to store product data and quantity.

### Accessibility
A few accessibility features were added to demonstrate awareness:
- Skip link.
- ARIA labels on the icon button.
- Minimum button size of 44px, in line with accessibility guidelines.
- Semantic HTML and keyboard navigation.

### Tests
- Existing tests pass with the implemented solution.
- Added component tests for the `Quantity` component as an example, as it is a more complex component.

## Additions
Given more time or in a production scenario, the following features would be included (some are covered in TODOs within the code):
- GraphQL API hosted on a domain rather than using localhost.
- Product listing page linking through to the product page.
- Dynamic product page based on slug/product ID.
- Basket feedback showing the number of items in the basket.
- Ability to view the contents of the basket and remove items.
