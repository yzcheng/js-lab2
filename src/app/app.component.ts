import {Component, OnInit, provide, Injector, ElementRef, ResolvedReflectiveProvider, ViewEncapsulation} from 'angular2/core';
import { Alert } from 'ng2-bootstrap/components/alert';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import { ModalDialogInstance, ModalConfig, Modal, ICustomModal, YesNoModalContent, YesNoModal} from 'angular2-modal';
import {CustomModalComponent, CustomModalComponentData} from './modal/custom-modal.component';

import 'ag-grid-enterprise/main';

@Component({
    //templateUrl: './app/app.component.html',
    selector: 'my-app',
    directives: [Alert, AgGridNg2],
    providers: [Modal],
    styleUrls : ['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/ag-grid/dist/styles/ag-grid.css', 'node_modules/ag-grid/dist/styles/theme-fresh.css'],
    styles : [`
    `],
    template: `
      <paper-toolbar>
        <span class="title">{{title}}</span>
        <paper-icon-button icon="add">+</paper-icon-button>
      </paper-toolbar>
      <div>
      <ag-grid-ng2 class="ag-fresh"
        style="height: 300px;"
        [gridOptions]="gridOptions"
        [columnDefs]="columnDefs"
        [rowData] = "rowData">
      </ag-grid-ng2>
      </div>
      <alert dismissOnTimeout="3000">This alert will dismiss in 3s</alert>
      <paper-button raised (click)="openDialog('large')">
        <iron-icon icon="add-box"></iron-icon>
        Click
      </paper-button>
      <paper-button raised (click)="openCustomModal()">
        <iron-icon icon="add-box"></iron-icon>
        Click to Open Custom GUI
      </paper-button>
      <div *ngIf="lastModalResult">
        {{lastModalResult}}
      </div>
    `,
    encapsulation : ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  public columnDefs = [
    {headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" }
  ];
  public rowData = [];
  public gridOptions = {rowHeight:100};

    public title: string = "Init...";
    public lastModalResult: string;

    public constructor(private el: ElementRef, private modal: Modal, private injector: Injector) {
        this.title = el.nativeElement.getAttribute('title');
    }

    public ngOnInit(): any {
    }

    openDialog(type: string) {
        //context
        let resolvedProviders = Injector.resolve([
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
        let resolvedProviders = Injector.resolve([provide(ICustomModal, { useValue: new CustomModalComponentData() })]);

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
