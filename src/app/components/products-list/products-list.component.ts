import { Component, OnInit, AfterViewInit } from '@angular/core';

import { StorageService } from 'src/app/_services/storage.service';

import { Product } from 'src/app/models/product.model';

import { ProductService } from 'src/app/services/product.service';

import { Subscription } from 'rxjs';

import { SearchService } from 'src/app/services/search.service';

import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-products-list',

  templateUrl: './products-list.component.html',

  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  productList?: Product[];
  products?: Product[];

  currentProduct: Product = {};

  currentIndex = -1;

  name = '';

  private roles: string[] = [];

  isLoggedIn = false;

  showAdminBoard = false;

  showModeratorBoard = false;

  username?: string;

  searchSubscription?: Subscription;
  filterSubscription?: Subscription;
  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private searchService: SearchService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.retrieveProducts();

    this.filterSubscription = this.filterService.filterChange.subscribe(
      (category) => {
        this.filterCategory(category);
      }
    );

    this.isLoggedIn = this.storageService.isLoggedIn();

    this.searchSubscription = this.searchService.searchObservable.subscribe(
      (name) => {
        this.searchName(name);
      }
    );

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();

      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      //this.username = user.username;
    }
  }

  ngAfterViewInit(): void {
    this.searchSubscription = this.searchService.searchObservable.subscribe(
      (name) => {
        this.searchName(name);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  retrieveProducts(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.productList = data; // store all products
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  filterCategory(category: string | null): void {
    if (category && category.trim() !== '' && this.productList) {
      this.products = this.productList.filter(
        (product) => product.category === category
      );
    } else {
      this.products = this.productList;
    }
  }

  refreshList(): void {
    this.retrieveProducts();

    this.currentProduct = {};

    this.currentIndex = -1;
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;

    this.currentIndex = index;
  }

  removeAllProducts(): void {
    this.productService
      .deleteAll()

      .subscribe({
        next: (res) => {
          console.log(res);

          this.refreshList();
        },

        error: (e) => console.error(e),
      });
  }

  searchName(name: string): void {
    this.name = name;
    this.currentProduct = {};
    this.currentIndex = -1;

    this.productService.findByName(name).subscribe({
      next: (data: Product[] | undefined) => {
        this.products = data;
        console.log(data);
      },
      error: (e: any) => console.error(e),
    });
  }
}
