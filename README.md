# Meetup Clone

Com o propósito de cortar custos referente ao aplicativo Meetup.com, nos juntamos para a criação de um novo aplicativo que ofereça os mesmos serviços, porém gratuitos!

Continuaremos a fazer mais encontros no formato de Hackathon para continuar evoluindo o app, mas você também pode colaborar mesmo de longe, siga as instruções para partiipar:

## Dependências:

- Node.js `>=` v6;

## Executando

- Clone este repositório: `git clone git@github.com:training-center/meetup-clone.git`;
- Instale as dependências: `yarn` (ou `npm i`);
- Execute `yarn dev` (ou `npm start`) para iniciar a aplicação em modo de desenvolvimento
  - Abra o seu browser em: `http://localhost:3000` para visualizar a aplicação em funcionamento
  - Neste ponto você pode começar a desenvolver e ao salvar as alterações já estarão visível no browser
- Execute `yarn build` (or `npm run build`) para fazer o build da aplicação (os arquivos gerados vão para a pasta `dist`)

## Observações

Se você estiver no Windows, e tentar executar `yarn lint`, você receberá um erro porque o módulo `spawn` não funciona muito bem no Windows.

Você deve instalar `cross-spawn` (`npm install cross-spawn`) e editar o arquivo `gulpfile.js`: remova a linha `4` e descomente a linha `7`.

Muito obrigado ao [@hgtpcastro](https://github.com/hgtpcastro) por esta dica.

## Scripts

- `yarn dev (or npm run dev)`: Inicia a aplicaço em modo de desenvolvimento
- `yarn test (or npm test)`: Executa os testes
- `yarn test:watch (or npm run test:watch)`: Executa os teste em modo *watch*
- `yarn build (or npm run build)`: Faz o *build* do projeto para produção
- `yarn build:analyzer (or npm run build:analyzer)`: Faz o *build* do projeto para produção e abre o bundle analyzer na porta `8888`
- `yarn storybook (or npm run storybook)`: Executa o Storybook na porta `6006`
- `yarn storybook:build`: Faz o build dos arquivos de Storybook
- `yarn update-packages`: Atualiza todas as dependências para a última versão
- `yarn start (or npm start)`: Script especial reservado para executar o aplicativo em produção.

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Fernando Daciuk
