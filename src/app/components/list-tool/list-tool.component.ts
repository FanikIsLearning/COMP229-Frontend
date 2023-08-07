import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-tool',
  templateUrl: './list-tool.component.html',
  styleUrls: ['./list-tool.component.css'],
})
export class ListToolComponent implements OnInit {
  @Input() products?: Product[];
  @Input() currentIndex: number = -1;
  @Input() showModeratorBoard: boolean = false;
  @Input() showAdminBoard: boolean = false;

  @Output() setActive = new EventEmitter<{ product: Product; index: number }>();
  @Output() removeAll = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  setActiveProduct(product: Product, index: number): void {
    if (this.currentIndex === index) {
      this.currentIndex = -1;
    } else {
      this.currentIndex = index;
    }
  }

  removeAllProducts(): void {
    this.removeAll.emit();
  }
}
