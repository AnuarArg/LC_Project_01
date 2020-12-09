import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
//import DiaryPage from '../../../pageobjects/diary.page';
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
        let r = ReportDrawerMenu.RandomInt(0, 11)
        ReportDrawerMenu.Checkbox[r].click();
        //expect(ReportDrawerMenu.CheckboxChecked[0].isDisplayed()).toEqual(true);
        expect(ReportDrawerMenu.Checkbox[r].getAttribute('class').includes('ant-checkbox-checked')).toEqual(true);

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

    it('TC-25 Verify that field "What is your morale?" is clickable', () => {
        expect(ReportDrawerMenu.RDMoraleField.isClickable()).toEqual(true);
    });

    it('TC-26 Verify that appeared checkbox has value from 0 to 10 when you click om the field "What is your morale?"', () => {
        ReportDrawerMenu.RDMoraleField.click();
        expect(ReportDrawerMenu.RDMoraleDropDownMenu.length).toEqual(10); // need 11
    });

    it('TC-27 Verify that scrolling works inside checkbox for the field "What is your morale?"', () => {
        ReportDrawerMenu.RDMoraleField.click();
        //ReportDrawerMenu.RDMoraleDropDownMenu[1].moveTo();
        ReportDrawerMenu.RDMoraleDropDownMenu[9].scrollIntoView();
        expect(ReportDrawerMenu.RDMoraleDropDownMenu[9].isDisplayed()).toEqual(true);
    });

    it('TC-28 Verify that appeared checkbox has correct text for value 10 when you click on the field "What is your morale?"', () => {
        browser.keys("Escape");
        ProfilePage.createReportBtn.click();

        ReportDrawerMenu.RDMoraleField.click();
        ReportDrawerMenu.RDMoraleDropDownMenu[0].waitForDisplayed();
        //browser.pause(2000);
        expect(ReportDrawerMenu.RDMoraleDropDownMenu[0].getText()).toEqual(drawerMenu.moral10);
    });


    // xit('TC-29  Verify that appeared checkbox has correct text for value 0 when you click om the field "What is your morale?""', () => {
    //     expect(ReportDrawerMenu.RDMoraleDropDownMenu[0].getText()).toEqual(drawerMenu.moral10);
    // });

    it('TC-30 Verify that your could choose any one value when click on the field "What is your morale?"', () => {
        let r = ReportDrawerMenu.RandomInt(0, 7);
        let moralTXT = ReportDrawerMenu.RDMoraleDropDownMenu[r].getText()
        console.log('*******************' + moralTXT);
        ReportDrawerMenu.RDMoraleDropDownMenu[r].click();
        expect(ReportDrawerMenu.MoraleSelect.getAttribute('title').includes(moralTXT)).toEqual(true);

    });

    it('TC-31 Verify that field "How many hours did you study/practice today?" present and has a correct text inside', () => {
        expect(ReportDrawerMenu.RDHoursField.getText()).toEqual(drawerMenu.hoursPlaceholder);
    });

    it('TC-32 Verify that field "How many hours did you study/practice today?" has correct added text below field"', () => {
        expect(ReportDrawerMenu.RDHoursFieldSubTXT.getText()).toEqual(drawerMenu.hoursPlaceholderSubTXT);
    });

    it('TC-33 Verify that field "How many hours did you study/practice today?" is clickable', () => {
        expect(ReportDrawerMenu.RDHoursField.isClickable()).toEqual(true);
    });

    it('TC-34 Verify that appeared checkbox has correct value from 0 to 10 when you click om the field "How many hours did you study/practice today?"', () => {
        ReportDrawerMenu.RDHoursFieldSubTXT.click();
        expect(ReportDrawerMenu.RDHoursDropDownMenu.length).toEqual(10); // need 11
    });

    it('TC-35 Verify that scrolling works inside checkbox for the field "How many hours did you study/practice today?"', () => {
        browser.keys("Escape");
        ProfilePage.createReportBtn.click();
        ReportDrawerMenu.RDMoraleField.click();
        ReportDrawerMenu.RDHoursField.click();
        ReportDrawerMenu.RDHoursDropDownMenu[19].scr
        expect(ReportDrawerMenu.RDHoursDropDownMenu[19].isDisplayed()).toEqual(true);
    });

    xit('TC-36 Verify that your could choose any one value when click on the field "How many hours did you study/practice today?"', () => {

    });

    it('TC-37.1 Verify that field "How was your day?" present and has a correct text inside', () => {
        expect(ReportDrawerMenu.RDDayField.isDisplayed()).toEqual(true);
    });

    it('TC-37.2 Verify that field "How was your day?" present and has a correct text inside', () => {
        expect(ReportDrawerMenu.RDDayField.getAttribute('placeholder')).toEqual(drawerMenu.dayPlaceholder);
    });

    it('TC-38.1 Verify that field "How was your day?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDDayFieldSubTXT.isDisplayed()).toEqual(true);
    });

    it('TC-38.2 Verify that field "How was your day?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDDayFieldSubTXT.getText()).toEqual(drawerMenu.dayPlaceholderSubTXT);
    });


    it('TC-39 Verify that field "How was your day?" is clickable', () => {
        expect(ReportDrawerMenu.RDDayField.isClickable()).toEqual(true);
    });

    it('TC-40 Verify that you can input correct text in the field "How was your day?"', () => {
        ReportDrawerMenu.RDDayField.click();
        ReportDrawerMenu.RDDayField.addValue(drawerMenu.TC40TestTXT);
        expect(ReportDrawerMenu.RDDayField.getText()).toEqual(drawerMenu.TC40TestTXT);
        //ReportDrawerMenu.RDDayField.clearValue();

    });

    it('TC-41 Verify that you can input 30 characters in the field "How was your day?"', () => {
        ReportDrawerMenu.RDDayField.click();
        let string30 = '';
        for (let i = 1; i <= 30; i++) {
            string30 += String.fromCharCode(ReportDrawerMenu.RandomInt(32, 120));
        }
        ReportDrawerMenu.RDDayField.setValue(string30);
        const text = ReportDrawerMenu.RDDayField.getValue();
        expect(text.length).toEqual(string30.length);
    });

    it('TC-42 Verify that you could input 300 characters in the field "How was your day?"', () => {
        ReportDrawerMenu.RDDayField.click();
        let string300 = '';
        for (let i = 0; i < 300; i++) {
            string300 += String.fromCharCode(ReportDrawerMenu.RandomInt(32, 120));
        }
        ReportDrawerMenu.RDDayField.setValue(string300);
        const text = ReportDrawerMenu.RDDayField.getValue();
        expect(text.length).toEqual(string300.length);
    });

    it('TC-43 Verify that you could not input 29 characters in the field "How was your day?"', () => {
        ReportDrawerMenu.RDDayField.click();
        let string29 = '';
        for (let i = 1; i <= 29; i++) {
            string29 += String.fromCharCode(ReportDrawerMenu.RandomInt(32, 120));
        }
        ReportDrawerMenu.RDDayField.setValue(string29);

        expect(ReportDrawerMenu.DayAlertText.isDisplayed()).toEqual(true);
    })


    xit('TC-44 Verify that you could not use copy past for inputing uncorrect numbers of characters ' +
        '(less then 30) in the field "How was your day?"', () => {

        ncp.copy('some text', function () {
                ReportDrawerMenu.RDDayField
            }
        )
    });

    it('TC-45.1 Verify that btn Create is presented on the page and title is correct', () => {
        expect(ReportDrawerMenu.CreateBtn.isDisplayed()).toEqual(true);
    });

    it('TC-45.2 Verify that btn Create is presented on the page and title is correct', () => {
        expect(ReportDrawerMenu.CreateBtn.getText()).toEqual(drawerMenu.createBtn);
    });

    it('TC-46 Verify that btn Create is clickable"', () => {
        expect(ReportDrawerMenu.CreateBtn.isClickable()).toEqual(true);
    });

    it('TC-47 Verify that btn "X" is presented on the page', () => {
        expect(ReportDrawerMenu.XButton.isDisplayed()).toEqual(true);
    });

    it('TC-48 Verify that btn "X" is clickable', () => {
        expect(ReportDrawerMenu.XButton.isClickable()).toEqual(true);
    });

    it('TC-49 Verify that Create day report has disappeared when click "X" btn', () => {
        ReportDrawerMenu.XButton.click();
        expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(false);
    });

    it('TC-50 Verify that btn Create unclickable when no one field was chosen', () => {
        ProfilePage.createReportBtn.click();
        ReportDrawerMenu.CreateBtn.waitForDisplayed();
        expect(ReportDrawerMenu.CreateBtn.isClickable()).toEqual(false);
    });

    it('TC-51 Verify that errors message are appeared when no one field was chosen and click btn Create', () => {
        //ProfilePage.createReportBtn.click();
        //ReportDrawerMenu.CreateBtn.scrollIntoView();
        ReportDrawerMenu.CreateBtn.click();

        expect(ReportDrawerMenu.DayAlerts.length).toEqual(4);


        // const alerts = ReportDrawerMenu.DayAlerts;
        // let arr = [];
        // let x;
        // for (let i = 0; i < alerts.length ; i++) {
        //     x = alerts[i].getText();
        //     arr.push(x);
        // }
        // console.log(arr);
    });

    it('TC-52 Verify that btn Create unclickable when checkbox "Marks to your daily report" wasn\'t chosen"', () => {

        ReportDrawerMenu.XButton.click();
        ProfilePage.createReportBtn.click();
        ReportDrawerMenu.CreateBtn.waitForDisplayed();
        expect(ReportDrawerMenu.CreateBtn.isClickable()).toEqual(false);
    });

    it('TC-53 Verify that error message has appeared when you click btn Create and checkbox "Marks to your daily report" wasn\'t chosen', () => {

        ReportDrawerMenu.CreateBtn.scrollIntoView();
        ReportDrawerMenu.CreateBtn.click();
        browser.pause(2000);
        expect(ReportDrawerMenu.DayAlerts[0].isDisplayed()).toEqual(true);

    });

    it('TC-54 Verify that btn Create unclickable when field "What is your morale?" wasn\'t chosen', () => {

        ReportDrawerMenu.XButton.click();
        ProfilePage.createReportBtn.click();
        ReportDrawerMenu.CreateBtn.waitForDisplayed();
        expect(ReportDrawerMenu.CreateBtn.isClickable()).toEqual(false);
    });

    it('TC-55 Verify that error message has appeared when you click btn Create and checkbox "What is your morale?" wasn\'t chosen', () => {

        ReportDrawerMenu.CreateBtn.scrollIntoView();
        ReportDrawerMenu.CreateBtn.click();
        browser.pause(2000);
        expect(ReportDrawerMenu.DayAlerts[1].isDisplayed()).toEqual(true);

    });

    it('TC-56 Verify that btn Create unclickable when field "How many hours did you study/practice today?" wasn\'t chosen', () => {
        ReportDrawerMenu.XButton.click();
        ProfilePage.createReportBtn.click();
        ReportDrawerMenu.CreateBtn.waitForDisplayed();
        expect(ReportDrawerMenu.CreateBtn.isClickable()).toEqual(false);

    });

    it('TC-57 Verify that error message has appeared when you click btn Create and checkbox "How many hours did you study/practice today?" wasn\'t chosen', () => {

        ReportDrawerMenu.CreateBtn.scrollIntoView();
        ReportDrawerMenu.CreateBtn.click();
        browser.pause(1000)
        expect(ReportDrawerMenu.DayAlerts[2].isDisplayed()).toEqual(true);

    });

    it('TC-58 Verify that btn Create unclickable when field "How was your day?" empty', () => {
        ReportDrawerMenu.XButton.click();
        ProfilePage.createReportBtn.click();
        ReportDrawerMenu.CreateBtn.waitForDisplayed();
        expect(ReportDrawerMenu.CreateBtn.isClickable()).toEqual(false);

    });

    it('TC-59 Verify that error message has appeared when you click btn Create and checkbox "How was your day?" wasn\'t chosen', () => {
        ReportDrawerMenu.CreateBtn.scrollIntoView();
        ReportDrawerMenu.CreateBtn.click();
        browser.pause(1000)
        expect(ReportDrawerMenu.DayAlerts[3].isDisplayed()).toEqual(true);


    });

    it('TC-60 Verify that Refrash page works', () => {

        browser.refresh();
        ProfilePage.profileName.waitForDisplayed()
        expect(ProfilePage.profileName.isDisplayed()).toEqual(true)
        // expect(browser.url).toEqual('https://stage.localcoding.us/profile/5fb766de3ed01e006ad30217');


    });

    it('TC-61 Verify that icons from choosen checkbox "Marks to your daily report" displayed correctly when Day report was created with all choosen box', () => {

        //browser.keys("Escape");
      ProfilePage.createReportBtn.click();


        const links = $$('.ant-checkbox')
        links.forEach((el) => {
            el.click()
        })

        ReportDrawerMenu.RDMoraleField.click();
        ReportDrawerMenu.RDMoraleDropDownMenu[ReportDrawerMenu.RandomInt(0, 7)].click();// need 9

        ReportDrawerMenu.RDHoursField.click();
        ReportDrawerMenu.RDHoursDropDownMenu[ReportDrawerMenu.RandomInt(10, 17)].click();// need 19

        ReportDrawerMenu.RDDayField.click();
        ReportDrawerMenu.RDDayField.setValue('TC-61 Verify that icons from choosen checkbox "Marks to your daily report"');

        ReportDrawerMenu.CreateBtn.click();
         browser.pause(2000)
        expect(ProfilePage.reportCheckBox.length).toEqual(12);
    });




    it ('TC-62 Verify that icons from choosen checkbox "Marks to your daily report" displayed correctly when Day report was created with 5 choosen box', () => {

        ProfilePage.createReportBtn.click();

       // ReportDrawerMenu.Checkbox.waitForDisplayed()
        for (let i = 0; i < 5; i++) {
            ReportDrawerMenu.Checkbox[i].click()
        }

        ReportDrawerMenu.RDMoraleField.click();
        ReportDrawerMenu.RDMoraleDropDownMenu[ReportDrawerMenu.RandomInt(0, 7)].click();// need 9

        ReportDrawerMenu.RDHoursField.click();
        ReportDrawerMenu.RDHoursDropDownMenu[ReportDrawerMenu.RandomInt(10, 17)].click();// need 19

        ReportDrawerMenu.RDDayField.click();
        ReportDrawerMenu.RDDayField.setValue('TC-62 Verify that icons from choosen checkbox "Marks to your daily report"');

        ReportDrawerMenu.CreateBtn.click();
        browser.pause(2000);
        expect(ProfilePage.reportCheckBox.length).toEqual(5);
    });

    it('TC-63 Verify that diagram  is visible on profile page ', () => {
        expect(ProfilePage.diagram.isDisplayed()).toEqual(true);
    });

    it('TC-64 Verify that title of the diagram "Daily progress"', () => {
        expect(ProfilePage.diagramTitle.getText()).toEqual(profilePage.diagramTitleTXT)

    });

    // it('TC-65 Verify that the date of the last daily report similar to the last date in diagram', () => {
    //
    // });

    // it('TC-66 Verify that the morale level of the last daily report similar to the last morale level in diagram', () => {
    //
    // });
    //
    // it('TC-67 Verify that the quantity of hours of the last daily report similar to the last quantity of hours in diagram', () => {
    //
    //
    // });
    //
    // it('TC-68 Verify that the last daily report is appeared on the top of daily reports list on profile page', () => {
    //
    // });
    //
    // it('TC-69 Verify that the correct date and time appeared with each daily report on profile page', () => {
    //
    //
    // });
    //
    // it('TC-70 Verify that daily reports sort by date', () => {
    //
    // });
    //
    it('TC-71 Verify that each daily report separates by the line', () => {
        expect(ProfilePage.line.isDisplayed()).toEqual(true);

    });

    it('TC-72.1 Verify that the Like button is displayed on  daily report ', () => {
        expect(ProfilePage.likeButton[0].isDisplayed()).toEqual(true);

    });

    it('TC-72.2 Verify that the Like button is clickable on  daily report ', () => {
        expect(ProfilePage.likeButton[0].isClickable()).toEqual(true);

    });

    it('TC-72.3 Verify that the Like button  title is correct', () => {
        expect(ProfilePage.likeButton[0].getText()).toEqual(profilePage.likeButtonTXT);

    });

    it('TC-72.4 Verify that the Like button is clickable on each daily report and title correct', () => {


    });

    it('TC-73.1 Verify that the user can Like his own daily report ', () => {


    });
    it('TC-73.2 Verify that the user can Like his own daily report and counter increase one point', () => {


    });

    // it('TC-74 Verify that the Like btn became unclickable and text changes to "I like this" for this user', () => {
    //
    // });
});
