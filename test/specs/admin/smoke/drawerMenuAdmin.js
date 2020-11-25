import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import user from '../../../../data/users.data';
import { topMenu, profilePage, diaryPage, drawerMenu } from '../../../../data/expected.data';
import  ReportDrawerMenu from "../../../pageobjects/reportDrawer.menu"


describe("REPORT DRAWER MENU", ()=> {
    before(()=> {
        LoginPage.open();
        browser.maximizeWindow();
        LoginPage.login(user.admin.email, user.admin.password);
        ProfilePage.createReportBtn.click();
    });

    describe("VERIFY THAT ALL REPORT DRAWER MENU ELEMENTS ARE PRESENT & CORRECT", ()=> {

        it("Verify that Report Drawer menu title is present & = 'Create day report'", ()=>{
            expect(ReportDrawerMenu.reportDrawerTitle.isDisplayed()).toEqual(true);
            expect(ReportDrawerMenu.reportDrawerTitle.getText()).toEqual(drawerMenu.title);
        })

        it("Verify that Report Drawer menu sub title is present & = 'Marks to your daily report'", ()=>{
            expect(ReportDrawerMenu.reportDrawerSubTitle.isDisplayed()).toEqual(true);
            expect(ReportDrawerMenu.reportDrawerSubTitle.getText()).toEqual(drawerMenu.subTitle);
        })

        it("Verify that Report Drawer menu label 'I need help' title is present & = 'I need help", ()=> {
            expect(ReportDrawerMenu.reportDrawerMenuLabelINeedHelp.isDisplayed()).toEqual(true);
            expect(ReportDrawerMenu.reportDrawerMenuLabelINeedHelp.getText().includes(drawerMenu.iNeedHelp)).toEqual(true);
        })

        // it("Verify that Report Drawer menu label 'I need help' annotation is present & = ''", ()=> {
        //     expect(ReportDrawerMenu.reportDrawerMenuLabelINeedHelp.isDisplayed()).toEqual(true);
        //     expect(ReportDrawerMenu.reportDrawerMenuLabelINeedHelp.getText().slice(0, 11)).toEqual(drawerMenu.iNeedHelp);
        // })




    })



})


