# FL.On — site institucional

Projeto inicial da landing page institucional da FL.On, desenvolvido com Next.js, React e TypeScript.

## Requisitos
- Node.js 20.9 ou superior
- npm

## Rodar localmente
```bash
npm install
npm run dev
```
Abra http://localhost:3000.

## Antes de publicar
1. Abra `app/page.tsx`.
2. Localize `const whatsappNumber = "SEU_NUMERO_AQUI";`.
3. Substitua pelo número de WhatsApp com código do país e DDD, somente números. Exemplo de formato: `5521999999999`.
4. Revise os textos, links e informações comerciais.
5. Execute `npm run build` para validar a compilação.

## Publicar
- Crie um repositório no GitHub e envie os arquivos deste projeto.
- Importe o repositório na Netlify ou em outro host compatível com Next.js.
- Configure o domínio ou subdomínio no provedor de hospedagem seguindo os registros DNS apresentados pelo próprio provedor.

## Observações
- O layout usa CSS próprio e não depende de um construtor visual.
- A tipografia é carregada do Google Fonts; para produção com política de privacidade mais restritiva, pode-se hospedar as fontes localmente.
- O site não inclui formulário com banco de dados. Os botões de contato abrem o WhatsApp.
- A página não contém depoimentos ou números inventados.
- Preços não foram exibidos; o visitante é convidado a solicitar orçamento.
