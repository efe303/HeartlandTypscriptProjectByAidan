import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public MainPageSearchBox: ElementFinder;
    public MainPageSearchButton: ElementFinder;
    public selectFirstImage: ElementFinder;
    public SelectQuantity: ElementFinder;
    public selectSize: ElementFinder;
    public selectColor: ElementFinder;
    public addToCart: ElementFinder;
    public itemVisibleInTheCart: ElementFinder;
    public addtocart: ElementFinder;

    constructor() {
        this.MainPageSearchBox = $("search_query_t");
        this.MainPageSearchButton = $("isubmit_search");
        this.selectFirstImage = $("//*[@id='center_column']/ul/li/div/div[1]/div/a[1]/img");
        this.SelectQuantity = $("icon-plus");
        this.selectSize = $("group_1");
        this.selectColor = $("color_8");
        this.addToCart = $("add_to_cart");
        this.itemVisibleInTheCart = $("div.layer_cart_product.col-xs-12.col-md-6 > h2");
        this.addtocart = $("//span[contains(text(),'Add to cart')]");


        
    }
}
