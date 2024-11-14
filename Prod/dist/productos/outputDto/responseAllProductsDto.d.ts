export declare class ResponseAllProductsDto<T> {
    status: number;
    data?: T;
    message?: string;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}
