import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingService } from '../shopping-list/shopping.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoginInterceptor } from '../shared/login.interceptor';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        AppRouting,
        SharedModule
    ],
    exports: [
        AppRouting,
        HeaderComponent
    ],
    providers: [
        RecipeService, ShoppingService, DataStorageService, AuthService, 
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true}
        ]
})
export class CoreModule {}