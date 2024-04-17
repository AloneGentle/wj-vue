import request from '@/utils/request'
export default {
    //1.用户登录
    loginUser(ucenterMember) {
        return request({
            url: `/educenter/member/login?username=${ucenterMember.mobile}&password=${ucenterMember.password}`,
            method: 'post',
        })
    },

    //3.根据token获取用户信息
    findUserInfo() {
        return request({
            url: `/educenter/member/findUserInfo`,
            method: 'get'
        })
    },
}
