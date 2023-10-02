import { Component, OnInit } from '@angular/core';
import { processLogout } from 'app/global/logout.utils';
import { LogoutData } from 'app/interfaces/auth.interface';
import { AuthService } from 'app/services/auth/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/app/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/app/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/app/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/app/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/app/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/app/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/app/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/app/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private authServ: AuthService,
    private logoutUtil: processLogout
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  logout(){
    this.authServ.sendLogout().subscribe(
        (resp: LogoutData) => {
            if(resp.approved){
              this.logoutUtil.processLogout();
            }
        }
    )
  }
}
