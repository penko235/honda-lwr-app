import { LightningElement, api } from 'lwc';

export default class PriceFooter extends LightningElement {
    @api price;
    
    get formattedPrice() {
        return this.formatter(this.price);
    }

    formatter(v) {
        if (v) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'usd',
                maximumFractionDigits: 0
            }).format(v);
        } else {
            return null;
        }
    }

    contactUsHandler(e) {
        this.dispatchEvent(new CustomEvent('showmodal'));
    }
}