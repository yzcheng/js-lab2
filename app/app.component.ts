import {Component} from 'angular2/core';
import { Alert } from 'ng2-bootstrap/components/alert';

@Component({
    templateUrl: './app/app.component.html',
    selector: 'my-app',
    directives: [Alert]
})
export class AppComponent {
    private test: String = "Hello, I'm written by app.component.ts";
}
