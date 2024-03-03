enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}
  
type OptionsType = {
    method?: METHODS.GET | METHODS.PUT | METHODS.POST | METHODS.DELETE;
    headers?: { [key: string]: string };
    data?: { [key: string]: unknown };
    timeout?: number;
};

type HTTPMethod = (url: string, options?: OptionsType) => Promise<unknown>
