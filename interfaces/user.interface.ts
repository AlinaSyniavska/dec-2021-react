export interface IUser<T, G> {
    id?: number,
    name: string,
    surname?: string,
    age: number,
    gender: string,
    skills: T[],
    hobby: T[],
    index: G
}

export interface IUserShortInfo {
    name: string,
    age: number,
    gender: string
}