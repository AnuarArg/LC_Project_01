import RegisterPage from '../../../pageobjects/register.page';
import ProfilePage from '../../../pageobjects/profile.page';
import axios from 'axios';
import { newUser } from '../../../../data/fakeData';
import RegisterStep2Page from '../../../pageobjects/registerStep2.page';
import  { userBadges } from '../../../../data/expected.data';
import { userDelete } from '../../../../deleteNewUserByAxios';
import LoginPage from "../../../pageobjects/login.page";
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';
import users from "../../../../data/users.data";
const token = "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIwNzAxQHFhNy51cyIsInVzZXJJZCI6IjVmYjJlNThkMmMzNDliMDA2YTIwYTMzZSIsImNvZGV3YXJzSWQiOm51bGwsImlhdCI6MTYxMzE2MDkyNSwiZXhwIjoxNjEzNDIwMTI1fQ._2m8DaaIgDYANu05clz3BIyWNw4pNXuXCL-lfaTim8Y\"";
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

      browser.pause(3000)
      expect(ProfilePage.badgeRole.getAttribute('innerText')).toEqual(userBadges.new);
      expect(ProfilePage.getLoginConfirmation()).toEqual(`${newUser.firstName} ${newUser.lastName}`);
  });

  it('API check the new user', async () => {
    const arr = await axios({
      method: 'get',
      url: `${host}/user/email/${newUser.email}`,
      headers: {
        Authorization: token
      },
    })
      .then(res => res.data)
      .catch(err => err.response.data);
    console.log(arr);
    expect(arr.payload.name).toEqual(`${newUser.firstName} ${newUser.lastName}`);
  });

    // it('should ', function () {
    //     const userDelete = async userEmail =>{
    //         const response = await axios.post(`${host}/user/login`, {
    //             email: users.admin.email,
    //             password: users.admin.password,
    //         });
    //         const  token = response.data.token;
    //
    //         return axios({
    //             method: 'delete',
    //             url: `${host}/user/email/${userEmail}`,
    //             headers: {
    //                 Authorization: token,
    //             }
    //         })
    //             .then(res => res.data)
    //             .catch(err => err.response.data);
    //     }
    //     expect(res.success).eq(true);
    // });
});

