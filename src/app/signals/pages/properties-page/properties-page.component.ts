import { Component } from '@angular/core';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public onFieldUpdated(field: string, value: string): void {
    console.log({ field, value });
  }
}
