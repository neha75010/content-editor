import { instance } from '../config/instance';

export function request(args) {
    const { method, url, data = null, callback = () => null } = args;
    instance({ method, url, data }).then(({data}) => {
        callback(data)
    });
}