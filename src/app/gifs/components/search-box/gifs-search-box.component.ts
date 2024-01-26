import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './gifs-search-box.component.html',
  styleUrl: './gifs-search-box.component.css',
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag(): void {
    const newTag: HTMLInputElement = this.tagInput.nativeElement;
    this.gifsService.searchTag(newTag.value);
    newTag.value = '';
  }
}
