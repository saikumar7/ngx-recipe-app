import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingService } from '../shopping-list/shopping.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

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
    providers: [RecipeService, ShoppingService, DataStorageService, AuthService]
})
export class CoreModule {}