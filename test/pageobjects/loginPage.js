import BasePage from "./BasePage";

class LoginPage extends BasePage {
  get loginEmail() {
    return $("#normal_login_email");
  }

  get loginPassword() {
    return $("#normal_login_password");
  }

  get loginButton() {
    return $(".login-form-button");
  }

  login(user, password){
    this.loginEmail.setValue(user);
    this.loginPassword.setValue(password);
    this.loginButton.click();
  }

  open() {
    super.open("/user/login");
  }
}

export default new LoginPage();
