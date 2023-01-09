export interface Iuser {
    username: String;
    password: String;
    email: String;
    role: String;
    isActive: Boolean;
    notifications: Inotification[];
    totalPoints: number;
    livePoints: number;
    pointsCreditDate: Date;
    pointsExpiryDate: Date;
    lapsedPoints: number;

}

interface Inotification {
    message: string;
    isRead: Boolean;
}

export interface IDistributor {
    distributorName: string;
    username: string;
    password: string;
    email: string;

}

export interface IUserProducts {
    username: string;
    quantity: number;
    points: number;
    prodName: string;
}