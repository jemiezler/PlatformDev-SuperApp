export declare abstract class Builder {
    private model;
    private purals?;
    constructor(model: string, purals?: string);
    protected getName({ purals, upper }?: {
        purals?: boolean;
        upper?: boolean;
    }): string;
    abstract build(method: any, options: any): string;
}
