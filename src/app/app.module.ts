import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService, MsalGuard, MsalGuardAuthRequest, MsalGuardConfiguration, MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService } from '@azure/msal-angular';
import { BrowserCacheLocation, IPublicClientApplication, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';

export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth: {
      clientId: environment.clientId,
      redirectUri: environment.redirectUri,
      postLogoutRedirectUri: environment.postLogoutRedirectUri,
      authority: environment.authority,
      },
    cache: {
      // storeAuthStateInCookie: false

      //clears when user logs out
      cacheLocation: BrowserCacheLocation.LocalStorage
    },

  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration{
  const protectedResourceMap = new Map<string, Array<string>>();
  // protectedResourceMap.set("https://graph.microsoft.com/v1.0/me",["user.read"]);
  protectedResourceMap.set(environment.baseUrl, environment.scopeUri);

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration{
  return{
    interactionType: InteractionType.Popup,
    authRequest: {
      scopes: ['user.read']
    },
    loginFailedRoute: environment.postLogoutRedirectUri
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MsalModule
    
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalGuard,
    MsalBroadcastService,
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
