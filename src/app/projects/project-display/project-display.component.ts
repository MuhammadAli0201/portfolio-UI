import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../_models/project';
import { GenericColor } from '../../_models/generic-color';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrl: './project-display.component.css'
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project!: Project;
  @Input() invert: boolean = false;
  techs: GenericColor<string>[] = [];
  private colors: string[] = [
    'green', 'blue', 'purple', 'red', 'orange', 'yellow',
    'pink', 'brown', 'cyan', 'magenta', 'lime', 'teal',
    'indigo', 'violet', 'gold', 'silver', 'coral', 'navy',
    'salmon', 'khaki', 'plum', 'orchid', 'tan', 'maroon',
    'crimson', 'turquoise', 'slateblue', 'mediumseagreen',
    'dodgerblue'
  ];

  ngOnInit(): void {
    this.techs = this.project.technologies.map((val) => <GenericColor<string>>{
      obj: val.title,
      color: this.getRandomColor()
    });
  }

  getRandomColor = () => {
    var i = Math.floor(Math.random() * this.colors.length);
    return this.colors[i];
  }
}
