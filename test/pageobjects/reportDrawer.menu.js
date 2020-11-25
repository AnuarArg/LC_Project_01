class ReportDrawerMenu {

    get reportDrawerTitle(){
        return $('.ant-drawer-title');
    }

    get reportDrawerSubTitle(){
        return $('h6');
    }

    get reportDrawerMenuLabelINeedHelp(){
        return $$(".ant-checkbox-wrapper")[0];
    }












}

export default new ReportDrawerMenu();