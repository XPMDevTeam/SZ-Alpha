import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../../@components/navbar/navbar.module';
import { HeaderModule } from '../../@components/header/header.module';
import { FooterModule } from '../../@components/footer/footer.module';
import { PortfolioModule } from '../../@components/portfolio/portfolio.module';
import { CopyrightModule } from '../../@components/copyright/copyright.module';
import { ContactModule } from '../../@components/contact/contact.module';
import { AboutModule } from '../../@components/about/about.module';
import { SearchModule } from '../../@components/search/search.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    HeaderModule,
    SearchModule,
    FooterModule,
    PortfolioModule,
    CopyrightModule,
    ContactModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
