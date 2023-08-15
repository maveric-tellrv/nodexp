const os = require('os')


const logOs = () => {
    const obj = {}
    obj.HostName = os.hostname()
    obj.osArch = os.arch()
    obj.loadavg = os.loadavg()
    obj.NetworkInterface = os.networkInterfaces()
    let freeMem = Math.floor(os.freemem()/(1024*1024))
    obj.FReeMem = freeMem+' '+'MB'
    return obj
}

module.exports = logOs