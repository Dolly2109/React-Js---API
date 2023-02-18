class AppUrl{
    static BaseURL = "http://ecomlaravel.test/api/";
    static PostContact = this.BaseURL + "PostContact";
    static AllSiteInfo = this.BaseURL + "allSiteInfo";
    static AllCategories = this.BaseURL + "allCategories";
    static AllBrands = this.BaseURL + "allBrands";
    static AllSliders = this.BaseURL + "allSliders";
    static ProductsByRemark = this.BaseURL + "productsByRemark";
    static ProductsBySubCategory = this.BaseURL + "productsBySubCategory";
    static ProductsByCategory = this.BaseURL + "productsByCategory";
    static ProductDetail = (id) => { return this.BaseURL + "productDetail/" + id;}
  
    static Login = this.BaseURL + "login";
    static UserData = this.BaseURL + "userData";
    static Register = this.BaseURL + "register";
    static ForgetPassword = this.BaseURL + "forgetPassword";
    static ResetPassword = this.BaseURL + "resetPassword";
  
    static Checkout = this.BaseURL + "checkout";
    static OrderListByUser = this.BaseURL + "orderListByUser";
  
    static ProductsByRemark_new = this.BaseURL + "productsByRemark/new";
    static ProductsByRemark_featured = this.BaseURL + "productsByRemark/featured";
  
  }
  export default AppUrl