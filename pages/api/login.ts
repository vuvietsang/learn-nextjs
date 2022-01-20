// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'
type Data = {
  message: string
}
const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
}
export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  if(req.method!=="POST"){
    return res.status(404).json({message:"method not support"})
  }
  return new Promise((resolve)=>{
    req.headers.cookie="";
    
    const handleLoginResponse:ProxyResCallback=(proxyRes,req,res)=>{
      let body="";
      proxyRes.on("data",(chunks)=>{
        body+=chunks;
      }) 
      proxyRes.on("end",()=>{
        try {
          const {accessToken,expiredAt} = JSON.parse(body);

          const cookies = new Cookies(req, res, {secure:process.env.NODE_ENV!=="development"});
          cookies.set("access_token",accessToken,{
            httpOnly:true,
            sameSite:"lax",
            expires:new Date(expiredAt)
          });

          (res as NextApiResponse).status(200).json({message:"login successfully"})
        } catch (error) {
          (res as NextApiResponse).status(500).json({message:"login fail"})
        }
        resolve(true);
      })
    }
    proxy.once("proxyRes",handleLoginResponse)
    proxy.web(req,res,{ 
      target:process.env.API_URL,
      changeOrigin:true,
      selfHandleResponse:true,
    })
  })
}
