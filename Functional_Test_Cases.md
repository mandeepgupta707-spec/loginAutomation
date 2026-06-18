# Functional Test Cases

## Positive Test Cases

### TC_01 - Valid Login

* Enter valid username and password.
* Click the Submit button.
* Verify user is logged in successfully.

### TC_02 - Success Message Verification

* Login with valid credentials.
* Verify "Logged In Successfully" message is displayed.

### TC_03 - Successful Login Redirect

* Login with valid credentials.
* Verify user is redirected to the logged-in page.

### TC_04 - Logout Button Visibility

* Login with valid credentials.
* Verify Logout button is visible.

### TC_05 - Login Page Elements

* Open the login page.
* Verify Username field, Password field, and Submit button are displayed.

## Negative Test Cases

### TC_06 - Invalid Username

* Enter an invalid username and valid password.
* Click Submit.
* Verify appropriate error message is displayed.

### TC_07 - Invalid Password

* Enter a valid username and invalid password.
* Click Submit.
* Verify appropriate error message is displayed.

### TC_08 - Invalid Username and Password

* Enter invalid username and invalid password.
* Click Submit.
* Verify login is unsuccessful.

### TC_09 - Empty Credentials

* Leave Username and Password fields empty.
* Click Submit.
* Verify login is unsuccessful.

### TC_10 - Special Characters in Username

* Enter special characters in the Username field.
* Enter a password.
* Click Submit.
* Verify login is unsuccessful.

## Automated Test Cases

* TC_01 - Valid Login
* TC_06 - Invalid Username
* TC_07 - Invalid Password
* TC_09 - Empty Credentials
