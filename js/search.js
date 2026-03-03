// Base de dados global de artigos para busca
const allArticles = [

{
        title: 'O STF e os Limites do Poder Municipal Sobre a Sala de Aula',
        description: 'Corte Invalida Leis que Proibiam Linguagem Neutra nas Escolas.',
        category: 'Legislação',
        url: 'legislacao/stf-limites-do-poder-municipal-sobre-sala-de-aula.html',
        tags: ['legislação', ' Congresso Nacional ', 'Poder Municipal', 'O STF e os Limites do Poder Municipal Sobre a Sala de Aula']
    },
    {
        title: 'Vinte Anos de Espera',
        description: 'Um policial militar de Goiás que ingressou na corporação em 1996 e esperou até 2021 para ser promovido de Soldado a Cabo, progressão que deveria ter ocorrido muito antes segundo os próprios critérios legais da instituição.',
        category: 'Direito Militar',
        url: 'direito-militar/vinte-anos-de-espera-de-pm-goiais.html',
        tags: ['PM de Goiás', ' corporação ', 'policial militar', 'Vinte Anos de Espera']
    },
    {
        title: 'O Escudo que o Poder Tenta Dobrar',
        description: 'Quando a Transparência Encontra a Resistência Institucional.',
        category: 'Compliance',
        url: 'compliance/o-escudo-que-o-poder-tenta-dobrar.html',
        tags: ['O Escudo que o Poder Tenta Dobrar', 'compliance', 'Poder ', 'Os agentes']
    },
    {
        title: 'O Habeas Corpus e a Garantia que Ninguém Pode Confiscar',
        description: 'Ministro Ribeiro Dantas determina que tribunal mineiro analise mérito de writ impetrado contra ordem de busca e apreensão',
        category: 'Direito Criminal',
        url: 'direito-penal/habeas-corpus-garantia-que-ninguem-pode-confiscar.html',
        tags: ['O Habeas Corpus e a Garantia que Ninguém Pode Confiscar', 'Ministro Ribeiro', 'Confiscar', 'Garantia']
    },
    {
        title: 'Como o Salário Mínimo se Tornou a Mais Simbólica Batalha do Constitucionalismo Social Brasileiro',
        description: 'O relatório foi revisado três vezes, cada vírgula analisada, cada dado conferido.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/salario-minimo-tornou-simbolo-constitucional-social-brasileiro.html',
        tags: ['Social', 'Salário Mínimo', 'Como o Salário Mínimo se Tornou a Mais Simbólica Batalha do Constitucionalismo Social Brasileiro']
    },
    {
        title: 'Senado Convoca os Grandes Nomes do Direito Privado',
        description: 'Mais de duas décadas depois de sua entrada em vigor, o Código Civil brasileiro está prestes a ganhar novo rosto.',
        category: 'Direito de Família',
        url: 'direito-de-familia/senado-convoca-grandes-nomes-do-direito-para-redesenhar-regras.html',
        tags: ['Comissão temporária', 'Direito Privado ', ' legislação', 'relações familiares']
    },
    {
        title: 'O Escudo Salarial das Guardas Municipais em Santo André',
        description: 'A mais alta corte do país interveio para proteger o contracheque de servidores que atuam na linha de frente da segurança pública municipal.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/o-escudo-salarial-dos-guardas-municipais.html',
        tags: [' segurança pública', 'Santo André', 'Guardas Municipais', 'O Escudo Salarial das Guardas Municipais em Santo André']
    },
    {
        title: 'Marçal e Datena Encerram Batalha Judicial',
        description: 'O capítulo judicial da cadeirada mais famosa da política brasileira recente chegou ao fim.',
        category: 'Direito Civil',
        url: 'direito-civil/a-cadeira-que-virou-acordo.html',
        tags: ['Marçal e Datena Encerram Batalha Judicial', 'dois políticos', 'capítulo judicial ', 'indenização ']
    },
     {
        title: 'A Holding do Crime',
        description: 'Qualquer executivo de uma grande corporação reconheceria a estrutura no documento. Há um conselho deliberativo de elite, uma corregedoria interna, um setor de relações jurídicas, uma diretoria financeira e, bem ao lado, um departamento inteiramente dedicado à comunicação em redes sociais e à gestão de mensagens criptografadas.',
        category: 'Compliance',
        url: 'compliance/a-holding-do-crime.html',
        tags: ['A Holding do Crime ', 'compliance', 'PCC', 'Holding']
    },
    {
        title: 'Programa Gás do Povo',
        description: 'A Nova Legislação que Redefine o Amparo Social e a Acessibilidade Energética no Brasil.',
        category: 'Legislação',
        url: 'legislacao/novo-imposto-de-renda.html',
        tags: ['Programa Gás do Povo ', 'gás', 'povo', 'socioeconômico ']
    },
    {
        title: 'Código de Defesa do Contribuinte',
        description: 'A Modernização da Administração Tributária: Rumo à Transparência e à Segurança Jurídica.',
        category: 'Legislação',
        url: 'legislacao/codigo-defesa-contribuinte.html',
        tags: ['Código de Defesa do Contribuinte ', 'Administração Tributária', 'Modernização', 'relação ']
    },
    {
        title: 'Novo Imposto de Renda',
        description: 'Por muito tempo, a palavra gestão soou estranha nos corredores dos escritórios de advocacia.',
        category: 'Legislação',
        url: 'financas/advocacia-que-nao-se-conhece-financeiramente-nao-sobrevive-o-imperativo-da-gestao-para-escritorios-em-2026.html',
        tags: ['Reforma Tributária ', 'Tributação ', 'Novo Imposto de Renda', 'Faixa ']
    },
    {
        title: 'Lei da Anistia e Crimes Permanentes',
        description: 'A Jurisprudência que Reinterpreta o Passado e Projeta o Futuro da Justiça de Transição no Brasil.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/limites-lei-anistia.html',
        tags: ['Jurisprudência ', 'Lei da Anistia', 'Lei da Anistia e Crimes Permanentes', 'Anistia ']
    },
    {
        title: 'Racismo Estrutural no Brasil',
        description: 'A Jurisprudência que Desvenda as Raízes da Discriminação e Reafirma o Compromisso da Constituição com a Igualdade.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/racismo-estrutural-implicacoes-constitucionais.html',
        tags: ['Racismo ', 'Racismo Estrutural no Brasil', 'Discriminação', 'Constituição']
    },
    {
        title: 'Violência de Gênero e a Lei Maria da Penha',
        description: 'O Reconhecimento Jurisprudencial do STF que Fortalece o Combate à Violência Contra a Mulher no Brasil.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/violencia-genero-lei-maria-da-penha.html',
        tags: ['Violência ', 'STF', 'Violência de Gênero e a Lei Maria da Penha', 'Violência Contra a Mulher']
    },
    {
        title: 'Advocacia que não se Conhece Financeiramente não Sobrevive',
        description: 'Por muito tempo, a palavra gestão soou estranha nos corredores dos escritórios de advocacia.',
        category: 'Finanças',
        url: 'financas/advocacia-que-nao-se-conhece-financeiramente-nao-sobrevive-o-imperativo-da-gestao-para-escritorios-em-2026.html',
        tags: ['Advocacia ', 'sobrevive', 'Advocacia que não se conhece financeiramente não sobrevive', 'Prevenir']
    },
    {
        title: 'O Novo Labirinto Fiscal',
        description: 'O Brasil nunca teve uma relação simples com o capital estrangeiro. A história econômica do país é pontuada por ciclos de abertura e fechamento',
        category: 'Finanças',
        url: 'financas/o-novo-labirinto-fiscal-as-regras-de-tributacao-de-investimentos-estrangeiros-redesenham-o-mapa-do-capital-no-brasil.html',
        tags: ['O novo labirinto fiscal', 'Revolução Silenciosa', 'multinacional brasileira', 'Prevenir']
    },
    {
        title: 'Pessoas em Primeiro Lugar',
        description: 'Por décadas, a cultura dos escritórios de advocacia e dos departamentos jurídicos corporativos foi definida por uma lógica que colocava a entrega acima de tudo.',
        category: 'Recursos Humanos',
        url: 'recursos-humanos/pessoas-em-primeiro-lugar-como-o-setor-juridico-reinventa-sua-relacao-com-talentos-em-um-mercado-em-transformacao.html',
        tags: ['Pessoas em primeiro lugar', 'novas tendências', 'gestão de pessoas', 'ambiente']
    },
    {
        title: 'A Permanência Como Direito',
        description: 'Há uma distinção fundamental, quase jurídica, entre habitar um espaço por necessidade e habitá-lo por vontade.',
        category: 'Recursos Humanos',
        url: 'recursos-humanos/a-permanencia-como-direito.html',
        tags: ['A Permanência como Direito', 'Direito', 'presença humana', 'ambiente']
    },
    {
        title: 'Diversidade Não é Favor',
        description: 'Houve um tempo em que a pauta da diversidade e inclusão nas organizações era vista como um luxo progressista — algo que as empresas adotavam por pressão social ou para melhorar sua imagem institucional.',
        category: 'Recursos Humanos',
        url: 'recursos-humanos/diversidade-nao-e-favor-o-imperativo-estrategico-da-inclusao-nas-organizacoes-contemporaneas.html',
        tags: ['Diversidade não é favor', 'inclusão', ' diversidade', 'organizações ']
    },
    {
        title: 'A Revolução Silenciosa do Compliance',
        description: 'O diretor de compliance da multinacional brasileira recebe pela manhã relatório gerado por sistema de inteligência artificial: análise de 2,3 milhões de e-mails corporativos identificou padrão linguístico compatível com possível esquema de.',
        category: 'Compliance',
        url: 'compliance/a-revolucao-silenciosa-do-compliance-quando-prevenir-vale-mais-que-remediar.html',
        tags: ['A Revolução Silenciosa do Compliance','Compliance', 'Revolução Silenciosa', 'multinacional brasileira', 'Prevenir']
    },
    {
        title: 'A Queda do Intocável',
        description: 'Na tarde de 12 de dezembro de 2024, o plenário do Superior Tribunal de Justiça reuniu-se em sessão extraordinária que entraria para a história institucional da Corte. O presidente Herman Benjamin, com voz grave e semblante circunspecto.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/a-queda-do-intocavel-quando-o-judiciario-julga-a-si-mesmo.html',
        tags: ['A Queda do Intocável','Queda do Intocável', 'distinção', 'empregador', 'assédio sexual']
    },
    {
        title: 'Crimes Ambientais Transnacionais',
        description: 'A devastação da floresta amazônica transcendeu há muito as fronteiras nacionais, convertendo-se em um fenômeno que desafia os paradigmas tradicionais do direito penal e ambiental.',
        category: 'Direito Penal',
        url: 'direito-penal/crimes-ambientais-transnacionais-a-amazonia-no-epicentro-de-um-conflito-de-jurisdicoes.html',
        tags: ['Crimes Ambientais Transnacionais','Crimes Ambientais Transnacionais', 'Amazônia', 'devastação', 'territorialidade']
    }, 
    {
        title: 'A Farda e a Constituição',
        description: 'O soldado do Exército recorre ao Supremo Tribunal Federal questionando punição disciplinar que lhe custou quinze dias de prisão por "desrespeito a superior" após questionar, em grupo privado de WhatsApp de colegas militares, ordem que considerava tecnicamente equivocada.',
        category: 'Direito Militar',
        url: 'direito-militar/a-farda-e-a-constituicao-o-direito-militar-entre-a-tradicao-e-os-direitos-fundamentais.html',
        tags: ['A Farda e a Constituição','Farda', 'Direitos Fundamentais', 'desrespeito a superior', 'prisão']
    }, 
    {
        title: 'A Lei Antes do Fato',
        description: 'O Congresso Nacional vota em 2026 projeto de lei inédito na história legislativa brasileira: regulação preventiva de tecnologias de edição genética germinal (CRISPR aplicado a embriões humanos) que ainda não estão disponíveis',
        category: 'Legislação',
        url: 'legislacao/a-lei-antes-do-fato-como-a-regulacao-preditiva-antecipa-riscos-tecnologicos.html',
        tags: ['A Lei Antes do Fato','Lei Antes do Fato', 'Riscos Tecnológicos', 'Regulação ', 'Congresso Nacional']
    }, 
    {
        title: 'O Oráculo Digital da Justiça',
        description: 'O advogado prepara recurso contra sentença desfavorável em ação trabalhista. Antes de redigir uma linha, acessa plataforma de jurisprudência preditiva que, mediante inteligência artificial, analisa 340 mil decisões similares do Tribunal Regional do Trabalho daquela região nos últimos cinco anos.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/o-oraculo-digital-da-justica-quando-algoritmos-preveem-decisoes-judiciais.html',
        tags: ['O Oráculo Digital da Justiça','Oráculo Digital', 'Decisões Judiciais', 'Algoritmos']
    }, 
    {
        title: 'A Armadilha do Crédito Fácil',
        description: 'O Brasil registra atualmente mais de 72 milhões de pessoas negativadas, segundo dados da Confederação Nacional de Dirigentes Lojistas. Desse contingente alarmante, parcela expressiva',
        category: 'Direito Civil',
        url: 'direito-civil/a-armadilha-do-credito-facil-como-o-superendividamento-captura-os-mais-vulneraveis.html',
        tags: ['A Armadilha do Crédito Fácil','Armadilha', 'Crédito Fácil', 'Superendividamento', 'Mais Vulneráveis']
    }, 
    {
        title: 'A Encruzilhada da Responsabilidade',
        description: 'A proliferação acelerada de sistemas de inteligência artificial no cotidiano brasileiro — de algoritmos que concedem crédito a carros autônomos que circulam em fase experimental ',
        category: 'Direito Civil',
        url: 'direito-civil/a-encruzilhada-da-responsabilidade-quem-paga-a-conta-quando-a-maquina-erra.html',
        tags: ['A Encruzilhada da Responsabilidade','Encruzilhada da Responsabilidade', 'Máquina', 'inteligência artificial']
    }, 
    {
        title: 'A Era Digital do Pacta Sunt Servanda',
        description: 'Bilhões de contratos são firmados diariamente sem que uma única folha de papel seja impressa. A compra de passagens aéreas, a contratação de serviços de streaming, a adesão a aplicativos de transporte e até m',
        category: 'Direito Civil',
        url: 'direito-civil/a-era-digital-do-pacta-sunt-servanda-contratos-eletronicos-e-a-revolucionaria-silenciosa-do-direito-negocial.html',
        tags: ['A Era Digital do Pacta Sunt Servanda','Era Digital', 'Pacta Sunt Servanda', 'Contratos Eletrônicos', 'Direito Negocial']
    }, 
    {
        title: 'Bisturi e Balança da Justiça',
        description: 'A relação médico-paciente encerra peculiaridade que a distingue de quase todas as demais relações profissionais: não há garantia de resultado. ',
        category: 'Direito Civil',
        url: 'direito-civil/bisturi-e-balanca-da-justica-os-limites-da-responsabilidade-civil-na-medicina-e-estetica.html',
        tags: ['Bisturi e Balança da Justiça','Balança da Justiça', 'Bisturi ', 'Limites da Responsabilidade', 'Responsabilidade Civil', 'Medicina e Estética']
    }, 
    {
        title: 'O Direito de Não Ser Lembrado',
        description: 'Quando o Supremo Tribunal Federal, em fevereiro de 2021, julgou improcedente o Recurso Extraordinário 1.010.606 (Tema 786 da repercussão geral), decretando a incompatibilidade do direito ao esquecimento com a Constituição Federal, p',
        category: 'Direito Civil',
        url: 'direito-civil/o-direito-de-nao-ser-lembrado-os-contornos-juridicos-da-memoria-na-era-digital.html',
        tags: ['O Direito de Não Ser Lembrado','Memória na Era Digital', 'Era Digital', 'tutela da privacidade,', 'tese rejeitada pelo STF']
    }, 
    {
        title: 'O Tribunal das Redes',
        description: 'A migração do debate público para as plataformas digitais converteu cada usuário em potencial formador de opinião — e em potencial réu de ação indenizatória. ',
        category: 'Direito Civil',
        url: 'direito-civil/o-tribunal-das-redes-quando-a-liberdade-de-expressao-vira-linchamento-digital.html',
        tags: ['O Tribunal das Redes','Linchamento Digital', 'Liberdade de Expressão', ' debate público']
    }, 
    {
        title: 'O Testamento Digital Quando o Amor Precisa Contemplar Bitcoins e Senhas',
        description: 'O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar Pacto Antenupcial. Além das cláusulas tradicionais sobre imóveis, veículos e participação societária, o instrumento traz',
        category: 'Direito de Família',
        url: 'direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html',
        tags: ['O Testamento Digital Quando o Amor Precisa Contemplar Bitcoins e Senhas','Testamento', 'Testamento Digital', 'Pacto Antenupcial']
    }, 
    {
        title: 'O Amor Que Se Cobra na Justiça Quando a Ausência dos Avós Gera Indenização',
        description: 'Um escritório de advocacia em Brasília recebe, com frequência crescente, consultas inusitadas: adultos que desejam processar avós por abandono afetivo durante a infância. Não se trata de abandono material',
        category: 'Direito de Família',
        url: 'direito-de-familia/o-amor-que-se-cobra-na-justica-quando-a-ausencia-dos-avos-gera-indenizacao.html',
        tags: ['O Amor Que Se Cobra na Justiça Quando a Ausência dos Avós Gera Indenização','afetividade', 'abandono ', 'frequência crescente', 'Indenização']
    }, 
    {
        title: 'Quando o Silêncio Se Torna Arma no Ambiente Corporativo',
        description: 'Não há gritos, não há insultos diretos, não há confronto aberto. A vítima chega ao escritório e é recebida por olhares que desviam, cumprimentos que não vêm, conversas que cessam abruptamente quando ela se aproxima. ',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/a-violencia-invisivel-quando-o-silencio-se-torna-arma-no-ambiente-corporativo.html',
        tags: ['Quando o Silêncio Se Torna Arma no Ambiente Corporativo','Ambiente Corporativo', 'Ambiente ', 'exclusão sistemática', 'exclusão laboral']
    }, 
    {
        title: 'Quando a Crítica Vira Arma de Aniquilação Profissional',
        description: 'O relatório foi revisado três vezes, cada vírgula analisada, cada dado conferido. Mesmo assim, quando apresentado na reunião, o gerente o desqualifica publicamente: "Está completamente fora dos padrões que esperamos"',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/a-destruicao-metodica-da-competencia-quando-a-critica-vira-arma-de-aniquilacao-profissional.html',
        tags: ['Quando a Crítica Vira Arma de Aniquilação Profissional','Aniquilação Profissional', 'distinção', 'desqualificação ', 'empregador']
    }, 
    {
        title: 'Quem Audita os Auditores?',
        description: 'Os recentes escândalos corporativos revelam um padrão preocupante: todas as empresas envolvidas contavam com auditoria independente externa.',
        category: 'Compliance',
        url: 'compliance/quem-audita-os-auditores.html',
        tags: ['Quem Audita os Auditores?','compliance', 'auditores', 'escândalos', 'compliance zero', 'romer carvalho']
    }, 
    {
        title: 'Como Comprovar que Existe União Estável',
        description: 'Muitas pessoas vivem em união estável sem saber que essa relação possui proteção jurídica semelhante ao casamento.',
        category: 'Direito de Família',
        url: 'direito-de-familia/como-comprovar-uniao-estavel.html',
        tags: ['Como Comprovar que Existe União Estável','união estável', 'casamento', 'provas', 'família', 'romer carvalho']
    }, 
    {
        title: 'Pensão Alimentícia: Revisão, Exoneração e os Limites do Dever de Sustento',
        description: 'Análise detalhada sobre pensão alimentícia: revisão, exoneração e os limites do dever de sustento e seus impactos no ordenamento jurídico brasileiro.',
        category: 'Direito de Família',
        url: 'direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html',
        tags: ['Pensão Alimentícia: Revisão, Exoneração e os Limites do Dever de Sustento','Pensão alimentícia', 'revisão', 'Pensão ', 'família']
    }, 
    {
        title: 'Guarda Compartilhada e o Melhor Interesse da Criança na Prática Forense',
        description: 'Análise detalhada sobre guarda compartilhada e o melhor interesse da criança na prática forense e seus impactos no ordenamento jurídico brasileiro',
        category: 'Direito de Família',
        url: 'direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html',
        tags: ['Guarda Compartilhada e o Melhor Interesse da Criança na Prática Forense','Guarda Compartilhada', 'Guarda', 'Melhor Interesse da Criança', 'família']
    }, 
    {
        title: 'Responsabilidade Civil',
        description: 'A era digital transformou profundamente as relações interpessoais, criando novos espaços de convivência que transcendem as barreiras físicas.',
        category: 'Direito Civil',
        url: 'direito-civil/responsabilidade-civil-danos-morais-digitais.html',
        tags: ['Responsabilidade Civil','Responsabilidade civil', 'danos morais', 'danos morais']
    }, 
    {
        title: 'Validade Jurídica dos Contratos Firmados por Meios Eletrônicos',
        description: 'A digitalização das relações negociais representa uma das mais significativas transformações do direito contratual contemporâneo.',
        category: 'Direito Civil',
        url: 'direito-civil/validade-juridica-contratos-eletronicos.html',
        tags: ['Validade Jurídica dos Contratos Firmados por Meios Eletrônicos','contratos', 'Validade jurídica', 'contratos firmados', 'relações negociais']
    }, 
    {
        title: 'Princípio da Insignificância e sua Aplicação nos Crimes Patrimoniais',
        description: 'O princípio da insignificância, também denominado princípio da bagatela, constitui importante instrumento de racionalização do sistema penal, permitindo a exclusão da tipicidade material em condutas que, embora',
        category: 'Direito Penal',
        url: 'direito-penal/principio-insignificancia-crimes-patrimoniais.html',
        tags: ['Princípio da Insignificância e sua Aplicação nos Crimes Patrimoniais','Princípio da insignificância', 'crimes patrimoniais', 'crimes']
    }, 
    {
        title: 'Prisão Preventiva',
        description: 'A prisão preventiva, modalidade de prisão cautelar regulamentada pelos artigos 311 a 316 do Código de Processo Penal, constitui medida excepcional',
        category: 'Direito Penal',
        url: 'direito-penal/prisao-preventiva-requisitos-abusos.html',
        tags: ['Prisão Preventiva','Prisão preventiva', 'requisitos', 'requisitos legais', 'prisão cautelar']
    }, 
    {
        title: 'Vínculo empregatício nas novas formas de trabalho por aplicativo',
        description: 'A economia de plataformas digitais revolucionou o mercado de trabalho nas últimas décadas, introduzindo modelos de prestação de serviços',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/vinculo-empregaticio-trabalho-aplicativo.html',
        tags: ['Vínculo empregatício nas novas formas de trabalho por aplicativo','Vínculo empregatício', 'plataformas digitais', 'trabalho']
    }, 
    {
        title: 'Assédio moral no ambiente de trabalho e a responsabilidade do empregador',
        description: 'O assédio moral no ambiente laboral constitui uma das mais graves patologias organizacionais contemporâneas, caracterizando-se pela exposição',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/assedio-moral-trabalho-responsabilidade-empregador.html',
        tags: ['Assédio moral no ambiente de trabalho e a responsabilidade do empregador','Assédio moral ', 'trabalhador', 'Assédio', 'responsabilidade do empregador']
    }, 
    {
        title: 'Hierarquia e disciplina versus direitos fundamentais do militar',
        description: 'A condição militar caracteriza-se por especificidades que a distinguem de outras relações funcionais, fundamentando-se nos princípios estruturantes da hierarquia e disciplina. Esses pilares, embora essenciais à eficácia ',
        category: 'Direito Militar',
        url: 'direito-militar/hierarquia-disciplina-direitos-fundamentais-militar.html',
        tags: ['Hierarquia e disciplina versus direitos fundamentais do militar','Hierarquia e disciplina', 'militar', 'condição militar', 'responsabilidade']
    }, 
    {
        title: 'Processo administrativo disciplinar militar e garantias constitucionais',
        description: 'O processo administrativo disciplinar militar constitui instrumento jurídico específico destinado à apuração de transgressões disciplinares praticadas por integrantes das Forças Armadas e Forças Auxiliares,',
        category: 'Direito Militar',
        url: 'direito-militar/processo-administrativo-disciplinar-militar.html',
        tags: ['Processo administrativo disciplinar militar e garantias constitucionais','Processo administrativo', 'PAD', 'condição militar', 'garantias constitucionais']
    }, 
    {
        title: 'Responsabilidade da alta gestão na implementação do compliance efetivo',
        description: 'A efetividade de um programa de compliance corporativo depende fundamentalmente do comprometimento genuíno da alta gestão da organização.',
        category: 'Compliance',
        url: 'compliance/responsabilidade-alta-gestao-compliance.html',
        tags: ['Responsabilidade da alta gestão na implementação do compliance efetivo','compliance ', 'gestão na implementação', 'prevenção de riscos', 'programa de compliance']
    }, 
    {
        title: 'Mediação Estratégica e Compliance',
        description: 'A mediação consolida-se como método estratégico de resolução de conflitos, oferecendo às organizações alternativa eficiente ao litígio tradicional. ',
        category: 'Compliance',
        url: 'compliance/mediacao-estrategica-e-compliance.html',
        tags: ['Mediação Estratégica e Compliance','compliance ', 'programas de compliance', 'prevenção de riscos', 'compliance corporativo']
    }, 
    {
        title: 'A Nova Era da Governança',
        description: 'A publicação da ABNT NBR ISO 37301:2021 (Sistemas de Gestão de Compliance) e, mais recentemente, o desenvolvimento de normas técnicas específicas para compliance tributário representam marco evolutivo na padronização',
        category: 'Compliance',
        url: 'compliance/nova-norma-abnt-compliance-tributario.html',
        tags: ['A Nova Era da Governança','compliance ', 'programas de compliance', 'prevenção de riscos ', 'Norma ABNT', 'Compliance Tributário']
    }, 
    {
        title: 'Fiscalização de Compliance',
        description: 'A fiscalização de estabelecimentos comerciais, incluindo papelarias, constitui atividade essencial dos órgãos de vigilância sanitária, defesa do consumidor,',
        category: 'Compliance',
        url: 'compliance/fiscalizacao-compliance-papelarias.html',
        tags: ['Fiscalização de Compliance','compliance ', 'programas de compliance', 'prevenção de riscos ', 'Fiscalização de Compliance', 'Irregularidades']
    }, 
    {
        title: 'Fortalecimento do Programa Confia',
        description: 'O Programa Confia, iniciativa da Receita Federal do Brasil instituída pela Instrução Normativa RFB 2.108/2022, representa evolução significativa na relação',
        category: 'Compliance',
        url: 'compliance/fortalecimento-programa-confia.html',
        tags: ['Fortalecimento do Programa Confia','compliance ', 'programas de compliance', 'prevenção de riscos ', 'Programa Confia']
    }, 
    {
        title: 'A força dos precedentes obrigatórios no sistema jurídico brasileiro',
        description: 'A incorporação definitiva do sistema de precedentes obrigatórios no ordenamento jurídico brasileiro representa uma das mais profundas transformações estruturais',
        category: 'Jurisprudência',
        url: 'jurisprudencia/forca-precedentes-obrigatorios-brasil.html',
        tags: ['A força dos precedentes obrigatórios no sistema jurídico brasileiro','precedentes', 'sistema jurídico', 'incorporação']
    }, 
    {
        title: 'Mudanças recentes na jurisprudência dos tribunais superiores',
        description: 'A dinâmica interpretativa do direito brasileiro passa por constante transformação, especialmente quando analisamos a atuação dos tribunais superiores. ',
        category: 'Jurisprudência',
        url: 'jurisprudencia/mudancas-recentes-jurisprudencia-tribunais.html',
        tags: ['Mudanças recentes na jurisprudência dos tribunais superiores','jurisprudência', 'Supremo Tribunal Federal', 'direito brasileiro', 'tribunais']
    }, 
    {
        title: 'Interpretação da lei à luz da constituição e da jurisprudência atual',
        description: 'A interpretação jurídica contemporânea não pode prescindir da compreensão sistêmica do ordenamento. A lei, isoladamente considerada, ',
        category: 'Legislação',
        url: 'legislacao/interpretacao-lei-constituicao-jurisprudencia.html',
        tags: ['Interpretação da lei à luz da constituição e da jurisprudência atual','Interpretação da lei', 'jurisprudência atual', ' interpretação evolutiva ']
    }, 
    {
        title: 'Impactos práticos das alterações legislativas no direito de família',
        description: 'O direito de família brasileiro experimenta constante transformação legislativa que reflete as profundas mudanças sociais das últimas décadas. A compreensão contemporânea das relações familiares expandiu-se significativamente, abandonando modelos rígidos e patriarcais em favor de estruturas plurais',
        category: 'Legislação',
        url: 'legislacao/impactos-alteracoes-legislativas-familia.html',
        tags: ['Impactos práticos das alterações legislativas no direito de família','Impactos práticos', 'direito de família', 'alterações legislativas', 'proteção da dignidade']
    }
];

