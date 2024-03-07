import { Component } from '@angular/core';


export type NavItem = {
  to: string;
  name: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { to: '/invoices', name: 'Historial de facturas' }
  ]
}
