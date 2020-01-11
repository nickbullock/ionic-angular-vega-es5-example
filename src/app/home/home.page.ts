import { Component, ViewChild, ElementRef } from '@angular/core';
import * as vega from 'vega';
import * as themes from 'vega-themes'
import vegaspec from './vega.json'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('view', { static: true }) container: ElementRef;

  view;

  ngAfterViewInit() {
    this.render(vegaspec)
  }

  private render(spec) {
    this.view = new vega.View(vega.parse(spec, themes.fivethirtyeight))
      .initialize(this.container.nativeElement)
      .logLevel(vega.Warn)
      .renderer('svg')
      .runAsync();
  }

}
