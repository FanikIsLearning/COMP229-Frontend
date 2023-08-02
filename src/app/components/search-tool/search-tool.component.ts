import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.css'],
})
export class SearchToolComponent implements OnInit {
  name = '';

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {}

  searchName(): void {
    this.searchService.setSearchTerm(this.name);
    this.router.navigate(['/products'], { queryParams: { search: this.name } });
  }
}
