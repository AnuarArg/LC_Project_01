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

  get line(){
    return  $('hr')
  }

  get lastReportDiagram(){
    return $$('.recharts-cartesian-axis-tick-value')[14]
  }

  get reportStrDiagram(){
    return $(".recharts-curve.recharts-line-curve")
  }

  get chartTooltipLine() {
    return $(".recharts-layer.recharts-line");
  }

  get chartTextMorale() {
    return $$(".recharts-tooltip-item")[1];
  }

  get chartTextHours() {
    return $$(".recharts-tooltip-item")[0];
  }




  get lastReportProfPage(){
    return $$('//div[2]/div/div[2]/div')[0]
  }
  get reportDate(){
    return $$('//div[1][@class="ant-row"]')
  }


  get reportText1(){
    return $$('.ant-row.mb-4')[0]
  }


  get likeButton(){
    return $$('//span[contains(text(),"Like")]');
  }


}
export default new ProfilePage();
