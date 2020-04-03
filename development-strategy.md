# Book-List: development strategy

Building this site one step at a time

## 0. Setup

* `index.html` and folder structure with empty files

## 1. DOM

* Create all DOM elements.
* Add external styles `bootstrap` and `fontAwesome`.

## 2. Data & Log

* `data/book.js` & `log.js`

## 3. User Story: Add Book and Display

A user can add books and display them in a a table view.

* Handlers: Create handlers in a class to add books (now from hard coded values) and display them.
* Interactions: add event listener to display added books.

## 4. User Story: Add Book from input

A user can add books from UI using input texts.

* Interactions: add event listener to listen the `form` for `submit action` to add with written book attributes.
* Handlers: Create handler in a class to `clear UI inputs` after submit for adding a book.

## 5. User Story: Delete book

A user can delete a book from the list.

* Interactions: add event listener to listen UI that deletes action.
* Handlers: Create handler in a class to delete the book.

## 6. User Story: Validation and Alerts

A user can see validation alerts.

* Handlers: Create handler in a class to show alerts for the results of actions.
* Create validations to necessary actions.

## 7. User Story: Storage

A user can store books to a local storage

* Create a class for storing data with different methods.
* Create static methods so user can call them directly without having to instantiate the created class.
* Implement them in other actions.
