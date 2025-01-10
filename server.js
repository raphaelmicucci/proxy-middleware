const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Configuração do proxy para redirecionar chamadas para a API
app.use(
  "/", // Rota base para o proxy
  createProxyMiddleware({
    target: "http://15.228.245.31:8080", // URL da API
    changeOrigin: true, // Permite alterar o cabeçalho "Host"
  })
);

// Porta em que o servidor proxy será executado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy rodando em http://localhost:${PORT}`);
});
