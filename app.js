const http = require('http')
const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.end('HomePage is here')
        return
    }
    if (req.url === '/about') {
        res.end("You requested About...yay")
        return
    
    
}
    res.end(`
        <h1>OOPs! </h1>
        <p>cant find what you are trying to search</p>
    `)
})

server.listen(5000, () => {
    console.log('Server is listening on port 5K')
})


