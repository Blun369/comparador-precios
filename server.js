const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const datos = [
        {
            tienda: "Amazon",
            precio: 450,
            url: "https://www.amazon.com.mx"
        },
        {
            tienda: "Mercado Libre",
            precio: 399,
            url: "https://www.mercadolibre.com.mx"
        },
        {
            tienda: "Walmart",
            precio: 410,
            url: "https://super.walmart.com.mx"
        }
    ];

    res.end(JSON.stringify(datos));
});

server.listen(3000, () => {
    console.log('Servidor iniciado');
});
