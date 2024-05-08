import { ChangeDetectorRef  ,ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars-view',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './cars-view.component.html',
  styleUrl: './cars-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush // Estrategia OnPush
})
export class CarsViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}
  titleCar: string = '';
  imgCar: string = '';



  colorList = [

    { id: 1, bgColor: '#008080' },
    { id: 2, bgColor: '#0000FF' },
    { id: 3, bgColor: '#800080' },
    { id: 3, bgColor: '#FF69B4' },

  ]

  saveDesingStatus: boolean = false;

  changeValue () {
    this.saveDesingStatus = false;
    this.cdr.markForCheck();
  }


  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.titleCar = params['titleCar'];
      this.imgCar = params['imgCar'];
      this.cdr.markForCheck();
    });
  } 

}
