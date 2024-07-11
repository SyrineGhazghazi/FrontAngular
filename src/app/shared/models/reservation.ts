export class Reservation {
    _id?: string; 
    roomId: string;
    userId: string;
    startTime: Date;
    endTime: Date;

    constructor(roomId: string, userId: string, startTime: Date, endTime: Date) {
        this.roomId = roomId;
        this.userId = userId;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
