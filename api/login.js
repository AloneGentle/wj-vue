import request from '@/utils/request'
export default {
    //1.用户登录
    loginUser(ucenterMember) {
        return request({
            url: `/eduservice/member/login?username=${ucenterMember.username}&password=${ucenterMember.password}`,
            method: 'post',
        })
    },

    //3.根据token获取用户信息
    findUserInfo() {
        return request({
            url: `/eduservice/member/findUserInfo`,
            method: 'get'
        })
    },
}
