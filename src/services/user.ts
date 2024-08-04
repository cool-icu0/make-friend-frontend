import myAxios from "../plugins/myAxios";
import {setCurrentUserState} from '../states/user.ts'
export const getCurrentUser = async () => {
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data);
        console.log('res.data:',res.data)
        return res.data;
    }
    return null;
}

