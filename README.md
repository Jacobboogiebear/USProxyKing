# US King Proxy, the only proxy finder you'll ever need!

This is a very simple tool that allows you to find proxies from [https://www.us-proxy.org/](https://www.us-proxy.org/).
You simply grab the module use a function, filter some basic objects and BOOM you have a proxy that you can use for anything!

So here is the API and how it works!
---
### The API
Basic Exports:

 1. The Functions
 ---
 -  getProxies() 
> Parameters: None
> 
> Returns: Array\<WebProxy>
> 
> Description: It is used for getting all the proxies from the server and their status
> 
&nbsp;
&nbsp;

2. The Objects
---
- WebProxy(IP, Port, Anonymity, Google Support, HTTPS Support, Last Checked)
> Parameters: 
> - IP: string / IP address
> &ensp; The IP for the proxy
> 
>  - Port: number 0-65535
>  &ensp; The Port for the proxy 
>    
> -  Anonymity: string
> &ensp; The State of the proxy which can be
> &ensp; - anonymous: It hides your identity from the receiver
> &ensp; - elite proxy: Just a bog standard proxy with extra security measures
> &ensp; - transparent: A proxy that relays all information to the receiver
> 
> - Google Support: boolean
> &ensp; Whether or not the proxy is flagged by google
>
> - HTTPS Support: boolean
> &ensp; Whether or not the proxy supports the HTTPS protocol
> 
> - Last Checked: string
> &ensp; A time when the string was last checked
> 
> Object Properties: 
> - ip: string
> &ensp; - The IP for the proxy
>
>- port: number 0-65535
>&ensp; - The Port for the proxy
>
> - anonymity: string
> &ensp; - The State of the proxy which can be
> &ensp; - anonymous: It hides your identity from the receiver
> &ensp; - elite proxy: Just a bog standard proxy with extra security measures
> &ensp; - transparent: A proxy that relays all information to the receiver 
>
>- google_support: boolean
> &ensp; Whether or not the proxy is flagged by google
>
> - https_support: boolean
> &ensp; Whether or not the proxy supports the HTTPS protocol
>
> - last_checked: string
>  &ensp; A time when the string was last checked
>  
> Description: An object with all the data of a proxies location

&nbsp;
### This project was made for simplistic and LEGAL purposes, please use at your own discretion 
### Licensed under the MIT License, Jacob Morris 2020&copy;
