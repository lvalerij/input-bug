import { Component, ApplicationRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  form = new FormGroup({
    ionInput: new FormControl(''),
    plainInput: new FormControl(''),
  });
  constructor(private appRef: ApplicationRef) {}

  ionInputHandler(event: any) {
    this.form.get('ionInput').setValue(event.target.value + '!');

    const input = <HTMLInputElement>(
      document.getElementById('ionInput').firstChild
    );
    this.appRef.tick();
    input.selectionStart = 0;
    input.selectionEnd = 0;
  }

  inputHandler(event: any) {
    this.form.get('plainInput').setValue(event.target.value + '!');
    event.target.selectionStart = 0;
    event.target.selectionEnd = 0;
  }
}
