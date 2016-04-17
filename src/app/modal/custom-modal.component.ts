import {Component} from 'angular2/core';
import {Modal, ModalDialogInstance, ICustomModal, ICustomModalComponent} from 'angular2-modal';

export class CustomModalComponentData {
    constructor() {

    }
}

@Component({
    selector: 'custom-modal',
    template:`<div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
                <div class="col-sm-12">
                    <h1>A Custom modal design</h1>
                </div>
            </div>
            <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
                <div class="col-xs-12">
                    <div class="jumbotron">
                        <h1>Do the math to quit:</h1>
                        <p class="lead">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong></p>
                        <span>What is the sum?</span>
                         <input class="form-control" type="text" #answer (keyup)="onKeyUp(answer.value)" autofocus>
                    </div>
                </div>
            </div>
        </div>`
})
export class CustomModalComponent implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    private context: CustomModalComponentData;

    public wrongAnswer: boolean;
        constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal) {
        this.dialog = dialog;
        this.context = <CustomModalComponentData>modelContentData;
    }

    onKeyUp(value) {
           /* tslint:disable */ this.wrongAnswer = value != 5;
        this.dialog.close();
    }


    beforeDismiss(): boolean {
        return true;
    }

    beforeClose(): boolean {
        return this.wrongAnswer;
    }
}
