"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
class Builder {
    constructor(model, purals) {
        this.model = model;
        this.purals = purals;
        if (this.model.length === 0) {
            throw new Error('Error model is empty');
        }
    }
    getName({ purals, upper } = {
        purals: false,
        upper: false,
    }) {
        const name = purals
            ? this.purals
                ? this.purals
                : this.model + 's'
            : this.model;
        return upper ? name.charAt(0) + name.slice(1).toLowerCase() : name;
    }
}
exports.Builder = Builder;
//# sourceMappingURL=builder.js.map