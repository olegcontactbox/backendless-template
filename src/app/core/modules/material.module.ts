import { NgModule } from '@angular/core';
import {
    MatSnackBarModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatSelectModule, 
} from '@angular/material';

export const MATERIAL_MODULES = [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
  ];

@NgModule({
    imports: [
        ...MATERIAL_MODULES,
    ],
    exports: [
        ...MATERIAL_MODULES,
    ],
})
export class MaterialModule { }
