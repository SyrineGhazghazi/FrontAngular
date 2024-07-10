export class Room {
    _id!: string; 
    name: string;
    capacity: number;
    equipments: string[];
    availability: Date[];

    constructor(name: string, capacity: number, equipments: string[] = [], availability: Date[] = []) {
        this.name = name;
        this.capacity = capacity;
        this.equipments = equipments;
        this.availability = availability;
    }
}
