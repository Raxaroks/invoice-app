import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';


export default interface IFunButtonProps {
  color: string;
  outline: boolean;
}

@Component({
  selector: 'button[funButton], a[funButton]',
  templateUrl: './fun-button.component.html',
  styleUrls: ['./fun-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FunButtonComponent implements OnInit, IFunButtonProps {
  @Input() color: 'primary' | 'secondary' = 'primary';

  @Input()
  set outline(value: boolean) {
    this._outline = value !== null && `${value}` !== 'false';
  }

  @HostBinding('class.fun-button')
  _funButton = true;

  @HostBinding('class.fun-button--outline')
  _outline = false;

  @HostBinding('class.fun-button--primary')
  get light(): boolean {
    return this.color === 'primary'
  }

  @HostBinding('class.fun-button--secondary')
  get dark(): boolean {
    return this.color === 'secondary'
  }

  constructor() {}

  ngOnInit() {}
}
