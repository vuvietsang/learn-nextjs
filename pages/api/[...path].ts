// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies';

type Data = {
  name: string
}
const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
}
export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  return new Promise((resolve)=>{
//conver cookie to authorization
const cookies = new Cookies(req,res);
const access_token= cookies.get("access_token");
if(access_token){
  req.headers.authorization= `Bearer ${access_token}`;
}
    
//dont send cookies to API server
req.headers.cookie="";
proxy.web(req,res,{
      target:process.env.API_URL,
      changeOrigin:true,
      selfHandleResponse:false,
    })
    proxy.once("proxyRes",()=>{
      resolve(true);
    })
  })
}
