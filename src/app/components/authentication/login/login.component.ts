import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private fb: FormBuilder, private router: Router) { }
    private username: UserDetails;
    ngOnInit(): void {
        this.form = this.fb.group({
            uname: [null, Validators.compose([Validators.required])],
            password: [null, Validators.compose([Validators.required])]
        });
    }

    onSubmit() {

        if (this.validateEmail(this.username.email)) {
            this.router.navigate(['/dashboard']);
        }
    }

    validateEmail(email: String) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    submit() {
        if (this.form.valid) {
            this.submitEM.emit(this.form.value);
        }
    }
    @Input() error: string | null;

    @Output() submitEM = new EventEmitter();
}


interface UserDetails {
    firstName: string;
    surname: string;
    email: string;
    phone: Number;
}