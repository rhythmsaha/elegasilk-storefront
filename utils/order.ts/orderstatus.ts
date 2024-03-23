export type IOrderStatusTypesAll =
    | "PENDING"
    | "PLACED"
    | "FAILED"
    | "CANCELLED"
    | "SHIPPED"
    | "DELIVERED"
    | "RETURN_REQUESTED"
    | "RETURNED"
    | "REFUNDED"
    | "EXCHANGE_REQUESTED"
    | "EXCHANGED"
    | undefined;

export const getOrderStatusText = (orderStatus: IOrderStatusTypesAll) => {
    let orderStatusText, classNames;

    switch (orderStatus) {
        case "PENDING":
            orderStatusText = "Processing";
            classNames = "text-yellow-600 font-medium";
            break;
        case "PLACED":
            orderStatusText = "Pending";
            classNames = "text-orange-400 font-medium";
            break;
        case "FAILED":
            orderStatusText = "Failed";
            classNames = "font-medium text-red-500";
            break;
        case "CANCELLED":
            orderStatusText = "Cancelled";
            classNames = "font-medium text-red-500";
            break;
        case "SHIPPED":
            orderStatusText = "Shipped";
            classNames = "font-medium text-green-500";
            break;
        case "DELIVERED":
            orderStatusText = "Delivered";
            classNames = "font-medium text-green-500";
            break;
        case "RETURN_REQUESTED":
            orderStatusText = "Return Requested";
            classNames = "font-medium text-yellow-600";
            break;
        case "RETURNED":
            orderStatusText = "Returned";
            classNames = "font-medium text-green-500";
            break;
        case "REFUNDED":
            orderStatusText = "Refunded";
            classNames = "font-medium text-green-500";
            break;
        case "EXCHANGE_REQUESTED":
            orderStatusText = "Exchange Requested";
            classNames = "font-medium text-yellow-600";
            break;
        case "EXCHANGED":
            orderStatusText = "Exchanged";
            classNames = "font-medium text-green-500";
            break;
        default:
            orderStatusText = "Unknown";
            classNames = "font-medium text-gray-600";
            break;
    }

    return {
        orderStatusText,
        classNames,
    };
};
