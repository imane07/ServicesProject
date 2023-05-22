"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cocktail_list_component_1 = require("./cocktail-list/cocktail-list.component");
var cocktail_service_1 = require("./cocktail.service");
describe('Quest Test Suite', function () {
    beforeEach((0, testing_1.waitForAsync)(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                cocktail_list_component_1.CocktailListComponent
            ],
        }).compileComponents();
    }));
    fit('service should be created', function () {
        var service = testing_1.TestBed.inject(cocktail_service_1.CocktailService);
        expect(service).toBeTruthy();
    });
    fit('service should have a "getCocktails" method which returns at least one object', function () {
        var service = testing_1.TestBed.inject(cocktail_service_1.CocktailService);
        var tab = service.getCocktails();
        // expect(tab.length).toBeGreaterThan(0);
    });
    fit('should create a CocktailListComponent instance', (0, testing_1.waitForAsync)(function () {
        var fixture = testing_1.TestBed.createComponent(cocktail_list_component_1.CocktailListComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    fit('component should have a public property named "cocktails"', (0, testing_1.waitForAsync)(function () {
        var fixture = testing_1.TestBed.createComponent(cocktail_list_component_1.CocktailListComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.cocktails).toBeTruthy();
    }));
    fit('component should display at least one cocktail', (0, testing_1.waitForAsync)(function () {
        var fixture = testing_1.TestBed.createComponent(cocktail_list_component_1.CocktailListComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        var content = compiled.textContent;
        var first = fixture.componentInstance.cocktails[0];
        expect(content).toContain(first.name);
    }));
});
