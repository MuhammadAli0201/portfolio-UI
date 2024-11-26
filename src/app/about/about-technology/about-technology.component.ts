import { Component, OnInit } from '@angular/core';
import { GenericColor } from '../../_models/generic-color';
import { Technology } from '../../_models/technology';
import { Utility } from '../../_utility/utility';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-about-technology',
  templateUrl: './about-technology.component.html',
  styleUrl: './about-technology.component.css'
})
export class AboutTechnologyComponent implements OnInit {
  technologies: Technology[] = [];
  description:string='';
  colors: string[] = [
    "#FF6347", // Tomato (lightRed)
    "#4169E1", // Royal Blue (lightBlue)
    "#FFA500", // Orange (lightOrange)
    "#8A2BE2", // Blue Violet (lightPurple)
    "#FFD700", // Gold
    "#32CD32", // Lime Green
    "#FF1493", // Deep Pink
    "#00CED1", // Dark Turquoise
    "#FF69B4", // Hot Pink
    "#20B2AA"  // Light Sea Green
  ];
  
  techs: GenericColor<Technology>[] = [];

  //LIFE CYCLES
  constructor(private modal: NzModalService) { }
  ngOnInit(): void {
    this.techs = this.technologies.map((val) => <GenericColor<Technology>>{ obj: val, color: Utility.listRandom(this.colors) });
  }

  closeModal= () => this.modal.closeAll();
}
