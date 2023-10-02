export interface LoginData {
    id: number;
    status:  number;
    message: string;
    data:    Data;
}

export interface Data {
    access_token:   string;
    status:         number;
    first_name:     string;
    daysExpiration: number;
    userName:       string;
}

export interface LogoutData {
    approved:       boolean;
    accessToken:   string;
}