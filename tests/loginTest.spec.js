import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../test-data/loginData.json";

let loginPage;

test.describe("Automation Login", () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goTo();
    });

    test("TC_01_Valid Login", async () => {
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await loginPage.verifySuccessfulLogin();
    });

    test("TC_06_Invalid Username", async () => {
        await loginPage.login(
            loginData.invalidUser.username,
            loginData.validUser.password
        );

        await loginPage.verifyErrorMessage(
            "Your username is invalid!"
        );
    });

    test("TC_07_Invalid Password", async () => {
        await loginPage.login(
            loginData.validUser.username,
            loginData.invalidPassword.password
        );

        await loginPage.verifyErrorMessage(
            "Your password is invalid!"
        );
    });

    test("TC_09_Empty Credentials", async () => {
        await loginPage.login("", "");

        await loginPage.verifyErrorMessage(
            "Your username is invalid!"
        );
    });
});