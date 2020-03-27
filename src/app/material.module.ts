import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatInputModule,
    MatListModule,
    MatIconModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ]
})
export class CustomMaterialModule {}
