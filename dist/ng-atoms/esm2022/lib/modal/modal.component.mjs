import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalComponent {
    constructor() {
        this.closeOnClickOutside = true;
    }
    ngOnInit() {
        this.modal = document.querySelector(`#${this.id}`);
        if (this.closeOnClickOutside) {
            if (this.modal) {
                this.modal.addEventListener('click', (event) => {
                    if (event.target !== this.modal) {
                        this.close();
                    }
                });
            }
        }
    }
    open() {
        if (this.modal) {
            this.modal.showModal();
        }
    }
    close() {
        if (this.modal) {
            this.modal.close();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: ModalComponent, selector: "modal-atom", inputs: { id: "id", closeOnClickOutside: "closeOnClickOutside" }, ngImport: i0, template: "<dialog [id]=\"id\" class=\"modal-atom\">\n    <ng-content />\n</dialog>\n", styles: [".modal-atom{position:fixed;z-index:9;overflow:auto}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal-atom', template: "<dialog [id]=\"id\" class=\"modal-atom\">\n    <ng-content />\n</dialog>\n", styles: [".modal-atom{position:fixed;z-index:9;overflow:auto}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYXRvbXMvc3JjL2xpYi9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1hdG9tcy9zcmMvbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOztBQU92RCxNQUFNLE9BQU8sY0FBYztJQUwzQjtRQU9XLHdCQUFtQixHQUFZLElBQUksQ0FBQztLQTJCOUM7SUF4QkMsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBc0IsQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDN0MsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQzdCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDaEI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFBO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ25CO0lBQ0gsQ0FBQzsrR0E1QlUsY0FBYzttR0FBZCxjQUFjLG9IQ1AzQiw0RUFHQTs7NEZESWEsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxZQUFZOzhCQUtiLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWF0b20nLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsb3NlT25DbGlja091dHNpZGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIG1vZGFsPzogSFRNTERpYWxvZ0VsZW1lbnQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCkgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgaWYgKHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuICAgICAgaWYgKHRoaXMubW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMubW9kYWwpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgaWYgKHRoaXMubW9kYWwpIHtcbiAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMubW9kYWwpIHtcbiAgICAgIHRoaXMubW9kYWwuY2xvc2UoKVxuICAgIH1cbiAgfVxufVxuIiwiPGRpYWxvZyBbaWRdPVwiaWRcIiBjbGFzcz1cIm1vZGFsLWF0b21cIj5cbiAgICA8bmctY29udGVudCAvPlxuPC9kaWFsb2c+XG4iXX0=