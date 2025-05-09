import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PostClass } from '../PostClass';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private service: DataService){}

  posts:PostClass[];

  ngOnInit(): void {
    this.loadpost();
    console.log(this.loadpost());
  }

  loadpost():void{
      this.service.getAllPosts().subscribe(result=>this.posts=result);
  }
}
