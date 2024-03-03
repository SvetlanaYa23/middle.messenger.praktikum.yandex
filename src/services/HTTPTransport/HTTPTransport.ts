type HTTPMethod = (url: string, options?: OptionsType) => Promise<unknown>

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


function queryStringify(data: { [key: string]: unknown }) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    return `?${Object.entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`;
}

export class HTTPTransport {
    get: HTTPMethod = (url, options = {}) => (
        this.request(url, { ...options, method: METHODS.GET }, options.timeout)
    )

    put: HTTPMethod = (url, options = {}) => (
        this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
    )

    post: HTTPMethod = (url, options = {}) => (
        this.request(url, { ...options, method: METHODS.POST }, options.timeout)
    )

    delete: HTTPMethod = (url, options = {}) => (
        this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
    )
    request = (url: string, options: OptionsType = {}, timeout = 5000) => {
        const { method = METHODS.GET, headers = {}, data = {} } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();

            if (method === METHODS.GET && Object.keys(data).length) {
                url = `${url}${queryStringify(data)}`;
            }

            xhr.open(method, url);

            for (const [key, value] of Object.entries(headers)) {
                xhr.setRequestHeader(key, value);
            }

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onerror = reject;
            xhr.onabort = reject;
            xhr.ontimeout = reject;

            xhr.timeout = timeout;

            if (method === METHODS.GET || !Object.keys(data).length) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
