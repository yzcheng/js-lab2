import {Component, OnInit, provide, Injector, ElementRef, ResolvedProvider} from 'angular2/core';
import { Alert } from 'ng2-bootstrap/components/alert';
import { ModalDialogInstance, ModalConfig, Modal, ICustomModal, YesNoModalContent, YesNoModal} from 'angular2-modal';
import {CustomModalComponent, CustomModalComponentData} from './modal/custom-modal.component';

@Component({
    //templateUrl: './app/app.component.html',
    selector: 'my-app',
    directives: [Alert],
    inputs: ['title'],
    providers: [Modal],
    template: `
      <h2>{{title}}</h2>
      <alert dismissOnTimeout="300000">This alert will dismiss in 3s</alert>
      <button (click)="openDialog('large')">Click</button>
      <div *ngIf="lastModalResult">
        {{lastModalResult}}
      </div>
      <button (click)="openCustomModal()">Click to Open Custom GUI</button>
    `
})
export class AppComponent implements OnInit {
    public title: string = "Init...";
    public lastModalResult: string;

    public constructor(private el: ElementRef, private modal: Modal, private injector: Injector) {
        this.title = el.nativeElement.getAttribute('title');
    }

    public ngOnInit(): any {
    }

    openDialog(type: string) {
        //context
        let resolvedProviders:ResolvedProvider[] = Injector.resolve([
            provide(ICustomModal, { useValue: new YesNoModalContent('Simple Large modal', 'Press ESC or click OK / outside area to close.', false) })
        ]);

        let dialog: Promise<ModalDialogInstance> = this.modal.open(
            <any>YesNoModal,
            resolvedProviders,
            new ModalConfig("lg", true, 27));

        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });
    }


    openCustomModal() {
        //context
        let resolvedProviders:ResolvedProvider[] = Injector.resolve([provide(ICustomModal, { useValue: new CustomModalComponentData() })]);

        let dialog: Promise<ModalDialogInstance> = this.modal.open(
            <any>CustomModalComponent,
            resolvedProviders,
            new ModalConfig('lg', true, 27)
            );

        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });
    }
}
