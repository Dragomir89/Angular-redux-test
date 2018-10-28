// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// components
import { Register } from "./register-user/register.user.component";
// providers
import { RegisterService } from "./register.service";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations:[Register],
    imports: [FormsModule],
    providers:[RegisterService, BrowserModule],
    exports:[Register]
})


export class AuthModule { }