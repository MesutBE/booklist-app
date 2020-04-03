# Project Book-List

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Development Strategy](#development-strategy)
- [Screen Capture of Project](#screen-capture-of-project)
- [Project Status](#project-status)
- [Contact](#contact)
- [Live Project](https://mesutbe.github.io/calculator-refactor/)

## General info

This week's project is to study the booklist-app tutorial from Traversy Media. In this app you will learn how to use ES6 Classes to organize your app and reuse code.

This project is gathered from [`booklist-app tutorial from Traversy Media`](https://www.youtube.com/watch?v=JaMCxVWtW58) and upgraded step by step.
If you want to see how it is growing see [branches](https://github.com/MesutBE/booklist-app/branches).

What you can do with this application:

- Save your books typing attributes and click add book button.
- You can delete your books.
- All you have done will be saved to local storage.

## Technologies

Project is created with:

- JScript
- HTML5 /CSS3
- Bootstrap
- Font Awesome

## Setup

Clone this repository and start using it with your editor.

## Development Strategy

### 0. Setup

* `index.html` and folder structure with empty files

### 1. DOM

* Create all DOM elements.
* Add external styles `bootstrap` and `fontAwesome`.

### 2. Data & Log

* `data/book.js` & `log.js`

### 3. User Story: Add Book and Display

A user can add books and display them in a a table view.

* Handlers: Create handlers in a class to add books (now from hard coded values) and display them.
* Interactions: add event listener to display added books.

### 4. User Story: Add Book from input

A user can add books from UI using input texts.

* Interactions: add event listener to listen the `form` for `submit action` to add with written book attributes.
* Handlers: Create handler in a class to `clear UI inputs` after submit for adding a book.

### 5. User Story: Delete book

A user can delete a book from the list.

* Interactions: add event listener to listen UI that deletes action.
* Handlers: Create handler in a class to delete the book.

### 6. User Story: Validation and Alerts

A user can see validation alerts.

* Handlers: Create handler in a class to show alerts for the results of actions.
* Create validations to necessary actions.

### 7. User Story: Storage

A user can store books to a local storage

* Create a class for storing data with different methods.
* Create static methods so user can call them directly without having to instantiate the created class.
* Implement them in other actions.

## Screen Capture of Project

![Screenshot from 2020-04-03 12-10-05](https://user-images.githubusercontent.com/59531743/78349569-1673de00-75a4-11ea-81e4-f11d3c8cc90b.png)

## Project Status

Project finished

## Contact

You can contact me using [my repository](https://mesutbe.github.io/) whenever you want.