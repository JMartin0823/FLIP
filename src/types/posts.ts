export interface Comment {
    ownerUserId: number,
    ownerUserName: string,
    comment: string,
}

export interface Post {
    idPost: number;
    ownerUserId: number,
    ownerUsername: string;
    photoURL: string;
    date: string;
    userIdFromLikes: number[]
    comments: Comment[];
}
