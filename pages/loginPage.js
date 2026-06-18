import {expect} from "@playwright/test"

export class LoginPage {
    constructor(page){
        this.page = page ;
        this.usernameInput = page.getByLabel("Username");
        this.passwordInput = page.getByLabel("Password");
        this.submitButton = page.getByRole("button" , {name : "Submit"});
        this.successMessage = page.locator(".post-title");
        this.errorMessage = page.locator(".show");
    }
     async goTo(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
     }
    async login(username , password )
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
       
    }

     async verifySuccessfulLogin() {
        await expect(this.successMessage).toHaveText(
            "Logged In Successfully"
        );
         await expect(this.page)
            .toHaveURL(/logged-in-successfully/);
    }

    async verifyErrorMessage(message) {
        await expect(this.errorMessage).toContainText(message);
    }

}