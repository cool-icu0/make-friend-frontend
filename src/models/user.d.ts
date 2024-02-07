/**
 * 用户类别
 */
export type userType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender: number;
    phone: string;
    email: string;
    userStatus: string;
    userRole: string;
    createTime: Date;
    tags: string[];
}