import { LightningElement, api } from 'lwc';

export default class RangeSelection extends LightningElement {
    @api variants = [];

    selectionHandler(e) {
        const value = e.target.value;
        let selectedCar = this.variants.find(item => item.variant === value);
        this.dispatchEvent(new CustomEvent("selection", {
            detail: {
                selected: selectedCar,
                variant: value
            }
        }));
    }
}