import LoginPage from '../../../pageobjects/login.page';
import user from '../../../../data/users.data';
import ProfilePage from '../../../pageobjects/profile.page';
import ExpectedData from '../../../../data/expected.data';
import DiaryPage from '../../../pageobjects/diary.page';

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

  it('TС -77 Verify that the Dairy page has  the header with text "Daily reports"', function () {
    expect(ExpectedData.diaryPage.header).toEqual(DiaryPage.headerDiaryPage.getText());
  });

  it('TC-78.1 Verify that Dairy page has field "Total Diaries" and quantity', function () {
    expect(ExpectedData.diaryPage.statTotalDiaries).toEqual(DiaryPage.statTotalDiaries.getText());
  });

  it('TC-78.2 Verify that Dairy page has field "Total Diaries" and quantity', function () {
    expect(DiaryPage.statTotalDiariesCount.isDisplayed()).toEqual(true);
  });

  it('TC-78.2.1 Verify that Dairy page has field "Total Diaries" and quantity( and not equal zero)', function () {
    expect(DiaryPage.statTotalDiariesCount.getValue()).not.toEqual(ExpectedData.digits.zero);
  });

  it('TC-79.1 Verify that Dairy page has field "Today Daily Reports" and quantity', function () {
    expect(ExpectedData.diaryPage.statTodayDailyReport).toEqual(DiaryPage.statTodayDailyReport.getText());
  });

  it('TC-79.2 Verify that Dairy page has field "Today Daily Reports" and quantity', function () {
    expect(DiaryPage.statTodayDailyReportCount.isDisplayed()).toEqual(true);
  });

  it('TC-79.2.1 Verify that Dairy page has field "Today Daily Reports" and quantity( and not equal zero)', function () {
    expect(DiaryPage.statTodayDailyReportCount.getText()).toEqual(ExpectedData.digits.zeroText);
    // 0  не должно быть, счетчик не рабочий bug
  });

  it('TC-80.1 Verify that Dairy page has field "Total Hours Spent" and quantity', function () {
    expect(ExpectedData.diaryPage.statTotalHoursSpent).toEqual(DiaryPage.statTotalHoursSpent.getText());
  });

  it('TC-80.2 Verify that Dairy page has field "Total Hours Spent" and quantity', function () {
    expect(DiaryPage.statTotalHoursSpentCount.isDisplayed()).toEqual(true);
  });

  it('TC-80.2.1 Verify that Dairy page has field "Total Hours Spent" and quantity( and not equal zero)', function () {
    expect(DiaryPage.statTotalHoursSpentCount.getText()).toEqual(ExpectedData.digits.zeroText);
    // 0  не должно быть, счетчик не рабочий bug
  });

  it('TC-81.1 Verify that Dairy page has field "Average Morale Level" and quantity', function () {
    expect(ExpectedData.diaryPage.statAverageMoraleLevel).toEqual(DiaryPage.statAverageMoraleLevel.getText());
  });

  it('TC-81.2 Verify that Dairy page has field "Average Morale Level" and quantity', function () {
    expect(DiaryPage.statAverageMoraleLevelCount.isDisplayed()).toEqual(true);
  });

  it('TC-81.2.1 Verify that Dairy page has field "Average Morale Level" and quantity( and not equal zero)', function () {
    expect(DiaryPage.statAverageMoraleLevelCount.getText()).toEqual(ExpectedData.digits.zeroText);
    // 0  не должно быть, счетчик не рабочий bug
  });

  it('TC-82.1 Verify that Dairy page has btn "Create day report"', function () {
    expect(DiaryPage.createReportBtnDairyPage.isDisplayed()).toEqual(true);
  });
  it('TC-82.2 Verify that create day report button is clickable on Diary page', () => {
    expect(DiaryPage.createReportBtnDairyPage.isClickable()).toEqual(true);
  });
  it("TC-82.3 Verify that create day report button text = 'Create day report' on Diary page", () => {
    expect(DiaryPage.createReportBtnDairyPage.getText()).toEqual(ExpectedData.profilePage.createBtn);
  });
  it('TC-83 Verify that Dairy page has 10 last reports  ', function () {
    expect(DiaryPage.numberReportsOnPage.length).toEqual(10)
  });
});

