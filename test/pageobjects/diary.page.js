import BasePage from './Base.page';

class DiaryPage extends BasePage {
  open() {
    super.open('/diary');
  }

  get createReportBtn() {
    return $('.ant-btn-primary');
  }
}

export default new DiaryPage();
