export class GastoCombustible {
    constructor(id, vehicleType, date, kilometers, precioViaje) {
        this.id = id;
        this.vehicleType = vehicleType;
        this.date = new Date(date);
        this.kilometers = kilometers;
        this.precioViaje = precioViaje;
    }
}