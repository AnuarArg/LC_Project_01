import BasePage from './Base.page';

class RegisterPage extends BasePage {
  get headerRegister() {
    return $('h1');
  }

  get firstNameInput() {
    return $('#user_login_firstName');
  }

  get lastNameInput() {
    return $('#user_login_lastName');
  }

  get email() {
    return $('#user_login_email');
  }

  get password() {
    return $('#user_login_password');
  }

  get termsAndAgreementsLink() {
    return $('.ant-btn.pl-1.ant-btn-link.ant-btn-sm');
  }

  get termsAndAgreementsLinkClose() {
    return $('[data-icon="close"]');
  }

  get agreementCheckBox() {
    return $('#user_login_agreement');
  }

  get registerBtn() {
    return $('button[type="submit"]');
  }

  registerUser(data) {
    this.firstNameInput.addValue(data.firstName);
    this.lastNameInput.addValue(data.lastName);
    this.email.addValue(data.email);
    this.password.addValue(data.password);
    this.agreementCheckBox.click();
    this.registerBtn.waitForClickable(true);
    this.registerBtn.click();
  }

  open() {
    return super.open('/user/register');
  }


}
export default new RegisterPage();
