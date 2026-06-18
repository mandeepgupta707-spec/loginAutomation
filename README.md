# Playwright Login Automation Framework

## Overview

This project automates the login functionality of the Practice Test Automation website using Playwright and JavaScript.

The framework follows the Page Object Model (POM) design pattern to ensure maintainability, reusability, and scalability.

Application Under Test:
https://practicetestautomation.com/practice-test-login/

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Page Object Model (POM)
* JSON Test Data
* HTML Reporting

---

## Framework Features

* Page Object Model (POM) implementation
* Data-driven testing using JSON files
* Reusable page methods
* Positive and negative test scenarios
* HTML test reports
* Automatic screenshots on test failure



---

## Project Structure

```text
playwright-login-framework/
│
├── pages/
│   └── LoginPage.js
│
├── tests/
│   └── login.spec.js
│
├── test-data/
│   └── loginData.json
│
├── Functional_Test_Cases.md
│
├── playwright.config.js
│
├── package.json
│
└── README.md
```

---

## Automated Test Scenarios

### Positive

* TC_01 - Valid Login

### Negative

* TC_06 - Invalid Username
* TC_07 - Invalid Password
* TC_09 - Empty Credentials

---

## Functional Test Coverage

A total of 10 functional test cases have been documented:

* 5 Positive Test Cases
* 5 Negative Test Cases

Refer to `Functional_Test_Cases.md` for details.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd playwright-login-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

---

## Test Reports

Generate and open the HTML report:

```bash
npx playwright show-report
```

Reports are generated automatically after test execution.

---

## Failure Analysis

The framework is configured to capture:

* Screenshots on test failure
* Playwright traces on first retry

These artifacts help in faster root-cause analysis and debugging.

---

## Design Approach

The framework is designed with maintainability in mind:

* Page interactions are separated from test logic using Page Objects.
* Test data is maintained externally in JSON files.
* Assertions are centralized within reusable methods.
* Test cases remain clean, readable, and easy to extend.

---

## Author

Mandeep Singh

Senior QA Automation Engineer Assignment Submission
