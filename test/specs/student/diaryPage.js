import LoginPage from "../../pageobjects/login.page";
import user from "../../../data/users.data";
import ProfilePage from "../../pageobjects/profile.page";
import ExpectedData from "../../../data/expected.data";


describe('VERIFY THAT Dairy page for student role', () => {
    before(() => {
        LoginPage.open();
        browser.maximizeWindow();
        browser.deleteAllCookies();
        LoginPage.login(user.student.email, user.student.password);
        ProfilePage.createReportBtn.waitForDisplayed();
        ProfilePage.topMenuDiary.click();
    });

    it('TC-75 Verify that url for Dairy page is https://stage.localcoding.us/diary', function () {
        expect(browser.getUrl()).toEqual(ExpectedData.diaryPage.diaryUrl);
    });

    it('ЕС -77 Verify that the Dairy page has  the header with text "Daily reports"', function () {
        expect(ExpectedData)
        
    });


});