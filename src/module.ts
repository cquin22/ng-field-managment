import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "ng2-file-upload";
import {NgxMaskModule} from 'ngx-mask';
import {ClickOutsideModule} from 'ng-click-outside';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {CustomInputComponent} from './components/form-controls/custom-input/custom-input.component'
import {DynamicFormService} from "./services/dynamic-form.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        FileUploadModule,
        NgxMaskModule.forRoot(),
        ClickOutsideModule,
        FileUploadModule,
        CurrencyMaskModule,
    ],
    declarations: [
        CustomInputComponent
    ],
    exports: [
        CustomInputComponent
    ]
})
export class NgFieldManagmentModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgFieldManagmentModule,
            providers: [ DynamicFormService ]
        };
    }
}