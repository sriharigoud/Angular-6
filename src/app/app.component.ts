import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MessageService } from './message.service';

export interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng6';
  message: any;
  subscription: Subscription;

  dataSource: Observable<User[]> = of([{name: 'srihari', age: 28}, {name: 'pavan', age: 20}]);
  data$: Observable<User[]> = this.dataSource.pipe(
    filter((users: User[], index) => {
     return users[index].age > 25;
     }),
     map(users => users)
  );
  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
}
  ngOnInit() {
    this.data$
    .subscribe((users: User[]) => console.log(users));
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
