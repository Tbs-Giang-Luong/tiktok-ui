import * as request from 'utils/request';

export const search = async (q , type = 'less') => {
    try {
        const res = request.get('users/search', {
            params: {
                q,
                type: 'less',
            },
        });
        return res
        
    } catch (error) {
        console.log(error)
        
    }
};
