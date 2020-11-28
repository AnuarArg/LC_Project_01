import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import DiaryPage from '../../../pageobjects/diary.page';
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';

import user from '../../../../data/users.data';
import { topMenu, profilePage, diaryPage, digits, drawerMenu } from '../../../../data/expected.data';

describe('REPORT DRAWER MENU FOR LEARNER', () => {
  before(() => {
    LoginPage.open();
    browser.maximizeWindow();
    LoginPage.login(user.learner.email, user.learner.password);
    ProfilePage.createReportBtn.click();
  });

  describe('VERIFY THAT, FOR LEARNER, ALL ELEMENTS ARE PRESENT AND CORRECT FOR DRAWER MENU', () => {
    it('Verify that menu title is present', () => {
      expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(true);
    });

    it('Verify that menu title = "Create day report"', () => {
      expect(ReportDrawerMenu.RDTitle.getText()).toEqual(drawerMenu.title);
    });


    it('Verify that menu subtitle is present', () => {
      expect(ReportDrawerMenu.RDSubTitle.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle = "Marks to your daily report"', () => {
      expect(ReportDrawerMenu.RDSubTitle.getText()).toEqual(drawerMenu.subTitle);
    });

    it('Verify that menu subtitle label 1 "I need help" is present', () => {
      expect(ReportDrawerMenu.RDLINeedHelp.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 1 text = "I need help"', () => {
      expect(ReportDrawerMenu.RDLINeedHelp.getText().includes(drawerMenu.iNeedHelp)).toEqual(true);
    });

    it('Verify that menu subtitle label 1 "I need help" subtext is present', () => {
      expect(ReportDrawerMenu.RDLINeedHelpSubTXT.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 1 "I need help" subtext is correct', () => {
      expect(ReportDrawerMenu.RDLINeedHelpSubTXT.getText()).toEqual(drawerMenu.iNeedHelpSubTXT);
    });

    it('Verify that menu subtitle label 1 "I need help" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLINeedHelpCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 1 "I need help" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLINeedHelpCB.isClickable()).toEqual(true);
    });



  });
});