/**
 * Função de busca melhorada com pontuação de relevância
 */
function searchArticles(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }

    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/);
    
    const results = allArticles.map(article => {
        let score = 0;
        const title = article.title.toLowerCase();
        const desc = article.description.toLowerCase();
        const cat = article.category.toLowerCase();
        const tags = article.tags || [];

        // 1. Correspondência exata no título (Peso Máximo)
        if (title.includes(lowerQuery)) score += 100;
        
        // 2. Correspondência de palavras individuais
        queryWords.forEach(word => {
            if (title.includes(word)) score += 20;
            if (desc.includes(word)) score += 10;
            if (cat.includes(word)) score += 15;
            
            tags.forEach(tag => {
                if (tag.toLowerCase().includes(word)) score += 15;
            });
        });

        return { ...article, score };
    })
    .filter(article => article.score > 0)
    .sort((a, b) => b.score - a.score);

    return results;
}

/**
 * Função para calcular o prefixo do caminho baseado na profundidade atual
 * Esta versão é mais agressiva e precisa para garantir que os links funcionem.
 */
function getPathPrefix() {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('js/search.js')) {
            const parts = src.split('js/search.js');
            return parts[0]; 
        }
    }
    return '';
}

/**
 * Função para exibir sugestões em tempo real
 */
