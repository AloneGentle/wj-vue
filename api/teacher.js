import request from '@/utils/request'

export default {
  //1.讲师分页显示
  pageTeacherFront(page, limit, cookie) {
    let args = {
      url: `/eduservice/teacherFront/pageTeacherFront/${page}/${limit}`,
      method: 'get',
    }
    if (cookie) {
      args.headers = {cookie: cookie}
    }
    return request(args)
  },

  //2.根据讲师ID查询讲师详情
  getInfoByTeacherId(id, cookie) {
    let args = {
      url: `/eduservice/teacherFront/getInfoByTeacherId/${id}`,
      method: 'get',
    }
    if (cookie) {
      args.headers = {cookie: cookie}
    }
    return request(args)
  }
}
