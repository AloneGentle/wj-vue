import request from '@/utils/request'
export default {
    //2.用户注册
    registerUser(RegisterVo) {
        return request({
            url: `/member/register`,
            method: 'post',
            data: RegisterVo
        })
    },
}
