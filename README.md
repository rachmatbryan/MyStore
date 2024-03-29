# Online Shop Application

This is an e-commerce application developed with Angular. It allows users to browse products, add them to their shopping cart, and proceed through the checkout process.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js - [Download & Install Node.js](https://nodejs.org/en/)
- Angular CLI - Install it globally using `npm install -g @angular/cli`

## Components

- `ProductList`: Displays a list of products from which the user can add items to their cart.
- `ProductDetail`: Provides detailed information about a specific product.
- `ShoppingCart`: Shows the items currently in the user's cart.
- `Checkout`: Allows the user to enter their information and complete their purchase.
- `NavBar`: Utility component that provides navigation between the different parts of the application.

## Pages

- Products Page: Displays the available products for purchase.
- Checkout Page: Where the user can fill in details and place an order.
- Confirmation Page: Displays a success message after a successful purchase.

## Services

- `CartService`: Manages the shopping cart, including adding or removing items.
- `CheckoutService`: Handles the checkout process, including form submission and order confirmation.
- `ProductService`: Retrieves product information from a server and provides it to the application.

## Dependencies

- `HttpClientModule`: Allows the application to make HTTP requests.
- `FormsModule`: Enables template-driven form functionality.
- `Bootstrap`: Provides styling and responsive layout.
- `FlexLayoutModule`: Enables flexible and responsive grid layouts.
- `RxJS`: Provides reactive programming support.

## Installation

To set up and run the online shop application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies:

```bash
npm install
```

3. After the dependencies are installed, you can start the development server with Angular CLI:

```bash
ng serve
```

4. Open your browser and go to `http://localhost:4200/` to view the application.

## Usage

Navigate through the application using the navigation bar at the top. Choose a product, add it to the cart, modify the cart content, and proceed to checkout when you're ready to purchase.

## Built With

- [Angular](https://angular.io/): A platform for building mobile and desktop web applications.
- [Angular CLI](https://cli.angular.io/): A command-line interface tool used to initialize, develop, scaffold, and maintain Angular applications.
