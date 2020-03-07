import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, SideNavComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        RouterModule
    ],
    providers: [[{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }]],
    bootstrap: [AppComponent]
})
export class AppModule {}
