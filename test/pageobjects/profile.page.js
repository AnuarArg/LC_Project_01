import BasePage from './Base.page';

class ProfilePage extends BasePage {
  get topMenuDiary() {
    return $$('.item')[2];
  }

  get topMenuDiaryLearner() {
    return $$('.item')[1];
  }

  get chartField() {
    return $('.ant-col-offset-4');
  }

  get chartFieldName() {
    return $$('h5')[1];
  }

  get btnSkip() {
    return $('.text-right');
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

  get reportCheckBox(){
    //return $$('.ant-row')[7];
    return $$("//div[2]/div[2]/span[1]/span")
  }

  get profileName(){
    return $('.mb-auto.mt-auto')
  }

  get diagram() {
    return $$('.recharts-surface')[0]
  }

  get diagramTitle(){
    return $$('h5')[1]
  }

}
export default new ProfilePage();
