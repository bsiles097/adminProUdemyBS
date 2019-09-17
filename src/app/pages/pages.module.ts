import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { PAGES_ROUTES } from './pages.routes';
import {ChartsModule} from 'ng2-charts';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { GraficoDonaComponent } from './../components/graficos/grafico-dona/grafico-dona.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    providers: [],
})
export class PagesModule {}
