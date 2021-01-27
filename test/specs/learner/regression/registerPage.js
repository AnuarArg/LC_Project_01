import RegisterPage from '../../../pageobjects/register.page';
import ProfilePage from '../../../pageobjects/profile.page';
import axios from 'axios';
import { newUser } from '../../../../data/fakeData';
import RegisterStep2Page from '../../../pageobjects/registerStep2.page';
import  { userBadges } from '../../../../data/expected.data';
import { userDelete } from '../../../../deleteNewUserByAxios';
import LoginPage from "../../../pageobjects/login.page";
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIwNzA5QGFkbWluLnVzIiwidXNlcklkIjoiNWZjZThlNzA4MWE0OTkwMDZhODY5ZWVjIiwiY29kZXdhcnNJZCI6bnVsbCwiaWF0IjoxNjExNzUwODcyLCJleHAiOjE2MTIwMTAwNzJ9.cAFjMsRSqidry55icpvpso__TdLSpQoD2sOGkIJd8EY";
const host = 'https://server-stage.pasv.us';

//
// after('Should delete a user', async () => {
//   const res = await userDelete(newUser.email);
//   expect(res.success).eq(true);
// });

describe('NEW USER REGISTER', () => {

  it('UR02 should register user', () => {
   //   RegisterPage.open();
      browser.url('https://stage.localcoding.us/user/register');
      LoginPage.goToRegisterPage();
      RegisterPage.registerUser(newUser);
      RegisterStep2Page.registerUserStep2(newUser);
      //RegisterStep2Page.skipBtn.click();
      browser.pause(3000)
      expect(ProfilePage.badgeRole.getAttribute('innerText')).toEqual(userBadges.new);
      expect(ProfilePage.getLoginConfirmation()).toEqual(`${newUser.firstName} ${newUser.lastName}`);
  });
  //
  //
  // it('API check the new user', async () => {
  //   const arr = await axios({
  //     method: 'get',
  //     url: `${host}/user/email/${newUser.email}`,
  //     headers: {
  //       Authorization: token
  //     },
  //   })
  //     .then(res => res.data)
  //     .catch(err => err.response.data);
  //   console.log(arr);
  //   expect(arr.payload.name).toEqual(`${newUser.firstName} ${newUser.lastName}`);
  // });
});
