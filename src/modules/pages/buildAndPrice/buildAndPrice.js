import { LightningElement } from 'lwc';
const CRV_VARIANTS = [
    {
      variant:"VTi",
      price:38900,
      formattedPrice:"$38,900",
      fuelConsumption:7,
      seatingCapacity:5,
      allowWheels:17,
      checked:true,
      imageName:"ignite_red"
    },
    {
      variant:"VTi 7",
      formattedPrice:"$40,900",
      price:40900,
      fuelConsumption:7.3,
      seatingCapacity:7,
      allowWheels:17,
      imageName:"ignite_red"
    },
    {
      variant:"VTi X",
      formattedPrice:"$41,900",
      price:41900,
      fuelConsumption:7.3,
      seatingCapacity:5,
      allowWheels:18,
      imageName:"ignite_red"
    },
    {
      variant:"VTi LX AWD",
      formattedPrice:"$53,600",
      price:53600,
      fuelConsumption:7.4,
      seatingCapacity:5,
      allowWheels:19,
      imageName:"ignite_red"
    }
  ];

  // Define the colors available for the car
  const COLORS = [
    {label: 'Ignite Red (Metallic)', value: 'ignite_red', checked: true}, 
    {label: 'Brilliant Sporty Blue', value: 'sporty_blue'},
    {label: 'Crystal Black', value: 'crystal_black'},
    {label: 'Platinum White (Pearlescent)', value: 'platinum_white'}
  ];

  const ANIMATED_STARTING_PRICE = 38000;
export default class BuildAndPrice extends LightningElement {
    selectedVariant = CRV_VARIANTS[0];
    colorsList = COLORS;
    crvVariants = CRV_VARIANTS;
    selectedPrice = this.selectedVariant.price;
    selectedImgName = this.colorsList[0].value;
    selectedImgLabel = this.colorsList[0].label;
    animatedPriceValue;
    showModal = false;

    connectedCallback() {
      this.animatePrice();
    }

    // Handler for when a variant is selected
    handleCarSelection(e) {
        const {selected, variant} = e.detail;
        this.selectedVariant = {...selected, imageName: this.selectedImgName};
        this.selectedPrice = this.selectedVariant.price;
        this.updateVariant(variant);
        this.animatePrice();
    }

    // Handler for when a color is selected
    handleColorSelection(e) {
      this.selectedImgName = e.detail;
      this.selectedVariant = {...this.selectedVariant, imageName: this.selectedImgName};
      this.updateColor(this.selectedImgName);
    }

    // Update the cheked property for the colors based on the selected value
    updateColor(value) {
      this.colorsList = this.colorsList.map((item => {
        let checked = item.value === value;
        if (checked) {
          this.selectedImgLabel = item.label;
        }
        return {...item, checked}
      }));
    }

    // Update the checked property for the variants based on the selected variant
    updateVariant(value) {
      this.crvVariants = this.crvVariants.map((item => {
        let checked = item.variant === value;
        return {...item, checked}
      }));
    }

    // Method to animate the price
    animatePrice() {
      this.animatedPriceValue = ANIMATED_STARTING_PRICE
      let interval = setInterval(() => {
        if (this.selectedPrice !== this.animatedPriceValue) {
          this.animatedPriceValue = this.animatedPriceValue + 100;
        } else {
          window.clearInterval(interval);
        }
      }, 10);
    }

    // Open the modal
    showModalHandler() {
      this.showModal = true;
    }

    cancelHandler() {
      this.showModal = false;
    }

    submitHandler() {
      
    }
}