function displaySuggestions(results, query, container) {
    if (results.length === 0) {
        container.style.display = 'none';
        return;
    }

    const pathPrefix = getPathPrefix();

    container.innerHTML = '';
    container.style.display = 'block';

    const limit = 5;
    const topResults = results.slice(0, limit);

    topResults.forEach(result => {
        const div = document.createElement('div');
        div.className = 'search-suggestion-item';
        
        // Highlight query in title
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const highlightedTitle = result.title.replace(regex, '<strong>$1</strong>');
        
        div.innerHTML = `
            <div class="suggestion-info">
                <span class="suggestion-title">${highlightedTitle}</span>
                <span class="suggestion-category">${result.category}</span>
            </div>
        `;
        
        div.addEventListener('click', () => {
            window.location.href = pathPrefix + result.url;
        });
        
        container.appendChild(div);
    });

    if (results.length > limit) {
        const more = document.createElement('div');
        more.className = 'search-suggestion-more';
        more.innerHTML = `Ver todos os ${results.length} resultados`;
        more.addEventListener('click', () => {
            displaySearchResults(results, query);
            container.style.display = 'none';
        });
        container.appendChild(more);
    }
}

/**
 * Função para exibir modal completo de resultados
 */
function displaySearchResults(results, query) {
    const existingModal = document.getElementById('search-results-modal');
    if (existingModal) existingModal.remove();

    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results-modal';
    resultsContainer.className = 'search-results-modal';
    
    const pathPrefix = getPathPrefix();

    let html = `
        <div class="search-results-content">
            <button class="search-results-close" aria-label="Fechar">&times;</button>
            <div class="search-results-header">
                <h2>Busca por: <span>${query}</span></h2>
                <p class="results-count">${results.length} resultado(s) encontrado(s)</p>
            </div>
    `;
    
    if (results.length === 0) {
        html += `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <p>Nenhum resultado encontrado para sua pesquisa.</p>
                <small>Tente usar palavras-chave mais genéricas.</small>
            </div>
        `;
    } else {
        html += '<div class="search-results-list">';
        results.forEach(article => {
            const finalUrl = pathPrefix + article.url;
            html += `
                <div class="search-result-item">
                    <div class="result-meta">
                        <span class="result-category">${article.category}</span>
                    </div>
                    <h3><a href="${finalUrl}">${article.title}</a></h3>
                    <p class="result-description">${article.description}</p>
                    <a href="${finalUrl}" class="result-link">Leia mais</a>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    resultsContainer.innerHTML = html;
    document.body.appendChild(resultsContainer);
    document.body.style.overflow = 'hidden'; // Prevent scroll

    // Fechar eventos
    const close = () => {
        resultsContainer.style.opacity = '0';
        resultsContainer.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            resultsContainer.remove();
            document.body.style.overflow = '';
        }, 300);
    };

    resultsContainer.querySelector('.search-results-close').addEventListener('click', close);
    resultsContainer.addEventListener('click', (e) => { if (e.target === resultsContainer) close(); });
    
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            close();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const searchBoxes = document.querySelectorAll('.search-box');
    
    searchBoxes.forEach(searchBox => {
        const searchInput = searchBox.querySelector('input[type="text"]');
        const searchBtn = searchBox.querySelector('.search-btn');
        
        if (!searchInput) return;

        // Criar container de sugestões
        const suggestionContainer = document.createElement('div');
        suggestionContainer.className = 'search-suggestions';
        searchBox.appendChild(suggestionContainer);

        let debounceTimer;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                if (query.length >= 2) {
                    const results = searchArticles(query);
                    displaySuggestions(results, query, suggestionContainer);
                } else {
                    suggestionContainer.style.display = 'none';
                }
            }, 300);
        });

        const performAction = () => {
            const query = searchInput.value;
            if (query.length >= 2) {
                const results = searchArticles(query);
                displaySearchResults(results, query);
                suggestionContainer.style.display = 'none';
            }
        };

        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                performAction();
            });
        }

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performAction();
            }
        });

        // Fechar sugestões ao clicar fora
        document.addEventListener('click', (e) => {
            if (!searchBox.contains(e.target)) {
                suggestionContainer.style.display = 'none';
            }
        });
    });
});