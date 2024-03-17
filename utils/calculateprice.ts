export const priceAfterDiscount = (MRP: number, discount: number) => {
    if (!MRP) return 0;
    if (!discount) return MRP;
    const discountAmount = (MRP * discount) / 100;
    const price = MRP - discountAmount;
    return Math.round(price);
};
