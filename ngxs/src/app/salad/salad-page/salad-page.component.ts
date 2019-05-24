import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { StartOver } from '../salad.actions';
import { SaladState } from '../salad.state';

@Component({
  selector: 'salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {
  // @Select(SaladState) salad: any;
  // @Select(state => state.salad) salad: any;
  @Select() salad$;
  @Select(SaladState.getDressing) dressing$;
  @Select(state => state.salad.price) price$;

  constructor(private store: Store) {}

  ngOnInit() {}

  startOver() {
    this.store.dispatch(new StartOver());
  }
}
