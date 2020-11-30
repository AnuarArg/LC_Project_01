import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import DiaryPage from '../../../pageobjects/diary.page';
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';
const ncp = require("copy-paste");
const should = require('should');

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



    it('Verify that menu subtitle label 2 "I understood everything" is present', () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverything.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 2 text = "I understood everything"', () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverything.getText().includes(drawerMenu.understood)).toEqual(true);
    });

    it('Verify that menu subtitle label 2 "I understood everything" subtext is present', () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 2 "I understood everything" subtext is correct', () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.getText()).toEqual(drawerMenu.understoodSubTXT);
    });

    it('Verify that menu subtitle label 2 "I understood everything" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverythingCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 2 "I understood everything" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverythingCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 3 "Helped classmates" is present', () => {
      expect(ReportDrawerMenu.RDLHelpedClassmates.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 3 text = "Helped classmates"', () => {
      expect(ReportDrawerMenu.RDLHelpedClassmates.getText().includes(drawerMenu.helped)).toEqual(true);
    });

    it('Verify that menu subtitle label 3 "Helped classmates" subtext is present', () => {
      expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 3 "Helped classmates" subtext is correct', () => {
      expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.getText()).toEqual(drawerMenu.helpedSubTXT);
    });

    it('Verify that menu subtitle label 3 "Helped classmates" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLHelpedClassmatesCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 3 "Helped classmates" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLHelpedClassmatesCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 4 "Watched lectures" is present', () => {
      expect(ReportDrawerMenu.RDLWatchedLectures.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 4 text = "Watched lectures"', () => {
      expect(ReportDrawerMenu.RDLWatchedLectures.getText().includes(drawerMenu.watched)).toEqual(true);
    });

    it('Verify that menu subtitle label 4 "Watched lectures" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLWatchedLecturesCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 4 "Watched lectures" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLWatchedLecturesCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 5 "Read documentation" is present', () => {
      expect(ReportDrawerMenu.RDLRead.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 5 text = "Read documentation"', () => {
      expect(ReportDrawerMenu.RDLRead.getText().includes(drawerMenu.read)).toEqual(true);
    });

    it('Verify that menu subtitle label 5 "Read documentation" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLReadCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 5 "Read documentation" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLReadCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 6 "Code practice" is present', () => {
      expect(ReportDrawerMenu.RDLCode.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 6 text = "Code practice"', () => {
      expect(ReportDrawerMenu.RDLCode.getText().includes(drawerMenu.code)).toEqual(true);
    });

    it('Verify that menu subtitle label 6 "Code practice" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLCodeCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 6 "Code practice" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLCodeCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 7 "Quiz practice" is present', () => {
      expect(ReportDrawerMenu.RDLQuiz.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 7 text = "Quiz practice"', () => {
      expect(ReportDrawerMenu.RDLQuiz.getText().includes(drawerMenu.quiz)).toEqual(true);
    });

    it('Verify that menu subtitle label 7 "Quiz practice" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLQuizCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 7 "Quiz practice" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLQuizCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 8 "Interview preparation" is present', () => {
      expect(ReportDrawerMenu.RDLInterviewPrep.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 8 text = "Interview preparation"', () => {
      expect(ReportDrawerMenu.RDLInterviewPrep.getText().includes(drawerMenu.interviewPrep)).toEqual(true);
    });

    it('Verify that menu subtitle label 8 "Interview preparation" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLInterviewPrepCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 8 "Interview preparation" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLInterviewPrepCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 9 "Recruiter phone call" is present', () => {
      expect(ReportDrawerMenu.RDLRecruiter.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 9 text = "Recruiter phone call"', () => {
      expect(ReportDrawerMenu.RDLRecruiter.getText().includes(drawerMenu.recruiter)).toEqual(true);
    });

    it('Verify that menu subtitle label 9 "Recruiter phone call" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLRecruiterCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 9 "Recruiter phone call" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLRecruiterCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 10 "Interview technical screen" is present', () => {
      expect(ReportDrawerMenu.RDLInterviewTech.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 10 text = "Interview technical screen"', () => {
      expect(ReportDrawerMenu.RDLInterviewTech.getText().includes(drawerMenu.interviewTech)).toEqual(true);
    });

    it('Verify that menu subtitle label 10 "Interview technical screen" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLInterviewTechCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 10 "Interview technical screen" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLInterviewTechCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 11 "Interview onsite" is present', () => {
      expect(ReportDrawerMenu.RDLInterviewOnsite.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 11 text = "Interview onsite"', () => {
      expect(ReportDrawerMenu.RDLInterviewOnsite.getText().includes(drawerMenu.interviewOnsite)).toEqual(true);
    });

    it('Verify that menu subtitle label 11 "Interview onsite" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLInterviewOnsiteCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 11 "Interview onsite" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLInterviewOnsiteCB.isClickable()).toEqual(true);
    });



    it('Verify that menu subtitle label 12 "Got a job offer" is present', () => {
      expect(ReportDrawerMenu.RDLJobOffer.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 12 text = "Got a job offer"', () => {
      expect(ReportDrawerMenu.RDLJobOffer.getText().includes(drawerMenu.jobOffer)).toEqual(true);
    });

    it('Verify that menu subtitle label 12 "Got a job offer" checkbox is present', () => {
      expect(ReportDrawerMenu.RDLJobOfferCB.isDisplayed()).toEqual(true);
    });

    it('Verify that menu subtitle label 12 "Got a job offer" checkbox is clickable', () => {
      expect(ReportDrawerMenu.RDLJobOfferCB.isClickable()).toEqual(true);
    });



    it('Verify that field morale is present', () => {
      expect(ReportDrawerMenu.RDMoraleField.isDisplayed()).toEqual(true);
    });

    it('Verify that field morale is clickable', () => {
      expect(ReportDrawerMenu.RDMoraleField.isClickable()).toEqual(true);
    });

    it('Verify that field morale text PlaceHolder is correct', () => {
      expect(ReportDrawerMenu.RDMoraleField.getText()).toEqual(drawerMenu.moralePlaceholder);
    });

    it('Verify that field morale Sub text is present', () => {
      expect(ReportDrawerMenu.RDMoraleFieldSubTXT.isDisplayed()).toEqual(true);
    });

    it('Verify that field morale Sub text is correct', () => {
      expect(ReportDrawerMenu.RDMoraleFieldSubTXT.getText()).toEqual(drawerMenu.moralePlaceholderSubTXT);
    });



    it('Verify that field hours is present', () => {
      expect(ReportDrawerMenu.RDHoursField.isDisplayed()).toEqual(true);
    });

    it('Verify that field hours is clickable', () => {
      expect(ReportDrawerMenu.RDHoursField.isClickable()).toEqual(true);
    });

    it('Verify that field hours text PlaceHolder is correct', () => {
      expect(ReportDrawerMenu.RDHoursField.getText()).toEqual(drawerMenu.hoursPlaceholder);
    });

    it('Verify that field hours Sub text is present', () => {
      expect(ReportDrawerMenu.RDHoursFieldSubTXT.isDisplayed()).toEqual(true);
    });

    it('Verify that field hours Sub text is correct', () => {
      expect(ReportDrawerMenu.RDHoursFieldSubTXT.getText()).toEqual(drawerMenu.hoursPlaceholderSubTXT);
    });



    it('Verify that field day is present', () => {
      expect(ReportDrawerMenu.RDDayField.isDisplayed()).toEqual(true);
    });

    it('Verify that field day is clickable', () => {
      expect(ReportDrawerMenu.RDDayField.isClickable()).toEqual(true);
    });

    it('Verify that field day text PlaceHolder is correct', () => {
      expect(ReportDrawerMenu.RDDayField.getAttribute("placeholder")).toEqual(drawerMenu.dayPlaceholder);
    });

    it('Verify that field day Sub text is present', () => {
      expect(ReportDrawerMenu.RDDayFieldSubTXT.isDisplayed()).toEqual(true);
    });

    it('Verify that field day Sub text is correct', () => {
      expect(ReportDrawerMenu.RDDayFieldSubTXT.getText()).toEqual(drawerMenu.dayPlaceholderSubTXT);
    });


    it('Verify that button Create is present', () => {
      expect(ReportDrawerMenu.CreateBtn.isDisplayed()).toEqual(true);
    });

    it('Verify that button Create is clickable', () => {
      expect(ReportDrawerMenu.CreateBtn.isClickable()).toEqual(true);
    });

    it('Verify that button Create is correct', () => {
      expect(ReportDrawerMenu.CreateBtn.getText()).toEqual(drawerMenu.createBtn);
    });



    it('put a check on the checkbox', () => {
      const links = $$('.ant-checkbox')
      links.forEach((el) => {
        el.click()
      })
    });


    it('Verify we can put Random check on the checkbox', () => {
      for (let i = 0; i < ReportDrawerMenu.Checkbox.length; i++) {
       ReportDrawerMenu.Checkbox[ReportDrawerMenu.RandomCheckbox(0, 11)].click()
      }
    });


    it('Verify we can select Random Morale', () => {
      ReportDrawerMenu.RDMoraleField.click();
      ReportDrawerMenu.RDMoraleDropDownMenu[ReportDrawerMenu.RandomCheckbox(0, 7)].click();// need 9
    })



    it('Verify we can select Random Hours', () => {
      ReportDrawerMenu.RDHoursField.click();
      ReportDrawerMenu.RDHoursDropDownMenu[ReportDrawerMenu.RandomCheckbox(10, 17)].click();// need 19
    })



    it(' TC41 Verify that you can input 30 characters in the field "How was your day?"', () => {
      ReportDrawerMenu.RDDayField.click();
      let string30 = '';
      for (let i = 1; i <= 30; i++) {
        string30 += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(32, 120));
      }
      ReportDrawerMenu.RDDayField.addValue(string30);
      const text = ReportDrawerMenu.RDDayField.getValue();
      expect(text.length).toEqual(string30.length);

    })

    it(' TC42 Verify that you could input 300 characters in the field "How was your day?"', () => {
      ReportDrawerMenu.RDDayField.click();
      let string300 = '';
      for (let i = 0; i <300; i++) {
        string300 += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(32, 120));
      }
      ReportDrawerMenu.RDDayField.setValue(string300);
      const text = ReportDrawerMenu.RDDayField.getValue();
      expect(text.length).toEqual(string300.length);
    })

    xit('TC43 Verify that you could not input 29 characters in the field "How was your day?"', () => {

      ReportDrawerMenu.RDDayField.click();
      let string29 = '';
      for (let i = 1; i <= 29; i++) {
        string29 += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(32, 120));
      }
      ReportDrawerMenu.RDDayField.setValue(string29);
      expect(ReportDrawerMenu.DayAlertText.isDisplayed()).toEqual(true);
    })

    it('Verify that alert message is right ', () => {

      ReportDrawerMenu.RDDayField.click();
      let string29 = '';
      for (let i = 1; i <= 29; i++) {
        string29 += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(32, 120));
      }
      ReportDrawerMenu.RDDayField.setValue(string29);

      const text = ReportDrawerMenu.DayAlertText.getText();
      expect(text).toEqual(drawerMenu.dayAlert);
    });

    it('Verify that report is created ', () => {
      for (let i = 0; i < ReportDrawerMenu.Checkbox.length; i++) {
        ReportDrawerMenu.Checkbox[ReportDrawerMenu.RandomCheckbox(0, 11)].click()
      };
      ReportDrawerMenu.RDMoraleField.click();
      ReportDrawerMenu.RDMoraleDropDownMenu[ReportDrawerMenu.RandomCheckbox(0, 7)].click();// need 9

      ReportDrawerMenu.RDHoursField.click();
      ReportDrawerMenu.RDHoursDropDownMenu[ReportDrawerMenu.RandomCheckbox(10, 17)].click();// need 19

      ReportDrawerMenu.RDDayField.click();
      ReportDrawerMenu.RDDayField.setValue('first 11112222233334444555666777');

      ReportDrawerMenu.CreateBtn.click();
      browser.pause(10000)
      //expect(text).toEqual(drawerMenu.dayAlert);
    });





    // it('TC44 Verify that you could not use copy past for inputing uncorrect numbers of characters ' +
    //     '(less then 30) in the field "How was your day?"', () => {
    //
    //   ncp.copy('some text', function () {
    //     ReportDrawerMenu.RDDayField
    //       }
    //   )
    //
    // })
  });

});


