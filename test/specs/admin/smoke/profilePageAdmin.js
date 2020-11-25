import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';


import user from '../../../../data/users.data';
import { topMenu, profilePage, diaryPage } from '../../../../data/expected.data';

describe('VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS', () => {
  describe('VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS IN TOP MENU FOR ADMIN', () => {
    before(() => {
      LoginPage.open();
      browser.maximizeWindow();
      browser.deleteAllCookies();
      LoginPage.login(user.admin.email, user.admin.password);
      ProfilePage.createReportBtn.waitForDisplayed(10000);
    });

    it('Verify that diary tab exist in the top menu', () => {
      expect(ProfilePage.topMenuDiary.isDisplayed()).toEqual(true);
    });

    it('Verify that diary tab is clickable in the top menu', () => {
      expect(ProfilePage.topMenuDiary.isClickable()).toEqual(true);
    });

    it("Verify that diary tab text = 'Diary' in the top menu", () => {
      expect(ProfilePage.topMenuDiary.getText()).toEqual(topMenu.Diary);
    });

    it('Verify that diary tab in the top menu redirect to diary page', () => {
      ProfilePage.topMenuDiary.click();
      expect(browser.getUrl()).toEqual(diaryPage.diaryUrl);
    });
  });

  describe('VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS IN DOM FOR ADMIN', () => {
    before(() => {
      LoginPage.open();
      browser.maximizeWindow();
      browser.deleteAllCookies();
      LoginPage.login(user.admin.email, user.admin.password);
      ProfilePage.createReportBtn.waitForDisplayed();
    });

    it('Verify that create day report button exist on profile page', () => {
      expect(ProfilePage.createReportBtn.isDisplayed()).toEqual(true);
    });

    it('Verify that create day report button is clickable on profile page', () => {
      expect(ProfilePage.createReportBtn.isClickable()).toEqual(true);
    });

    it("Verify that create day report button text = 'Create day report' on profile page", () => {
      expect(ProfilePage.createReportBtn.getText()).toEqual(profilePage.createBtn);
    });

    it('Verify that label Daily reports  exist on profile page ', () => {
      expect(ProfilePage.dailyReportsLabel.isDisplayed()).toEqual(true);
    });

    it("Verify that label Daily reports text =  'Daily reports' on profile page ", () => {
      expect(ProfilePage.dailyReportsLabel.getText().includes(profilePage.dailyReportsLabelText)).toEqual(true);
    });

    it('Verify that label Daily reports counter exists on profile page ', () => {
      expect(ProfilePage.dailyReportsCounter.isDisplayed()).toEqual(true);
    });

    it('Verify that label Daily reports counter exists on profile page ', () => {
      expect(ProfilePage.dailyReportsCounter.isDisplayed()).toEqual(true);
    });

  });
});
