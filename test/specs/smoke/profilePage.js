import LoginPage from "../../pageobjects/loginPage";
import ProfilePage from "../../pageobjects/profilePage";
import user from "../../../data/users";

describe("VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS", () => {

  // before(() => {
  //   LoginPage.open();
  //   //browser.url('https://stage.localcoding.us/user/login')
  //   browser.maximizeWindow();
  //   browser.deleteAllCookies();
  // });

  describe("VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS FOR ADMIN", () => {

    before(()=> {
      LoginPage.open();
      LoginPage.login(user.admin.email, user.admin.password);
    })

    it("Verify that diary tab exist in the top menu", () => {
      browser.pause(2000);
      expect(ProfilePage.topMenuDiary.isDisplayed()).toEqual(true);

    });
  });
});
