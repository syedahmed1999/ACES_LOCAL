/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as studentTestDetailComponents from './components';

/* Containers */
import * as studentTestDetailContainers from './containers';

/* Guards */
import * as studentTestDetailGuards from './guards';

/* Services */
import * as studentTestDetailServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        WebcamModule
    ],
    providers: [...studentTestDetailServices.services, ...studentTestDetailGuards.guards],
    declarations: [...studentTestDetailContainers.containers, ...studentTestDetailComponents.components],
    exports: [...studentTestDetailContainers.containers, ...studentTestDetailComponents.components],
})
export class StudentTestDetailModule {}
