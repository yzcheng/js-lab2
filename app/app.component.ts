import {Component} from 'angular2/core';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  templateUrl : './app/app.component.html',
  selector : 'my-app',
  directives : [Alert]
})
export class AppComponent {
  private test:String = "123";
}