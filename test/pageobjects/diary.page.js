import BasePage from './Base.page';

class DiaryPage extends BasePage {
  get createReportBtn() {
    return $('.ant-btn-primary');
  }

  get headerDiaryPage() {
    return $('h1');
  }

  open() {
    super.open('/diary');
  }
}

export default new DiaryPage();
