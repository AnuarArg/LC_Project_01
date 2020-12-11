class ReportDrawerMenu {
  //RDL = Report Drawer Label
  //CB = Check Box


  get XButton() {
    return $('.anticon-close');
  }

  get RDTitle() {
    return $('.ant-drawer-title');
  }

  get RDSubTitle() {
    return $('h6');
  }

  get RDLINeedHelp() {
    return $$('.ant-checkbox-wrapper')[0];
  }

  get RDLINeedHelpSubTXT() {
    return $$('.text-secondary')[0];
  }

  get RDLINeedHelpCB() {
    return $$('.ant-checkbox')[0];
  }

  get RDLIUnderstoodEverything() {
    return $$('.ant-checkbox-wrapper')[1];
  }

  get RDLIUnderstoodEverythingSubTXT() {
    return $$('.text-secondary')[1];
  }

  get RDLIUnderstoodEverythingCB() {
    return $$('.ant-checkbox')[1];
  }

  get RDLHelpedClassmates() {
    return $$('.ant-checkbox-wrapper')[2];
  }

  get RDLHelpedClassmatesSubTXT() {
    return $$('.text-secondary')[2];
  }

  get RDLHelpedClassmatesCB() {
    return $$('.ant-checkbox')[2];
  }

  get RDLWatchedLectures() {
    return $$('.ant-checkbox-wrapper')[3];
  }

  get RDLWatchedLecturesCB() {
    return $$('.ant-checkbox')[3];
  }

  get RDLRead() {
    return $$('.ant-checkbox-wrapper')[4];
  }

  get RDLReadCB() {
    return $$('.ant-checkbox')[4];
  }

  get RDLCode() {
    return $$('.ant-checkbox-wrapper')[5];
  }

  get RDLCodeCB() {
    return $$('.ant-checkbox')[5];
  }

  get RDLQuiz() {
    return $$('.ant-checkbox-wrapper')[6];
  }

  get RDLQuizCB() {
    return $$('.ant-checkbox')[6];
  }

  get RDLInterviewPrep() {
    return $$('.ant-checkbox-wrapper')[7];
  }

  get RDLInterviewPrepCB() {
    return $$('.ant-checkbox')[7];
  }

  get RDLRecruiter() {
    return $$('.ant-checkbox-wrapper')[8];
  }

  get RDLRecruiterCB() {
    return $$('.ant-checkbox')[8];
  }

  get RDLInterviewTech() {
    return $$('.ant-checkbox-wrapper')[9];
  }

  get RDLInterviewTechCB() {
    return $$('.ant-checkbox')[9];
  }

  get RDLInterviewOnsite() {
    return $$('.ant-checkbox-wrapper')[10];
  }

  get RDLInterviewOnsiteCB() {
    return $$('.ant-checkbox')[10];
  }

  get RDLJobOffer() {
    return $$('.ant-checkbox-wrapper')[11];
  }

  get RDLJobOfferCB() {
    return $$('.ant-checkbox')[11];
  }

  get RDMoraleField() {
    return $$('.ant-form-item-control-input')[1];
  }

  get RDMoraleDropDownMenu() {
    return $$('.ant-select-item-option-content')
  }

  get RDMoraleFieldSubTXT() {
    return $$('.ant-form-item-extra')[0];
  }

  get RDHoursField() {
    return $$('.ant-form-item-control-input')[2];
  }

  get RDHoursDropDownMenu() {
    return $$('.ant-select-item-option-content')
  }

  get RDHoursFieldSubTXT() {
    return $$('.ant-form-item-extra')[1];
  }

  get RDDayField() {
    return $('#description');
  }

  get RDDayFieldSubTXT() {
    return $$('.ant-form-item-extra')[2];
  }

  get DayAlertText() {
    return $('.ant-form-item-explain');
  }

  get DayAlerts(){
    return $$('.ant-form-item-explain');
  }

  get CreateBtn() {
    return $$('.ant-btn.ant-btn-primary')[2];
  }

  get Checkbox() {
    return $$('.ant-checkbox');
  }

  get CheckboxChecked() {
    return $$('.ant-checkbox-checked');
  }

  get MoraleSelect() {
    return $$('.ant-select-selection-item')[0];
  }

  // get MoraleSelect() {
  //   return $('.ant-select-selection-item');
  // }

  get HoursSelect() {
    return $$('.ant-select-selection-item')[1];
  }



  RandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random() * (max - min)) + min;
  }


}


export default new ReportDrawerMenu();

