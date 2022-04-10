import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from './../../services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public dataForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmitForm() {
    console.log(this.dataForm.value)
    // if (this.dataForm.invalid) {
    //   this.uiService.warn('Please complete all the required field');
    //   return;
    // }
    // if (this.dataForm.invalid) {
    //   this.username.markAsTouched({onlySelf: true});
    //   this.password.markAsTouched({onlySelf: true});
    //   return;
    // }

    if (this.dataForm.value.password.length < 6) {
      this.uiService.warn('Password must be at lest 6 characters!');
      return;
    }

  }


  /**
   * LOGICAL AREA
   */
  private validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /**
   * Form Validations
   */
  get username() {
    return this.dataForm.get('username');
  }

  get password() {
    return this.dataForm.get('password');
  }

}
