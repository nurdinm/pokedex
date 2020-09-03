import * as c from './constants';

export const addData = (data) => ({
    type: c.DATA_AVAILABLE,
    data
});

export const addTypeData = (data) => ({
    type: c.DATA_TYPE,
    data: data
});