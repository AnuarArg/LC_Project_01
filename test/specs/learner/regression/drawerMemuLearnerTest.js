import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import DiaryPage from '../../../pageobjects/diary.page';
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';


import user from '../../../../data/users.data';
import { topMenu, profilePage, diaryPage, digits, drawerMenu } from '../../../../data/expected.data';

describe('DRAWER MENU', () => {
    it('TC-5 Verify that Create day report subpage is appeared when click on the button Create day report on the user page profile', () => {
        LoginPage.open();
        browser.maximizeWindow();
        LoginPage.login(user.learner.email, user.learner.password);
        ProfilePage.createReportBtn.click();
        expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(true);
    });

    before(() => {
        LoginPage.open();
        browser.maximizeWindow();
        LoginPage.login(user.learner.email, user.learner.password);
        ProfilePage.createReportBtn.click();
    });

    it('TC-6.1 Verify that checkbox "Marks to your daily report" is present', () => {
        expect(ReportDrawerMenu.RDSubTitle.isDisplayed()).toEqual(true);
    });

    it('TC-6.2 Verify that checkbox "Marks to your daily report" has right title', () => {
        expect(ReportDrawerMenu.RDSubTitle.getText()).toEqual(drawerMenu.subTitle);
    });



    it('TC-7 Verify that checkbox "Marks to your daily report" has correct number of boxes = 12', () => {
        expect(ReportDrawerMenu.Checkbox.length).toEqual(12);
    });


    it('TC-8.1 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelp.isDisplayed()).toEqual(true);
    });

    it('TC-8.2 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelp.getText().includes(drawerMenu.iNeedHelp)).toEqual(true);
    });

    it('TC-8.3 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelpSubTXT.isDisplayed()).toEqual(true);
    });

    it('TC-8.4 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelpSubTXT.getText()).toEqual(drawerMenu.iNeedHelpSubTXT);
    });


    it('TC-9.1 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverything.isDisplayed()).toEqual(true);
    });

    it('TC-9.2 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverything.getText().includes(drawerMenu.understood)).toEqual(true);
    });

    it('TC-9.3 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.isDisplayed()).toEqual(true);
    });

    it('TC-9.4 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.getText()).toEqual(drawerMenu.understoodSubTXT);
    });


    it('TC-10.1 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmates.isDisplayed()).toEqual(true);
    });

    it('TC-10.2 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmates.getText().includes(drawerMenu.helped)).toEqual(true);
    });

    it('TC-10.3 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.isDisplayed()).toEqual(true);
    });

    it('TC-10.4 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.getText()).toEqual(drawerMenu.helpedSubTXT);
    });


    it('TC-11.1 Verify that checkbox "Marks to your daily report" has correct title for box 4', () => {
        expect(ReportDrawerMenu.RDLWatchedLectures.isDisplayed()).toEqual(true);
    });

    it('TC-11.2 Verify that checkbox "Marks to your daily report" has correct title for box 4', () => {
        expect(ReportDrawerMenu.RDLWatchedLectures.getText()).toEqual(drawerMenu.watched);
    });


    it('TC-12.1 Verify that checkbox "Marks to your daily report" has correct title for box 5', () => {
        expect(ReportDrawerMenu.RDLRead.isDisplayed()).toEqual(true);
    });

    it('TC-12.2 Verify that checkbox "Marks to your daily report" has correct title for box 5', () => {
        expect(ReportDrawerMenu.RDLRead.getText()).toEqual(drawerMenu.read);
    });


    it('TC-13.1 Verify that checkbox "Marks to your daily report" has correct title for box 6', () => {
        expect(ReportDrawerMenu.RDLCode.isDisplayed()).toEqual(true);
    });

    it('TC-13.2 Verify that checkbox "Marks to your daily report" has correct title for box 6', () => {
        expect(ReportDrawerMenu.RDLCode.getText()).toEqual(drawerMenu.code);
    });


    it('TC-14.1 Verify that checkbox "Marks to your daily report" has correct title for box 7', () => {
        expect(ReportDrawerMenu.RDLQuiz.isDisplayed()).toEqual(true);
    });

    it('TC-14.2 Verify that checkbox "Marks to your daily report" has correct title for box 7', () => {
        expect(ReportDrawerMenu.RDLQuiz.getText()).toEqual(drawerMenu.quiz);
    });


    it('TC-15.1 Verify that checkbox "Marks to your daily report" has correct title for box 8', () => {
        expect(ReportDrawerMenu.RDLInterviewPrep.isDisplayed()).toEqual(true);
    });

    it('TC-15.2 Verify that checkbox "Marks to your daily report" has correct title for box 8', () => {
        expect(ReportDrawerMenu.RDLInterviewPrep.getText()).toEqual(drawerMenu.interviewPrep);
    });


    it('TC-16.1 Verify that checkbox "Marks to your daily report" has correct title for box 9', () => {
        expect(ReportDrawerMenu.RDLRecruiter.isDisplayed()).toEqual(true);
    });

    it('TC-16.2 Verify that checkbox "Marks to your daily report" has correct title for box 9', () => {
        expect(ReportDrawerMenu.RDLRecruiter.getText()).toEqual(drawerMenu.recruiter);
    });


    it('TC-17.1 Verify that checkbox "Marks to your daily report" has correct title for box 10', () => {
        expect(ReportDrawerMenu.RDLInterviewTech.isDisplayed()).toEqual(true);
    });

    it('TC-17.2 Verify that checkbox "Marks to your daily report" has correct title for box 10', () => {
        expect(ReportDrawerMenu.RDLInterviewTech.getText()).toEqual(drawerMenu.interviewTech);
    });


    it('TC-18.1 Verify that checkbox "Marks to your daily report" has correct title for box 11', () => {
        expect(ReportDrawerMenu.RDLInterviewOnsite.isDisplayed()).toEqual(true);
    });


    it('TC-18.2 Verify that checkbox "Marks to your daily report" has correct title for box 11', () => {
        expect(ReportDrawerMenu.RDLInterviewOnsite.getText()).toEqual(drawerMenu.interviewOnsite);
    });

    it('TC-19.1 Verify that checkbox "Marks to your daily report" has correct title for box 12', () => {
        expect(ReportDrawerMenu.RDLJobOffer.isDisplayed()).toEqual(true);
    });

    it('TC-19.2 Verify that checkbox "Marks to your daily report" has correct title for box 12', () => {
        expect(ReportDrawerMenu.RDLJobOffer.getText()).toEqual(drawerMenu.jobOffer);
    });

    it('TC-20 Verify that user could choose any one box of "Marks to your daily report"', () => {
       ReportDrawerMenu.Checkbox[ReportDrawerMenu.RandomCheckbox(0, 11)].click();
       expect(ReportDrawerMenu.CheckboxChecked[0].isDisplayed()).toEqual(true);
       ReportDrawerMenu.CheckboxChecked[0].click();
    });


    it('TC-21 Verify that user could choose several (2-11) boxes of "Marks to your daily report"', () => {
        let count = 0;
        for (let i = 0; i <= 11; i++) {
            if(Math.random() < 0.5) {    // true or false;
                ReportDrawerMenu.Checkbox[i].click();
                count++;
                console.log(count);
            }
           // browser.pause(2000)
        }
         expect(ReportDrawerMenu.CheckboxChecked.length).toEqual(count);
        const links = ReportDrawerMenu.CheckboxChecked;
        links.forEach((el) => {
            el.click()
        });
      //  browser.pause(2000)
    });


    it('TC-22 Verify that user could choose all boxes of "Marks to your daily report"', () => {
        const links = ReportDrawerMenu.Checkbox;
        links.forEach((el) => {
            el.click()
        });
        expect(ReportDrawerMenu.CheckboxChecked.length).toEqual(12);
        browser.pause(2000)
    });

    it('TC-23.1 Verify that field "What is your morale?" present and has a correct text inside', () => {
        expect(ReportDrawerMenu.RDMoraleField.isDisplayed()).toEqual(true);
    });

    it('TC-23.2 Verify that field "What is your morale?" present and has a correct text inside', () => {
        expect(ReportDrawerMenu.RDMoraleField.getText()).toEqual(drawerMenu.moralePlaceholder);
    });


    it('TC-24.1 Verify that field "What is your morale?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDMoraleFieldSubTXT.isDisplayed()).toEqual(true);
    });

    it('TC-24.2 Verify that field "What is your morale?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDMoraleFieldSubTXT.getText()).toEqual(drawerMenu.moralePlaceholderSubTXT);
    });

    it('TC-25 Verify that field "What is your morale?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDMoraleField.isClickable()).toEqual(true);
    });

    it('TC-26 Verify that appeared checkbox has value from 0 to 10 when you click om the field "What is your morale?"', () => {
        ReportDrawerMenu.RDMoraleField.click();
        expect(ReportDrawerMenu.RDMoraleDropDownMenu.length).toEqual(10); // need 11
    });

    xit('TC-27 Verify that scrolling works inside checkbox for the field "What is your morale?"', () => {
        ReportDrawerMenu.RDMoraleField.click();
        expect(ReportDrawerMenu.MoraleScroll.is()).toEqual(true);
        browser.keys("ArrowDown");
    });

    it('TC-28 Verify that appeared checkbox has correct text for value 10 when you click on the field "What is your morale?"', () => {
        expect(ReportDrawerMenu.RDMoraleDropDownMenu[0].getText()).toEqual(drawerMenu.moral10);
    });

    xit('TC-29  Verify that appeared checkbox has correct text for value 0 when you click om the field "What is your morale?""', () => {
        expect(ReportDrawerMenu.RDMoraleDropDownMenu[0].getText()).toEqual(drawerMenu.moral10);
    });

});

