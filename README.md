# 🧮 Calculator

A simple and responsive **Calculator Web Application** built using **HTML, CSS, and JavaScript**.

The calculator provides basic arithmetic operations through an easy-to-use button-based interface. It runs directly in a web browser without requiring any external libraries or frameworks.

## ✨ Features

* Addition `+`
* Subtraction `-`
* Multiplication `*`
* Division `/`
* Decimal number support
* Clear entire calculation
* Delete the last entered character
* Calculate expressions using the `=` button
* Error handling for invalid expressions
* Interactive button hover effects
* Clean and minimal calculator interface

## 🛠️ Technologies Used

* **HTML5** for the calculator structure
* **CSS3** for styling and layout
* **JavaScript** for calculator functionality

## 📁 Project Structure

```text
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the calculator's user interface, including:

* Display screen
* Number buttons
* Arithmetic operator buttons
* Clear button
* Delete button
* Equal button
* Decimal button

The HTML file connects the stylesheet through `style.css` and JavaScript through `script.js`.

### `style.css`

Controls the visual appearance of the calculator, including:

* Centered page layout
* Calculator card
* Rounded corners
* Box shadow
* Display styling
* Four-column button grid
* Button hover animation
* Operator and action button colors

The calculator uses a four-column grid for its buttons, with the `0` button spanning two columns and the `=` button spanning two rows.

### `script.js`

Handles the calculator's functionality.

The main functions are:

| Function        | Purpose                                                   |
| --------------- | --------------------------------------------------------- |
| `appendValue()` | Adds numbers, operators, or decimal points to the display |
| `clearResult()` | Resets the calculator display to `0`                      |
| `deleteLast()`  | Removes the last entered character                        |
| `calculate()`   | Evaluates the entered arithmetic expression               |

The calculator also displays `Error` if the entered expression cannot be evaluated.

## 🚀 Getting Started

### 1. Clone or download the project

Download the project files to your computer.

### 2. Keep the files together

Make sure the following files are located in the same folder:

```text
index.html
style.css
script.js
```

### 3. Open the application

Open `index.html` in any modern web browser.

No server, database, package installation, or build process is required.

## 💻 How to Use

1. Click a number button to enter a value.
2. Select an arithmetic operator.
3. Enter the next number.
4. Click `=` to calculate the result.
5. Use `C` to clear the current calculation.
6. Use `DEL` to remove the last entered character.
7. Use `.` when entering decimal values.

### Example

```text
10 + 5
```

Press `=` and the calculator displays:

```text
15
```

## 🎨 User Interface

The calculator is displayed in the center of the browser window against a light-gray background. The calculator itself uses a white card with rounded corners and a subtle shadow.

The interface uses:

* Gray buttons for numbers
* Orange buttons for arithmetic operators and `=`
* Red buttons for `C` and `DEL`
* A large right-aligned display for the current expression/result

## ⚙️ Implementation

User input is appended directly to the calculator display. If the display contains the initial value `0`, the first input replaces it rather than being appended to it.

The calculation function evaluates the expression currently displayed and catches errors to prevent the application from breaking when an invalid expression is entered.

## 🌐 Browser Compatibility

The project is designed to run in modern web browsers that support standard HTML5, CSS3, and JavaScript.

Recommended browsers:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## 🔮 Possible Future Improvements

The current implementation focuses on basic arithmetic functionality. Potential improvements could include:

* Keyboard input support
* Percentage `%` operation
* Plus/minus `±` operation
* Calculation history
* Advanced mathematical functions
* Responsive mobile layout
* Improved expression validation
* Accessibility improvements
* Dark mode
* Avoiding direct `eval()` usage by implementing a safer expression parser

## 📄 License

This project is available for educational and personal use. Add an appropriate open-source license here if you intend to distribute the project publicly.
