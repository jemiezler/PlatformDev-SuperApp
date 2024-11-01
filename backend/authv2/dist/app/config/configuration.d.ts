declare const _default: () => {
    PORT: number;
    MONGO_URI: string;
    accessToken: {
        secret: string;
        expiresIn: string;
    };
    refreshToken: {
        secret: string;
        expiresIn: string;
    };
};
export default _default;
