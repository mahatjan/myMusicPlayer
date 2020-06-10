(function (Vue, axios) {
    const Axios = axios.create({
        baseURL: "https://apimusic.linweiqin.com/",
        timeout: 10000
    })
   
    //请求的拦截器
    Axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        vm.isLoading=true;
        return config;
            
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // 返回的拦截器
    Axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        vm.isLoading=false;
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    window.Axios = Axios

})(Vue, axios)