import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'contacts', title: 'Contacts',  icon: 'contacts', class: '' },
    { path: 'items', title: 'Items',  icon: 'layers', class: '' },
    { path: 'sales-orders', title: 'Sales Orders',  icon: 'shopping_cart', class: '' },
    { path: 'invoices', title: 'Invoices',  icon: 'note', class: '' },
    { path: 'reports', title: 'Reports',  icon: 'trending_up', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  };
}
