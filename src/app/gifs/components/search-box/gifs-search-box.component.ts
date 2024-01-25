import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    templateUrl: './gifs-search-box.component.html',
    styleUrl: './gifs-search-box.component.css'
})

export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>; 
    constructor() { }

    searchTag() {
        const newTag: string = this.tagInput.nativeElement.value;
        console.log(newTag);
    }

}