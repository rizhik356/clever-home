const removeLocalStorageItem = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export default removeLocalStorageItem
