import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { UrlService } from '../../../services/url.service';

@Component({
    selector: 'app-featured-products-grid',
    templateUrl: './featured-products-grid.component.html',
    styleUrls: ['./featured-products-grid.component.scss'],
})
export class FeaturedProductsGridComponent {
    /**
     * List of products
     */
    @Input() public products: Product[] = [];
    /**
     * Block title
     */
    @Input() public blockTitle: string = '';
    /**
     * Loading
     */
    @Input() public loading = false;
    // @Input() @HostBinding('attr.data-layout') layout: BlockProductsCarouselLayout = 'grid-4';

    // get productCardLayout(): ProductCardLayout {
    //     return productCardLayoutMap[this.layout];
    // }
    //
    // get productCardExclude(): ProductCardElement[] {
    //     return productCardExcludeMap[this.productCardLayout];
    // }

    constructor(public url: UrlService,      
         private router: Router,) { }

    public redirectToAllProducts(): void {
        // -->Redirect: to shop
        this.router.navigateByUrl(this.url.allProducts(), { state: { resetFilters: true } }).then();
    }
}
