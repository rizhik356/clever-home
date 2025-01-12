const apiUrls = {
  auth: {
    sign_in: '/auth/sign-in',
    sign_up: '/auth/sign-up',
    confirm_email: '/auth/confirm-email',
    confirm_code: '/auth/confirm-code',
    refresh_token: '/auth/refresh-token',
  },
  users: {
    check_login: '/users/login',
    check_email: '/users/email',
    confirm_email: '/users/confirm-email',
    confirm_code: '/users/confirm-code',
    change_password: '/users/change-password',
  },
  rooms: {
    get_rooms: '/rooms',
  },
  devices: {
    get_devices_types: '/devices/types',
    add_user_device: '/devices/add-user-device',
    allDevices: '/devices',
    post_device_params: '/devices/params',
  },
}

export default apiUrls
