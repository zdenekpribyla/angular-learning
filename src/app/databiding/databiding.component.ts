import { Component } from '@angular/core'

@Component({
    selector: 'app-databiding',
    templateUrl: './databiding.component.html',
})

export class DatabidingComponent {

    userName = '';
    
    checkFunc() {
        if (this.userName === '') {
            return true
        }
        else {
            return false
        }
    }
    
    resetUser() {
        this.userName = '';
    }



   
}