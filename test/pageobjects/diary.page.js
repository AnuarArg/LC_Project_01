import BasePage from './Base.page';

class DiaryPage extends BasePage {
  get createReportBtn() {
    return $('.ant-btn-primary');
  }

  get headerDiaryPage() {
    return $('h1');
  }

  get statTotalDiaries() {
    return $('.ant-statistic-title');
  }

  get statTotalDiariesCount() {
    return $$('.ant-statistic-content-value-int')[0];
  }

  get statTodayDailyReport() {
    return $$('.ant-statistic-title')[1];
  }

  get statTodayDailyReportCount() {
    return $$('.ant-statistic-content-value-int')[1];
  }

  get statTotalHoursSpent() {
    return $$('.ant-statistic-title')[2];
  }

  get statTotalHoursSpentCount() {
    return $$('.ant-statistic-content-value-int')[2];
  }

  get statAverageMoraleLevel() {
    return $$('.ant-statistic-title')[3];
  }

  get statAverageMoraleLevelCount() {
    return $$('.ant-statistic-content-value-int')[3];
  }

  get createReportBtnDairyPage() {
    return $('.ant-btn.ant-btn-primary');
  }
  get numberReportsOnPage() {
    return $$('.col-md-8');
  }

  open() {
    super.open('/diary');
  }
}

export default new DiaryPage();
