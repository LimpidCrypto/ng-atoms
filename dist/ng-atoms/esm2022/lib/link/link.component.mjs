import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LinkComponent {
    constructor() {
        this.target = '_self';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: LinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: LinkComponent, selector: "link-atom", inputs: { href: "href", target: "target" }, ngImport: i0, template: "<a [href]=\"href\" [target]=\"target\" class=\"link-atom\">\n    <ng-content />\n</a>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: LinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'link-atom', template: "<a [href]=\"href\" [target]=\"target\" class=\"link-atom\">\n    <ng-content />\n</a>\n" }]
        }], propDecorators: { href: [{
                type: Input
            }], target: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1hdG9tcy9zcmMvbGliL2xpbmsvbGluay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1hdG9tcy9zcmMvbGliL2xpbmsvbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTakQsTUFBTSxPQUFPLGFBQWE7SUFMMUI7UUFPVyxXQUFNLEdBQWUsT0FBTyxDQUFBO0tBQ3RDOytHQUhZLGFBQWE7bUdBQWIsYUFBYSw2RkNUMUIseUZBR0E7OzRGRE1hLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsV0FBVzs4QkFLWixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBMaW5rVGFyZ2V0ID0gJ19ibGFuaycgfCAnX3NlbGYnIHwgJ19wYXJlbnQnIHwgJ190b3AnIHwgc3RyaW5nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaW5rLWF0b20nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaHJlZiE6IHN0cmluZztcbiAgQElucHV0KCkgdGFyZ2V0OiBMaW5rVGFyZ2V0ID0gJ19zZWxmJ1xufVxuIiwiPGEgW2hyZWZdPVwiaHJlZlwiIFt0YXJnZXRdPVwidGFyZ2V0XCIgY2xhc3M9XCJsaW5rLWF0b21cIj5cbiAgICA8bmctY29udGVudCAvPlxuPC9hPlxuIl19