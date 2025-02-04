import IDelivery from "./deliveryInterface";

interface IDeliveryCustom extends IDelivery {
    customerName: string;
}

export default IDeliveryCustom;