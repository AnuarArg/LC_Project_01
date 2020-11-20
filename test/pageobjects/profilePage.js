import BasePage from "./BasePage";

class ProfilePage extends BasePage{


    get topMenuDiary(){ return $$('.item')[2] };

    get createReportBtn(){ return $('[data-qa=dailyReportsBtn]') };


}
export default new ProfilePage();