# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).
This project demonstrates a simple form with input validation in React. The form includes fields for name, last name, email, and password, each with specific validation criteria.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./assets/active-states.png)

### Links

- Live Site Url: [https://intro-component-with-sign-up-form-tan-gamma.vercel.app/]

## Features

- Form with four input fields: name, last name, email, and password.
- Validation for each input field:
  - Name and last name: Required and must be at least 2 characters long.
  - Email: Required and must be in a valid email format.
  - Password: Required, must be at least 8 characters long, and contain uppercase letters, lowercase letters, numbers, and special characters.
- Display of validation error messages.
- Success message displayed upon successful form submission.

## Challenges and Learnings

- **State Management for Validation:** One of the challenges was managing the state for both input values and validation errors. Learning to use React's `useState` hook to track these states and update them accordingly was a key part of the project.
- **Dynamic Validation:** Implementing dynamic validation logic that updates in real-time as the user interacts with the form taught me the importance of responsive feedback in user interfaces.
- **Regular Expressions for Format Validation:** Using regular expressions to validate the email and password formats was a learning curve. It highlighted the power of regex in string pattern matching and its usefulness in form validation.
- **Controlled Components:** Understanding controlled components in React and how they allow for direct control of form inputs through state was crucial. This concept was pivotal in ensuring that the form's state always accurately represents the input fields.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- React Hooks for state management and form handling

# Contributing

Contributions to this project are welcome. Please feel free to fork the repository, make changes, and submit a pull request.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
2. ```bash
   git clone https://github.com/your-username/form-validation-project.git

   ```

3. cd form-validation-project
4. npm install
5. npm start
