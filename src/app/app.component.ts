import { Component } from '@angular/core';


export class Visitor {
  id: number;
  name: string;
}




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thank You!';
  visitor: Visitor = {
    id: 1,
    name: ''
  };

}
