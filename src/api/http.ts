import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
export const http = axios.create({
  baseURL,
  // timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 시 토큰 넣는 코드.
// http.interceptors.request.use(
//   async config => {
//     이 부분만 바꿔서 쓰면 됩니다.
//     const token = await retrieve('accessToken');
//     console.log(`axios: ${token}`);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   e => {
//     return Promise.reject(e);
//   },
// );

// export default http;