import { NgModule } from '@angular/core';
// import { APP_CORE_COMPONENTS } from './components';
import { MaterialModule } from './modules/material.module';
// import { APP_CORE_PIPES } from './pipes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { APP_CORE_MODALS } from './modals';
import { RouterModule } from '@angular/router';
// import { APP_CORE_DIRECTIVES } from './directives';

@NgModule({
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        MaterialModule,
        // ...APP_CORE_COMPONENTS,
        // ...APP_CORE_PIPES,
        // ...APP_CORE_MODALS,
        // ...APP_CORE_DIRECTIVES,
    ],
    declarations: [
        // ...APP_CORE_COMPONENTS,
        // ...APP_CORE_PIPES,
        // ...APP_CORE_MODALS,
        // ...APP_CORE_DIRECTIVES,
    ],
    // entryComponents: [
    //     ...APP_CORE_MODALS,
    // ],
})
export class AppCoreModule { }
