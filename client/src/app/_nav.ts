export const navItems = [
  {
    name: 'Admin',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Home',
    url: '/home',
    icon: 'icon-home'
  },
  {
    name: 'Forget',
    url: '/forget',
    icon: 'icon-paper-plane'
  },
  {
    name: 'Posts',
    url: '/posts',
    icon: 'icon-paper-plane'
  },
  {
    divider: true
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-login',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-login'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-login'
      }
    ]
  }
  
];
