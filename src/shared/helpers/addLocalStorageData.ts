type LocalStorageData = { access_token: string; refresh_token: string }

const addLocalStorageData = ({
  access_token,
  refresh_token,
}: LocalStorageData) => {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}

export default addLocalStorageData
