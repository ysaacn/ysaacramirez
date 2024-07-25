import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    }

];
