import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {datafake} from '../../data/datafake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photo:string=""
  contenttitle:string=""
  contentdescription:string=""
  private id:string | null="0"
  constructor(private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>this.id=value.get("id"))
 this.setValuesComponent(this.id)
  }
  setValuesComponent(id:string | null){
    const resul= datafake.filter(article=>article.id==id)[0]
    this.contenttitle=resul.title
    this.photo=resul.photocover
    this.contentdescription=resul.description
    /*if(!resul){
      this.contenttitle=resul.title
    }*/
  }

}
