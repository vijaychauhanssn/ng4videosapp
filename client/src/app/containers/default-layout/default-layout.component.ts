import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { User } from '../../models/index';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  currentUser: User;
  users: User[] = [];
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

ngOnInit() {
        this.loadAllUsers();
       }
  private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
