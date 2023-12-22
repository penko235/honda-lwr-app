import { LightningElement, api } from 'lwc';

export default class CarDetails extends LightningElement {
    @api 
    get selectedVariant() {
        return this._selectedVariant;
    }

    set selectedVariant(v) {
        if (!v) return;
        let model = v.variant.toLowerCase().replaceAll(' ', '');
        let selectedImage = `/public/assets/honda/${model}/${v.imageName}.png`;
        this._selectedVariant = {...v, 'selectedImage': selectedImage};
    }
    _selectedVariant = {};
}