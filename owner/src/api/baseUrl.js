//port为自定义的端口号，host为自定义ip类似于localIp
export const baseUrl = (port) => {
    let url = ''
    if(process.env.NODE_ENV === 'development'){
        url = port === '8081' ? '/api' : '/node'
    }else if(process.env.NODE_ENV === 'production'){
        url = port === '8081' ? 'https://43.129.231.24:8081/' : 'http://43.129.231.24:3000/'
    }
    return url
  }