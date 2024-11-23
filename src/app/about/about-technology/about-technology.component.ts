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
  colors: string[] = ["darkRed", "darkBlue", "darkOrange", "purple"];
  techs: GenericColor<Technology>[] = [];

  //LIFE CYCLES
  constructor(private modal: NzModalService) { }
  ngOnInit(): void {
    this.techs = this.technologies.map((val) => <GenericColor<Technology>>{ obj: val, color: Utility.listRandom(this.colors) });
  }

  closeModal= () => this.modal.closeAll();
}
