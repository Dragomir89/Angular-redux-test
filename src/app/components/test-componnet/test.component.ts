import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'app-test',
    template: `<h1>TEST 001</h1>`
})

export class Test implements OnInit {
    public test: Observable<Object>;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        console.log('TEST init')

        this.store.subscribe((state)=>{
            console.log(state);
        })

        this.test = this.store.select((state)=>{
            console.log('just test') 
            console.log(state)
            return state;
        });
    }
}
