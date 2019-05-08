import { Component } from '@angular/core';
import {hasLifecycleHook} from "@angular/compiler/src/lifecycle_reflector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'statsbox';

}

