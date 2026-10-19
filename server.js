// Servidor Express - Projeto #25: Centro de Adoção de Animais
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3025;

app.get('/api/adocao/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 25,
        sistema: "Centro de Adoção de Animais",
        categoria: "Impacto Social & ONGs",
        tabela_conectada: process.env.TABELA_ALVO || "animais_resgatados",
        parametro_ambiente: process.env.ABRIGO_PARCEIRO || "AMIGO_FIEL_25",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #25] Centro de Adoção de Animais rodando em http://localhost:${PORT}/api/adocao/status`);
});