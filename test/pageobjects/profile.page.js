import BasePage from './Base.page';

class ProfilePage extends BasePage {
  get topMenuDiary() {
    return $$('.item')[2];
  }

  get createReportBtn() {
    return $('[data-qa=dailyReportsBtn]');
  }

  get dailyReportsLabel() {
    return $('[data-qa="dailyReports"]');
  }

  get dailyReportsCounter() {
    return $('.ml-2');
  }
}
export default new ProfilePage();
