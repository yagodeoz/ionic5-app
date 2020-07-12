import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
    },
    {
        path: 'timeline',
        loadChildren: () => import('./pages/timeline/timeline.module').then(m => m.TimelinePageModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    { path: 'home', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
    { path: 'productdetail', loadChildren: './components/productdetail/productdetail.module#ProductdetailPageModule' },
    { path: 'productlist', loadChildren: './components/productlist/productlist.module#ProductlistPageModule' },
    { path: 'cart', loadChildren: './components/cart/cart.module#CartPageModule' },
    { path: 'Checkout', loadChildren: './components/checkout/checkout.module#CheckoutPageModule' },
    { path: 'login', loadChildren: './components/login/login.module#LoginPageModule' },
    { path: 'signup', loadChildren: './components/signup/signup.module#SignupPageModule' },
    { path: 'passwordreset', loadChildren: './components/passwordreset/passwordreset.module#PasswordresetPageModule' },
    { path: 'settings', loadChildren: './components/settings/settings.module#SettingsPageModule' },
    { path: 'notificationssettings', loadChildren: './components/notificationssettings/notificationssettings.module#NotificationssettingsPageModule' },
    { path: 'emailsettings', loadChildren: './components/emailsettings/emailsettings.module#EmailsettingsPageModule' },
    { path: 'accountsettings', loadChildren: './components/accountsettings/accountsettings.module#AccountsettingsPageModule' },
    { path: 'country', loadChildren: './components/country/country.module#CountryPageModule' },
    { path: 'changeemail', loadChildren: './components/changeemail/changeemail.module#ChangeemailPageModule' },
    { path: 'changepassword', loadChildren: './components/changepassword/changepassword.module#ChangepasswordPageModule' },
    { path: 'addressbook', loadChildren: './components/addressbook/addressbook.module#AddressbookPageModule' },
    { path: 'NewAddress/:id', loadChildren: './components/new-address/new-address.module#NewAddressPageModule' },
    { path: 'managepayments', loadChildren: './components/managepayments/managepayments.module#ManagepaymentsPageModule' },
    { path: 'newpayment', loadChildren: './components/newpayment/newpayment.module#NewpaymentPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
