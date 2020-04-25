let WebProxy = function(ip, port, anonymity, google_support, https_support, last_checked) {
    this.ip = ip;
    this.port = port;
    this.anonymity = anonymity;
    this.google_support = google_support;
    this.https_support = https_support;
    this.last_checked = last_checked;
}

function getProxies() {
    return new Promise(res => {
        let jsdom = require('jsdom');
        let { JSDOM } = jsdom;
        
        JSDOM.fromURL("https://www.us-proxy.org/", { runScripts: 'dangerously', resources: 'usable' }).then(dom => {
        
            let proxy_list_data = dom.window.document.getElementById('proxylisttable').getElementsByTagName('tbody')[0].children;
            let proxy_list = [];
            for (let i = 0; i < proxy_list_data.length; i++) {
                let selected_proxy = proxy_list_data[i];
        
                let ip = selected_proxy.children[0].innerHTML;
                let port = selected_proxy.children[1].innerHTML;
                let anonymity = selected_proxy.children[4].innerHTML;
                let google_support = selected_proxy.children[5].innerHTML;
                let https_support = selected_proxy.children[6].innerHTML;
                let last_checked = selected_proxy.children[7].innerHTML;
        
                proxy_list.push(new WebProxy(ip, port, anonymity, google_support, https_support, last_checked));
            }
            dom.window.close();
            res(proxy_list);
        });
    })
}

module.exports = {
    getProxies
}