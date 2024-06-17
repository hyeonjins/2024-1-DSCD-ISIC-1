export interface Option {
  value: string;
  label: string;
}

export const grades: Option[] = [
  { value: "4.0", label: "4.0 이상" },
  { value: "3.5~4.0", label: "3.5 이상 4.0 미만" },
  { value: "3.0~3.5", label: "3.0 이상 3.5 미만" },
  { value: "3.0", label: "3.0 미만" },
];

export const fields: Option[] = [
  { value: "pd", label: "기획 및 디자인" },
  { value: "front", label: "프론트엔드 개발" },
  { value: "back", label: "백엔드 개발" },
  { value: "data", label: "데이터 분석" },
  { value: "ai", label: "인공지능" },
  { value: "etc", label: "해당 없음" },
];

export const skills: Option[] = [
  // 프로그래밍 언어
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "go", label: "Go" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "kotlin", label: "Kotlin" },
  { value: "php", label: "PHP" },
  { value: "typescript", label: "TypeScript" },
  { value: "rust", label: "Rust" },
  { value: "r", label: "R" },
  { value: "dart", label: "Dart" },
  { value: "scala", label: "Scala" },
  { value: "elixir", label: "Elixir" },
  { value: "perl", label: "Perl" },
  { value: "objective-c", label: "Objective-C" },
  { value: "haskell", label: "Haskell" },
  { value: "matlab", label: "MATLAB" },
  { value: "lua", label: "Lua" },
  { value: "c", label: "C" },
  { value: "groovy", label: "Groovy" },
  { value: "visual-basic", label: "Visual Basic" },
  { value: "fsharp", label: "F#" },
  { value: "erlang", label: "Erlang" },
  { value: "cobol", label: "COBOL" },
  { value: "fortran", label: "Fortran" },
  { value: "shell", label: "Shell" },
  { value: "scheme", label: "Scheme" },
  { value: "prolog", label: "Prolog" },
  { value: "julia", label: "Julia" },
  { value: "ada", label: "Ada" },
  { value: "lisp", label: "Lisp" },
  { value: "vhdl", label: "VHDL" },
  { value: "verilog", label: "Verilog" },

  // 프레임워크
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue.js" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "spring-boot", label: "Spring Boot" },
  { value: "ruby-on-rails", label: "Ruby on Rails" },
  { value: "express", label: "Express.js" },
  { value: "aspnet", label: "ASP.NET" },
  { value: "laravel", label: "Laravel" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember.js" },
  { value: "next", label: "Next.js" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "gatsby", label: "Gatsby" },
  { value: "phoenix", label: "Phoenix" },
  { value: "nestjs", label: "NestJS" },
  { value: "meteor", label: "Meteor" },
  { value: "flutter", label: "Flutter" },
  { value: "ionic", label: "Ionic" },
  { value: "electron", label: "Electron" },
  { value: "quasar", label: "Quasar" },
  { value: "backbone", label: "Backbone.js" },
  { value: "symfony", label: "Symfony" },
  { value: "cakephp", label: "CakePHP" },
  { value: "codeigniter", label: "CodeIgniter" },
  { value: "zend-framework", label: "Zend Framework" },
  { value: "play-framework", label: "Play Framework" },
  { value: "struts", label: "Struts" },
  { value: "blade", label: "Blade" },
  { value: "vaadin", label: "Vaadin" },
  { value: "vertx", label: "Vert.x" },
  { value: "micronaut", label: "Micronaut" },
  { value: "ktor", label: "Ktor" },
  { value: "hanami", label: "Hanami" },
  { value: "padrino", label: "Padrino" },
  { value: "lotus", label: "Lotus" },
  { value: "ramaze", label: "Ramaze" },
  { value: "sinatra", label: "Sinatra" },

  // 라이브러리
  { value: "lodash", label: "Lodash" },
  { value: "jquery", label: "jQuery" },
  { value: "redux", label: "Redux" },
  { value: "recoil", label: "Recoil" },
  { value: "mobx", label: "MobX" },
  { value: "vuex", label: "Vuex" },
  { value: "zustand", label: "Zustand" },
  { value: "jotai", label: "Jotai" },
  { value: "apollo-client", label: "Apollo Client" },
  { value: "rxjs", label: "RxJS" },
  { value: "moment", label: "Moment.js" },
  { value: "axios", label: "Axios" },
  { value: "tensorflow", label: "TensorFlow" },
  { value: "keras", label: "Keras" },
  { value: "d3", label: "D3.js" },
  { value: "chartjs", label: "Chart.js" },
  { value: "threejs", label: "Three.js" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "styled-components", label: "Styled-components" },
  { value: "ant-design", label: "Ant Design" },
  { value: "material-ui", label: "Material-UI" },
  { value: "semantic-ui", label: "Semantic UI" },
  { value: "chakra-ui", label: "Chakra UI" },
  { value: "sass", label: "Sass" },
  { value: "less", label: "LESS" },
  { value: "webpack", label: "Webpack" },
  { value: "babel", label: "Babel" },
  { value: "gulp", label: "Gulp" },
  { value: "grunt", label: "Grunt" },
  { value: "jest", label: "Jest" },
  { value: "mocha", label: "Mocha" },
  { value: "chai", label: "Chai" },
  { value: "enzyme", label: "Enzyme" },
  { value: "cypress", label: "Cypress" },
  { value: "puppeteer", label: "Puppeteer" },
  { value: "playwright", label: "Playwright" },
  { value: "apollo-client", label: "Apollo Client" },
  { value: "relay", label: "Relay" },
  { value: "react-query", label: "React Query" },
  { value: "swr", label: "SWR" },
  { value: "immer", label: "Immer" },
  { value: "formik", label: "Formik" },
  { value: "yup", label: "Yup" },
  { value: "vee-validate", label: "VeeValidate" },
  { value: "vuetify", label: "Vuetify" },
  { value: "buefy", label: "Buefy" },
  { value: "bulma", label: "Bulma" },
  { value: "foundation", label: "Foundation" },
  { value: "spectre-css", label: "Spectre.css" },
  { value: "emotion", label: "Emotion" },
  { value: "rebass", label: "Rebass" },
  { value: "grommet", label: "Grommet" },
  { value: "blueprintjs", label: "Blueprint.js" },
  { value: "primeng", label: "PrimeNG" },
  { value: "primereact", label: "PrimeReact" },
  { value: "highcharts", label: "Highcharts" },
  { value: "plotly", label: "Plotly" },
  { value: "echarts", label: "ECharts" },
  { value: "vis", label: "Vis.js" },
  { value: "nivo", label: "Nivo" },
  { value: "victory", label: "Victory" },
  { value: "recharts", label: "Recharts" },
  { value: "fusioncharts", label: "FusionCharts" },
  { value: "chartkick", label: "Chartkick" },
  { value: "charts-css", label: "Charts.css" },
  { value: "kendoui", label: "Kendo UI" },
  { value: "amcharts", label: "AmCharts" },
  { value: "c3js", label: "C3.js" },
  { value: "datatables", label: "DataTables" },
  { value: "handsontable", label: "Handsontable" },
  { value: "ag-grid", label: "Ag-Grid" },
  { value: "tabulator", label: "Tabulator" },
  { value: "hottable", label: "HotTable" },
  { value: "fullcalendar", label: "FullCalendar" },
  { value: "schedulerjs", label: "Scheduler.js" },
  { value: "dayjs", label: "Day.js" },
  { value: "luxon", label: "Luxon" },
  { value: "date-fns", label: "Date-fns" },
  { value: "ramda", label: "Ramda" },
  { value: "immutablejs", label: "Immutable.js" },
  { value: "deepdash", label: "Deepdash" },
  { value: "fastify", label: "Fastify" },
  { value: "hapi", label: "Hapi" },
  { value: "restify", label: "Restify" },
  { value: "feathers", label: "Feathers" },
  { value: "loopback", label: "LoopBack" },
  { value: "koa", label: "Koa" },
  { value: "moleculer", label: "Moleculer" },
  { value: "socketio", label: "Socket.IO" },
  { value: "websockets", label: "WebSockets" },
  { value: "pino", label: "Pino" },
  { value: "winston", label: "Winston" },
  { value: "log4js", label: "Log4js" },
  { value: "morgan", label: "Morgan" },
  { value: "bunyan", label: "Bunyan" },
  { value: "graylog", label: "Graylog" },
  { value: "passport", label: "Passport" },
  { value: "jwt", label: "JWT" },
  { value: "okta", label: "Okta" },
  { value: "auth0", label: "Auth0" },
  { value: "firebase-auth", label: "Firebase Authentication" },
  { value: "aws-amplify-auth", label: "AWS Amplify Auth" },
  { value: "graphql", label: "GraphQL" },
  { value: "apollo-server", label: "Apollo Server" },
  { value: "prisma", label: "Prisma" },
  { value: "typeorm", label: "TypeORM" },
  { value: "mongoose", label: "Mongoose" },
  { value: "sequelize", label: "Sequelize" },
  { value: "knex", label: "Knex.js" },
  { value: "bookshelfjs", label: "Bookshelf.js" },
  { value: "objectionjs", label: "Objection.js" },
  { value: "typegraphql", label: "TypeGraphQL" },
  { value: "nexus", label: "Nexus" },
  { value: "graphql-yoga", label: "GraphQL Yoga" },
  { value: "express-graphql", label: "Express-GraphQL" },
  { value: "postgraphile", label: "PostGraphile" },
  { value: "hasura", label: "Hasura" },

  // DevOps 및 협업 도구
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "jenkins", label: "Jenkins" },
  { value: "git", label: "Git" },
  { value: "github", label: "GitHub" },
  { value: "gitlab", label: "GitLab" },
  { value: "bitbucket", label: "Bitbucket" },
  { value: "aws", label: "AWS" },
  { value: "azure", label: "Azure" },
  { value: "gcp", label: "Google Cloud Platform" },
  { value: "figma", label: "Figma" },
  { value: "slack", label: "Slack" },
  { value: "trello", label: "Trello" },
  { value: "notion", label: "Notion" },
  { value: "jira", label: "Jira" },
  { value: "confluence", label: "Confluence" },
  { value: "monday", label: "Monday.com" },
  { value: "asana", label: "Asana" },
  { value: "clickup", label: "ClickUp" },

  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sqlite", label: "SQLite" },
  { value: "mariadb", label: "MariaDB" },
  { value: "microsoft-sql-server", label: "Microsoft SQL Server" },
  { value: "oracle", label: "Oracle" },
  { value: "db2", label: "DB2" },
  { value: "h2", label: "H2" },
  { value: "cassandra", label: "Cassandra" },
  { value: "redshift", label: "Redshift" },
  { value: "snowflake", label: "Snowflake" },
  { value: "clickhouse", label: "ClickHouse" },
  { value: "firebase-realtime-database", label: "Firebase Realtime Database" },
  { value: "mongodb", label: "MongoDB" },
  { value: "dynamodb", label: "DynamoDB" },
  { value: "neo4j", label: "Neo4j" },
  { value: "arangodb", label: "ArangoDB" },
  { value: "couchdb", label: "CouchDB" },
  { value: "pouchdb", label: "PouchDB" },
  { value: "redis", label: "Redis" },
  { value: "memcached", label: "Memcached" },
  { value: "pytorch", label: "Pytorch" },
  { value: "cplex", label: "Cplex" },
  { value: "gurobi", label: "Gurobi" },
  { value: "ortools", label: "Ortools" },
];
