import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';
// import { providePerformance,getPerformance } from '@angular/fire/performance';
// import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
// import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // provideAnalytics(() => getAnalytics()), 
    // provideAuth(() => getAuth()), 
    // provideDatabase(() => getDatabase()), 
    // provideFunctions(() => getFunctions()), 
    // provideMessaging(() => getMessaging()), 
    // providePerformance(() => getPerformance()), 
    // provideRemoteConfig(() => getRemoteConfig()), 
    // provideStorage(() => getStorage())
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
