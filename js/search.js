// Base de dados global de artigos para busca
const allArticles = [
    {
    title: 'Ordem e Punição nas Fileiras Castrenses',
    description: 'A reestruturação do regime disciplinar das corporações militares brasileiras coloca em pauta a tensão entre hierarquia institucional e garantias fundamentais.',
    category: 'Direito Militar',
    url: 'direito-militar/ordem-punicao-fileiras-castrenses.html',
    tags: ['Direito Militar', 'Disciplina Militar', 'Ordem e Punição nas Fileiras Castrenses']
},
{
    title: 'Patrimônio Além da Morte no Direito Civil',
    description: 'O direito sucessório brasileiro enfrenta desafios estruturais diante das transformações das entidades familiares, do crescimento patrimonial digital e das disputas de herança.',
    category: 'Direito Civil',
    url: 'direito-civil/patrimonio-alem-morte-direito-civil.html',
    tags: ['Direito Sucessório', 'Herança', 'Patrimônio Além da Morte no Direito Civil']
},
{
    title: 'Proteção Jurídica da Vida antes do Nascimento',
    description: 'Os alimentos gravídicos representam um dos instrumentos mais relevantes do direito de família para a proteção da gestante e do nascituro pela Lei nº 11.804/2008.',
    category: 'Direito de Família',
    url: 'direito-de-familia/protecao-juridica-vida-antes-nascimento.html',
    tags: ['Alimentos Gravídicos', 'Direito de Família', 'Proteção Jurídica da Vida antes do Nascimento']
},
{ title: 'FGTS como Patrimônio Protetivo do Trabalhador', description: 'O FGTS é um dos pilares da proteção trabalhista brasileira, com disputas sobre saques, correção monetária e modernização do fundo.', category: 'Direito Trabalhista', url: 'direito-trabalhista/fgts-fundo-garantia-direitos-trabalhistas.html', tags: ['FGTS', 'Fundo de Garantia', 'FGTS como Patrimônio Protetivo do Trabalhador'] },
{ title: 'Dinheiro Público e o Custeio das Campanhas Eleitorais', description: 'O financiamento eleitoral no Brasil com o FEFC e o Fundo Partidário como principais instrumentos de custeio das eleições.', category: 'Política', url: 'politica/financiamento-eleitoral-fundo-partidario-debate.html', tags: ['Financiamento Eleitoral', 'Fundo Eleitoral', 'Dinheiro Público e o Custeio das Campanhas Eleitorais'] },
 { title: 'Flagrante Delito entre Legalidade e Garantismo Penal', description: 'A prisão em flagrante e o controle de legalidade no direito penal, com a audiência de custódia como instrumento de verificação dos direitos do preso.', category: 'Direito Criminal', url: 'direito-penal/prisao-flagrante-legalidade-garantias-constitucionais.html', tags: ['Prisão em Flagrante', 'Legalidade', 'Flagrante Delito entre Legalidade e Garantismo Penal'] },
{ title: 'Integridade nos Contratos Públicos e Anticorrupção', description: 'O compliance anticorrupção em contratos públicos tornou-se exigência estrutural após a Lei nº 12.846/2013.', category: 'Compliance', url: 'compliance/integridade-contratos-publicos-lei-anticorrupcao.html', tags: ['Compliance Anticorrupção', 'Contratos Públicos', 'Integridade nos Contratos Públicos e Anticorrupção'] },
{ title: 'Vinculação Decisória no CPC e Seus Reflexos', description: 'O sistema de precedentes obrigatórios do CPC de 2015 transformou a estrutura decisória do Judiciário brasileiro.', category: 'Jurisprudência', url: 'jurisprudencia/vinculacao-decisoria-cpc-sistema-precedentes.html', tags: ['Precedentes Obrigatórios', 'CPC 2015', 'Vinculação Decisória no CPC e Seus Reflexos'] },
{ title: 'Cláusulas Abusivas e Defesa do Hipossuficiente', description: 'Os contratos de adesão e os mecanismos de proteção ao aderente vulnerável no ordenamento jurídico brasileiro.', category: 'Direito Civil', url: 'direito-civil/contratos-adesao-clausulas-abusivas-vulneravel.html', tags: ['Contratos de Adesão', 'Cláusulas Abusivas', 'Cláusulas Abusivas e Defesa do Hipossuficiente'] },
{ title: 'Julgamento Castrense pelo Conselho Disciplinar Militar', description: 'Conselho de Disciplina e Conselho de Justificação são instrumentos do processo disciplinar que determinam a permanência do militar nas Forças Armadas.', category: 'Direito Militar', url: 'direito-militar/conselho-disciplina-justificacao-processo-militar.html', tags: ['Conselho de Disciplina', 'Conselho de Justificação', 'Julgamento Castrense pelo Conselho Disciplinar Militar'] },
{
    title: 'Liberdade Gradual no Sistema Penitenciário Brasileiro',
    description: 'A progressão de regime penitenciário é um dos institutos mais sensíveis do direito penal brasileiro, revelando tensões entre reinserção social e punição.',
    category: 'Direito Criminal',
    url: 'direito-penal/liberdade-gradual-sistema-penitenciario-brasileiro.html',
    tags: ['Progressão de Regime', 'Execução Penal', 'Liberdade Gradual no Sistema Penitenciário Brasileiro']
},
{ title: 'Superendividamento e Nova Proteção ao Consumidor', description: 'A Lei nº 14.181/2021 institui o regime de tratamento do superendividamento com mecanismos de renegociação coletiva e preservação do mínimo existencial.', category: 'Legislação', url: 'legislacao/superendividamento-protecao-consumidor-nova-lei.html', tags: ['Superendividamento', 'Lei 14181', 'Superendividamento e Nova Proteção ao Consumidor'] },
{ title: 'Obrigação Alimentar Além da Maioridade Civil', description: 'A pensão para filhos maiores e os critérios jurisprudenciais para manutenção ou exoneração da obrigação alimentar.', category: 'Direito de Família', url: 'direito-de-familia/obrigacao-alimentar-filhos-maiores-exoneracao.html', tags: ['Pensão Alimentícia', 'Filhos Maiores', 'Obrigação Alimentar Além da Maioridade Civil'] },
{
    title: 'Acordos Sindicais e o Poder de Negociar Direitos',
    description: 'As convenções coletivas de trabalho são instrumentos centrais na regulação das relações laborais brasileiras, com a Reforma Trabalhista de 2017 ampliando o espaço da negociação coletiva.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/acordos-sindicais-poder-negociar-direitos.html',
    tags: ['Convenções Coletivas', 'Direito Trabalhista', 'Acordos Sindicais e o Poder de Negociar Direitos']
},
{ title: 'Punição Corporativa e a Era do Compliance Obrigatório', description: 'As sanções previstas na legislação de compliance são o principal instrumento de coerção para práticas de governança corporativa adequadas.', category: 'Compliance', url: 'compliance/punicao-corporativa-era-compliance-obrigatorio.html', tags: ['Sanções Compliance', 'Penalidades Corporativas', 'Punição Corporativa e a Era do Compliance Obrigatório'] },
{ title: 'Coerência Decisória nos Tribunais Superiores Brasileiros', description: 'A uniformização da jurisprudência é imperativo de segurança jurídica e de isonomia no tratamento dos jurisdicionados brasileiros.', category: 'Jurisprudência', url: 'jurisprudencia/coerencia-decisoria-tribunais-superiores-brasileiros.html', tags: ['Uniformização de Jurisprudência', 'Precedentes Vinculantes', 'Coerência Decisória nos Tribunais Superiores Brasileiros'] },{ title: 'Inovação com Segurança Jurídica no Brasil', description: 'O Marco Legal das Startups busca criar condições normativas favoráveis ao desenvolvimento de empresas inovadoras.', category: 'Legislação', url: 'legislacao/inovacao-seguranca-juridica-brasil.html', tags: ['Marco Legal das Startups', 'Inovação', 'Inovação com Segurança Jurídica no Brasil'] },
{ title: 'Inovação com Segurança Jurídica no Brasil', description: 'O Marco Legal das Startups busca criar condições normativas favoráveis ao desenvolvimento de empresas inovadoras.', category: 'Legislação', url: 'legislacao/inovacao-seguranca-juridica-brasil.html', tags: ['Marco Legal das Startups', 'Inovação', 'Inovação com Segurança Jurídica no Brasil'] },
{ title: 'Tensões Federativas e Competências em Disputa', description: 'O federalismo brasileiro e a repartição de competências revelam as tensões do pacto republicano.', category: 'Política', url: 'politica/tensoes-federativas-competencias-disputa.html', tags: ['Federalismo', 'Repartição de Competências', 'Tensões Federativas e Competências em Disputa'] },
    {
  title: 'Vínculos Geracionais e o Amparo Jurídico Familiar',
  description: 'A prerrogativa dos avós ao contato regular com seus netos é matéria consolidada no ordenamento jurídico brasileiro, mas ainda sujeita a disputas judiciais complexas.',
  category: 'Direito de Família',
  url: 'direito-de-familia/direito-avos-convivencia-familiar-brasil.html',
  tags: ['Direito dos Avós', 'Convivência Familiar', 'Vínculos Geracionais e o Amparo Jurídico Familiar']
},
{ title: 'Imperfeição Mercantil e Tutela do Consumidor', description: 'O vício do produto é um dos institutos centrais do direito do consumidor brasileiro, regulado pelo CDC com rigor técnico e viés protetivo.', category: 'Direito Civil', url: 'direito-civil/responsabilidade-vicio-produto-direito-consumidor-brasil.html', tags: ['Vício do Produto', 'Responsabilidade Civil', 'Imperfeição Mercantil e Tutela do Consumidor'] },
{ title: 'Política Antidrogas Entre Punição e Saúde Pública', description: 'A legislação brasileira sobre entorpecentes é marcada por tensões entre o modelo repressivo e a abordagem sanitária.', category: 'Direito Criminal', url: 'direito-penal/lei-drogas-politica-criminal-brasil.html', tags: ['Lei de Drogas', 'Tráfico de Entorpecentes', 'Política Antidrogas Entre Punição e Saúde Pública'] },
{ title: 'Excesso de Poder e os Limites do Agente Público', description: 'A Lei nº 13.869 de 2019 estabelece limites claros ao exercício do poder por agentes públicos e prevê sanções penais, civis e administrativas.', category: 'Legislação', url: 'legislacao/lei-abuso-autoridade-limites-poder-publico-brasil.html', tags: ['Abuso de Autoridade', 'Lei 13869', 'Excesso de Poder e os Limites do Agente Público'] },
{ title: 'Gestão Estatal sob o Prisma da Transparência', description: 'A governança pública no Brasil enfrenta o desafio de consolidar mecanismos de controle, transparência e eficiência na gestão dos recursos estatais.', category: 'Política', url: 'politica/governanca-publica-transparencia-estado-brasil.html', tags: ['Governança Pública', 'Transparência', 'Gestão Estatal sob o Prisma da Transparência'] },
{ title: 'A CLT Reformada e o Mundo do Trabalho', description: 'A Lei nº 13.467 de 2017 alterou profundamente a CLT, flexibilizando vínculos empregatícios e ampliando o espaço da negociação coletiva.', category: 'Direito Trabalhista', url: 'direito-trabalhista/reforma-trabalhista-impactos-relacoes-trabalho-brasil.html', tags: ['Reforma Trabalhista', 'CLT', 'A CLT Reformada e o Mundo do Trabalho'] },
{ title: 'Integridade Institucional no Poder do Estado', description: 'A implementação de programas de compliance no setor público representa avanço fundamental na construção de uma administração íntegra e eficiente.', category: 'Compliance', url: 'compliance/compliance-setor-publico-integridade-gestao-estado.html', tags: ['Compliance Público', 'Integridade', 'Integridade Institucional no Poder do Estado'] },
{ title: 'Quando os Tribunais Reescrevem a Realidade Social', description: 'A jurisprudência dos tribunais superiores brasileiros transcende os processos individuais e molda comportamentos, políticas e relações sociais em escala nacional.', category: 'Jurisprudência', url: 'jurisprudencia/influencia-jurisprudencia-sociedade-brasileira.html', tags: ['Jurisprudência', 'Tribunais', 'Quando os Tribunais Reescrevem a Realidade Social'] },

{
  title: 'Detenção Castrense sob o Crivo Constitucional',
  description: 'A restrição de liberdade aplicada no âmbito das forças armadas como mecanismo disciplinar é tema que divide constitucionalistas e militaristas.',
  category: 'Direito Militar',
  url: 'direito-militar/prisao-disciplinar-militar-constitucionalidade-brasil.html',
  tags: ['Prisão Disciplinar Militar', 'Constitucionalidade', 'Detenção Castrense sob o Crivo Constitucional']
},
{ title: 'Precedentes nas Decisões Administrativas e seu Alcance', description: 'A jurisprudência administrativa, produzida por tribunais de contas, agências reguladoras e órgãos recursais, ocupa espaço crescente no sistema normativo brasileiro.', category: 'Jurisprudência', url: 'jurisprudencia/precedentes-decisoes-administrativas-alcance.html', tags: ['jurisprudência administrativa', 'Tribunal de Contas', 'Precedentes nas Decisões Administrativas e seu Alcance'] },
{ title: 'Apuração Interna de Irregularidades e Seus Desafios', description: 'As investigações internas corporativas tornaram-se componente estratégico dos programas de compliance nas organizações brasileiras.', category: 'Compliance', url: 'compliance/apuracao-interna-irregularidades-desafios.html', tags: ['investigações internas', 'compliance', 'Apuração Interna de Irregularidades e Seus Desafios'] },
{ title: 'Fundo de Garantia e a Proteção do Vínculo Laboral', description: 'O FGTS é um dos mais importantes instrumentos de proteção patrimonial do trabalhador brasileiro, com função que vai muito além da compensação pela dispensa.', category: 'Direito Trabalhista', url: 'direito-trabalhista/fundo-garantia-protecao-vinculo-laboral.html', tags: ['FGTS', 'Fundo de Garantia', 'Fundo de Garantia e a Proteção do Vínculo Laboral'] },
{ title: 'Vigilância Cidadã sobre o Poder Institucional Brasileiro', description: 'O controle social sobre as instituições públicas é um dos pilares mais vulneráveis e mais indispensáveis da democracia brasileira.', category: 'Política', url: 'politica/vigilancia-cidada-poder-institucional-brasileiro.html', tags: ['controle social', 'participação popular', 'Vigilância Cidadã sobre o Poder Institucional Brasileiro'] },
{ title: 'Estatuto do Consumidor e seus Trinta Anos de Proteção', description: 'O Código de Defesa do Consumidor completou mais de três décadas como um dos mais avançados diplomas de proteção consumerista do mundo.', category: 'Legislação', url: 'legislacao/estatuto-consumidor-trinta-anos-protecao.html', tags: ['Código de Defesa do Consumidor', 'CDC', 'Estatuto do Consumidor e seus Trinta Anos de Proteção'] },
{ title: 'Avanço no Cumprimento da Pena e Critérios Legais', description: 'A progressão de regime é um dos institutos mais relevantes da execução penal brasileira, equilibrando função punitiva e ressocialização.', category: 'Direito Criminal', url: 'direito-penal/avanco-cumprimento-pena-criterios-legais.html', tags: ['progressão de regime', 'execução penal', 'Avanço no Cumprimento da Pena e Critérios Legais'] },
{ title: 'Imposições Contratuais Ilegítimas e a Defesa do Consumidor', description: 'As cláusulas abusivas inseridas em contratos de adesão representam uma das formas mais disseminadas de violação dos direitos dos consumidores.', category: 'Direito Civil', url: 'direito-civil/imposicoes-contratuais-ilegitimas-defesa-consumidor.html', tags: ['cláusulas abusivas', 'Código de Defesa do Consumidor', 'Imposições Contratuais Ilegítimas e a Defesa do Consumidor'] },
{ title: 'Ilícitos Castrenses na Normalidade Institucional Brasileira', description: 'Os crimes militares praticados em tempo de paz constituem uma das categorias mais relevantes e menos compreendidas do ordenamento jurídico-penal brasileiro.', category: 'Direito Militar', url: 'direito-militar/ilicitos-castrenses-normalidade-institucional-brasileira.html', tags: ['crimes militares', 'tempo de paz', 'Ilícitos Castrenses na Normalidade Institucional Brasileira'] },
{ title: 'Término da Convivência e Efeitos Patrimoniais Legais', description: 'A dissolução da união estável é um dos temas mais complexos do direito de família brasileiro, com efeitos jurídicos no plano patrimonial, sucessório e alimentar.', category: 'Direito de Família', url: 'direito-de-familia/termino-convivencia-efeitos-patrimoniais-legais.html', tags: ['dissolução de união estável', 'partilha de bens', 'Término da Convivência e Efeitos Patrimoniais Legais'] },
{ title: 'Capacitação Interna como Pilar da Conformidade Empresarial', 
    description: 'O treinamento corporativo voltado à cultura de integridade e conformidade normativa deixou de ser uma iniciativa opcional para se tornar um componente estrutural dos programas de compliance.', 
    category: 'Compliance', 
    url: 'compliance/capacitacao-interna-pilar-conformidade-empresarial.html', 
    tags: ['treinamento corporativo', 'compliance', 'Capacitação Interna como Pilar da Conformidade Empresarial'] 
},
{ title: 'Força Letal e os Limites da Atuação Estatal Armada', 
    description: 'O uso da força por agentes do Estado é um dos temas mais sensíveis e juridicamente complexos do direito público brasileiro.', 
    category: 'Direito Militar', 
    url: 'direito-militar/forca-letal-limites-atuacao-estatal-armada.html', 
    tags: ['uso da força', 'responsabilidade jurídica', 'Força Letal e os Limites da Atuação Estatal Armada'] 
},
{ title: 'Lesões Transindividuais e a Tutela Coletiva no Brasil', 
description: 'Os danos coletivos e difusos representam uma das mais complexas e relevantes categorias do direito civil contemporâneo brasileiro.', 
category: 'Direito Civil', 
url: 'direito-civil/lesoes-transindividuais-tutela-coletiva-brasil.html', 
tags: ['danos coletivos', 'danos difusos', 'Lesões Transindividuais e a Tutela Coletiva no Brasil'] 
},
{ title: 'Vínculo Afetivo e Obrigação Alimentar na Filiação', 
    description: 'A pensão decorrente da filiação socioafetiva é um dos temas mais instigantes e em permanente evolução do direito de família brasileiro.', 
    category: 'Direito de Família', 
    url: 'direito-de-familia/vinculo-afetivo-obrigacao-alimentar-filiacao.html', 
    tags: ['pensão socioafetiva', 'filiação socioafetiva', 'Vínculo Afetivo e Obrigação Alimentar na Filiação'] 
},
{ title: 'Contratos Públicos sob Nova Arquitetura Normativa', 
    description: 'A Lei nº 14.133/2021 substituiu o arcabouço normativo que vigorava desde 1993 e redesenhou as regras do jogo nas contratações públicas brasileiras.',
     category: 'Legislação',
     url: 'legislacao/contratos-publicos-nova-arquitetura-normativa.html', 
     tags: ['nova lei de licitações', 'Lei 14133', 'Contratos Públicos sob Nova Arquitetura Normativa'] },
{ title: 'Tribunais Além da Lei e seus Reflexos Políticos', 
    description: 'O ativismo judicial é um dos fenômenos mais debatidos e controversos do constitucionalismo contemporâneo brasileiro.', 
    category: 'Jurisprudência', 
    url: 'jurisprudencia/tribunais-alem-lei-reflexos-politicos-ativismo.html', 
    tags: ['ativismo judicial', 'separação de poderes', 'Tribunais Além da Lei e seus Reflexos Políticos'] },
{ title: 'Economia Invisível e os Direitos Negados ao Trabalhador', 
    description: 'O trabalho informal persiste como um dos fenômenos mais estruturais e desafiadores do mercado laboral brasileiro.', 
    category: 'Direito Trabalhista', 
    url: 'direito-trabalhista/economia-invisivel-direitos-negados-trabalhador.html', 
    tags: ['trabalho informal', 'informalidade', 'Economia Invisível e os Direitos Negados ao Trabalhador'] },
{ title: 'Fronteiras da Palavra e os Limites Democráticos', 
    description: 'A liberdade de expressão é um dos direitos fundamentais mais debatidos e tensionados na democracia brasileira contemporânea.', 
    category: 'Política', 
    url: 'politica/fronteiras-palavra-limites-democraticos-liberdade-expressao.html', 
    tags: ['liberdade de expressão', 'discurso de ódio', 'Fronteiras da Palavra e os Limites Democráticos'] },
{ title: 'Delitos Digitais e a Resposta Penal do Estado', 
    description: 'A escalada dos crimes cibernéticos no Brasil expõe a fragilidade do arcabouço jurídico-penal diante de condutas que ultrapassam fronteiras geográficas.', 
    category: 'Direito Criminal', 
    url: 'direito-penal/delitos-digitais-resposta-penal-estado.html', 
    tags: ['crimes cibernéticos', 'direito penal digital', 'Delitos Digitais e a Resposta Penal do Estado'] },
{
    title: 'Garantia Temporária de Emprego e Seus Limites Legais',
    description: 'A proteção provisória ao vínculo empregatício é um dos mecanismos mais sensíveis do direito do trabalho brasileiro.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/garantia-temporaria-emprego-limites-legais.html',
    tags: ['estabilidade provisória', 'direito trabalhista', 'Garantia Temporária de Emprego e Seus Limites Legais']
},
{
    title: 'Influência Corporativa e os Limites da Norma',
    description: 'A prática da pressão organizada de grupos de interesse sobre o processo legislativo e regulatório brasileiro permanece no centro do debate democrático.',
    category: 'Política',
    url: 'politica/influencia-corporativa-limites-norma-lobby-regulacao.html',
    tags: ['lobby', 'regulação', 'Influência Corporativa e os Limites da Norma']
},
{
    title: 'Constituição Digital e Direitos dos Usuários Online',
    description: 'A Lei nº 12.965/2014 representou um avanço civilizatório na relação entre cidadãos, Estado e plataformas digitais no Brasil.',
    category: 'Legislação',
    url: 'legislacao/constituicao-digital-direitos-usuarios-online.html',
    tags: ['Marco Civil da Internet', 'direitos digitais', 'Constituição Digital e Direitos dos Usuários Online']
},
{ title: 'Governança Sustentável e Integridade Corporativa em Foco', 
    description: 'A convergência entre a agenda ESG e as práticas de compliance transformou o modo como as corporações brasileiras são avaliadas por investidores, reguladores e consumidores.', 
    category: 'Compliance', 
    url: 'compliance/governanca-sustentavel-integridade-corporativa-esg.html', 
tags: ['ESG', 'compliance', 'Governança Sustentável e Integridade Corporativa em Foco'] 
},
{ title: 'Justiça Castrense e os Crimes Militares Especificados', 
    description: 'O Código Penal Militar rege um sistema de direito penal especializado que convive em permanente tensão com os princípios do direito penal comum e com as garantias constitucionais.', 
    category: 'Direito Militar', 
    url: 'direito-militar/justica-castrense-crimes-militares-especificados.html', 
    tags: ['Código Penal Militar', 'direito militar', 'Justiça Castrense e os Crimes Militares Especificados'] 
},
{ title: 'Indenização pelo Estado e a Teoria do Risco Administrativo', 
    description: 'A responsabilidade civil do Estado por danos causados a particulares é um dos pilares do Estado democrático de direito.', 
    category: 'Direito Civil', 
    url: 'direito-civil/indenizacao-estado-teoria-risco-administrativo.html', 
    tags: ['responsabilidade civil do Estado', 'risco administrativo', 'Indenização pelo Estado e a Teoria do Risco Administrativo'] 
},
{ title: 'Excesso de Poder e as Fronteiras da Autoridade Pública', 
    description: 'A Lei nº 13.869/2019 redefiniu os contornos do crime de abuso de autoridade no Brasil, ampliando o rol de condutas típicas.', 
    category: 'Direito Criminal', 
    url: 'direito-penal/excesso-poder-fronteiras-autoridade-publica.html', 
    tags: ['abuso de autoridade', 'Lei 13869', 'Excesso de Poder e as Fronteiras da Autoridade Pública'] 
},
{ title: 'Custódia Exclusiva e Proteção Integral da Criança', 
    description: 'A guarda unilateral permanece como modalidade aplicável em situações específicas, mesmo após a consolidação da guarda compartilhada como regra preferencial.', 
    category: 'Direito de Família', 
    url: 'direito-de-familia/custodia-exclusiva-protecao-integral-crianca.html', 
    tags: ['guarda unilateral', 'Romer carvalho', 'direito de família', 'Custódia Exclusiva e Proteção Integral da Criança'] 
},
{ title: 'Judiciário Brasileiro entre Ativismo e Contenção', 
    description: 'O Poder Judiciário brasileiro atravessa um período de intensa reflexão sobre seus próprios limites e atribuições.', 
    category: 'Jurisprudência', 
    url: 'jurisprudencia/judiciario-brasileiro-ativismo-contencao-limites.html', 
    tags: ['papel do Judiciário', 'ativismo judicial', 'Judiciário Brasileiro entre Ativismo e Contenção'] 
},
{ title: 'Compliance nas Pequenas Empresas Brasileiras', 
    description: 'A conformidade regulatória não é exclusividade das grandes corporações. Pequenas empresas precisam adotar práticas de compliance para evitar sanções e ampliar sua competitividade.', 
    category: 'Compliance',
    url: 'compliance/compliance-pequenas-empresas-brasileiras.html', 
    tags: ['Compliance', 'Pequenas Empresas', 'Compliance nas Pequenas Empresas Brasileiras'] 
},
{ title: 'O STF Como Árbitro da Transformação Social', 
    description: 'As decisões do Supremo Tribunal Federal moldam a realidade social, econômica e política do Brasil, com impactos que ultrapassam os casos concretos julgados.', 
    category: 'Jurisprudência', 
    url: 'jurisprudencia/stf-arbitro-transformacao-social-decisoes-impacto.html', 
    tags: ['STF', 'Jurisprudência Constitucional', 'O STF Como Árbitro da Transformação Social'] 
},
{ title: 'Improbidade Administrativa Sob Novo Regramento Legal', 
    description: 'A reforma da Lei de Improbidade Administrativa redefiniu os critérios de responsabilização de agentes públicos com a exigência de dolo específico e novo regime prescricional.', 
    category: 'Legislação', 
    url: 'legislacao/improbidade-administrativa-novo-regramento-legal.html', 
    tags: ['Improbidade Administrativa', 'Lei 14230', 'Improbidade Administrativa Sob Novo Regramento Legal'] 
},
{ title: 'Corrupção Sistêmica e a Resposta do Estado Brasileiro', 
    description: 'A corrupção custa ao Brasil parcela expressiva do PIB. Conheça o arcabouço normativo anticorrupção e os desafios do seu combate.', 
    category: 'Política', 
    url: 'politica/corrupcao-sistemica-resposta-estado-brasileiro.html', 
    tags: ['Corrupção', 'Combate Institucional', 'Corrupção Sistêmica e a Resposta do Estado Brasileiro'] 
},
{ title: 'Acidente Laboral e a Responsabilidade Patronal no Brasil', 
    description: 'O Brasil registra centenas de milhares de acidentes de trabalho por ano. Conheça o arcabouço jurídico de proteção ao trabalhador acidentado.', 
    category: 'Direito Trabalhista', 
    url: 'direito-trabalhista/acidente-laboral-responsabilidade-patronal-brasil.html', 
    tags: ['Acidente de Trabalho', 'Segurança do Trabalho', 'Acidente Laboral e a Responsabilidade Patronal no Brasil'] 
},
{ title: 'Sucessão Familiar e Estratégia Patrimonial no Brasil', 
    description: 'O planejamento sucessório familiar é um instrumento jurídico essencial para proteger o patrimônio, reduzir tributos e evitar litígios entre herdeiros.', 
    category: 'Direito de Família', 
    url: 'direito-de-familia/sucessao-familiar-estrategia-patrimonial-brasil.html', 
    tags: ['Planejamento Sucessório', 'Herança', 'Sucessão Familiar e Estratégia Patrimonial no Brasil'] 
},
{
  title: 'Cadeia de Custódia e a Prova Penal Legítima',
  description: 'A cadeia de custódia da prova penal garante a integridade dos vestígios criminais desde a coleta até o julgamento. Sua violação pode comprometer toda a persecução penal.',
  category: 'Direito Criminal',
  url: 'direito-penal/cadeia-custodia-prova-penal-legitima.html',
  tags: ['Cadeia de Custódia', 'Prova Penal', 'Cadeia de Custódia e a Prova Penal Legítima']
},
{
  title: 'Proteção Consumerista no Ordenamento Civil Brasileiro',
  description: 'O Código de Defesa do Consumidor, em diálogo com o Código Civil, forma um sistema protetivo robusto que tutela o consumidor vulnerável nas relações de mercado.',
  category: 'Direito Civil',
  url: 'direito-civil/protecao-consumerista-ordenamento-civil-brasileiro.html',
  tags: ['Direito do Consumidor', 'CDC', 'Proteção Consumerista no Ordenamento Civil Brasileiro']
},
{
  title: 'Disciplina Militar e Suas Fronteiras Jurídicas',
  description: 'O poder disciplinar nas instituições castrenses brasileiras enfrenta limites constitucionais que exigem observância do contraditório, da ampla defesa e da proporcionalidade.',
  category: 'Direito Militar',
  url: 'direito-militar/transgressoes-disciplinares-limites-direito-militar.html',
  tags: ['Direito Militar', 'Transgressões Disciplinares', 'Disciplina Militar e Suas Fronteiras Jurídicas']
},
    {
  title: 'Fuga do Dever Militar e Seus Reflexos Jurídicos',
  description: 'A deserção no âmbito das Forças Armadas brasileiras configura infração de elevada gravidade no ordenamento jurídico militar, acarretando sanções penais, administrativas e disciplinares severas.',
  category: 'Direito Militar',
  url: 'direito-militar/desercao-consequencias-legais-militares.html',
  tags: ['Deserção Militar', 'Código Penal Militar', 'Fuga do Dever Militar e Seus Reflexos Jurídicos']
},
{
  title: 'Contratos Sufocantes e o Direito à Revisão',
  description: 'A teoria da imprevisão e a revisão contratual por onerosidade excessiva são instrumentos fundamentais do direito civil brasileiro para reequilibrar obrigações desproporcionais.',
  category: 'Direito Civil',
  url: 'direito-civil/revisao-contratual-onerosidade-excessiva.html',
  tags: ['Onerosidade Excessiva', 'Teoria da Imprevisão', 'Contratos Sufocantes e o Direito à Revisão']
},
{
  title: 'Afeto Negado Pode Gerar Reparação Civil',
  description: 'O abandono afetivo nas relações familiares tem sido reconhecido pelos tribunais brasileiros como conduta passível de indenização por dano moral e responsabilidade civil parental.',
  category: 'Direito de Família',
  url: 'direito-de-familia/abandono-afetivo-indenizacao-dano-moral.html',
  tags: ['Abandono Afetivo', 'Dano Moral Familiar', 'Afeto Negado Pode Gerar Reparação Civil']
},
{
  title: 'Equilíbrio Fiscal como Imperativo Constitucional',
  description: 'A responsabilidade fiscal no Brasil impõe limites ao endividamento público e obriga gestores a planejar receitas e despesas com transparência e prudência segundo a Lei Complementar 101/2000.',
  category: 'Política',
  url: 'politica/equilibrio-fiscal-imperativo-constitucional.html',
  tags: ['Responsabilidade Fiscal', 'Lei de Responsabilidade Fiscal', 'Equilíbrio Fiscal como Imperativo Constitucional']
},
{
  title: 'Terceirização Irrestrita e os Riscos Trabalhistas',
  description: 'A terceirização trabalhista no Brasil abrange qualquer atividade empresarial após a Reforma Trabalhista, mas impõe responsabilidades subsidiárias à empresa tomadora de serviços.',
  category: 'Direito Trabalhista',
  url: 'direito-trabalhista/terceirizacao-irrestrita-riscos-trabalhistas.html',
  tags: ['Terceirização', 'Reforma Trabalhista', 'Terceirização Irrestrita e os Riscos Trabalhistas']
},
{
  title: 'Provas Obtidas Ilegalmente e Suas Consequências',
  description: 'A inadmissibilidade de provas obtidas por meios ilícitos é princípio constitucional consagrado no artigo 5º, LVI, da CF/88. A teoria dos frutos da árvore envenenada contamina toda a cadeia probatória.',
  category: 'Direito Criminal',
  url: 'direito-penal/provas-obtidas-ilegalmente-consequencias.html',
  tags: ['Provas Ilícitas', 'Frutos da Árvore Envenenada', 'Provas Obtidas Ilegalmente e Suas Consequências']
},
{
  title: 'Conformidade Digital como Escudo Corporativo',
  description: 'O compliance digital emerge como imperativo estratégico para empresas que operam no ambiente tecnológico, integrando normas da LGPD, segurança cibernética e governança de plataformas.',
  category: 'Compliance',
  url: 'compliance/conformidade-digital-escudo-corporativo.html',
  tags: ['Compliance Digital', 'LGPD', 'Conformidade Digital como Escudo Corporativo']
},
{
  title: 'Repercussão Geral e o Poder do STF',
  description: 'A repercussão geral permite ao STF selecionar os recursos extraordinários de relevância constitucional, transformando a forma como as decisões se projetam sobre todo o sistema judiciário brasileiro.',
  category: 'Jurisprudência',
  url: 'jurisprudencia/repercussao-geral-poder-stf-decisoes.html',
  tags: ['Repercussão Geral', 'STF', 'Repercussão Geral e o Poder do STF']
},
{
  title: 'Proteção Legal ao Idoso no Brasil',
  description: 'O Estatuto do Idoso consolidou o arcabouço normativo de proteção às pessoas com 60 anos ou mais no Brasil, assegurando direitos fundamentais em saúde, assistência social e acesso à justiça.',
  category: 'Legislação',
  url: 'legislacao/estatuto-idoso-protecao-legal-brasil.html',
  tags: ['Estatuto do Idoso', 'Direitos dos Idosos', 'Proteção Legal ao Idoso no Brasil']
},
    {
  title: 'Greve nas Forças Armadas e a Vedação Constitucional',
  description: 'A questão da paralisação coletiva por integrantes das Forças Armadas é tema que recorta de forma cirúrgica as fronteiras entre direitos trabalhistas e deveres constitucionais militares. A Constituição Federal de 1988 é expressa ao vedar tal prática.',
  category: 'Direito Militar',
  url: 'direito-militar/greve-forcas-armadas-vedacao-constitucional.html',
  tags: ['Direito Militar', 'Greve Militar', 'Greve nas Forças Armadas e a Vedação Constitucional']
},
{
  title: 'Defeitos Contratuais e Invalidade dos Negócios Jurídicos',
  description: 'A distinção entre nulidade e anulabilidade dos contratos é tema de elevada relevância prática no direito civil brasileiro. Os vícios do negócio jurídico impactam diretamente a segurança das relações obrigacionais e a proteção das partes vulneráveis.',
  category: 'Direito Civil',
  url: 'direito-civil/defeitos-contratuais-invalidade-negocios-juridicos.html',
  tags: ['Nulidade Contratual', 'Anulabilidade', 'Defeitos Contratuais e Invalidade dos Negócios Jurídicos']
},
{
  title: 'Vínculos Parentais e Tutela Jurisdicional no Direito de Convivência',
  description: 'O direito de convivência familiar ocupa posição central no ordenamento jurídico brasileiro como mecanismo de proteção integral da criança e do adolescente. A regulamentação dos laços parentais envolve tensões entre autonomia dos genitores e o interesse superior do menor.',
  category: 'Direito de Família',
  url: 'direito-de-familia/vinculos-parentais-tutela-jurisdicional-convivencia.html',
  tags: ['Direito de Convivência', 'Direito de Família', 'Vínculos Parentais e Tutela Jurisdicional no Direito de Convivência']
},
{
  title: 'Comércio Ilícito de Entorpecentes e Sanções Penais no Brasil',
  description: 'O tráfico de drogas permanece como um dos delitos de maior impacto social e jurídico no Brasil. A complexidade das penas previstas na Lei 11.343/2006 e os critérios de distinção entre traficante e usuário continuam sendo objeto de intensa disputa doutrinária e jurisprudencial.',
  category: 'Direito Criminal',
  url: 'direito-penal/comercio-ilicito-entorpecentes-sancoes-penais-brasil.html',
  tags: ['Tráfico de Drogas', 'Lei de Drogas', 'Comércio Ilícito de Entorpecentes e Sanções Penais no Brasil']
},
{
  title: 'Violência Sexual no Ambiente de Trabalho e Proteção Jurídica',
  description: 'O assédio sexual nas relações laborais constitui grave violação aos direitos fundamentais do trabalhador. A legislação brasileira avança na proteção das vítimas, mas a efetividade das normas ainda encontra barreiras culturais e institucionais.',
  category: 'Direito Trabalhista',
  url: 'direito-trabalhista/violencia-sexual-ambiente-trabalho-protecao-juridica.html',
  tags: ['Assédio Sexual', 'Direito Trabalhista', 'Violência Sexual no Ambiente de Trabalho e Proteção Jurídica']
},
{
  title: 'Supremo Tribunal Federal e Interferência Institucional na Política',
  description: 'A atuação do Supremo Tribunal Federal no cenário político nacional transcende o papel de guardião constitucional e adentra o terreno da interferência nos demais poderes. O fenômeno do ativismo judicial reacende o debate sobre a separação de poderes.',
  category: 'Política',
  url: 'politica/supremo-tribunal-federal-interferencia-institucional-politica.html',
  tags: ['STF', 'Papel do STF', 'Supremo Tribunal Federal e Interferência Institucional na Política']
},
{
  title: 'Reforma Penal e Novos Paradigmas Normativos no Brasil',
  description: 'As alterações no Código Penal brasileiro têm gerado intenso debate entre juristas, legisladores e a sociedade civil. As modificações normativas impactam diretamente a aplicação da lei penal e os direitos fundamentais dos cidadãos.',
  category: 'Legislação',
  url: 'legislacao/reforma-penal-novos-paradigmas-normativos-brasil.html',
  tags: ['Código Penal', 'Reforma Penal', 'Reforma Penal e Novos Paradigmas Normativos no Brasil']
},
{
  title: 'Veredictos Polêmicos e Seus Reflexos Jurídicos no Brasil',
  description: 'As decisões judiciais controversas revelam as tensões entre segurança jurídica e ativismo interpretativo. O debate sobre os limites da discricionariedade dos tribunais coloca em xeque a previsibilidade do ordenamento jurídico brasileiro.',
  category: 'Jurisprudência',
  url: 'jurisprudencia/veredictos-polemicos-reflexos-juridicos-brasil.html',
  tags: ['Decisões Polêmicas', 'Jurisprudência', 'Veredictos Polêmicos e Seus Reflexos Jurídicos no Brasil']
},
{
  title: 'Ética Corporativa como Fundamento Estratégico Empresarial',
  description: 'O código de ética empresarial deixou de ser mero documento protocolar para se tornar instrumento central de governança corporativa. Empresas que negligenciam suas diretrizes normativas internas expõem-se a riscos reputacionais e sanções regulatórias de elevada gravidade.',
  category: 'Compliance',
  url: 'compliance/etica-corporativa-fundamento-estrategico-empresarial.html',
  tags: ['Código de Ética', 'Governança Corporativa', 'Ética Corporativa como Fundamento Estratégico Empresarial']
},
       {
       title: 'Governança Empresarial e Accountability Jurídico',
       description: 'Obrigações corporativas redefinem o risco empresarial jurídico e competitivo no Brasil com Lei Anticorrupção, LGPD e ESG.',
       category: 'Compliance',
       url: 'compliance/governanca-empresarial-accountability-juridico-brasil.html',
       tags: ['responsabilidade corporativa', 'compliance', 'Lei Anticorrupção', 'Governança Empresarial e Accountability Jurídico']
   },
      {
       title: 'Desinformação Eleitoral e o Peso da Lei',
       description: 'Falsidade narrativa ameaça integridade do processo democrático e desafia o ordenamento eleitoral brasileiro.',
       category: 'Política',
       url: 'politica/desinformacao-eleitoral-peso-lei-democracia.html',
       tags: ['fake news eleições', 'desinformação eleitoral', 'TSE plataformas', 'Desinformação Eleitoral e o Peso da Lei']
   },
    {
       title: 'Saída das Fileiras Militares sob Escrutínio',
       description: 'Desligamento de militares gera disputas jurídicas crescentes sobre licenciamento, exclusão disciplinar e controle judicial.',
       category: 'Direito Militar',
       url: 'direito-militar/saida-fileiras-militares-escrutinio-juridico.html',
       tags: ['direito militar', 'licenciamento militar', 'exclusão militar', 'Saída das Fileiras Militares sob Escrutínio']
   },
     {
       title: 'Adoção Legal e os Caminhos da Família',
       description: 'Requisitos jurídicos moldam vínculos afetivos permanentes no sistema de adoção brasileiro regulado pelo ECA.',
       category: 'Direito de Família',
       url: 'direito-de-familia/adocao-legal-caminhos-familia-brasil.html',
       tags: ['adoção', 'ECA', 'direito de família', 'Adoção Legal e os Caminhos da Família']
   },
      {
       title: 'Quando o Direito Penal Autoriza a Conduta',
       description: 'Causas que afastam a antijuridicidade redefinem os limites da punição no sistema penal brasileiro.',
       category: 'Direito Criminal',
       url: 'direito-penal/excludentes-ilicitude-direito-penal-brasileiro.html',
       tags: ['excludentes de ilicitude', 'legítima defesa', 'estado de necessidade', 'Quando o Direito Penal Autoriza a Conduta']
   },
    {
       title: 'Banco de Horas sob o Olhar Jurídico',
       description: 'Compensação de jornada divide tribunais trabalhistas e gera passivo expressivo para empresas no Brasil.',
       category: 'Direito Trabalhista',
       url: 'direito-trabalhista/banco-horas-olhar-juridico-trabalhista.html',
       tags: ['banco de horas', 'compensação de jornada', 'horas extras', 'Banco de Horas sob o Olhar Jurídico']
   },
     {
       title: 'Responsabilidade Médica e Reparação Civil',
       description: 'Falhas na prestação de serviços médicos geram batalhas jurídicas crescentes. Entenda os fundamentos legais da responsabilidade civil médica no Brasil.',
       category: 'Direito Civil',
       url: 'direito-civil/responsabilidade-medica-reparacao-civil-brasil.html',
       tags: ['erro médico', 'responsabilidade civil médica', 'indenização hospitalar', 'Responsabilidade Médica e Reparação Civil']
   },
   {
       title: 'Normas Ambientais sob Tensão Política',
       description: 'A legislação ambiental brasileira enfrenta tensão crescente entre proteção ecológica e pressões políticas e econômicas.',
       category: 'Legislação',
       url: 'legislacao/normas-ambientais-tensao-politica-brasil.html',
       tags: ['legislação ambiental', 'Código Florestal', 'crimes ambientais', 'Normas Ambientais sob Tensão Política']
   },
      {
       title: 'Decisões Penais que Moldam o Direito',
       description: 'A jurisprudência criminal brasileira atravessa período de intensa renovação dogmática com precedentes vinculantes nos tribunais superiores.',
       category: 'Jurisprudência',
       url: 'jurisprudencia/decisoes-penais-moldam-direito-brasil.html',
       tags: ['jurisprudência criminal', 'precedentes penais', 'STF STJ', 'Decisões Penais que Moldam o Direito']
   },
   
{
    title: 'Tempo de Posse Pode Virar Título de Dono',
    description: 'A usucapião transforma o uso prolongado de bens em propriedade, com modalidades ordinária, extraordinária, especial urbana, rural e por abandono de lar.',
    category: 'Direito Civil',
    url: 'direito-civil/tempo-de-posse-pode-virar-titulo-de-dono.html',
    tags: ['usucapião', 'modalidades de usucapião', 'Tempo de Posse Pode Virar Título de Dono']
},
{
    title: 'A Hierarquia Que Vira Instrumento de Tortura',
    description: 'O assédio moral nas corporações militares compromete a dignidade e a saúde mental, com marco normativo, denúncia e responsabilização no direito militar.',
    category: 'Direito Militar',
    url: 'direito-militar/hierarquia-que-vira-instrumento-de-tortura.html',
    tags: ['assédio moral militar', 'corporações militares', 'A Hierarquia Que Vira Instrumento de Tortura']
},
    {
    title: 'Uma Criança Pode Ter Dois Pais no Registro',
    description: 'A multiparentalidade reconhece vínculos de filiação além da biologia, com a tese do STF, socioafetividade e efeitos sobre alimentos e herança.',
    category: 'Direito de Família',
    url: 'direito-de-familia/crianca-pode-ter-dois-pais-no-registro.html',
    tags: ['multiparentalidade', 'socioafetividade', 'Uma Criança Pode Ter Dois Pais no Registro']
},
{
    title: 'A Confissão Que Pode Mudar Tudo',
    description: 'A delação premiada é instrumento central do processo penal brasileiro, com a Lei nº 12.850, homologação judicial e jurisprudência do STF sobre colaboração premiada.',
    category: 'Direito Criminal',
    url: 'direito-penal/confissao-que-pode-mudar-tudo.html',
    tags: ['delação premiada', 'colaboração premiada', 'A Confissão Que Pode Mudar Tudo']
},
    {
    title: 'Pai no Registro É Direito Que Não Prescreve',
    description: 'O reconhecimento de paternidade é direito imprescritível que garante identidade, alimentos e herança, com investigação judicial e paternidade socioafetiva.',
    category: 'Direito de Família',
    url: 'direito-de-familia/pai-no-registro-e-direito-que-nao-prescreve.html',
    tags: ['reconhecimento de paternidade', 'investigação de paternidade', 'Pai no Registro É Direito Que Não Prescreve']
},
{
    title: 'A Farda Que o Corpo Não Aguenta Mais',
    description: 'A reforma militar por incapacidade é direito assegurado pelo Estatuto dos Militares, com acidente em serviço, junta de saúde e proteção previdenciária.',
    category: 'Direito Militar',
    url: 'direito-militar/farda-que-o-corpo-nao-aguenta-mais.html',
    tags: ['reforma militar por incapacidade', 'Estatuto dos Militares', 'A Farda Que o Corpo Não Aguenta Mais']
},
{
    title: 'A Lupa Que Protege a Empresa por Dentro',
    description: 'A auditoria interna é função estratégica de defesa corporativa, com independência, plano baseado em riscos, conformidade e tecnologia.',
    category: 'Compliance',
    url: 'compliance/lupa-que-protege-a-empresa-por-dentro.html',
    tags: ['auditoria interna', 'controles internos', 'A Lupa Que Protege a Empresa por Dentro']
},
{
    title: 'O Que os Outros Sistemas Ensinam ao Nosso',
    description: 'O direito comparado analisa sistemas jurídicos para aprimorar o ordenamento nacional, com famílias jurídicas, civil law, common law e transplante jurídico.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/o-que-os-outros-sistemas-ensinam-ao-nosso.html',
    tags: ['direito comparado', 'civil law common law', 'O Que os Outros Sistemas Ensinam ao Nosso']
},
{
    title: 'Quando Legislar Demais Prejudica a Lei',
    description: 'O excesso de legislação paralisa o Estado com inflação normativa, custos de conformidade e insegurança jurídica para cidadãos e empresas no Brasil.',
    category: 'Legislação',
    url: 'legislacao/quando-legislar-demais-prejudica-a-lei.html',
    tags: ['excesso de legislação', 'inflação normativa', 'Quando Legislar Demais Prejudica a Lei']
},
{
    title: 'Como o Brasil Escolhe Seus Representantes',
    description: 'O sistema eleitoral brasileiro combina majoritário e proporcional, com lista aberta, cláusula de barreira e financiamento eleitoral na democracia.',
    category: 'Política',
    url: 'politica/como-o-brasil-escolhe-seus-representantes.html',
    tags: ['sistema eleitoral brasileiro', 'voto proporcional', 'Como o Brasil Escolhe Seus Representantes']
},
{
    title: 'Mesma Função Exige Mesmo Salário',
    description: 'A equiparação salarial combate a discriminação remuneratória, com requisitos do artigo 461 da CLT, reforma trabalhista e Lei de Igualdade Salarial.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/mesma-funcao-exige-mesmo-salario.html',
    tags: ['equiparação salarial', 'igualdade salarial', 'Mesma Função Exige Mesmo Salário']
},
{
    title: 'Ter a Chave Não É Ser o Dono',
    description: 'Posse e propriedade são direitos distintos no direito civil, com ações possessórias, usucapião, função social da propriedade e conflitos fundiários.',
    category: 'Direito Civil',
    url: 'direito-civil/ter-a-chave-nao-e-ser-o-dono.html',
    tags: ['posse e propriedade', 'usucapião', 'Ter a Chave Não É Ser o Dono']
},

{
    title: 'Corrupção Não Se Combate Só Com Prisão',
    description: 'A prevenção à corrupção é o caminho mais eficaz, com programas de integridade, Lei Anticorrupção e due diligence de terceiros no compliance brasileiro.',
    category: 'Compliance',
    url: 'compliance/corrupcao-nao-se-combate-so-com-prisao.html',
    tags: ['prevenção à corrupção', 'programa de integridade', 'Corrupção Não Se Combate Só Com Prisão']
},
{
    title: 'Tribunais Reescrevem as Regras da Família',
    description: 'A jurisprudência em direito de família evolui além do Código Civil, com multiparentalidade, socioafetividade, guarda compartilhada e novos modelos familiares.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tribunais-reescrevem-as-regras-da-familia.html',
    tags: ['jurisprudência direito de família', 'multiparentalidade', 'Tribunais Reescrevem as Regras da Família']
},
{
    title: 'A Lei que Entrou na Casa das Mulheres',
    description: 'A Lei Maria da Penha transformou o combate à violência doméstica no Brasil, com medidas protetivas, feminicídio, violência psicológica e atualizações legislativas.',
    category: 'Legislação',
    url: 'legislacao/lei-que-entrou-na-casa-das-mulheres.html',
    tags: ['Lei Maria da Penha', 'violência doméstica', 'A Lei que Entrou na Casa das Mulheres']
},
{
    title: 'O Sistema Político que Resiste à Mudança',
    description: 'A reforma política no Brasil é urgente e adiada, com fragmentação partidária, financiamento eleitoral e obstáculos estruturais à mudança do sistema.',
    category: 'Política',
    url: 'politica/sistema-politico-que-resiste-a-mudanca.html',
    tags: ['reforma política', 'sistema eleitoral', 'O Sistema Político que Resiste à Mudança']
},
{
    title: 'Trabalho a Pedido Tem Direito Garantido',
    description: 'O trabalhador intermitente tem direitos específicos garantidos pela CLT, com convocação, seguro-desemprego e proteções da reforma trabalhista de 2017.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/trabalho-a-pedido-tem-direito-garantido.html',
    tags: ['trabalho intermitente', 'contrato intermitente', 'Trabalho a Pedido Tem Direito Garantido']
},
{
    title: 'Palavras Também Ferem e a Lei Pune Isso',
    description: 'Os crimes contra a honra protegem a reputação e a dignidade, com calúnia, difamação, injúria racial e crimes digitais no direito penal brasileiro.',
    category: 'Direito Criminal',
    url: 'direito-penal/palavras-tambem-ferem-e-a-lei-pune-isso.html',
    tags: ['crimes contra a honra', 'calúnia difamação injúria', 'Palavras Também Ferem e a Lei Pune Isso']
},
{
    title: 'Denunciar Não É Trair, É Proteger a Empresa',
    description: 'O canal de denúncias é instrumento essencial do compliance corporativo, com requisitos de efetividade, proteção ao denunciante e relação com a LGPD no Brasil.',
    category: 'Compliance',
    url: 'compliance/denunciar-nao-e-trair-e-proteger-a-empresa.html',
    tags: ['canal de denúncias', 'whistleblower', 'Denunciar Não É Trair, É Proteger a Empresa']
},
{
    title: 'Sem Previsibilidade Não Há Estado de Direito',
    description: 'A segurança jurídica é pressuposto do Estado de Direito e condição para o investimento, com precedentes obrigatórios, modulação de efeitos e proteção da confiança legítima.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/sem-previsibilidade-nao-ha-estado-de-direito.html',
    tags: ['segurança jurídica', 'Estado de Direito', 'Sem Previsibilidade Não Há Estado de Direito']
},
{
    title: 'O Brasil tem Leis Demais e Efetividade de Menos',
    description: 'A efetividade das leis no Brasil é um dos maiores desafios do ordenamento jurídico nacional, com excesso normativo, baixa capacidade de fiscalização e insegurança jurídica.',
    category: 'Legislação',
    url: 'legislacao/brasil-tem-leis-demais-e-efetividade-de-menos.html',
    tags: ['efetividade das leis', 'legislação brasileira', 'O Brasil tem Leis Demais e Efetividade de Menos']
},
{
    title: 'O Instrumento Que Pode Derrubar um Presidente',
    description: 'O impeachment é o instrumento constitucional de responsabilização dos titulares de cargos públicos, com procedimento bifásico, papel do STF e crimes de responsabilidade.',
    category: 'Política',
    url: 'politica/instrumento-que-pode-derrubar-um-presidente.html',
    tags: ['impeachment', 'crimes de responsabilidade', 'O Instrumento Que Pode Derrubar um Presidente']
},
{
    title: 'Trabalhador ou Parceiro? A Lei Define Isso',
    description: 'O reconhecimento do vínculo empregatício é decisivo para os direitos dos trabalhadores, com pejotização, trabalho por plataformas e o princípio da primazia da realidade.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/trabalhador-ou-parceiro-a-lei-define-isso.html',
    tags: ['vínculo empregatício', 'trabalho por plataformas', 'Trabalhador ou Parceiro? A Lei Define Isso']
},
{
    title: 'O Crime que Se Disfarça de Negócio Legítimo',
    description: 'A lavagem de dinheiro é o oxigênio do crime organizado, regulada pela Lei nº 9.613, com o COAF, as criptomoedas e os esforços do GAFI no combate à lavagem de capitais.',
    category: 'Direito Criminal',
    url: 'direito-penal/crime-que-se-disfarça-de-negocio-legitimo.html',
    tags: ['lavagem de dinheiro', 'COAF', 'O Crime que Se Disfarça de Negócio Legítimo']
},
{
    title: 'A Casa Não Pode Ser Palco de Crueldade',
    description: 'A violência doméstica e as medidas protetivas da Lei Maria da Penha protegem as mulheres com feminicídio, violência psicológica e medidas de urgência no direito de família brasileiro.',
    category: 'Direito de Família',
    url: 'direito-de-familia/casa-nao-pode-ser-palco-de-crueldade.html',
    tags: ['violência doméstica', 'medidas protetivas', 'A Casa Não Pode Ser Palco de Crueldade']
},
{
    title: 'Quem Lucra com o Risco Responde pelo Dano',
    description: 'A teoria do risco no direito civil fundamenta a responsabilidade objetiva, com o artigo 927 do Código Civil, o CDC e aplicações na economia digital brasileira.',
    category: 'Direito Civil',
    url: 'direito-civil/quem-lucra-com-o-risco-responde-pelo-dano.html',
    tags: ['teoria do risco', 'responsabilidade objetiva', 'Quem Lucra com o Risco Responde pelo Dano']
},
{
    title: 'A Disciplina Também Precisa de Processo Justo',
    description: 'O processo administrativo disciplinar militar exige respeito ao contraditório, ampla defesa e devido processo legal nas Forças Armadas brasileiras.',
    category: 'Direito Militar',
    url: 'direito-militar/disciplina-tambem-precisa-de-processo-justo.html',
    tags: ['processo disciplinar militar', 'PAD militar', 'A Disciplina Também Precisa de Processo Justo']
},
    {
    title: 'Ganho Sem Fundamento Deve Ser Devolvido',
    description: 'O enriquecimento sem causa é princípio fundamental do direito civil que proíbe o locupletamento indevido, com requisitos legais, pagamento indevido e aplicações jurisprudenciais no Brasil.',
    category: 'Direito Civil',
    url: 'direito-civil/ganho-sem-fundamento-deve-ser-devolvido.html',
    tags: ['enriquecimento sem causa', 'pagamento indevido', 'Ganho Sem Fundamento Deve Ser Devolvido']
},
{
    title: 'Antes do Altar, Escolha o Regime Certo',
    description: 'A escolha do regime de bens no casamento tem consequências patrimoniais de longo alcance, envolvendo comunhão parcial, universal, separação convencional e participação final nos aquestos.',
    category: 'Direito de Família',
    url: 'direito-de-familia/antes-do-altar-escolha-o-regime-certo.html',
    tags: ['regimes de casamento', 'regime de bens', 'Antes do Altar, Escolha o Regime Certo']
},
{
    title: 'Doze Cidadãos Decidem Sobre a Vida',
    description: 'O Tribunal do Júri é garantia constitucional que coloca cidadãos comuns como julgadores dos crimes mais graves, com soberania dos veredictos e plenitude de defesa.',
    category: 'Direito Criminal',
    url: 'direito-penal/doze-cidadaos-decidem-sobre-a-vida.html',
    tags: ['tribunal do júri', 'júri popular', 'Doze Cidadãos Decidem Sobre a Vida']
},
{
    title: 'O Estado Deve Contas, Não Favores',
    description: 'A transparência pública é obrigação constitucional e instrumento essencial de combate à corrupção, estruturada pela Lei de Acesso à Informação e pelos mecanismos digitais de controle.',
    category: 'Política',
    url: 'politica/estado-deve-contas-nao-favores.html',
    tags: ['transparência pública', 'Lei de Acesso à Informação', 'O Estado Deve Contas, Não Favores']
},
{
    title: 'O Trabalho Ganhou Novas Regras Silenciosas',
    description: 'As leis trabalhistas recentes transformaram as relações de trabalho no Brasil, com inovações sobre assédio, igualdade salarial, trabalho por plataformas e aprendizagem profissional.',
    category: 'Legislação',
    url: 'legislacao/trabalho-ganhou-novas-regras-silenciosas.html',
    tags: ['leis trabalhistas recentes', 'legislação trabalhista', 'O Trabalho Ganhou Novas Regras Silenciosas']
},
{
    title: 'O TST que Muda as Regras do Trabalho',
    description: 'A jurisprudência trabalhista do TST molda direitos de milhões de trabalhadores e empregadores, com súmulas e precedentes que definem o direito trabalhista brasileiro.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tst-que-muda-as-regras-do-trabalho.html',
    tags: ['jurisprudência trabalhista', 'TST', 'O TST que Muda as Regras do Trabalho']
},
{
    title: 'Risco Ignorado É Passivo Acumulado',
    description: 'A gestão de riscos tornou-se função estratégica essencial para a sustentabilidade das organizações, envolvendo frameworks como COSO ERM, ISO 31000 e normas regulatórias brasileiras.',
    category: 'Compliance',
    url: 'compliance/risco-ignorado-e-passivo-acumulado.html',
    tags: ['gestão de riscos', 'compliance', 'Risco Ignorado É Passivo Acumulado']
},
{
    title: 'Acidente de Trabalho Não É Fatalidade',
    description: 'A segurança do trabalho é obrigação legal e ética do empregador, com normas regulamentadoras, PGR, PCMSO e jurisprudência protegendo trabalhadores de acidentes e doenças ocupacionais.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/acidente-de-trabalho-nao-e-fatalidade.html',
    tags: ['segurança do trabalho', 'normas regulamentadoras', 'Acidente de Trabalho Não É Fatalidade']
},
    {
    title: 'A Farda Não Blinda Contra a Improbidade',
    description: 'Militar pode responder por improbidade administrativa, conforme a Lei de Improbidade, a reforma de 2021 e a jurisprudência do STJ e STF sobre responsabilização das Forças Armadas.',
    category: 'Direito Militar',
    url: 'direito-militar/farda-nao-blinda-contra-improbidade.html',
    tags: ['improbidade administrativa militar', 'Lei de Improbidade', 'A Farda Não Blinda Contra a Improbidade']
},
{
    title: 'Quando a Farda Vira Instrumento de Opressão',
    description: 'O abuso de autoridade no meio militar é um dos fenômenos mais subnotificados do sistema jurídico brasileiro, regido pela Lei nº 13.869 e pelo Código Penal Militar.',
    category: 'Direito Militar',
    url: 'direito-militar/quando-a-farda-vira-instrumento-de-opressao.html',
    tags: ['abuso de autoridade militar', 'direito militar', 'Quando a Farda Vira Instrumento de Opressão']
},
{
    title: 'Clique Errado Pode Custar Caro',
    description: 'A responsabilidade civil nas redes sociais envolve usuários, plataformas e influenciadores digitais, regulados pelo Marco Civil da Internet, Código Civil e LGPD.',
    category: 'Direito Civil',
    url: 'direito-civil/clique-errado-pode-custar-caro.html',
    tags: ['responsabilidade civil redes sociais', 'Marco Civil da Internet', 'Clique Errado Pode Custar Caro']
},
{
    title: 'Dividir o Patrimônio Não Precisa Ser Guerra',
    description: 'A partilha de bens no divórcio é um dos aspectos mais complexos do direito de família, envolvendo regimes de bens, Código Civil, pacto antenupcial e mediação familiar.',
    category: 'Direito de Família',
    url: 'direito-de-familia/dividir-o-patrimonio-nao-precisa-ser-guerra.html',
    tags: ['partilha de bens divórcio', 'direito de família', 'Dividir o Patrimônio Não Precisa Ser Guerra']
},
{
    title: 'Preso Antes de Condenado, Até Quando?',
    description: 'A prisão preventiva e seus limites constitucionais envolvem presunção de inocência, requisitos legais, medidas cautelares alternativas e impactos do Pacote Anticrime no processo penal.',
    category: 'Direito Criminal',
    url: 'direito-penal/preso-antes-de-condenado-ate-quando.html',
    tags: ['prisão preventiva', 'presunção de inocência', 'Preso Antes de Condenado, Até Quando?']
},
    {
    title: 'O Escritório Mudou de Endereço, a Lei Também?',
    description: 'O trabalho remoto transformou as relações trabalhistas brasileiras, com a CLT, a reforma de 2017 e a jurisprudência do TST regulando o teletrabalho e o direito à desconexão.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/escritorio-mudou-de-endereco-a-lei-tambem.html',
    tags: ['trabalho remoto', 'teletrabalho', 'O Escritório Mudou de Endereço, a Lei Também?']
},
    {
    title: 'Três Poderes, Uma República em Disputa',
    description: 'A separação dos poderes no Brasil vive momento de tensão inédita, com disputas entre Executivo, Legislativo e Judiciário testando o sistema de freios e contrapesos da Constituição.',
    category: 'Política',
    url: 'politica/tres-poderes-uma-republica-em-disputa.html',
    tags: ['separação dos poderes', 'democracia brasileira', 'Três Poderes, Uma República em Disputa']
},
    {
    title: 'O Código Civil Precisa Crescer com o Brasil',
    description: 'A atualização do Código Civil brasileiro é urgente diante das transformações digitais, com propostas sobre herança digital, contratos eletrônicos e responsabilidade por inteligência artificial.',
    category: 'Legislação',
    url: 'legislacao/codigo-civil-precisa-crescer-com-o-brasil.html',
    tags: ['atualização Código Civil', 'reforma Código Civil', 'O Código Civil Precisa Crescer com o Brasil']
},
    {
    title: 'A Palavra Final que Amarra Todos os Juízes',
    description: 'As súmulas vinculantes do STF são instrumentos de uniformização jurisprudencial com efeito obrigatório para o Judiciário e a administração pública, centrais para a segurança jurídica brasileira.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/palavra-final-que-amarra-todos-os-juizes.html',
    tags: ['súmulas vinculantes', 'STF jurisprudência', 'A Palavra Final que Amarra Todos os Juízes']
},
    {
    title: 'Dados Pessoais Exigem Programa de Conformidade',
    description: 'A LGPD transformou o compliance corporativo ao exigir governança de dados em todas as organizações, com obrigações do Encarregado de Dados e sanções da ANPD.',
    category: 'Compliance',
    url: 'compliance/dados-pessoais-exigem-programa-de-conformidade.html',
    tags: ['compliance LGPD', 'proteção de dados', 'Dados Pessoais Exigem Programa de Conformidade']
},
    {
    title: 'A Farda Também Tem Direitos a Proteger',
    description: 'Os direitos previdenciários dos militares são regidos por um regime jurídico específico que enfrenta pressões fiscais, reformas legislativas e desafios de sustentabilidade no Brasil.',
    category: 'Direito Militar',
    url: 'direito-militar/farda-tambem-tem-direitos-a-proteger.html',
    tags: ['direitos previdenciários militares', 'inatividade militar', 'A Farda Também Tem Direitos a Proteger']
},
    {
    title: 'Sua Imagem Tem Dono e É Você',
    description: 'O direito à imagem e à honra são garantias fundamentais ameaçadas pela era digital, exigindo proteção jurídica robusta diante das novas tecnologias e das redes sociais.',
    category: 'Direito Civil',
    url: 'direito-civil/sua-imagem-tem-dono-e-e-voce.html',
    tags: ['direito à imagem', 'direito à honra', 'Sua Imagem Tem Dono e É Você']
},
    {
    title: 'Separar sem Juiz Virou Regra',
    description: 'O divórcio extrajudicial transformou a forma como os brasileiros encerram o casamento, tornando o procedimento em cartório mais rápido, acessível e menos traumático.',
    category: 'Direito de Família',
    url: 'direito-de-familia/separar-sem-juiz-virou-regra.html',
    tags: ['divórcio extrajudicial', 'direito de família', 'Separar sem Juiz Virou Regra']
},
    {
    title: 'A Pena que o Brasil Não Sabe Cumprir',
    description: 'O sistema de execução penal brasileiro enfrenta crise estrutural de superencarceramento, violação de direitos fundamentais e altas taxas de reincidência que desafiam a Lei de Execução Penal.',
    category: 'Direito Criminal',
    url: 'direito-penal/pena-que-o-brasil-nao-sabe-cumprir.html',
    tags: ['execução penal', 'sistema prisional', 'A Pena que o Brasil Não Sabe Cumprir']
},
    {
    title: 'Demissão Forçada pelo Erro do Patrão',
    description: 'A rescisão indireta garante ao trabalhador o direito de encerrar o contrato com todos os benefícios de uma demissão sem justa causa quando o empregador comete falta grave.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/demissao-forcada-pelo-erro-do-patrao.html',
    tags: ['rescisão indireta', 'direito trabalhista', 'Demissão Forçada pelo Erro do Patrão']
},
    {
    title: 'Votar Não Basta, Participar É a Chave',
    description: 'Os direitos políticos vão muito além do ato de votar, abrangendo participação cidadã, representação e instrumentos de democracia direta que sustentam o Estado democrático de direito.',
    category: 'Política',
    url: 'politica/votar-nao-basta-participar-e-a-chave.html',
    tags: ['direitos políticos', 'democracia', 'Votar Não Basta, Participar É a Chave']
},
    {
    title: 'A Lei que Pôs Empresas no Banco dos Réus',
    description: 'A Lei Anticorrupção transformou a relação entre empresas e poder público ao instituir responsabilidade objetiva e sancionar pessoas jurídicas por atos lesivos contra a administração pública.',
    category: 'Legislação',
    url: 'legislacao/lei-que-pos-empresas-no-banco-dos-reus.html',
    tags: ['lei anticorrupção', 'Lei 12846', 'A Lei que Pôs Empresas no Banco dos Réus']
},
    {
    title: 'Quando o Judiciário se Fecha em Si',
    description: 'A jurisprudência defensiva representa um dos maiores obstáculos ao acesso à justiça no Brasil, contrariando princípios constitucionais e comprometendo a segurança jurídica.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/quando-o-judiciario-se-fecha-em-si.html',
    tags: ['jurisprudência defensiva', 'acesso à justiça', 'Quando o Judiciário se Fecha em Si']
},
    {
    title: 'Poder sem Controle Destrói Empresas',
    description: 'A governança corporativa tornou-se exigência central para a sustentabilidade das organizações brasileiras no cenário jurídico e econômico atual.',
    category: 'Compliance',
    url: 'compliance/poder-sem-controle-destroi-empresas.html',
    tags: ['governança corporativa', 'compliance', 'Poder sem Controle Destrói Empresas']
},
    {
    title: 'Ética Corporativa Além do Papel',
    description: 'A cultura de compliance nas empresas brasileiras deixou de ser uma formalidade normativa para se tornar um imperativo estratégico de governança e integridade.',
    category: 'Compliance',
    url: 'compliance/etica-corporativa-alem-do-papel.html',
    tags: ['compliance', 'cultura de compliance', 'Ética Corporativa Além do Papel']
},
    {
  title: 'Justiça Militar e os Limites da Competência Castrense',
  description: 'A Justiça Militar brasileira ocupa posição singular no ordenamento jurídico nacional, com competências definidas pela Constituição Federal e pelo Código Penal Militar.',
  category: 'Direito militar',
  url: 'direito-militar/justica-militar-competencia-castrense-brasil.html',
  tags: ['Justiça Militar', 'Competência Castrense', 'Direito Militar', 'Código Penal Militar', 'STM', 'Crimes Militares']
},
    {
  title: 'Contratos Digitais e Sua Validade no Direito',
  description: 'Os contratos digitais consolidaram-se como instrumento central da economia contemporânea, mas sua validade jurídica ainda suscita debates relevantes no ordenamento brasileiro.',
  category: 'Direito civil',
  url: 'direito-civil/contratos-digitais-validade-juridica-brasil.html',
  tags: ['Contratos Digitais', 'Validade Jurídica', 'Assinatura Eletrônica', 'Direito Civil', 'Smart Contracts', 'LGPD']
},
    {
  title: 'Fim da Pensão Alimentícia e Seus Reflexos Jurídicos',
  description: 'A exoneração de alimentos é um dos temas mais sensíveis do direito de família brasileiro, envolvendo a extinção de obrigações que afetam diretamente o equilíbrio econômico e a dignidade das partes.',
  category: 'Direito de família',
  url: 'direito-de-familia/exoneracao-alimentos-reflexos-juridicos-brasil.html',
  tags: ['Exoneração de Alimentos', 'Pensão Alimentícia', 'Direito de Família', 'Obrigação Alimentar', 'Maioridade Civil', 'STJ']
},
    {
  title: 'Inocência Presumida sob Pressão no Brasil',
  description: 'A presunção de inocência é uma das garantias fundamentais mais ameaçadas do ordenamento jurídico brasileiro, enfrentando erosão sistemática entre oscilações do STF, populismo punitivo e condenação midiática.',
  category: 'Direito criminal',
  url: 'direito-penal/presuncao-inocencia-pressao-democratica-brasil.html',
  tags: ['Presunção de Inocência', 'Direito Penal', 'Garantias Fundamentais', 'STF', 'Prisão Preventiva', 'Devido Processo Legal']
},
    {
  title: 'Teletrabalho e o Dilema do Registro de Horas',
  description: 'O controle de jornada no home office é um dos temas mais polêmicos do direito trabalhista brasileiro após a Reforma Trabalhista de 2017, criando uma zona cinzenta jurídica com impactos sobre horas extras e saúde mental.',
  category: 'Direito trabalhista',
  url: 'direito-trabalhista/teletrabalho-controle-jornada-home-office-brasil.html',
  tags: ['Controle de Jornada', 'Home Office', 'Teletrabalho', 'Direito Trabalhista', 'CLT', 'Direito à Desconexão', 'Horas Extras']
},
    {
  title: 'Soberania Popular entre Promessa e Realidade',
  description: 'A democracia brasileira enfrenta o desafio de superar os limites do voto periódico e construir mecanismos reais de participação popular, entre instrumentos constitucionais subutilizados e crise de representatividade.',
  category: 'politica',
  url: 'politica/soberania-popular-democracia-participacao-brasil.html',
  tags: ['Democracia', 'Participação Popular', 'Soberania Popular', 'Constituição Federal', 'Plebiscito', 'Referendo', 'Iniciativa Popular']
},
    {
  title: 'ECA em Xeque diante dos Novos Desafios Sociais',
  description: 'O Estatuto da Criança e do Adolescente completa mais de três décadas com avanços inegáveis na proteção da infância brasileira, mas enfrenta lacunas críticas diante dos novos desafios do ambiente digital e da violência doméstica.',
  category: 'legislacao',
  url: 'legislacao/eca-estatuto-crianca-adolescente-desafios-brasil.html',
  tags: ['ECA', 'Estatuto da Criança e do Adolescente', 'Proteção Integral', 'Direitos da Criança', 'Medidas Socioeducativas', 'Legislação', 'Infância']
},
    {
  title: 'STJ como Árbitro do Direito Infraconstitucional',
  description: 'O Superior Tribunal de Justiça é o principal uniformizador da lei federal no Brasil, com precedentes que moldam relações de consumo, contratos empresariais, responsabilidade civil digital e direito público.',
  category: 'jurisprudencia',
  url: 'jurisprudencia/stj-arbitro-direito-infraconstitucional-brasil.html',
  tags: ['STJ', 'Superior Tribunal de Justiça', 'Jurisprudência', 'Precedentes', 'Recurso Especial', 'Súmulas', 'Direito Federal']
},
    {
  title: 'Duas Fardas, Um Salário, Nenhuma Explicação',
  description: 'A acumulação de cargos por militares no Brasil enfrenta vedação constitucional expressa. Entenda o regime jurídico das cessões, os limites da presença castrense em cargos civis e a atuação do TCU.',
  category: 'Direito Militar',
  url: 'direito-militar/acumulacao-cargos-militares-vedacao-constitucional-brasil.html',
  tags: ['Acumulação de Cargos Militares', 'Direito Militar', 'Cessão de Militares', 'Vedação Constitucional', 'Duas Fardas, Um Salário, Nenhuma Explicação']
},
    {
  title: 'Ser Humano, Ser Direito, Ser Protegido',
  description: 'Os direitos da personalidade no Brasil protegem honra, imagem, privacidade e identidade como atributos inalienáveis. Entenda o Código Civil, a LGPD, o direito ao esquecimento e os desafios da era digital.',
  category: 'Direito Civil',
  url: 'direito-civil/direitos-personalidade-dignidade-humana-brasil.html',
  tags: ['Direitos da Personalidade', 'Dignidade Humana', 'Privacidade', 'LGPD', 'Ser Humano, Ser Direito, Ser Protegido']
},
    {
  title: 'A Última Vontade e Seus Herdeiros',
  description: 'O testamento e a herança no Brasil envolvem regras complexas do Código Civil que equilibram a autonomia do testador com a proteção dos herdeiros necessários. Entenda as modalidades testamentárias, a legítima e o inventário.',
  category: 'Direito de Família',
  url: 'direito-de-familia/testamento-heranca-direito-sucessorio-brasil.html',
  tags: ['Romer carvalho','Testamento', 'Herança', 'Direito Sucessório', 'Inventário', 'A Última Vontade e Seus Herdeiros']
},
    {
  title: 'Farda, Voz e os Limites Constitucionais',
  description: 'A liberdade de expressão do militar no Brasil enfrenta limitações constitucionais derivadas dos princípios de hierarquia e disciplina das Forças Armadas. Entenda o Estatuto dos Militares e os desafios do ambiente digital.',
  category: 'Direito Militar',
  url: 'direito-militar/liberdade-expressao-militar-limites-constitucionais-brasil.html',
  tags: ['Liberdade de Expressão Militar', 'Direito Militar', 'Estatuto dos Militares', 'Forças Armadas', 'Farda, Voz e os Limites Constitucionais']
},
    {
  title: 'Alimentos sob Revisão, Direitos em Disputa',
  description: 'A pensão alimentícia no Brasil pode ser revista sempre que houver alteração substancial nas condições econômicas das partes. Entenda os critérios jurídicos, o ônus da prova e as tendências do STJ.',
  category: 'Direito de Família',
  url: 'direito-de-familia/pensao-alimenticia-revisao-direito-familia-brasil.html',
  tags: ['Pensão Alimentícia', 'Revisão Alimentar', 'Direito de Família', 'Alimentos Gravídicos', 'Alimentos sob Revisão, Direitos em Disputa']
},
{
  title: 'Contratos, Confiança e o Dever de Lealdade',
  description: 'A boa-fé objetiva nos contratos brasileiros impõe deveres de lealdade, informação e cooperação que vão além do texto escrito. Entenda suas funções, figuras parcelares e como os tribunais aplicam esse princípio.',
  category: 'Direito Civil',
  url: 'direito-civil/boa-fe-objetiva-contratos-direito-civil-brasil.html',
  tags: ['Boa-Fé Objetiva', 'Contratos', 'Direito Civil', 'Venire Contra Factum Proprium', 'Contratos, Confiança e o Dever de Lealdade']
},
    {
  title: 'Sangue e Silêncio no Coração do Lar',
  description: 'O feminicídio no Brasil expõe as fraturas do sistema jurídico e da cultura patriarcal. A Lei 13.104 de 2015 qualificou o homicídio por razão de gênero, mas a efetividade da proteção penal ainda enfrenta falhas institucionais e omissões estatais.',
  category: 'Direito Criminal',
  url: 'direito-penal/feminicidio-violencia-genero-lei-penal-brasil.html',
  tags: ['Feminicídio', 'Violência de Gênero', 'Lei Maria da Penha', 'Direito Penal', 'Sangue e Silêncio no Coração do Lar']
},
    {
    title: 'O Tempo a Mais que o Direito Protege',
    description: 'As horas extras lideram os litígios trabalhistas no Brasil. Entenda os limites legais da sobrejornada, o banco de horas, os reflexos nas verbas rescisórias e os impactos da Reforma Trabalhista.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/tempo-mais-direito-protege-horas-extras.html',
    tags: ['Horas Extras', 'Jornada de Trabalho', 'O Tempo a Mais que o Direito Protege']
},
    {
    title: 'Quando as Instituições Param de Funcionar Juntas',
    description: 'A crise institucional brasileira expõe tensões profundas entre os Poderes da República, corrói a confiança pública e impacta a economia e a democracia nacional.',
    category: 'Política',
    url: 'politica/quando-instituicoes-param-funcionar-juntas.html',
    tags: ['Crise Institucional', 'Separação de Poderes', 'Quando as Instituições Param de Funcionar Juntas']
},
    {
    title: 'O Direito que Nasceu na Era dos Algoritmos',
    description: 'O direito digital avança no Brasil com o Marco Civil da Internet, a LGPD e novas propostas sobre inteligência artificial e plataformas digitais, com impactos jurídicos, econômicos e sociais expressivos.',
    category: 'Legislação',
    url: 'legislacao/direito-nasceu-era-algoritmos.html',
    tags: ['Direito Digital', 'LGPD', 'O Direito que Nasceu na Era dos Algoritmos']
},
    {
    title: 'Integridade Corporativa Além do Papel Impresso',
    description: 'Os programas de integridade deixaram de ser opcionais e se tornaram requisito jurídico e estratégico para empresas que operam no Brasil, da Lei Anticorrupção aos critérios ESG.',
    category: 'Compliance',
    url: 'compliance/integridade-corporativa-alem-papel-impresso.html',
    tags: ['Programas de Integridade', 'Romer carvalho', 'Compliance Anticorrupção', 'Integridade Corporativa Além do Papel Impresso']
},
    {
    title: 'A Tese que Vale por Milhões de Processos',
    description: 'Os recursos repetitivos permitem que uma única decisão do STJ ou STF fixe tese jurídica aplicável a centenas de milhares de processos sobrestados no Brasil.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tese-vale-milhoes-processos-repetitivos.html',
    tags: ['Recursos Repetitivos', 'Tese Vinculante', 'A Tese que Vale por Milhões de Processos']
},
    {
    title: 'Decisões que Obrigam Todos os Tribunais do País',
    description: 'Os precedentes vinculantes transformaram o sistema judiciário brasileiro ao obrigar todos os tribunais a seguirem as teses fixadas pelas cortes superiores.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/decisoes-obrigam-todos-tribunais-pais.html',
    tags: ['Precedentes Vinculantes', 'Jurisprudência Vinculante', 'Decisões que Obrigam Todos os Tribunais do País']
},
    {
    title: 'O Novo Sistema Fiscal Que Muda Tudo',
    description: 'A reforma tributária brasileira aprovada pela Emenda Constitucional nº 132 de 2023 representa a maior transformação do sistema fiscal do país desde a Constituição de 1988.',
    category: 'Legislação',
    url: 'legislacao/novo-sistema-fiscal-reforma-tributaria-brasil.html',
    tags: ['Reforma Tributária', 'Sistema Tributário', 'O Novo Sistema Fiscal Que Muda Tudo']
},
    {
    title: 'Conformidade Trabalhista Além do Contrato Assinado',
    description: 'O compliance trabalhista tornou-se pilar estratégico nas organizações brasileiras. Entender as obrigações legais e os riscos de passivos acumulados é essencial para empresas que buscam segurança jurídica nas relações de trabalho.',
    category: 'Compliance',
    url: 'compliance/conformidade-trabalhista-alem-do-contrato-assinado.html',
    tags: ['Compliance Trabalhista', 'Romer carvalho', 'Direito do Trabalho', 'Conformidade Trabalhista Além do Contrato Assinado']
},
    {
    title: 'Quando o Judiciário Governa no Lugar do Parlamento',
    description: 'A judicialização da política redefine o equilíbrio entre os Poderes no Brasil e levanta questões sobre legitimidade democrática e os limites da atuação jurisdicional.',
    category: 'Política',
    url: 'politica/judiciario-governa-lugar-parlamento.html',
    tags: ['Judicialização da Política', 'Ativismo Judicial', 'Quando o Judiciário Governa no Lugar do Parlamento']
},
    {
  title: 'Justa Causa e o Fim do Contrato',
  description: 'A justa causa é a modalidade mais grave de rescisão contratual no direito trabalhista brasileiro, com requisitos rigorosos e impactos econômicos significativos para empregador e empregado.',
  category: 'Direito Trabalhista',
  url: 'direito-trabalhista/justa-causa-fim-do-contrato-clt-artigo-482.html',
  tags: ['Justa Causa', 'Direito Trabalhista', 'CLT', 'Rescisão Indireta', 'Processo Disciplinar']
},
    {
  title: 'Crimes Digitais e a Lei Fora do Alcance',
  description: 'Os crimes digitais crescem em sofisticação enquanto o direito penal brasileiro busca acompanhar a criminalidade cibernética e seus impactos econômicos e sociais.',
  category: 'Direito Criminal',
  url: 'direito-penal/crimes-digitais-lei-fora-do-alcance-direito-penal.html',
  tags: ['Crimes Digitais', 'Direito Penal', 'Criminalidade Cibernética', 'Marco Civil da Internet', 'Estelionato Digital']
},
    {
  title: 'Alienação Parental e a Criança Invisível',
  description: 'A alienação parental compromete o vínculo afetivo da criança com um dos genitores. Entenda a Lei nº 12.318 de 2010, os impactos psicossociais e os desafios do direito de família brasileiro.',
  category: 'Direito de Família',
  url: 'direito-de-familia/alienacao-parental-crianca-invisivel-lei-12318.html',
  tags: ['Alienação Parental', 'Direito de Família', 'Lei 12.318', 'Guarda de Filhos', 'Melhor Interesse da Criança']
},
    {
  title: 'Dano Moral e o Preço da Dignidade',
  description: 'A responsabilidade civil por danos morais é um dos institutos mais relevantes do direito civil brasileiro, com fundamentos constitucionais e jurisprudência em constante evolução.',
  category: 'Direito Civil',
  url: 'direito-civil/dano-moral-preco-dignidade-responsabilidade-civil.html',
  tags: ['Danos Morais', 'Responsabilidade Civil', 'Direito Civil', 'Indenização', 'Dano Moral Coletivo']
},
    {
  title: 'Hierarquia Militar Como Fundamento Jurídico',
  description: 'A hierarquia e a disciplina militares são princípios constitucionalmente consagrados que estruturam o direito castrense brasileiro e seus limites democráticos.',
  category: 'Direito Militar',
  url: 'direito-militar/hierarquia-militar-fundamento-juridico-disciplina.html',
  tags: ['Direito Militar', 'Hierarquia Militar', 'Disciplina Militar', 'Código Penal Militar', 'Constituição Federal']
},
    {
  title: 'Direitos Fundamentais e a Condição Militar',
  description: 'Os direitos fundamentais dos militares brasileiros equilibram proteção constitucional e restrições institucionais próprias da carreira castrense.',
  category: 'Direito Militar',
  url: 'direito-militar/direitos-fundamentais-condicao-militar-brasil.html',
  tags: ['Direito Militar', 'Direitos Fundamentais', 'Estatuto dos Militares', 'Justiça Militar', 'Constituição Federal']
},
    {
  title: 'Assédio Moral no Trabalho e Dignidade Laboral',
  description: 'O assédio moral no ambiente de trabalho é uma conduta abusiva e reiterada que viola a dignidade do trabalhador e gera responsabilidade civil e trabalhista ao empregador.',
  category: 'Direito Trabalhista',
  url: 'direito-trabalhista/assedio-moral-trabalho-dignidade-laboral.html',
  tags: ['Assédio Moral', 'Direito Trabalhista', 'Dignidade Laboral', 'CLT', 'Dano Moral Trabalhista']
},
    {
    title: 'LGPD e o Novo Estatuto da Privacidade Digital',
    description: 'A Lei Geral de Proteção de Dados transformou o tratamento de informações pessoais no Brasil, impondo obrigações jurídicas concretas a empresas e ao poder público e conferindo ao titular dos dados um conjunto robusto de direitos fundamentais no ambiente digital.',
    category: 'Legislação',
    url: 'legislacao/lgpd-estatuto-privacidade-digital-protecao-dados-brasil.html',
    tags: ['LGPD', 'Lei Geral de Proteção de Dados', 'Privacidade Digital', 'ANPD', 'Dados Pessoais', 'Titular de Dados', 'Proteção de Dados']
},
    {
    title: 'Quando os Tribunais Mudam de Ideia',
    description: 'A mudança de entendimento jurisprudencial nos tribunais superiores brasileiros gera impactos profundos sobre a segurança jurídica, o planejamento empresarial e os direitos dos jurisdicionados.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/mudanca-entendimento-jurisprudencial-tribunais-brasileiros.html',
    tags: ['mudança jurisprudencial', 'overruling', 'Quando os Tribunais Mudam de Ideia']
},
    {
    title: 'Due Diligence: Escudo Jurídico Corporativo',
    description: 'A due diligence é o processo de investigação prévia que protege empresas de passivos ocultos, riscos de integridade e responsabilizações jurídicas em fusões, aquisições e contratos.',
    category: 'Compliance',
    url: 'compliance/due-diligence-escudo-juridico-corporativo-brasil.html',
    tags: ['due diligence', 'compliance corporativo', 'Due Diligence: Escudo Jurídico Corporativo']
},
    {
    title: 'Misoginia no Poder: Uma Ferida Política',
    description: 'A misoginia estrutural nos espaços de poder político brasileiro opera como mecanismo de exclusão que compromete a democracia representativa e viola direitos constitucionalmente assegurados às mulheres na vida pública.',
    category: 'Política',
    url: 'politica/misoginia-poder-estrutura-politica-brasileira.html',
    tags: ['misoginia', 'violência política de gênero', 'Misoginia no Poder: Uma Ferida Política']
},
    {
    title: 'Conformidade Tributária como Escudo Jurídico Empresarial',
    description: 'O compliance tributário deixou de ser opcional e tornou-se imperativo jurídico para empresas brasileiras. Com a reforma tributária em curso e o avanço da fiscalização digital, organizações que investem em governança fiscal blindam seus gestores de responsabilizações penais e administrativas.',
    category: 'Compliance',
    url: 'compliance/conformidade-tributaria-escudo-juridico-empresarial.html',
    tags: ['compliance tributário', 'governança fiscal', 'reforma tributária', 'Receita Federal', 'Conformidade Tributária como Escudo Jurídico Empresarial']
},
    {
    title: 'Como os Tribunais Reescrevem o Sentido das Leis',
    description: 'A interpretação da lei pelos tribunais brasileiros vai muito além da leitura literal do texto normativo, moldando o alcance das normas por meio de métodos hermenêuticos que definem direitos, obrigações e o próprio equilíbrio entre os poderes da República.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/interpretacao-lei-tribunais-hermeneutica-juridica-brasil.html',
    tags: ['Interpretação da Lei', 'Hermenêutica Jurídica', 'Jurisprudência', 'STF', 'Precedentes Vinculantes', 'Ativismo Judicial', 'Direito Constitucional']
},
    {
    title: 'Novas Leis que Transformam o Direito Brasileiro',
    description: 'O ordenamento jurídico brasileiro atravessa uma fase intensa de renovação normativa, com atualizações legislativas recentes que impactam diretamente o cotidiano dos cidadãos, das empresas e das instituições públicas.',
    category: 'Legislação',
    url: 'legislacao/atualizacoes-legislativas-recentes-impacto-direito-brasileiro.html',
    tags: ['Atualizações Legislativas', 'Novas Leis', 'Legislação Brasileira', 'Reforma Tributária', 'Marco Legal IA', 'Direito Digital', 'Congresso Nacional']
},
    {
    title: 'Populismo e o Cerco à Democracia Brasileira',
    description: 'O populismo avança como vetor de erosão das instituições democráticas brasileiras, instrumentalizando o discurso do povo contra as estruturas de controle e freios constitucionais que sustentam o Estado de Direito e a separação dos poderes.',
    category: 'Política',
    url: 'politica/populismo-ameaca-institucional-democracia-brasileira.html',
    tags: ['Populismo', 'Democracia', 'Instituições Democráticas', 'Estado de Direito', 'Separação dos Poderes', 'Constituição Federal', 'Crise Política']
},
    {
    title: 'Pejotização e a Fraude ao Vínculo Empregatício no Brasil',
    description: 'A pejotização avança como prática de burla à legislação trabalhista brasileira, impondo ao trabalhador a constituição de pessoa jurídica como condição de contratação e suprimindo direitos consolidados pela CLT e pela Constituição Federal.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/pejotizacao-fraude-vinculo-empregaticio-direito-trabalhista.html',
    tags: ['Pejotização', 'Vínculo Empregatício', 'Fraude Trabalhista', 'CLT', 'Pessoa Jurídica', 'Reforma Trabalhista', 'Direitos do Trabalhador']
},
    {
    title: 'Legítima Defesa Entre o Direito e o Excesso',
    description: 'A legítima defesa exige proporcionalidade, moderação e atualidade da agressão como pressupostos indispensáveis para que a reação defensiva afaste a responsabilidade penal do agente.',
    category: 'Direito Criminal',
    url: 'direito-penal/legitima-defesa-requisitos-excesso-excludente-ilicitude-direito-penal.html',
    tags: ['Legítima Defesa', 'Direito Penal', 'Excludente de Ilicitude', 'Excesso de Legítima Defesa', 'Código Penal']
},
    {
    title: 'União Estável Gera Direitos Tão Sólidos Quanto o Casamento',
    description: 'A união estável é reconhecida pela Constituição Federal como entidade familiar plena, gerando efeitos jurídicos abrangentes sobre patrimônio, sucessão, alimentos, guarda dos filhos e previdência social.',
    category: 'Direito de Família',
    url: 'direito-de-familia/uniao-estavel-efeitos-juridicos-direitos-companheiros-brasil.html',
    tags: ['União Estável', 'Direito de Família', 'Companheiros', 'Partilha de Bens', 'Direitos Sucessórios']
},
    {
    title: 'Prejuízo Patrimonial e Sofrimento Têm Reparações Distintas',
    description: 'Dano material e dano moral são categorias distintas no direito civil brasileiro, com fundamentos, pressupostos probatórios e critérios de quantificação próprios.',
    category: 'Direito Civil',
    url: 'direito-civil/dano-material-dano-moral-distincoes-reparacao-indenizacao-civil.html',
    tags: ['Dano Material', 'Dano Moral', 'Responsabilidade Civil', 'Indenização', 'Direito Civil']
},
    {
    title: 'Estado Responde por Danos de Atos Militares',
    description: 'A responsabilidade civil do Estado por atos militares impõe ao ente público o dever de indenizar vítimas de condutas praticadas por agentes militares no exercício de suas funções, independentemente de culpa.',
    category: 'Direito Militar',
    url: 'direito-militar/estado-responde-danos-atos-militares-responsabilidade-civil.html',
    tags: ['Responsabilidade Civil do Estado', 'Atos Militares', 'Direito Militar', 'Forças Armadas', 'Indenização por Ato Militar']
},
    {
    title: 'Pragmatismo Político Sobrepõe Divergências Históricas',
    description: 'A filiação do senador paranaense ao Partido Liberal recompõe uma aliança marcada por acusações graves de interferência institucional e ruptura pública, expondo a lógica do pragmatismo eleitoral brasileiro.',
    category: 'Política',
    url: 'politica/pragmatismo-politico-sobrpoe-divergencias-historicas-filiacao-pl-parana-2026.html',
    tags: ['Política Brasileira', 'Eleições 2026', 'Partido Liberal', 'Paraná', 'Pragmatismo Eleitoral']
},
    {
    title: 'Legislativo Como Guardião dos Direitos Coletivos',
    description: 'O Poder Legislativo é o pilar normativo da democracia brasileira, responsável por garantir segurança jurídica, delimitar direitos fundamentais e impor deveres a cidadãos e instituições.',
    category: 'Legislação',
    url: 'legislacao/legislativo-guardiao-direitos-coletivos-seguranca-juridica.html',
    tags: ['Poder Legislativo', 'Segurança Jurídica', 'Direitos Fundamentais', 'Processo Legislativo', 'Legislação Brasileira']
},
    {
    title: 'Jurisprudência Como Fonte Viva do Direito',
    description: 'A jurisprudência é o conjunto de decisões reiteradas dos tribunais que interpreta, integra e uniformiza o ordenamento jurídico brasileiro.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/jurisprudencia-fonte-viva-direito-funcoes-precedentes.html',
    tags: ['Jurisprudência', 'Precedente Judicial', 'Súmula Vinculante', 'Segurança Jurídica', 'Sistema de Precedentes']
},
    {
    title: 'Segurança no Trabalho Como Direito Fundamental',
    description: 'O ordenamento jurídico brasileiro consolida um conjunto robusto de obrigações destinadas à proteção da integridade física e psíquica do trabalhador no ambiente laboral.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/seguranca-trabalho-direito-fundamental-prevencao-acidentes-doencas-ocupacionais.html',
    tags: ['Segurança do Trabalho', 'Saúde Ocupacional', 'Normas Regulamentadoras', 'Acidente de Trabalho', 'Direito Trabalhista']
},
    {
  title: 'Polícia Federal na Linha de Frente Digital',
  description: 'A Polícia Federal lidera o combate aos crimes cibernéticos no Brasil com investigações de alta complexidade técnica, cooperação internacional e operações contra fraudes, ransomware e lavagem de capitais via criptoativos.',
  category: 'direito criminal',
  url: 'direito-penal/policia-federal-linha-de-frente-digital.html',
  tags: ['Direito Penal', 'Crimes Cibernéticos', 'Polícia Federal na Linha de Frente Digital']
},
    {
  title: 'Quando o Afeto Constrói Vínculos Jurídicos Reais',
  description: 'A parentalidade socioafetiva transformou o direito de família brasileiro ao reconhecer que o afeto, a convivência e o cuidado constroem vínculos jurídicos tão legítimos quanto os biológicos.',
  category: 'Direito de Familia',
  url: 'direito-de-familia/quando-afeto-constroi-vinculos-juridicos-reais.html',
  tags: ['Direito de Família', 'Parentalidade Socioafetiva', 'Quando o Afeto Constrói Vínculos Jurídicos Reais']
},
    {
  title: 'Construir Compliance do Zero é Possível',
  description: 'Criar uma cultura de compliance do zero exige diagnóstico, liderança comprometida e estruturas funcionais robustas. Entenda como construir um programa de integridade efetivo e transformar ética em vantagem competitiva.',
  category: 'Compliance',
  url: 'compliance/construir-compliance-do-zero-e-possivel.html',
  tags: ['Compliance', 'Cultura de Compliance', 'Construir Compliance do Zero é Possível']
},
    {
  title: 'Ação Penal Militar e o Direito de Recorrer',
  description: 'A justiça militar brasileira opera sob legislação própria e exige domínio técnico especializado. Entenda como funciona a ação penal militar e quais são os recursos disponíveis no processo penal castrense.',
  category: 'Direito  Militar',
  url: 'direito-militar/acao-penal-militar-direito-de-recorrer.html',
  tags: ['Direito Militar', 'Ação Penal Militar', 'Ação Penal Militar e o Direito de Recorrer']
},
{
  title: 'Artigos do Código Civil Que Você Precisa Dominar',
  description: 'Revisar o Código Civil exige método e foco nos dispositivos de maior incidência forense. Conheça os artigos prioritários que todo operador jurídico precisa dominar para atuar com precisão técnica.',
  category: 'Direito Civil',
  url: 'direito-civil/artigos-codigo-civil-que-voce-precisa-dominar.html',
  tags: ['Direito Civil', 'Código Civil', 'Artigos do Código Civil Que Você Precisa Dominar']
},
    {
    title: 'Lei Celular nas Escolas sob Avaliação Nacional',
    description: 'O Ministério da Educação conduz levantamento nacional com mais de 8 mil escolas públicas e privadas para mensurar os efeitos do primeiro ano de vigência da Lei 15.100/2025, que regulamenta o uso de dispositivos móveis no ambiente escolar.',
    category: 'Legislação',
    url: 'legislacao/lei-celular-escolas-avaliacao-nacional-mec.html',
    tags: ['Lei 15.100/2025', 'Celular nas Escolas', 'MEC', 'Educação Digital', 'Pesquisa Nacional', 'Lei Celular nas Escolas sob Avaliação Nacional']
},
    {
    title: 'Distrato Imobiliário Rumo ao Precedente Vinculante no STJ',
    description: 'O Superior Tribunal de Justiça avança na uniformização da jurisprudência sobre a Lei do Distrato, com decisões reafirmando a retenção de 50% em contratos sob patrimônio de afetação e movimentação institucional para julgamento em rito repetitivo.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/distrato-imobiliario-precedente-vinculante-stj.html',
    tags: ['Lei do Distrato', 'STJ', 'Patrimônio de Afetação', 'Precedente Vinculante', 'Recursos Repetitivos', 'Distrato Imobiliário Rumo ao Precedente Vinculante no STJ']
},
    {
    title: 'Compliance Como Escudo Corporativo no Brasil',
    description: 'O compliance avança no Brasil como exigência estratégica e jurídica para empresas de todos os portes. Integridade corporativa redefine mercado, reputação e governança.',
    category: 'Compliance',
    url: 'compliance/compliance-escudo-corporativo-futuro-integridade-brasil.html',
    tags: ['Compliance', 'Integridade Corporativa', 'Governança Empresarial', 'Anticorrupção', 'Compliance Como Escudo Corporativo no Brasil']
},
    {
    title: 'Renúncia no Rio de Janeiro Sob Pressão Política',
    description: 'A saída antecipada do governador do Rio de Janeiro sob pressão política e julgamento no TSE expõe as fragilidades da governança fluminense e os impactos institucionais, fiscais e democráticos.',
    category: 'Política',
    url: 'politica/renuncia-governador-rj-pressao-politica-julgamento-tse.html',
    tags: ['Renúncia Governador', 'TSE', 'Rio de Janeiro', 'Direito Eleitoral', 'Crise Política', 'Renúncia no Rio de Janeiro Sob Pressão Política']
},
    {
  title: 'Máquinas que Trabalham e Quem Protege o Humano?',
  description: 'A inteligência artificial remodela o mercado de trabalho com velocidade que o direito trabalhista brasileiro ainda não acompanhou.',
  category: 'Direito Trabalhista',
  url: 'direito-trabalhista/inteligencia-artificial-futuro-trabalho-direitos-trabalhistas.html',
  tags: ['Inteligência Artificial', 'Futuro do Trabalho', 'Automação', 'Direito Trabalhista', 'Subordinação Algorítmica']
},
    {
  title: 'O Mapa dos Crimes que Assombram o Brasil',
  description: 'Homicídio, furto, roubo, estelionato, crimes hediondos e contra a administração pública: entenda os principais tipos penais do direito brasileiro.',
  category: 'Direito Criminal',
  url: 'direito-penal/tipos-penais-crimes-especie-homicidio-furto-roubo-estelionato-hediondos.html',
  tags: ['Tipos Penais', 'Homicídio', 'Crimes Hediondos', 'Estelionato', 'Corrupção']
},
    {
  title: 'Herança Não Planejada Vira Batalha Judicial',
  description: 'O direito sucessório disciplina quem herda, em que ordem e sob quais condições. Saiba como o planejamento protege o patrimônio familiar.',
  category: 'Direito de Família',
  url: 'direito-de-familia/direito-sucessorio-planejamento-testamento-vocacao-hereditaria.html',
  tags: ['Direito Sucessório', 'Testamento', 'Vocação Hereditária', 'Planejamento Sucessório', 'Inventário']
},
    {
  title: 'Contratos: A Espinha Dorsal do Direito Civil',
  description: 'A teoria geral dos contratos estabelece os princípios e requisitos que sustentam todo negócio jurídico no direito civil brasileiro.',
  category: 'Direito Civil',
  url: 'direito-civil/teoria-geral-contratos-principios-requisitos.html',
  tags: ['Teoria Geral dos Contratos', 'Direito Civil', 'Boa-fé Objetiva', 'Autonomia Privada', 'Função Social do Contrato']
},
    {
  title: 'Reforma Militar por Incapacidade e Acidente de Serviço',
  description: 'A reforma por invalidez ou acidente de serviço é um direito do militar que teve sua saúde comprometida no exercício da função pública.',
  category: 'Direito Militar',
  url: 'direito-militar/reforma-militar-invalidez-acidente-servico.html',
  tags: ['Reforma Militar', 'Invalidez Militar', 'Acidente de Serviço', 'Direito Militar', 'Proventos Integrais']
},
    {
    title: 'Demissão em Massa e o Pacto do Silêncio',
    description: 'Cláusulas de confidencialidade por prazo indeterminado inseridas em termos de rescisão sem mediação sindical são classificadas como abusivas por especialistas em direito trabalhista.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/demissao-massa-pacto-silencio-clausula-confidencialidade-abusiva.html',
    tags: ['Demissão em Massa', 'Cláusula de Confidencialidade Abusiva', 'Reforma Trabalhista', 'CLT', 'Direito Trabalhista']
},
    {
    title: 'Filhos Como Arma, Mães Como Alvo',
    description: 'A violência vicária contra a mulher expõe uma das faces mais cruéis da violência de gênero no Brasil, onde filhos e familiares são instrumentalizados para punir e controlar emocionalmente a mãe.',
    category: 'Direito Criminal',
    url: 'direito-penal/filhos-como-arma-maes-como-alvo-violencia-vicaria-mulher.html',
    tags: ['Violência Vicária', 'Homicídio Vicário', 'Lei Maria da Penha', 'Violência Contra a Mulher', 'PL 3880 2024']
},
    {
    title: 'Reserva de Imóvel na Planta e a Custódia Notarial',
    description: 'A celebração de termos de reserva de imóvel antes do registro da incorporação imobiliária levanta questões jurídicas cruciais sobre legalidade e proteção patrimonial dos adquirentes.',
    category: 'Direito de Família',
    url: 'direito-de-familia/reserva-imovel-planta-custodia-notarial-escrow-incorporacao.html',
    tags: ['Incorporação Imobiliária', 'Escrow Account Notarial', 'Termo de Reserva de Imóvel', 'Registro de Imóveis', 'Lei 4591']
},
    {
    title: 'OAB Debate Nova Lei do Contrato de Seguro',
    description: 'A Comissão Nacional de Direito Securitário da OAB promove debates técnicos e prepara seminário nacional sobre a nova legislação que regulamentará os contratos de seguro no Brasil.',
    category: 'Direito Civil',
    url: 'direito-civil/oab-debate-nova-lei-contrato-seguro.html',
    tags: ['direito securitário', 'lei do contrato de seguro', 'OAB', 'mercado de seguros', 'OAB Debate Nova Lei do Contrato de Seguro']
},
    {
    title: 'Militar Condenado por Perseguição Obsessiva no Quartel',
    description: 'Sargento da Marinha do Brasil é condenado pela prática de stalking contra colega de farda durante dois anos, em caso que evidencia a aplicação da lei antistalking no ambiente castrense.',
    category: 'Direito Militar',
    url: 'direito-militar/militar-condenado-perseguicao-obsessiva-quartel.html',
    tags: ['stalking', 'direito militar', 'Marinha do Brasil', 'perseguição obsessiva', 'Militar Condenado por Perseguição Obsessiva no Quartel']
},
    {
    title: 'Compliance como Pilar da Estratégia Corporativa Moderna',
    description: 'O compliance deixou de ser mero instrumento de adequação normativa para se tornar vetor estratégico nas organizações brasileiras, reduzindo riscos jurídicos e construindo reputação sólida.',
    category: 'Compliance',
    url: 'compliance/compliance-pilar-estrategia-corporativa-moderna.html',
    tags: ['compliance', 'estratégia empresarial', 'governança corporativa', 'programa de integridade', 'Compliance como Pilar da Estratégia Corporativa Moderna']
},
    {
    title: 'STF como Árbitro Constitucional do Esporte Nacional',
    description: 'O Supremo Tribunal Federal consolida sua atuação como instância decisiva na regulação do esporte brasileiro, delimitando poderes do Estado e das entidades desportivas.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/stf-arbitro-constitucional-esporte-nacional.html',
    tags: ['STF', 'esporte brasileiro', 'direito desportivo', 'autonomia desportiva', 'STF como Árbitro Constitucional do Esporte Nacional']
},
    {
    title: 'ECA Digital Mira a Lógica das Plataformas',
    description: 'O ECA Digital representa marco legislativo inédito ao regular não apenas crimes digitais contra crianças, mas a própria arquitetura algorítmica das plataformas que produz danos ao desenvolvimento infantojuvenil.',
    category: 'Legislação',
    url: 'legislacao/eca-digital-regulacao-plataformas-protecao-criancas-adolescentes-lei.html',
    tags: ['ECA Digital', 'plataformas digitais', 'proteção de crianças', 'algoritmos', 'ECA Digital Mira a Lógica das Plataformas']
},
    {
    title: 'Governar em Silêncio Não Garante Reeleição',
    description: 'O governo federal precisa comunicar com mais eficiência suas realizações em políticas públicas para converter resultados concretos em capital político antes das eleições de 2026.',
    category: 'Política',
    url: 'politica/governo-federal-comunicacao-realizacoes-politicas-publicas-2026.html',
    tags: ['governo federal', 'comunicação política', 'políticas públicas', 'eleições 2026', 'Governar em Silêncio Não Garante Reeleição']
},
    {
    title: 'MDB Perde Quadro e PSB Ganha Candidatura Senatorial',
    description: 'Liderança política nacional deixa o MDB após quase 30 anos e se filia ao PSB para disputar o Senado por São Paulo em 2026, em movimento que reordena as alianças políticas no estado.',
    category: 'Política',
    url: 'politica/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.html',
    tags: ['MDB', 'PSB', 'Senado São Paulo', 'eleições 2026', 'MDB Perde Quadro e PSB Ganha Candidatura Senatorial']
},
    {
    title: 'Três Frentes que Assombram o Direito Corporativo',
    description: 'Cibersegurança, reforma tributária e instabilidade geopolítica concentram as principais preocupações dos líderes jurídicos das grandes organizações brasileiras em 2026.',
    category: 'Legislação',
    url: 'legislacao/ciberseguranca-tributacao-geopolitica-preocupacoes-lideres-juridicos-brasil.html',
    tags: ['cibersegurança', 'tributação', 'geopolítica', 'líderes jurídicos', 'Três Frentes que Assombram o Direito Corporativo']
},
    {
    title: 'Quando o Tribunal Reescreve o que a Lei Diz',
    description: 'O STJ manteve a Súmula 410 sobre astreintes ignorando a alteração expressa do CPC de 2015, expondo o risco institucional de jurisprudência que sobrevive à lei que a originou.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/jurisprudencia-ignora-lei-astreintes-cpc-stj-separacao-poderes.html',
    tags: ['jurisprudência', 'STJ', 'astreintes', 'CPC 2015', 'Quando o Tribunal Reescreve o que a Lei Diz']
},
    {
    title: 'Direito ao Porte que a Burocracia Engavetou',
    description: 'A Lei Orgânica das Polícias Militares garante porte de arma nacional a militares estaduais ativos e veteranos, mas no MS o direito não é aplicado por ausência da Carteira Funcional Nacional Padrão.',
    category: 'Direito Militar',
    url: 'direito-militar/porte-arma-policial-bombeiro-lei-organica-carteira-funcional-ms.html',
    tags: ['porte de arma', 'policial militar', 'bombeiro militar', 'Lei Orgânica', 'Direito ao Porte que a Burocracia Engavetou']
},
    {
    title: 'Farda e Integridade Selam Pacto de Conformidade',
    description: 'O Corpo de Bombeiros Militar do MS e a CGE firmaram compromisso formal para implantar o Compliance Público na corporação, avançando na governança institucional e controle interno.',
    category: 'Compliance',
    url: 'compliance/bombeiros-militar-cge-compliance-publico-integridade-governanca.html',
    tags: ['compliance público', 'Corpo de Bombeiros', 'CGE', 'integridade pública', 'Farda e Integridade Selam Pacto de Conformidade']
},
    {
    title: 'Sequela Laboral que o INSS Tentou Ignorar',
    description: 'O TJMT garantiu auxílio-acidente a trabalhador com amputação parcial do dedo em acidente laboral, reconhecendo que falhas contributivas do empregador não afastam a qualidade de segurado.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/auxilio-acidente-sequela-permanente-inss-qualidade-segurado-tjmt.html',
    tags: ['auxílio-acidente', 'acidente de trabalho', 'INSS', 'qualidade de segurado', 'Sequela Laboral que o INSS Tentou Ignorar']
},
    {
    title: 'Dosimetria da Pena e a Herança Penal Intemporal',
    description: 'Os ensinamentos clássicos do penalismo brasileiro sobre dosimetria da pena continuam orientando magistrados no sistema trifásico de fixação de sanções penais nos tribunais do país.',
    category: 'Direito Criminal',
    url: 'direito-penal/dosimetria-pena-ensinamentos-classicos-direito-penal-brasileiro.html',
    tags: ['dosimetria da pena', 'sistema trifásico', 'individualização da pena', 'direito penal', 'Dosimetria da Pena e a Herança Penal Intemporal']
},
    {
    title: 'Reforma Civil Rasga o Véu da Responsabilidade',
    description: 'O PL 4 de 2025 que atualiza o Código Civil propõe ampliar o regime de responsabilidade civil e divide a comunidade jurídica entre avanço protetivo e risco à segurança jurídica.',
    category: 'Direito Civil',
    url: 'direito-civil/pl-codigo-civil-responsabilidade-civil-ampliacao-debate-juridico.html',
    tags: ['responsabilidade civil', 'código civil', 'PL 4 2025', 'reforma civil', 'Reforma Civil Rasga o Véu da Responsabilidade']
},
    {
    title: 'Testamento e Jurisprudência no Fio da Navalha',
    description: 'A jurisprudência brasileira tem sido convocada a arbitrar conflitos surgidos a partir de disposições testamentárias, traçando os limites entre autonomia do testador e proteção dos herdeiros necessários.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/testamento-disposicoes-jurisprudencia-direito-sucessorio-brasil.html',
    tags: ['testamento', 'disposições testamentárias', 'direito sucessório', 'herdeiros necessários', 'Testamento e Jurisprudência no Fio da Navalha']
},
    {
    title: 'Conformidade Jurídica como Escudo e Espada Corporativa',
    description: 'O compliance deixou de ser um custo regulatório para se tornar um pilar estratégico nas organizações brasileiras, protegendo reputação e atraindo investidores.',
    category: 'Compliance',
    url: 'compliance/conformidade-juridica-escudo-espada-vantagem-corporativa.html',
    tags: ['compliance', 'governança corporativa', 'lei anticorrupção', 'cultura de compliance', 'Conformidade Jurídica como Escudo e Espada Corporativa']
},
    {
    title: 'Governo Abaixo da Régua Histórica da Reeleição',
    description: 'Aprovação presidencial ameaça candidatura em 2026. Pesquisas de março mostram avaliação do governo abaixo do patamar histórico de presidentes que venceram eleições desde 2002, com rejeição pessoal chegando a 57%.',
    category: 'Política',
    url: 'politica/governo-abaixo-regua-historica-reeleicao.html',
    tags: ['Aprovação Governo 2026', 'Pesquisa Eleitoral Presidente', 'Rejeição Presidencial Março 2026', 'Eleições 2026 Candidatura', 'Governo Abaixo da Régua Histórica da Reeleição']
},
    {
    title: 'Oficial Preso por Feminicídio Abala Corporação Paulista',
    description: 'Perícia destrói tese de suicídio forjado por militar. Tenente-coronel da PM-SP foi preso preventivamente por feminicídio e fraude processual após laudos periciais contrariarem a versão de suicídio da esposa, também policial militar.',
    category: 'Direito Militar',
    url: 'direito-militar/oficial-preso-feminicidio-abala-corporacao-paulista.html',
    tags: ['Feminicídio Policial Militar', 'Tenente-Coronel Preso SP', 'Fraude Processual Crime', 'Justiça Militar Feminicídio', 'Oficial Preso por Feminicídio Abala Corporação Paulista']
},
    {
    title: 'Exclusão da Defesa em Escuta Infantil Anula Sentença',
    description: 'Contraditório violado invalida condenação por crime grave. O TJ-SP anulou sentença de 19 anos por ausência da defesa técnica durante escuta especializada de vítima infantil realizada por videoconferência, com base na violação do contraditório e da ampla defesa.',
    category: 'Direito Penal',
    url: 'direito-penal/exclusao-defesa-escuta-infantil-anula-sentenca.html',
    tags: ['Escuta Especializada Criança', 'Lei 13431 2017', 'Nulidade Processual Penal', 'Contraditório Ampla Defesa', 'Exclusão da Defesa em Escuta Infantil Anula Sentença']
},
    {
    title: 'Divórcio Unilateral em Cartório Transforma Direito Familiar',
    description: 'Autonomia individual redefine dissolução do vínculo conjugal. A proposta de divórcio unilateral em cartório, amparada pela jurisprudência do STJ e pela reforma do Código Civil, representa avanço na desburocratização do direito de família brasileiro.',
    category: 'Direito de Família',
    url: 'direito-de-familia/divorcio-unilateral-cartorio-transforma-direito-familiar.html',
    tags: ['Divórcio Unilateral Cartório', 'Reforma Código Civil', 'Direito Potestativo', 'STJ Divórcio Liminar', 'Divórcio Unilateral em Cartório Transforma Direito Familiar']
},
    {
    title: 'Aposentadoria por Contribuição Ainda Confunde Trabalhadores',
    description: 'Reforma previdenciária criou regras que persistem mal compreendidas. As regras de transição da aposentadoria por tempo de contribuição seguem válidas em 2026 com novos ajustes que podem gerar perdas financeiras irreversíveis para quem decide pelo momento errado.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/aposentadoria-contribuicao-confunde-trabalhadores-regras-2026.html',
    tags: ['Aposentadoria por Tempo de Contribuição', 'Regras de Transição INSS 2026', 'Reforma da Previdência', 'Planejamento Previdenciário', 'Aposentadoria por Contribuição Ainda Confunde Trabalhadores']
},
    {
    title: 'Norma Técnica Redefine Governança Fiscal Empresarial',
    description: 'Fisco passa a exigir método, não só recolhimento. A ABNT NBR 17301 inaugura novo paradigma para o compliance tributário no Brasil, exigindo sistema estruturado de gestão fiscal com políticas formais, registros documentados e controles continuamente revisados.',
    category: 'Compliance',
    url: 'compliance/norma-tecnica-redefine-governanca-fiscal-empresarial.html',
    tags: ['ABNT NBR 17301', 'Compliance Tributário', 'Governança Fiscal', 'Receita Federal', 'Norma Técnica Redefine Governança Fiscal Empresarial']
},
    {
    title: 'TSE Recria Censura Eleitoral pela Via Jurisprudencial',
    description: 'Pré-campanha volta à insegurança normativa anterior. A ampliação jurisprudencial dos critérios de propaganda antecipada pelo TSE ameaça a segurança jurídica, a liberdade de expressão e a igualdade na pré-campanha eleitoral.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tse-recria-censura-eleitoral-via-jurisprudencial.html',
    tags: ['TSE', 'Pré-Campanha Eleitoral', 'Propaganda Antecipada', 'Segurança Jurídica', 'TSE Recria Censura Eleitoral pela Via Jurisprudencial']
},
    {
    title: 'Boletim Eleitoral Paulatino Fortalece Transparência Jurisprudencial',
    description: 'Corte paranaense democratiza acesso aos precedentes eleitorais. A primeira edição do boletim periódico de jurisprudência do TRE-PR reúne, em linguagem simples, julgados inovadores e de impacto eleitoral.',
    category: 'Legislação',
    url: 'legislacao/boletim-eleitoral-fortalece-transparencia-jurisprudencial-tre-pr.html',
    tags: ['TRE-PR', 'Informativo Jurisprudência Eleitoral', 'Precedentes Eleitorais', 'Transparência Judicial', 'Boletim Eleitoral Paulatino Fortalece Transparência Jurisprudencial']
},
    {
    title: 'Prerrogativas Presidenciais Resistem à Custódia Judicial',
    description: 'Tribunal garante benefícios a ex-mandatário preso. A 4ª Turma do TRF-6 restabeleceu por unanimidade carros oficiais, motoristas, seguranças e assessores a ex-presidente mesmo durante cumprimento de pena em regime fechado.',
    category: 'Política',
    url: 'politica/prerrogativas-presidenciais-resistem-custodia-judicial.html',
    tags: ['TRF-6', 'Prerrogativas Ex-Presidente', 'Lei 7474 1986', 'Benefícios Ex-Presidente Preso', 'Prerrogativas Presidenciais Resistem à Custódia Judicial']
},
    {
    title: 'Garantias Locatícias sob Escrutínio Jurídico no Brasil',
    description: 'Mercado imobiliário e segurança contratual em debate. A escolha da garantia locatícia adequada impacta diretamente a segurança jurídica dos contratos de locação e o acesso à moradia no Brasil.',
    category: 'Direito Civil',
    url: 'direito-civil/garantias-locaticias-escrutinio-juridico-brasil.html',
    tags: ['Garantias Locatícias', 'Seguro-Fiança', 'Título de Capitalização', 'Lei do Inquilinato', 'Garantias Locatícias sob Escrutínio Jurídico no Brasil']
},
    {
    title: 'A Velha Guarda do PT Volta ao Front',
    description: 'Histórico aliado do presidente Lula profere discurso que antecipa os eixos da campanha petista de 2026, convocando a esquerda ao combate eleitoral e marcando o retorno oficial da velha guarda do PT à cena política brasileira.',
    category: 'Política',
    url: 'politica/velha-guarda-pt-retorno-campanha-lula-reeleicao-2026.html',
    tags: ['Eleições 2026', 'PT Campanha Lula', 'Velha Guarda PT', 'Reeleição Lula', 'A Velha Guarda do PT Volta ao Front']
},
    {
    title: 'Rondônia Lidera Gestão Federal de Convênios',
    description: 'O governo de Rondônia promove capacitação de servidores no sistema Transferegov, com foco em elaboração de projetos, legislação de convênios e captação de recursos federais. O estado ocupa o primeiro lugar nacional em eficiência na execução de instrumentos de repasse.',
    category: 'Legislação',
    url: 'legislacao/rondonia-capacitacao-transferegov-convenios-projetos-sociais.html',
    tags: ['Transferegov', 'Convênios Federais', 'Capacitação Servidores', 'Gestão Pública', 'Rondônia Lidera Gestão Federal de Convênios']
},
    {
    title: 'CNJ Reforça o Judiciário nos Direitos Humanos',
    description: 'O Conselho Nacional de Justiça publicou dois protocolos institucionais voltados ao fortalecimento da atuação dos tribunais brasileiros em direitos humanos, alinhando o Judiciário ao Sistema Interamericano e às obrigações internacionais do Estado brasileiro.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/cnj-protocolos-direitos-humanos-judiciario-sistema-interamericano.html',
    tags: ['CNJ Direitos Humanos', 'Sistema Interamericano', 'Protocolos Judiciário', 'UMF CNJ', 'CNJ Reforça o Judiciário nos Direitos Humanos']
},
    {
    title: 'Tiro pelas Costas: Agente Estatal Condenado',
    description: 'O Tribunal do Júri da Comarca de Cuiabá condenou ex-integrante da Polícia Militar de Mato Grosso a nove anos de reclusão pelo homicídio de adolescente desarmado atingido pelas costas. Caso expõe debate sobre uso desproporcional da força letal por agentes públicos.',
    category: 'Direito Militar',
    url: 'direito-militar/ex-policial-militar-condenado-homicidio-adolescente-cuiaba-tiro-costas.html',
    tags: ['Ex-Policial Militar Condenado', 'Uso da Força Letal', 'Tribunal do Júri', 'Direito Militar', 'Tiro pelas Costas: Agente Estatal Condenado']
},
    {
    title: 'Churrasco no Atestado Custa o Emprego',
    description: 'O TRT-GO confirmou a dispensa por justa causa de trabalhador que publicou fotos em redes sociais durante afastamento médico. A decisão unânime reforça que o conteúdo digital público pode ser usado como prova material em processos trabalhistas.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/justa-causa-atestado-medico-churrasco-redes-sociais-trt-go.html',
    tags: ['Justa Causa', 'Atestado Médico', 'Redes Sociais', 'Direito Trabalhista', 'Churrasco no Atestado Custa o Emprego']
},
    {
    title: 'Brasil Endurece o Cerco ao Crime Organizado',
    description: 'Em 2025, o Congresso Nacional aprovou um conjunto robusto de medidas penais que redesenham o enfrentamento ao crime organizado no Brasil. Do novo marco legal contra facções e milícias ao recrudescimento de penas para crimes hediondos, o país inaugura uma nova fase legislativa na área de segurança pública.',
    category: 'Direito Criminal',
    url: 'direito-penal/marco-legal-crime-organizado-legislacao-penal-2025.html',
    tags: ['Crime Organizado', 'Marco Legal Segurança Pública', 'Legislação Penal 2025', 'Milícias', 'Brasil Endurece o Cerco ao Crime Organizado']
},
    {
    title: 'Quando o Judiciário Vira Instrumento de Opressão',
    description: 'Nas Varas de Família, o processo judicial tem sido desvirtuado como ferramenta de assédio e controle coercitivo por ex-parceiros. A litigância predatória expõe a insuficiência dos mecanismos tradicionais de má-fé processual e exige uma virada dogmática urgente.',
    category: 'Direito de Família',
    url: 'direito-de-familia/litigancia-predatoria-familia-judiciario-instrumento-opressao.html',
    tags: ['Litigância Abusiva', 'Assédio Processual', 'Direito de Família', 'Violência Doméstica', 'Quando o Judiciário Vira Instrumento de Opressão']
},
    {
    title: 'Tokens Imobiliários e o Fólio Real Brasileiro',
    description: 'A tokenização imobiliária avança no Brasil, mas esbarra na ausência de marco registral sólido. Sem o assentamento do criptoativo na matrícula do imóvel, o negócio carece de segurança jurídica e pode expor emissores e investidores a riscos legais graves.',
    category: 'Direito Civil',
    url: 'direito-civil/tokens-imobiliarios-folio-real-matricula-registro.html',
    tags: ['Tokenização Imobiliária', 'Registro de Imóveis', 'Criptoativos Imobiliários', 'Direitos Reais', 'Tokens Imobiliários e o Fólio Real Brasileiro']
},
    {
    title: 'Compliance Como Barreira Contra Fraudes Corporativas',
    description: 'O compliance antifrude é instrumento estratégico essencial para proteger organizações de desvios internos, integrando controles, cultura de integridade e tecnologia para reduzir perdas financeiras e exposição jurídica.',
    category: 'Compliance',
    url: 'compliance/compliance-prevencao-fraude-controles-internos-governanca-corporativa.html',
    tags: ['Romer carvalho','compliance antifrude', 'prevenção de fraude', 'controles internos', 'programa de integridade', 'Compliance Como Barreira Contra Fraudes Corporativas']
},
    {
    title: 'Justiça Militar Condena PMs no Amapá',
    description: 'A Justiça Militar do Amapá condenou dois policiais militares em Macapá, reacendendo o debate sobre a efetividade do foro castrense estadual na responsabilização de agentes de segurança pública por crimes militares.',
    category: 'Direito Militar',
    url: 'direito-militar/justica-militar-amapa-condenacao-policiais-militares-macapa.html',
    tags: ['Justiça Militar Amapá', 'policiais militares condenados', 'crime militar', 'foro castrense', 'Justiça Militar Condena PMs no Amapá']
},
    {
    title: 'Amazonas Avança na Lei Climática Estadual',
    description: 'A Assembleia Legislativa do Amazonas aprova medidas que fortalecem a legislação ambiental estadual e ampliam os instrumentos jurídicos de enfrentamento às mudanças climáticas na maior extensão florestal do planeta.',
    category: 'Legislação',
    url: 'legislacao/amazonas-legislacao-ambiental-mudancas-climaticas-assembleia-legislativa.html',
    tags: ['legislação ambiental Amazonas', 'mudanças climáticas', 'Amazônia', 'direito ambiental', 'Amazonas Avança na Lei Climática Estadual']
},
    {
    title: 'STF Recebe Obra Sobre Direitos Humanos Interamericanos',
    description: 'Lançamento no STF de obra que sistematiza a jurisprudência da Corte Interamericana de Direitos Humanos reforça o compromisso do Judiciário brasileiro com o controle de convencionalidade e a integração dos precedentes internacionais.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/stf-lancamento-livro-jurisprudencia-corte-interamericana-direitos-humanos.html',
    tags: ['Corte Interamericana', 'jurisprudência interamericana', 'STF', 'controle de convencionalidade', 'STF Recebe Obra Sobre Direitos Humanos Interamericanos']
},
    {
    title: 'Contraditório nas Cautelares Penais em Debate',
    description: 'A tensão entre a urgência das medidas cautelares penais e o direito constitucional ao contraditório expõe o conflito entre efetividade da persecução penal e garantias fundamentais do investigado no processo penal brasileiro.',
    category: 'Direito Criminal',
    url: 'direito-penal/medidas-cautelares-direito-contraditorio-processo-penal-garantias.html',
    tags: ['medidas cautelares', 'contraditório', 'processo penal', 'garantias processuais', 'Contraditório nas Cautelares Penais em Debate']
},
    {
    title: 'Risco Cirúrgico Não Gera Responsabilidade Automática',
    description: 'Complicações pós-operatórias não configuram responsabilidade civil objetiva do médico, sendo necessária a demonstração de culpa, dano e nexo causal para o reconhecimento do dever de indenizar.',
    category: 'Direito Civil',
    url: 'direito-civil/complicacao-pos-operatoria-responsabilidade-civil-medica-culpa-nexo-causal.html',
    tags: ['responsabilidade civil médica', 'complicação pós-operatória', 'obrigação de meio', 'culpa médica', 'Risco Cirúrgico Não Gera Responsabilidade Automática']
},
    {
    title: 'Escala 6x1 Sob o Olhar da CLT',
    description: 'A escala 6x1 é permitida pela CLT, mas exige pagamento de horas extras e garantia de descanso semanal remunerado que frequentemente são descumpridos, gerando passivos trabalhistas expressivos.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/escala-6x1-clt-jornada-trabalho-legalidade-direitos-trabalhistas.html',
    tags: ['escala 6x1', 'jornada de trabalho', 'CLT', 'horas extras', 'Escala 6x1 Sob o Olhar da CLT']
},
    {
    title: 'Holding Familiar e a Divisão do Patrimônio',
    description: 'A holding familiar transforma a lógica da partilha de bens, deslocando o conflito do direito das sucessões para o direito societário e exigindo planejamento jurídico cuidadoso em casos de herança, divórcio e conflitos entre herdeiros.',
    category: 'Direito de Família',
    url: 'direito-de-familia/holding-familiar-partilha-bens-sucessao-patrimonial-divorcio-heranca.html',
    tags: ['holding familiar', 'partilha de bens', 'planejamento sucessório', 'divórcio holding', 'Holding Familiar e a Divisão do Patrimônio']
},
    {
    title: 'SP Reestrutura Compliance Policial Após Escândalo',
    description: 'O governo de São Paulo publicou decreto que reorganiza o compliance das polícias após operação revelar esquema de corrupção sistêmica nas corporações, criando novos mecanismos de controle interno e integridade institucional.',
    category: 'Compliance',
    url: 'compliance/sp-decreto-reestruturacao-compliance-policias-corrupcao-integridade.html',
    tags: ['compliance policial', 'corrupção polícia SP', 'decreto São Paulo', 'integridade policial', 'SP Reestrutura Compliance Policial Após Escândalo']
},
    {
    title: 'PL Quer Pragmatismo Para Vencer em 2026',
    description: 'A liderança do Partido Liberal admite que a vitória em 2026 exige agenda propositiva voltada ao cotidiano do eleitor, reconhecendo que o confronto radical desgastou a base e afasta o centro eleitoral decisivo.',
    category: 'Política',
    url: 'politica/pl-pragmatismo-agenda-eleicoes-2026-estrategia-eleitoral-oposicao.html',
    tags: ['PL 2026', 'eleições 2026', 'Partido Liberal', 'estratégia eleitoral', 'PL Quer Pragmatismo Para Vencer em 2026']
},
    {
    title: 'Senado Guia Mulheres Para a Política',
    description: 'O Senado Federal lançou publicação para orientar mulheres no ingresso à vida política, abordando legislação eleitoral, cotas de gênero, fundo eleitoral e combate à violência política de gênero.',
    category: 'Política',
    url: 'politica/senado-guia-candidata-mulheres-politica-representatividade-cotas-genero.html',
    tags: ['mulheres na política', 'cotas de gênero', 'Senado Federal', 'representatividade política', 'Senado Guia Mulheres Para a Política']
},
    {
    title: 'Insalubridade Para Motoboys a Partir de Abril',
    description: 'A partir de abril de 2026, motociclistas profissionais terão direito ao adicional de insalubridade, reconhecendo os riscos à saúde da exposição a ruído, gases tóxicos e radiação solar na atividade de entrega.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/insalubridade-motoboys-entregadores-abril-2026-direitos-trabalhistas.html',
    tags: ['insalubridade motoboys', 'adicional de insalubridade', 'entregadores', 'direito trabalhista', 'Insalubridade Para Motoboys a Partir de Abril']
},
        {
    title: 'STF Abre Acordo Penal à Justiça Militar',
    description: 'O STF reconheceu a aplicabilidade do Acordo de Não Persecução Penal na Justiça Militar, estendendo ao direito castrense o instrumento negocial previsto no CPP e consolidando mudança de paradigma no processo penal militar.',
    category: 'Direito Militar',
    url: 'direito-militar/stf-anpp-acordo-nao-persecucao-penal-justica-militar-crime-militar.html',
    tags: ['ANPP', 'Justiça Militar', 'STF', 'crime militar', 'STF Abre Acordo Penal à Justiça Militar']
},
    {
    title: 'Entre o Excesso e o Vazio do Compliance',
    description: 'O compliance corporativo oscila entre o overcompliance burocrático sem efetividade e a ausência total de controles internos, ambos perigosos para a sustentabilidade jurídica e reputacional das organizações.',
    category: 'Compliance',
    url: 'compliance/overcompliance-compliance-zero-equilibrio-programas-integridade-empresas.html',
    tags: ['overcompliance', 'compliance zero', 'programa de integridade', 'governança corporativa', 'Entre o Excesso e o Vazio do Compliance']
},
    {
    title: 'HC e Prisão Cautelar Sob Tensão Constitucional',
    description: 'A vedação ao exame de matéria fática no habeas corpus cria assimetria inconstitucional nas prisões cautelares, comprometendo o contraditório, a ampla defesa e o devido processo legal.',
    category: 'Direito Criminal',
    url: 'direito-penal/habeas-corpus-prisao-cautelar-vedacao-debate-fatico-assimetria-inconstitucional.html',
    tags: ['habeas corpus', 'prisão cautelar', 'assimetria inconstitucional', 'debate fático', 'HC e Prisão Cautelar Sob Tensão Constitucional']
},
{
    title: 'ECA Digital Protege Crianças no Ambiente Virtual',
    description: 'O ECA Digital entrou em vigor em março de 2026, impondo novas obrigações às plataformas digitais para proteção integral de crianças e adolescentes no ambiente online.',
    category: 'Direito de Família',
    url: 'direito-de-familia/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.html',
    tags: ['ECA Digital', 'proteção de crianças', 'plataformas digitais', 'adolescentes internet', 'ECA Digital Protege Crianças no Ambiente Virtual']
},
{
    title: 'Justiça Digital Sem Advogado no Rio',
    description: 'O Tribunal de Justiça do Rio de Janeiro inaugura plataforma que permite ao cidadão protocolar petições nos juizados especiais cíveis de forma digital e sem necessidade de advogado.',
    category: 'Direito Civil',
    url: 'direito-civil/tjrj-peticao-cidada-juizados-especiais-civeis-online-sem-advogado.html',
    tags: ['Petição Cidadã', 'TJRJ', 'juizados especiais cíveis', 'acesso à justiça', 'Justiça Digital Sem Advogado no Rio']
},
{
    title: 'PGFN e Receita Regulam o Devedor Contumaz',
    description: 'A Procuradoria-Geral da Fazenda Nacional articula com a Receita Federal a regulamentação da LC 225/2026, que tipifica o devedor contumaz e impõe restrições severas a contribuintes com inadimplência tributária substancial.',
    category: 'Legislação',
    url: 'legislacao/pgfn-receita-federal-regulamentacao-devedor-contumaz-lc-225-2026.html',
    tags: ['devedor contumaz', 'PGFN', 'Receita Federal', 'LC 225 2026', 'PGFN e Receita Regulam o Devedor Contumaz']
},
    {
    title: 'Acesso à Justiça Internacional Pelo Paraná',
    description: 'O Tribunal de Justiça do Paraná avança na integração da jurisprudência interamericana ao sistema judiciário brasileiro com uma plataforma de consulta inédita às decisões da Corte IDH.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tjpr-plataforma-jurisprudencia-corte-interamericana-direitos-humanos.html',
    tags: ['Corte Interamericana de Direitos Humanos', 'TJPR', 'jurisprudência internacional', 'Acesso à Justiça Internacional Pelo Paraná']
},
    {
    title: 'Tocantins Avança no Debate Nacional de Compliance',
    description: 'Palmas sedia em abril de 2026 o primeiro Congresso Tocantinense de Compliance, evento que insere a capital na agenda nacional de integridade, governança e combate à corrupção, reunindo gestores públicos, empresários e especialistas jurídicos.',
    category: 'compliance',
    url: 'compliance/tocantins-congresso-compliance-governanca-integridade-palmas.html',
    tags: ['compliance', 'governança pública', 'integridade', 'Tocantins', 'LGPD', 'Tocantins Avança no Debate Nacional de Compliance']
},
{
    title: 'PL 4920 Tensiona Previdência das Forças Armadas',
    description: 'O Projeto de Lei 4920/2024, de iniciativa do Poder Executivo, propõe mudanças estruturais no regime previdenciário dos militares, incluindo idade mínima para a reserva e extinção da morte ficta, gerando rejeição massiva na consulta pública da Câmara dos Deputados.',
    category: 'Direito Militar',
    url: 'direito-militar/pl-4920-previdencia-forcas-armadas-rejeicao-militares.html',
    tags: ['PL 4920/2024', 'previdência militar', 'forças armadas', 'morte ficta', 'reserva remunerada', 'PL 4920 Tensiona Previdência das Forças Armadas']
},
{
    title: 'Combate ao Assédio nas Relações Trabalhistas Públicas',
    description: 'A publicação de uma revista especializada no enfrentamento do assédio moral e sexual no ambiente do Poder Judiciário reacende o debate sobre proteção à dignidade dos servidores e a urgência de reformas legislativas.',
    category: 'Direito trabalhista',
    url: 'direito-trabalhista/combate-assedio-moral-sexual-judiciario-revista-campanha.html',
    tags: ['assédio moral', 'assédio sexual', 'direito trabalhista', 'servidores públicos', 'Poder Judiciário', 'Combate ao Assédio nas Relações Trabalhistas Públicas']
},
{
    title: 'Estados Podem Ganhar Poder de Criminalizar',
    description: 'O PLP 41/2025, pautado na CSP do Senado, autoriza estados e DF a legislarem sobre direito penal, processual penal e execução penal usando o parágrafo único do art. 22 da CF. O texto enfrenta objeções da ADI 7.712 do STF que declarou inconstitucional lei estadual por invadir competência penal da União.',
    category: 'Direito Criminal',
    url: 'direito-penal/plp-41-2025-estados-legislar-direito-penal-csp-senado-competencia-uniao.html',
    tags: ['PLP 41 2025 estados legislar direito penal', 'art 22 paragrafo unico CF delegacao penal estados', 'CSP Senado competencia penal descentralizacao', 'STF ADI 7712 inconstitucionalidade lei estadual penal', 'Estados Podem Ganhar Poder de Criminalizar']
},
{
    title: 'FGTS Entra na Partilha do Divórcio',
    description: 'O saldo do FGTS acumulado durante o casamento em regime de comunhão parcial integra o patrimônio comum e deve ser dividido no divórcio. O STJ consolidou o direito à meação do cônjuge não titular, mas a desinformação faz esse ativo ser ignorado em acordos extrajudiciais.',
    category: 'Direito de Família',
    url: 'direito-de-familia/fgts-partilha-bens-divorcio-comunhao-parcial-STJ.html',
    tags: ['FGTS partilha bens divorcio comunhao parcial', 'meacao FGTS casamento STJ jurisprudencia', 'divorcio extrajudicial FGTS omitido acordo', 'art 1658 CC comunhao parcial bens FGTS', 'FGTS Entra na Partilha do Divórcio']
},
{
    title: 'Responsabilidade Civil Divide Debate no Novo Código',
    description: 'A CTCivil realizou audiência pública em março de 2026 sobre as alterações do PL 4/2025 na responsabilidade civil: sanção pedagógica até quatro vezes o dano moral, danos futuros e indiretos, restrição da culpa do advogado ao dolo e nova teoria do risco especial diferenciado dividem especialistas.',
    category: 'Direito Civil',
    url: 'direito-civil/reforma-codigo-civil-responsabilidade-civil-debate-juizes-pl-4-2025-sancao-pedagogica.html',
    tags: ['PL 4 2025 responsabilidade civil debate Senado', 'sanção pedagógica quádruplo dano moral reforma', 'art 944-A danos futuros indiretos Código Civil', 'responsabilidade advogado dolo fraude PL 4 2025', 'Responsabilidade Civil Divide Debate no Novo Código']
},
    {
    title: 'Direita Domina Arena Digital nas Eleições 2026',
    description: 'O pré-candidato do PL lidera o ranking digital de presidenciáveis com 49,7 milhões de interações e 37,14 pontos no Índice Datrix, superando o presidente em 76% no engajamento. O campo governista ocupa a quarta posição com tendência de queda no mar aberto.',
    category: 'Política',
    url: 'politica/direita-lidera-arena-digital-eleicoes-2026-pre-candidato-redes-sociais.html',
    tags: ['eleições 2026 redes sociais presidenciáveis', 'Índice Datrix pré-candidato PL liderança digital', 'herança digital capital político bolsonarismo 2026', 'Lula queda popularidade mar aberto redes', 'Direita Domina Arena Digital nas Eleições 2026']
},
{
    title: 'Cultura de Cuiabá Adota Compliance na Gestão',
    description: 'A Prefeitura de Cuiabá avança na implantação de compliance em suas secretarias municipais. A Secretaria de Cultura reuniu toda a equipe para orientações sobre prevenção de riscos e conduta ética no serviço público, com base na Lei Anticorrupção 12.846/2013 e na Nova Lei de Licitações.',
    category: 'Compliance',
    url: 'compliance/secretaria-cultura-cuiaba-compliance-integridade-administracao-publica-municipal.html',
    tags: ['Romer carvalho','compliance administração pública Cuiabá', 'Secretaria Cultura Cuiabá integridade', 'programa compliance municipal Mato Grosso', 'Lei Anticorrupção 12846 gestão pública', 'Cultura de Cuiabá Adota Compliance na Gestão']
},
{
    title: 'Judiciário do Acre Vai Além da Punição',
    description: 'O TJAC realizou a 32ª Semana Justiça pela Paz em Casa com 140 audiências, suporte psicossocial pelo Ceavi, lançamento de cartilha educativa e capacitação de estudantes em técnicas restaurativas, no ano em que a Lei Maria da Penha completa 20 anos.',
    category: 'Direito de Família',
    url: 'direito-de-familia/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.html',
    tags: ['TJAC violência doméstica acolhimento 2026', 'Semana Justiça pela Paz em Casa Acre', 'Lei Maria da Penha 20 anos', 'Ceavi suporte psicossocial vítimas', 'Judiciário do Acre Vai Além da Punição']
},
{
    title: 'Novo Código Civil Enfrenta Freio no Senado',
    description: 'O PL 4/2025 enfrenta risco de atraso na tramitação do Senado. A complexidade do texto que modifica 1.197 artigos do Código Civil e a proximidade do calendário eleitoral de 2026 podem empurrar a votação para 2027, gerando insegurança jurídica nos mercados.',
    category: 'Direito Civil',
    url: 'direito-civil/pl-codigo-civil-tramitacao-atraso-senado-calendario-eleitoral-2026.html',
    tags: ['PL 4 2025 Código Civil tramitação Senado', 'calendário eleitoral 2026 atraso votação', 'reforma Código Civil responsabilidade civil prescrição', 'direito civil digital novo Código Civil', 'Novo Código Civil Enfrenta Freio no Senado']
},
{
    title: 'Como Provar Assédio no Ambiente de Trabalho',
    description: 'O MPT publicou cartilha orientando vítimas de assédio moral e sexual a reunir provas como gravações, mensagens e diários de ocorrências. A denúncia pode ser anônima pelo MPT, Disque 100 ou Ligue 180, com base na Convenção 190 da OIT e na CLT.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/assedio-moral-sexual-trabalho-provas-denunciar-mpt-cartilha.html',
    tags: ['assédio moral trabalho como provar', 'cartilha MPT assédio sexual', 'Convenção 190 OIT violência assédio', 'denúncia anônima assédio trabalho', 'Como Provar Assédio no Ambiente de Trabalho']
},  
{
    title: 'Policial Licenciado em 1996 Volta ao Serviço Ativo',
    description: 'A Justiça da Paraíba reconheceu que um licenciamento da PM de 1996 jamais produziu efeitos válidos por falta de publicação no Diário Oficial, determinando o retorno do soldado ao serviço ativo quase 29 anos depois e expondo o passivo oculto das administrações militares estaduais.',
    category: 'Direito Militar',
    url: 'direito-militar/pm-licenciado-1996-retorno-ativo-publicacao-diario-oficial-nulidade-ato-administrativo.html',
    tags: ['PM licenciado volta ativa Paraíba', 'nulidade ato administrativo sem publicação', 'princípio publicidade direito militar', 'reintegração policial judicial Diário Oficial', 'Policial Licenciado em 1996 Volta ao Serviço Ativo']
},
{
    title: 'Danos Morais na Justiça Militar Ganham Piso',
    description: 'O Superior Tribunal Militar firmou jurisprudência inédita ao aplicar o artigo 387 do CPP, estabelecendo valor mínimo de indenização por danos morais em sentenças condenatórias na Justiça Militar da União.',
    category: 'Direito Militar',
    url: 'direito-militar/stm-danos-morais-indenizacao-minima-jurisprudencia-vitimas.html',
    tags: ['STM', 'danos morais', 'indenização mínima', 'jurisprudência militar', 'Danos Morais na Justiça Militar Ganham Piso']
},
{
    title: 'Quando o Passado Condena o Presente',
    description: 'Ex-agente condenado por facilitação de contrabando é nomeado para cargo de compliance em prefeitura brasileira. A contradição entre o histórico criminal do indicado e a função designada expõe o uso político e distorcido dos princípios de integridade e governança pública.',
    category: 'Compliance',
    url: 'compliance/ex-agente-preso-contrabando-cargo-compliance-prefeitura.html',
    tags: ['compliance público', 'integridade administrativa', 'improbidade administrativa', 'governança pública', 'Quando o Passado Condena o Presente']
},
{
    title: 'Aplicativos Vencem a Batalha do Vínculo Trabalhista',
    description: 'O relator do PLP 152/2025 declarou que o vínculo empregatício entre motoristas e plataformas é um ponto vencido no projeto, que criará regime normativo próprio para trabalhadores plataformizados e afastará a CLT.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/plp-152-2025-vinculo-empregaticio-motoristas-aplicativos-regulamentacao.html',
    tags: ['PLP 152/2025', 'Trabalho por Aplicativo', 'Vínculo Empregatício', 'Trabalhador Plataformizado', 'Aplicativos Vencem a Batalha do Vínculo Trabalhista']
},
{
    title: 'Habeas Corpus Amordaçado pela Jurisprudência',
    description: 'Advogados criminalistas denunciam a construção jurisprudencial que veda à defesa o debate fático no habeas corpus em matéria de prisão preventiva, sustentando que a restrição viola a presunção de inocência e a paridade de armas.',
    category: 'Direito Criminal',
    url: 'direito-penal/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.html',
    tags: ['Habeas Corpus', 'Prisão Preventiva', 'Presunção de Inocência', 'Paridade de Armas', 'Habeas Corpus Amordaçado pela Jurisprudência']
},
{
    title: 'Violência Doméstica em Números que Assustam',
    description: 'Servidor do PJSC apresenta dados do CNJ que revelam 945 mil medidas protetivas e 1.470 feminicídios em 2025 no Brasil, com destaque para os índices alarmantes de Chapecó e a dimensão oculta da violência doméstica em SC.',
    category: 'Direito de Família',
    url: 'direito-de-familia/violencia-domestica-numeros-sc-brasil-feminicidio-medidas-protetivas.html',
    tags: ['Violência Doméstica', 'Feminicídio', 'Lei Maria da Penha', 'Santa Catarina', 'Violência Doméstica em Números que Assustam']
},    
{
    title: 'Cerrado Ganha Força Legislativa em Goiás',
    description: 'O deputado Antônio Gomide lidera a produção legislativa ambiental em Goiás com 24 leis sancionadas e retoma o Programa Sementes do Cerrado, iniciativa educativa em parceria com a PUC Goiás para formação de consciência ecológica entre estudantes.',
    category: 'Legislação',
    url: 'legislacao/gomide-leis-ambientais-cerrado-goias-sementes-cerrado.html',
    tags: ['Cerrado', 'Legislação Ambiental', 'Goiás', 'Antônio Gomide', 'Cerrado Ganha Força Legislativa em Goiás']
},
{
    title: 'Agências de Viagem Ganham Terreno no Judiciário',
    description: 'Decisões recentes do STJ sinalizam interpretação mais favorável às agências de viagens nos casos de responsabilidade solidária, distinguindo o papel de intermediação do de fornecedor direto de serviços turísticos.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/agencias-viagem-responsabilidade-solidaria-jurisprudencia-stj-turismo.html',
    tags: ['Responsabilidade Solidária', 'Agências de Viagens', 'STJ', 'Abav', 'Agências de Viagem Ganham Terreno no Judiciário']
},    
{
    title: 'Código Civil Ganha Nova Chance de Evolução',
    description: 'A CTCivil do Senado debate responsabilidade civil em audiência pública com juristas de referência, no âmbito do PL 4/2025 que propõe atualizar mais de 900 artigos do Código Civil vigente desde 2002.',
    category: 'Direito Civil',
    url: 'direito-civil/codigo-civil-atualizacao-responsabilidade-civil-debate-senado-2026.html',
    tags: ['Código Civil', 'Responsabilidade Civil', 'PL 4/2025', 'CTCivil', 'Código Civil Ganha Nova Chance de Evolução']
},
{
    title: 'Lula e Flávio Empatam pela Primeira Vez',
    description: 'A pesquisa Genial/Quaest registra pela primeira vez o empate entre Lula e Flávio Bolsonaro no segundo turno, ambos com 41%, evidenciando a erosão da vantagem petista rumo às eleições de 2026.',
    category: 'Política',
    url: 'politica/quaest-lula-flavio-empatados-41-segundo-turno-2026.html',
    tags: ['Quaest', 'Eleições 2026', 'Lula', 'Flávio Bolsonaro', 'Lula e Flávio Empatam pela Primeira Vez']
},
    {
        title: 'STF Limita Condenação Trabalhista ao Pedido Inicial',
        description: 'O ministro Alexandre de Moraes cassou acórdão do TRT-4 que permitia condenação trabalhista acima do valor pedido na inicial, limitando a ação ao montante declarado com base na Súmula Vinculante 10 e no artigo 97 da CF, enquanto a ADI 6002 aguarda julgamento no plenário do STF.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/stf-moraes-condenacao-trabalhista-limite-peticao-inicial-adi-6002.html',
        tags: ['Condenação Trabalhista', 'Petição Inicial', 'ADI 6002', 'Reforma Trabalhista', 'Artigo 840 CLT', 'Súmula Vinculante 10', 'Alexandre de Moraes', 'Reclamação Constitucional', 'Reserva de Plenário']
    },
    {
        title: 'STJ Garante Dividendos ao Ex-Cônjuge Até Partilha Final',
        description: 'A Terceira Turma do STJ decidiu que o ex-cônjuge com direito à meação de cotas societárias também faz jus à parcela proporcional dos lucros e dividendos distribuídos até a efetiva quitação dos haveres, com base no artigo 1.660 do Código Civil e na vedação ao enriquecimento sem causa.',
        category: 'Direito de Família',
        url: 'direito-de-familia/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.html',
        tags: ['STJ Dividendos Ex-Cônjuge', 'Meação Cotas Empresa', 'Apuração de Haveres', 'Comunhão Parcial de Bens', 'Cotista Anômalo', 'REsp 2223719', 'Artigo 1660 Código Civil', 'Reforma Código Civil', 'Direito de Família Empresarial']
    },
     {
        title: 'Obra Mal Feita, Quem Paga a Conta ao Consumidor',
        description: 'A responsabilidade civil do fornecedor por falhas na execução de obras é objetiva, apoiada no artigo 618 do Código Civil e no artigo 14 do CDC, que impõem obrigação de resultado ao empreiteiro e garantia de cinco anos pela solidez e segurança da edificação.',
        category: 'Direito Civil',
        url: 'direito-civil/responsabilidade-fornecedor-obras-cdc-obrigacao-resultado.html',
        tags: ['Responsabilidade do Fornecedor', 'Falhas em Obras', 'Obrigação de Resultado', 'CDC', 'Artigo 618 Código Civil', 'Vício Construtivo', 'Dano Moral', 'Empreitada', 'Construção Civil', 'Direito do Consumidor']
    },
  {
        title: 'ANPP Ambiental, Quando a Empresa Confessa pelo Dirigente',
        description: 'A celebração de ANPP por pessoa jurídica em crimes ambientais gera paradoxo jurídico: a confissão corporativa pode refletir indevidamente sobre o corréu pessoa física que recusou o acordo, comprometendo o contraditório e a presunção de inocência.',
        category: 'Direito Criminial',
        url: 'direito-penal/anpp-ambiental-confissao-pessoa-juridica-correu-pessoa-fisica.html',
        tags: ['ANPP', 'Crimes Ambientais', 'Pessoa Jurídica', 'Lei 9605/98', 'Confissão Corporativa', 'Corréu', 'Artigo 28-A CPP', 'Direito Penal Ambiental', 'Responsabilidade Penal Empresa']
    },
    {
        title: 'Condenação por Golpe Ameaça Patentes Militares',
        description: 'Especialistas em Direito Militar explicam que condenação criminal superior a dois anos pode desencadear o Conselho de Justificação e a perda de posto dos militares acusados de envolvimento na trama golpista julgada pelo STF.',
        category: 'Direito Militar',
        url: 'direito-militar/condenacao-golpe-perda-patente-militares-stf.html',
        tags: ['Perda de Patente Militar', 'Golpe de Estado', 'STF', 'Conselho de Justificação', 'Superior Tribunal Militar', 'Direito Militar', 'Jair Bolsonaro', 'Indignidade para o Oficialato']
    },
    {
        title: 'IA e Jogo Responsável Unem Forças Globalmente',
        description: 'A Mindway AI e a Amelco firmaram aliança estratégica para expandir globalmente ferramentas de compliance regulatório e proteção de jogadores baseadas em inteligência artificial, integrando tecnologia de jogo responsável à plataforma B2B da Amelco.',
        category: 'Compliance',
        url: 'compliance/mindway-ai-amelco-parceria-compliance-jogo-responsavel-global.html',
        tags: ['Mindway AI', 'Amelco', 'Compliance Regulatório', 'Jogo Responsável', 'Inteligência Artificial', 'iGaming', 'Licenciamento Global', 'Proteção de Jogadores']
    },
     {
        title: 'Depósitos Bancários e Presunção Fiscal no CARF',
        description: 'O Conselho Administrativo de Recursos Fiscais consolidou jurisprudência sobre omissão de receitas por depósitos bancários não comprovados, à luz do artigo 42 da Lei 9.430/96, com inversão do ônus probatório ao contribuinte.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/depositos-bancarios-presuncao-fiscal-omissao-receitas-carf.html',
        tags: ['CARF', 'Omissão de Receitas', 'Depósitos Bancários', 'Artigo 42 Lei 9430/96', 'Presunção Legal', 'Jurisprudência Tributária', 'Ônus da Prova', 'Direito Tributário']
    },
    {
        title: 'BH Aprova Incentivo a Olimpíadas Científicas Escolares',
        description: 'A Comissão de Legislação e Justiça da Câmara Municipal de BH aprovou o PL 559/2025, criando programa de incentivo à participação de estudantes da rede pública em olimpíadas científicas nacionais e internacionais.',
        category: 'Legislação',
        url: 'legislacao/bh-olimpiadas-cientificas-estudantes-incentivo-legislativo.html',
        tags: ['PL 559/2025', 'Olimpíadas Científicas', 'Câmara Municipal BH', 'Educação Científica', 'Legislação Municipal', 'Incentivo Escolar', 'Belo Horizonte']
    },
   {
        title: 'Empate Técnico Redefine Disputa Presidencial',
        description: 'Nova pesquisa Meio/Ideia registrada no TSE revela que Lula empata tecnicamente com Flávio Bolsonaro e Tarcísio de Freitas em cenários de segundo turno, sinalizando uma corrida eleitoral de 2026 extremamente disputada.',
        category: 'Política',
        url: 'politica/eleicoes-2026-empate-tecnico-lula-flavio-tarcisio.html',
        tags: ['Eleições 2026', 'Lula', 'Tarcísio de Freitas', 'Flávio Bolsonaro', 'Pesquisa Meio Ideia', 'Empate Técnico', 'Segundo Turno']
    },
{
    title: 'Braskem Paga o Preço pelo Caos em Maceió',
    description: 'O STJ reconheceu a responsabilidade civil da Braskem pelo dano moral de ex-porteiro demitido após a evacuação de bairros atingidos pelo afundamento do solo em Maceió.',
    category: 'Direito Civil',
    url: 'direito-civil/braskem-indenizacao-trabalhador-desastre-maceio.html',
    tags: ['Braskem', 'Maceió', 'Desastre Ambiental', 'Responsabilidade Civil', 'Braskem Paga o Preço pelo Caos em Maceió']
},
{
    title: 'Proteção ou Vigilância Digital sobre Crianças e Jovens',
    description: 'A Lei 15.211/2025 impõe vínculo obrigatório de contas digitais de adolescentes a responsáveis adultos, ameaçando vítimas de abuso doméstico e gerando exclusão digital.',
    category: 'Direito de Família',
    url: 'direito-de-familia/lei-eca-digital-privacidade-criancas-adolescentes.html',
    tags: ['ECA Digital', 'Lei 15.211/2025', 'Privacidade Digital', 'Crianças e Adolescentes', 'Proteção ou Vigilância Digital sobre Crianças e Jovens']
},
{
    title: 'Família Vorcaro Aciona MP Contra Ameaças Digitais',
    description: 'O MP-SP requisitou ao DECAP inquérito para apurar cyberstalking, ameaças e uso não autorizado de imagens de familiares do banqueiro Daniel Vorcaro nas redes sociais, enquanto ele responde a investigações da PF por fraude, lavagem de dinheiro e obstrução de Justiça.',
    category: 'Direito Criminal',
    url: 'direito-penal/mp-sp-inquerito-ameacas-digitais-vorcaro-familia-cyberstalking.html',
    tags: ['MP-SP inquérito ameaças Vorcaro', 'cyberstalking família banqueiro digital', 'Lei 14132 stalking redes sociais', 'Operação Compliance Zero Vorcaro família', 'Família Vorcaro Aciona MP Contra Ameaças Digitais']
},
{
    title: 'TST Garante Insalubridade Máxima a Socorrista do SAMU',
    description: 'A Sexta Turma do TST reconheceu o direito de socorrista do SAMU ao adicional de insalubridade de 40%, firmando que o contato com pacientes portadores de doenças infectocontagiosas é suficiente para o grau máximo, sem exigir trabalho permanente em área de isolamento.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/tst-insalubridade-grau-maximo-socorrista-samu-doenca-infectocontagiosa.html',
    tags: ['TST insalubridade grau máximo SAMU', 'adicional insalubridade socorrista infectocontagioso', 'NR-15 agente biológico grau máximo', 'ministro Augusto César TST insalubridade', 'TST Garante Insalubridade Máxima a Socorrista do SAMU']
},
{
    title: 'ANPP Chega à Justiça Militar Brasileira',
    description: 'A aplicação do Acordo de Não Persecução Penal na Justiça Militar gera intenso debate sobre compatibilidade com os princípios da hierarquia e disciplina castrense, com posições divergentes no STM e ausência de regulamentação específica no CPPM.',
    category: 'Direito Militar',
    url: 'direito-militar/anpp-justica-militar-acordo-nao-persecucao-penal-aplicacao.html',
    tags: ['ANPP Justiça Militar', 'Acordo Não Persecução Penal militar', 'Pacote Anticrime CPPM', 'STM ANPP jurisprudência', 'ANPP Chega à Justiça Militar Brasileira']
},
{
    title: 'TJ-BA Impulsiona Súmulas para Acelerar Julgamentos',
    description: 'O TJ-BA editou o Ato Normativo Conjunto nº 7/2026 recomendando a criação de enunciados de súmula para matérias com jurisprudência reiterada, visando reduzir o retrabalho nos colegiados, permitir decisões monocráticas e fortalecer a segurança jurídica em toda a Justiça baiana.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tj-ba-sumulas-uniformizacao-jurisprudencia-celeridade-ato-normativo-2026.html',
    tags: ['TJ-BA súmulas jurisprudência 2026', 'Ato Normativo Conjunto 7 TJBA', 'uniformização jurisprudência celeridade', 'art 926 CPC precedentes tribunais', 'TJ-BA Impulsiona Súmulas para Acelerar Julgamentos']
},
{
    title: 'Lula Larga 2026 Pior do que Estava em 2022',
    description: 'As pesquisas de março de 2026 revelam que Lula inicia a corrida pela reeleição em posição mais frágil do que em 2022, com rejeição de 54%, desaprovação acima de 49% e vantagem reduzida a 5 pontos sobre Flávio Bolsonaro no segundo turno.',
    category: 'Política',
    url: 'politica/lula-larga-2026-pior-posicao-eleitoral-2022-rejeicao-pesquisas.html',
    tags: ['Lula eleições 2026 pesquisa', 'rejeição Lula 2026 Quaest', 'Flávio Bolsonaro empate técnico', 'Toledo análise eleitoral', 'Lula Larga 2026 Pior do que Estava em 2022']
},
{
    title: 'PGFN Cria Laboratório de Teses da Reforma Tributária',
    description: 'A Procuradoria-Geral da Fazenda Nacional instalou uma incubadora de teses jurídicas para mapear e antecipar os litígios da transição para o IVA Dual da reforma tributária, apostando na prevenção do contencioso e na transação tributária como estratégia de segurança jurídica.',
    category: 'Legislação',
    url: 'legislacao/pgfn-incubadora-teses-reforma-tributaria-ibs-cbs-contencioso.html',
    tags: ['PGFN incubadora teses tributárias', 'reforma tributária IBS CBS litígios', 'contencioso tributário 2026', 'transação tributária PTI reform', 'PGFN Cria Laboratório de Teses da Reforma Tributária']
},
{
    title: 'Itaú Fecha Contas de Securitizadora Ligada ao Master',
    description: 'O Itaú BBA encerrou as contas bancárias vinculadas aos CRIs emitidos pela Base Securitizadora, investigada na Operação Compliance Zero da PF. A decisão expõe o contágio do caso Banco Master ao mercado de capitais brasileiro.',
    category: 'Compliance',
    url: 'compliance/itau-encerra-contas-cri-base-securitizadora-compliance-zero-master.html',
    tags: ['Itaú BBA CRI securitizadora', 'Base Securitizadora Compliance Zero', 'Banco Master liquidação 2026', 'mercado securitização CRI irregularidade', 'Itaú Fecha Contas de Securitizadora Ligada ao Master']
},
{
    title: 'Esposa de Moraes Detalha Contrato Milionário com Master',
    description: 'A advogada Viviane Barci de Moraes detalhou em nota pública os serviços prestados ao Banco Master em contrato de R$ 129 milhões, alegando foco em compliance e revisão do código de ética, negando atuação perante o STF.',
    category: 'Compliance',
    url: 'compliance/viviane-barci-moraes-contrato-banco-master-compliance-etica.html',
    tags: ['Viviane Barci Moraes', 'Banco Master compliance', 'Alexandre de Moraes STF conflito', 'contrato milionário escritório', 'Esposa de Moraes Detalha Contrato Milionário com Master']
},
{
    title: 'Direita Fragmentada Aposta Tudo em Flávio Bolsonaro',
    description: 'A campanha de Flávio Bolsonaro classifica como inviável a coexistência de três candidaturas conservadoras competitivas em 2026. Com Jair Bolsonaro preso e inelegível, a direita enfrenta sua maior crise de representação.',
    category: 'Política',
    url: 'politica/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.html',
    tags: ['Flávio Bolsonaro 2026', 'direita fragmentada eleições', 'PL presidencial', 'Caiado Ratinho Jr candidatura', 'Direita Fragmentada Aposta Tudo em Flávio Bolsonaro']
},
{
    title: 'Reforma Legislativa Reestrutura Proteção do Produtor Rural',
    description: 'O Ministério da Agricultura e o Congresso Nacional articulam a aprovação do PL 2951/2024, que vincula o seguro rural ao crédito subsidiado do Plano Safra e propõe migrar gradualmente o risco climático do Tesouro para o mercado segurador privado.',
    category: 'Legislação',
    url: 'legislacao/reforma-legislativa-seguro-rural-pl-2951-plano-safra-2026.html',
    tags: ['seguro rural', 'PL 2951/2024', 'Plano Safra 2026', 'seguro paramétrico', 'Reforma Legislativa Reestrutura Proteção do Produtor Rural']
},
{
    title: 'TST Pune Uso de Precedentes Falsos Gerados por IA',
    description: 'A Sexta Turma do TST condenou por litigância de má-fé empresa de telecomunicações e advogado após identificar precedentes judiciais inexistentes ou adulterados possivelmente gerados por inteligência artificial. Ofícios foram encaminhados à OAB e ao MPF.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tst-pune-precedentes-falsos-ia-litigancia-ma-fe-telecom.html',
    tags: ['TST', 'inteligência artificial advocacia', 'litigância de má-fé', 'jurisprudência falsa IA', 'TST Pune Uso de Precedentes Falsos Gerados por IA']
},
{
    title: 'Militares Doentes Ganham Isenção Previdenciária em Minas',
    description: 'O governo Zema encaminha à ALMG projeto de lei que estende a policiais e bombeiros militares aposentados ou pensionistas portadores de doenças graves a isenção de contribuição previdenciária até o dobro do teto do INSS.',
    category: 'Direito Militar',
    url: 'direito-militar/isencao-previdenciaria-militares-doencas-graves-minas-gerais-zema.html',
    tags: ['isenção previdenciária militar', 'PMMG', 'Zema ALMG', 'doenças graves servidores militares', 'Militares Doentes Ganham Isenção Previdenciária em Minas']
},
{
    title: 'Nexo Causal Ausente Derruba Pedido de Indenização Trabalhista',
    description: 'A Justiça do Trabalho da 15ª Região julgou improcedentes pedidos de indenização de auxiliar de serviços gerais que alegava acidente durante limpeza. Perícia médica afastou nexo causal e identificou patologias degenerativas.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/nexo-causal-ausente-indenizacao-acidente-trabalho-improcedente.html',
    tags: ['acidente de trabalho', 'nexo causal', 'doença ocupacional', 'perícia médica trabalhista', 'Nexo Causal Ausente Derruba Pedido de Indenização Trabalhista']
},
{
    title: 'Suspeita de Homicídio Deixa Prisão Preventiva',
    description: 'Magistrada de Bento Gonçalves substitui prisão preventiva de acusada de encomender assassinato do companheiro por medidas cautelares. Ministério Público recorreu ao TJRS para reverter o despacho.',
    category: 'Direito Criminal',
    url: 'direito-penal/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.html',
    tags: ['prisão preventiva', 'medidas cautelares', 'homicídio doloso', 'TJRS', 'Suspeita de Homicídio Deixa Prisão Preventiva']
},
{
    title: 'Mediação Familiar Ganha Força em Mutirão Virtual',
    description: 'O Cejusc de Fortaleza promove mutirão virtual com 266 audiências de mediação nas Varas de Família da Capital, reunindo 50 mediadores em 20 salas simultâneas para acelerar a solução consensual de conflitos familiares.',
    category: 'Direito de Família',
    url: 'direito-de-familia/cejusc-fortaleza-mutirao-virtual-mediacao-familia.html',
    tags: ['mediação familiar', 'Cejusc Fortaleza', 'TJCE', 'solução consensual', 'Mediação Familiar Ganha Força em Mutirão Virtual']
},    
{
    title: 'Leilão de Imóvel Exige Notificação Prévia ao Devedor',
    description: 'A execução extrajudicial de imóveis por alienação fiduciária só é legítima quando o credor esgota todos os meios de intimação pessoal do devedor antes de recorrer ao edital.',
    category: 'Direito Civil',
    url: 'direito-civil/leilao-extrajudicial-notificacao-devedor-imovel.html',
    tags: ['alienação fiduciária', 'leilão extrajudicial', 'notificação do devedor', 'Lei 9.514/1997', 'Leilão de Imóvel Exige Notificação Prévia ao Devedor']
},
{
    title: 'Receita Falsa Opioide e a Semi-Imputabilidade',
    description: 'Funcionário de clínica veterinária falsificou receituários para adquirir opioides e foi condenado pela 1ª Vara Criminal de Tupã. O caso expõe a fronteira entre dependência química e responsabilidade penal reduzida.',
    category: 'Direito Criminal',
    url: 'direito-penal/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.html',
    tags: ['receita falsa', 'documento falso', 'semi-imputabilidade', 'princípio da consunção', 'Receita Falsa Opioide e a Semi-Imputabilidade']
},
{
    title: 'Compliance Virou Escudo Jurídico das Empresas',
    description: 'Com 83,8 milhões de processos em tramitação e fiscalização digital crescente, o compliance corporativo consolida-se como proteção jurídica e financeira essencial. Especialistas apontam cinco frentes de intervenção para reduzir passivos e fortalecer a governança empresarial.',
    category: 'Compliance',
    url: 'compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html',
    tags: ['Compliance corporativo', 'Lei Anticorrupção', 'Governança empresarial', 'Risco jurídico', 'Compliance Virou Escudo Jurídico das Empresas']
},
{
    title: 'Fuga à Viatura Abre Porta Sem Mandado',
    description: 'STJ consolida entendimento de que fuga em direção ao domicílio ao avistar viatura policial justifica ingresso forçado sem mandado. Tese tensiona a inviolabilidade constitucional do lar e os limites do flagrante presumido.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/fuga-viatura-policial-domicilio-sem-mandado-stj-jurisprudencia.html',
    tags: ['Inviolabilidade do domicílio', 'Fuga policial', 'Flagrante delito', 'STJ', 'Fuga à Viatura Abre Porta Sem Mandado']
},
{
    title: 'Senado Endurece Proteção Contra Feminicídio',
    description: 'O PL 953/2026 eleva a pena máxima do feminicídio para 50 anos, tipifica instigação por terceiros contra vítimas e cria cadastro nacional de condenados. Proposta tramita no Senado no aniversário de 20 anos da Lei Maria da Penha.',
    category: 'Legislação',
    url: 'legislacao/senado-feminicidio-pena-maxima-protecao-mulheres-pl-953.html',
    tags: ['Feminicídio', 'Lei Maria da Penha', 'PL 953 2026', 'Violência doméstica', 'Senado Endurece Proteção Contra Feminicídio']
},
{
    title: 'Diálogos de Vorcaro Ameaçam Provas no STF',
    description: 'Vazamento de mensagens do celular de Daniel Vorcaro levou o STF a abrir inquérito. Especialistas alertam que a divulgação ilícita pode gerar nulidades processuais e comprometer as investigações sobre o Banco Master.',
    category: 'Política',
    url: 'politica/vorcaro-dialogos-vazamento-nulidade-provas-stf-banco-master.html',
    tags: ['Vorcaro', 'Banco Master', 'STF', 'Vazamento de provas', 'Diálogos de Vorcaro Ameaçam Provas no STF']
},
{
    title: 'Three Paths, One Decisive Choice in Divorce',
    description: 'Brazil records hundreds of thousands of marital dissolutions every year, and the way in which this process is conducted has implications that go far beyond the...',
    category: 'Family Law',
    url: 'direito-de-familia/divorce-extrajudicial-consensual-litigious-differences.html',
    tags: ['Romer carvalho','Three Paths, One Decisive Choice in Divorce', 'out-of-court divorce', 'consensual divorce', 'contested divorce', 'family law', 'division of assets', 'child custody', 'alimony', 'dissolution of marriage', 'registry office']
},
{
    title: 'Três Caminhos, Uma Escolha Decisiva no Divórcio',
    description: 'Entenda as diferenças entre o divórcio extrajudicial em cartório, o consensual judicial e o litigioso, seus requisitos legais, custos e impactos para cônjuges e filhos.',
    category: 'Direito de Família',
    url: 'direito-de-familia/divorcio-extrajudicial-consensual-litigioso-diferencas.html',
    tags: ['Romer carvalho','divórcio extrajudicial', 'divórcio consensual', 'divórcio litigioso', 'direito de família', 'partilha de bens', 'guarda de filhos', 'alimentos', 'dissolução do casamento', 'cartório']
},
{
    title: 'STJ e Seguro de Vida Blindagem Jurisprudencial',
    description: 'O STJ consolidou blindagem protetiva ao redor do seguro de vida, exigindo dolo específico para excluir cobertura por agravamento de risco, em entendimento positivado pelo Marco Legal dos Seguros.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/stj-seguro-vida-blindagem-jurisprudencial-agravamento-risco.html',
    tags: ['seguro de vida', 'STJ', 'agravamento de risco', 'Súmula 610', 'Súmula 620', 'Marco Legal dos Seguros', 'dolo específico', 'indenização securitária', 'jurisprudência']
},
{
    title: 'SentinELAS Chega Para Proteger Recrutas Femininas',
    description: 'O MPM lançou o aplicativo SentinELAS, ferramenta digital de proteção jurídica e acolhimento voltada às mulheres que ingressaram no Serviço Militar Inicial Feminino.',
    category: 'Direito Militar',
    url: 'direito-militar/sentinelas-mpm-protecao-mulheres-forcas-armadas.html',
    tags: ['SentinELAS', 'MPM', 'Ministério Público Militar', 'mulheres Forças Armadas', 'serviço militar feminino', 'proteção jurídica militar', 'assédio sexual militar', 'SMIF']
},
{
    title: 'Tarcísio Enterra Terceira Via em 2026',
    description: 'O governador de São Paulo descartou qualquer alternativa eleitoral fora da disputa entre Lula e Flávio Bolsonaro e declarou apoio formal ao senador do PL para 2026.',
    category: 'Política',
    url: 'politica/tarcisio-enterra-terceira-via-eleicoes-2026.html',
    tags: ['Tarcísio de Freitas', 'terceira via', 'eleições 2026', 'Flávio Bolsonaro', 'Lula', 'polarização política', 'PSD', 'cenário eleitoral', 'reeleição São Paulo']
},
{
    title: 'Compliance Como Escudo Invisível Consumidor',
    description: 'O compliance vai muito além da burocracia corporativa: é o mecanismo silencioso que protege o consumidor contra fraudes, crédito predatório e vazamento de dados.',
    category: 'Compliance',
    url: 'compliance/compliance-escudo-invisivel-protecao-consumidor.html',
    tags: ['compliance', 'proteção do consumidor', 'gestão de riscos', 'governança corporativa', 'prevenção de fraudes', 'crédito responsável', 'proteção de dados', 'conformidade regulatória']
},
{
    title: 'Licença Paternidade Vai Até Vinte Dias',
    description: 'O Senado Federal aprovou a expansão gradual da licença-paternidade no Brasil, elevando o prazo de cinco para vinte dias até 2029, com custeio pelo RGPS.',
    category: 'Legislação',
    url: 'legislacao/senado-licenca-paternidade-ampliacao-lei-previdencia.html',
    tags: ['licença paternidade', 'ampliação licença paternidade', 'Senado Federal', 'STF omissão legislativa', 'Política Nacional de Cuidados', 'previdência social', 'salário paternidade', 'legislação trabalhista']
},
{
    title: 'Suspensão de Dívida Ativa: o Que a Lei Garante',
    description: 'A Lei do Superendividamento permite que consumidores endividados suspendam obrigações financeiras por até seis meses, mediante análise judicial.',
    category: 'Direito Civil',
    url: 'direito-civil/divida-ativa-suspensao-pagamentos-lei-superendividamento.html',
    tags: ['dívida ativa', 'superendividamento', 'lei do superendividamento', 'suspensão de pagamento', 'renegociação de dívidas', 'direito civil', 'mínimo existencial']
},
{
    title: 'Trump Tem Uma Semana para Liberar o Petróleo do Oriente Médio Antes dos Preços Explodirem',
    description: 'Com o Estreito de Ormuz bloqueado pela guerra com o Irã e os preços do barril acumulando alta de 35% no ano, analistas alertam que Trump tem poucos dias para mostrar progresso concreto antes que os mercados percam a paciência.',
    category: 'Política',
    url: 'politica/trump-uma-semana-liberar-petroleo-oriente-medio-preco-disparar.html',
    tags: ['petróleo Oriente Médio', 'Estreito de Ormuz', 'crise energética', 'preço do petróleo 2026', 'Trump Tem Uma Semana para Liberar o Petróleo do Oriente Médio Antes dos Preços Explodirem']
},
{
    title: 'Trump Lança Resseguro de US$ 20 Bi para Petroleiros no Estreito de Ormuz',
    description: 'O governo Trump anunciou um programa de resseguro de US$ 20 bilhões para navios petroleiros no Estreito de Ormuz, em meio ao conflito com o Irã, visando estabilizar o fornecimento global de petróleo.',
    category: 'Política',
    url: 'politica/trump-resseguro-20-bilhoes-petroleiros-estreito-ormuz.html',
    tags: ['resseguro marítimo', 'Estreito de Ormuz', 'crise do petróleo', 'Donald Trump', 'Trump Lança Resseguro de US$ 20 Bi para Petroleiros no Estreito de Ormuz']
},
{
        title: 'Paes Joga Xadrez Enquanto Rio Elege Governador na Surdina',
        description: 'Com a dupla vacância no Executivo fluminense, o Rio caminha para uma eleição indireta na Alerj. Eduardo Paes articula alianças para outubro enquanto a direita disputa quem ocupará o Palácio Guanabara antes do pleito de outubro de 2026.',
        category: 'Política',
        url: 'politica/paes-eleicao-indireta-rio-governador-tampao-alerj-2026.html',
        tags: ['Eduardo Paes', 'eleição indireta', 'Rio de Janeiro', 'governador-tampão', 'Alerj', 'Cláudio Castro', 'eleições 2026', 'PSD', 'PL', 'Douglas Ruas', 'Palácio Guanabara', 'Senado', 'Jane Reis']
},
{
        title: 'Lula Apoia Paes no RJ, Mas Exige Chapa Competitiva',
        description: 'Lula confirma apoio a Eduardo Paes para o governo do Rio em 2026, mas exige formação de aliança eleitoral ampla. PT reivindica vaga no Senado para Benedita da Silva e monitora com ceticismo a composição da chapa fluminense.',
        category: 'Política',
        url: 'politica/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.html',
        tags: ['Lula', 'Eduardo Paes', 'eleições 2026', 'Rio de Janeiro', 'PT', 'PSD', 'Benedita da Silva', 'chapa eleitoral', 'Palácio Guanabara', 'Senado', 'Alerj', 'aliança política']
},
{
        title: 'Assédio no Trabalho: Processos Explodem na Justiça Laboral',
        description: 'Em 2025, a Justiça do Trabalho recebeu 142.828 novos processos de assédio moral (+22%) e 12.813 de assédio sexual (+40%). Os dados expõem a persistência das condutas abusivas e a crescente conscientização jurídica dos trabalhadores brasileiros.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/assedio-moral-sexual-processos-trabalhistas-aumento-2025.html',
        tags: ['assédio moral', 'assédio sexual', 'Justiça do Trabalho', 'TST', 'direito trabalhista', 'CLT', 'rescisão indireta', 'violência laboral', 'ambiente de trabalho', 'dignidade do trabalhador', 'indenização trabalhista']
},
{
        title: 'STJ Decide: Droga Apreendida Afasta Benefício Penal?',
        description: 'A 3ª Seção do STJ suspendeu o julgamento dos Temas Repetitivos 1.154 e 1.241, que discutem se quantidade e natureza da droga podem afastar o tráfico privilegiado ou modular a fração de redução da pena na dosimetria penal.',
        category: 'Direito Criminal',
        url: 'direito-penal/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.html',
        tags: ['tráfico privilegiado', 'STJ', 'dosimetria da pena', 'lei de drogas', 'temas repetitivos', 'minorante', 'bis in idem', 'direito penal', 'art. 33 lei 11.343', 'regime inicial']
},
{
        title: 'Cartórios na Linha de Frente Contra Violência Patrimonial Feminina',
        description: 'O Registro de Imóveis do Brasil lança plantão gratuito de orientação jurídica para mulheres sobre direitos patrimoniais em 11 estados. A iniciativa expõe a desinformação como principal vetor de vulnerabilidade feminina no Direito de Família.',
        category: 'Direito de Família',
        url: 'direito-de-familia/cartorios-protecao-patrimonial-mulheres-violencia-silenciosa.html',
        tags: ['violência patrimonial', 'mulheres', 'registro de imóveis', 'Lei Maria da Penha', 'regime de bens', 'união estável', 'cartórios', 'direito de família', 'autonomia financeira feminina']
},
{
        title: 'Armadilhas Digitais: Consumidor Brasileiro Desprotegido Frente à Europa',
        description: 'Padrões manipulativos de design no comércio eletrônico exploram vulnerabilidades do consumidor brasileiro. Enquanto a União Europeia avança com o Digital Services Act, o Brasil ainda engatinha na fiscalização efetiva das dark patterns.',
        category: 'Direito Civil',
        url: 'direito-civil/armadilhas-digitais-consumidor-brasileiro-desprotegido-frente-europa.html',
        tags: ['dark patterns', 'e-commerce', 'LGPD', 'CDC', 'direito do consumidor', 'Digital Services Act', 'proteção de dados', 'práticas abusivas digitais']
},
{
    title: 'PMs Viram Réus por Roubo Fardado',
    description: 'Três policiais militares do RJ foram presos em flagrante por roubar 11 celulares de passageiros de ônibus durante o expediente, configurando roubo qualificado, abuso de autoridade e responsabilidade civil do Estado.',
    category: 'Direito Penal',
    url: 'direito-militar/pms-presos-roubo-celulares-onibus-expediente-rj-2026.html',
    tags: ['PM Preso', 'Roubo Qualificado', 'Abuso de Autoridade', 'Segurança Pública RJ', 'Corregedoria PM', 'Direito Penal', 'PMs Viram Réus por Roubo Fardado']
},
{
    title: 'Código Civil Ignora a Família Real',
    description: 'Especialistas e juristas debatem no Senado a urgência de reformar o Código Civil no campo do direito de família e das sucessões, apontando lacunas sobre herança digital, reprodução assistida, divórcio unilateral e união homoafetiva.',
    category: 'Direito de Família',
    url: 'direito-de-familia/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.html',
    tags: ['Código Civil', 'Direito de Família', 'Direito das Sucessões', 'Divórcio Unilateral', 'União Homoafetiva', 'Herança Digital', 'PL 4/2025', 'Código Civil Ignora a Família Real']
},
{
    title: 'Migração Partidária Reforça Centro-Direita na Câmara',
    description: 'Levantamento do TSE revela que 10% dos deputados federais já mudou de partido antes da janela partidária de abril de 2026, com o centro-direita ganhando força na Câmara e alterando o equilíbrio parlamentar.',
    category: 'Política',
    url: 'politica/migracao-partidaria-reforco-centro-direita-camara-janela-2026.html',
    tags: ['Janela Partidária', 'Migração Partidária', 'Centro-Direita', 'Câmara dos Deputados', 'TSE', 'Eleições 2026', 'Infidelidade Partidária', 'Migração Partidária Reforça Centro-Direita na Câmara']
},
{
    title: 'Senado Aprova Redução de Penas',
    description: 'O Senado Federal aprovou o PL da dosimetria, que reduz os percentuais de cumprimento de pena em regime fechado para condenados pelo 8 de Janeiro. O texto segue para sanção presidencial e pode beneficiar o ex-presidente Jair Bolsonaro.',
    category: 'Direito Criminal',
    url: 'direito-penal/senado-aprova-reducao-penas-8j-dosimetria-sancao.html',
    tags: ['PL da Dosimetria', '8 de Janeiro', 'Progressão de Regime', 'Lei de Execução Penal', 'Bolsonaro', 'Senado Federal', 'Direito Penal', 'Senado Aprova Redução de Penas do 8J']
},
{
    title: 'Rio Protege Servidores do Assédio Funcional',
    description: 'A Prefeitura do Rio publicou a Resolução SMIT nº 23, que institui o Guia de Acolhimento na Apuração de Assédio, tornando obrigatório o tratamento humanizado e sigiloso às vítimas de assédio moral e sexual na administração pública municipal.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/rio-protege-servidores-assedio-funcional-guia-smit.html',
    tags: ['Assédio Moral', 'Assédio Sexual', 'Servidor Público', 'SMIT', 'Prefeitura do Rio', 'Lei 14.540/2023', 'Direito Trabalhista', 'Rio Protege Servidores do Assédio Funcional']
},
{
    title: 'CGU Eleva o Padrão do Compliance',
    description: 'A Portaria Normativa CGU 226/25 eleva o padrão dos programas de integridade nas contratações públicas, exigindo efetividade real e não apenas conformidade documental, sob pena de severas sanções administrativas.',
    category: 'Compliance',
    url: 'compliance/cgu-eleva-padrao-compliance-contratacoes-publicas-pn-226-25.html',
    tags: ['CGU', 'Compliance', 'Contratações Públicas', 'Integridade', 'PN CGU 226/25', 'Licitações', 'Anticorrupção', 'CGU Eleva o Padrão do Compliance']
},
{
    title: 'Dez Anos do CPC',
    description: 'Webinar promovido pelo TJRR debate os dez anos do CPC de 2015, analisando a consolidação da jurisprudência, o sistema de precedentes obrigatórios e os desafios práticos do processo civil brasileiro.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/dez-anos-cpc-2015-webinar-legado-jurisprudencia.html',
    tags: ['CPC 2015', 'Código de Processo Civil', 'Jurisprudência', 'Precedentes Obrigatórios', 'TJRR', 'Webinar', 'Dez Anos do CPC']
},
{
    title: 'SC regulamenta Cordão de Girassol para deficiências ocultas',
    description: 'A Assembleia Legislativa de Santa Catarina aprovou legislação que oficializa o uso do Cordão de Girassol como símbolo de identificação de pessoas com deficiências não aparentes, como autismo, surdez e condições cognitivas.',
    category: 'Legislacao',
    url: 'legislacao/sc-regulamenta-cordao-girassol-deficiencias-ocultas-alesc.html',
    tags: ['Cordão de Girassol', 'Deficiências Ocultas', 'ALESC', 'Inclusão', 'SC regulamenta Cordão de Girassol para deficiências ocultas']
},
{
    title: 'MDB se divide e rejeita vice na chapa de Lula',
    description: 'A maioria dos diretórios estaduais do MDB formalizou manifesto rejeitando aliança nacional com o PT e pedindo neutralidade nas eleições presidenciais de 2026.',
    category: 'Politica',
    url: 'politica/mdb-divide-rejeita-vice-chapa-lula-eleicoes-2026.html',
    tags: ['MDB', 'Lula', 'Eleições 2026', 'Baleia Rossi', 'MDB se divide e rejeita vice na chapa de Lula']
},
{
    title: 'TRF-4 garante aposentadoria negada por 48 horas',
    description: 'O TRF-4, por unanimidade, concedeu aposentadoria por incapacidade permanente a segurado privado do benefício por diferença de apenas 48 horas no período de graça, reafirmando que as doenças devem ser analisadas como processos dinâmicos.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/trf4-aposentadoria-invalidez-inss-periodo-graca-doenca-dinamica.html',
    tags: ['INSS', 'Aposentadoria por Invalidez', 'Período de Graça', 'TRF-4', 'TRF-4 garante aposentadoria negada por 48 horas']
},
{
    title: 'SBT condenado por humilhação em programa televisivo',
    description: 'A 9ª Vara Cível de São Paulo condenou o SBT ao pagamento de R$ 30 mil por danos morais a participante do Programa do Ratinho submetido a exposição vexatória em rede nacional.',
    category: 'Direito Civil',
    url: 'direito-civil/sbt-condenado-humilhacao-programa-televisivo-ratinho-danos-morais.html',
    tags: ['SBT', 'Danos Morais', 'Direito à Imagem', 'Programa do Ratinho', 'SBT condenado por humilhação em programa televisivo']
},
{
    title: 'Tolerância zero: o arcabouço legal contra violência feminina',
    description: 'A política de tolerância zero à violência contra a mulher é um arcabouço normativo que vai além da punição e busca transformar as estruturas sociais que perpetuam a violência de gênero no Brasil.',
    category: 'Direito de Família',
    url: 'direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html',
    tags: ['Violência contra a Mulher', 'Lei Maria da Penha', 'Feminicídio', 'Tolerância Zero', 'Tolerância zero: o arcabouço legal contra violência feminina']
},
{
    title: 'MPRJ reverte posição e pede internação de menor',
    description: 'Após novas vítimas emergirem no caso de estupro coletivo de Copacabana, o MPRJ reverteu sua posição e passou a requerer a internação provisória do adolescente investigado.',
    category: 'Direito Criminal',
    url: 'direito-penal/mprj-reverte-posicao-pede-internacao-menor-estupro-coletivo.html',
    tags: ['Estupro Coletivo', 'MPRJ', 'Internação de Menor', 'Ato Infracional', 'MPRJ reverte posição e pede internação de menor']
},
{
    title: 'Trump Admite Vácuo de Poder no Irã',
    description: 'Trump admitiu que ataques de EUA e Israel eliminaram os possíveis sucessores de Khamenei no Irã e anunciou terceira onda de bombardeios enquanto contra-ataques iranianos ameaçam o Estreito de Ormuz.',
    category: 'Política',
    url: 'politica/trump-vacuo-poder-ira-sucessores-khamenei-mortos.html',
    tags: ['Trump', 'Irã', 'Khamenei', 'Israel', 'Guerra Irã', 'Vácuo de Poder', 'Trump Admite Vácuo de Poder no Irã']
},
{
    title: 'Lula Pede Voto com Ironia Eleitoral',
    description: 'Durante a 2ª Conferência Nacional do Trabalho em São Paulo, Lula ironizou a ideia de sorte pelos indicadores econômicos e convocou eleitores a votarem em quem tem sorte.',
    category: 'Política',
    url: 'politica/lula-pede-voto-ironia-eleitoral-conferencia-trabalho-sp.html',
    tags: ['Lula', 'Eleições 2026', 'Pedido de Voto', 'TSE', 'Propaganda Eleitoral', 'Lula Pede Voto com Ironia Eleitoral']
},
{
    title: 'Alcolumbre Bloqueia Indicação de Messias ao STF',
    description: 'Davi Alcolumbre sinalizou a aliados que não deve pautar a sabatina de Jorge Messias ao STF neste ano.',
    category: 'Política',
    url: 'politica/alcolumbre-bloqueia-indicacao-messias-stf-2026.html',
    tags: ['Alcolumbre', 'Jorge Messias', 'STF', 'Senado Federal', 'Indicação STF', 'Alcolumbre Bloqueia Indicação de Messias ao STF']
},
{
    title: 'Justiça Militar Condena PM por Lesão Grave no Recife',
    description: 'A Vara da Justiça Militar Estadual de Pernambuco condenou policial militar a três anos e seis meses por lesão corporal grave após disparar bala de borracha e cegar estudante em encontro de passinho no Recife.',
    category: 'direito-militar',
    url: 'direito-militar/pm-condenado-lesao-grave-bala-borracha-passinho-recife.html',
    tags: ['Justiça Militar', 'Policial Militar Condenado', 'Bala de Borracha', 'Lesão Corporal Grave', 'Recife', 'TJPE', 'Justiça Militar Condena PM por Lesão Grave no Recife']
},
{
    title: 'Janja Revela Dois Casos de Assédio como Primeira-Dama',
    description: 'A primeira-dama Janja da Silva revelou ao programa Sem Censura, da TV Brasil, ter sido assediada duas vezes durante o mandato de Lula, usando o relato para destacar a vulnerabilidade das mulheres brasileiras.',
    category: 'Política',
    url: 'politica/janja-revela-assedio-como-primeira-dama-sem-censura.html',
    tags: ['Janja', 'Assédio', 'Primeira-Dama', 'Sem Censura', 'TV Brasil', 'Feminicídio', 'Violência contra Mulher', 'Lula', 'Janja Revela Dois Casos de Assédio como Primeira-Dama']
 },
 {
    title: 'Vorcaro Preso Novamente na Operação Compliance Zero',
    description: 'A Polícia Federal prendeu novamente Daniel Vorcaro, dono do Banco Master, na terceira fase da Operação Compliance Zero, autorizada pelo ministro André Mendonça do STF, que apura fraudes bilionárias, lavagem de dinheiro e corrupção.',
    category: 'Compliance',
    url: 'compliance/vorcaro-preso-operacao-compliance-zero-banco-master.html',
    tags: ['Daniel Vorcaro', 'Banco Master', 'Operação Compliance Zero', 'Polícia Federal', 'STF', 'André Mendonça', 'Lavagem de Dinheiro', 'Vorcaro Preso Novamente na Operação Compliance Zero']
  },
  {
    title: 'O MPSE Coloca o Assédio na Pauta Institucional e Lidera Debate',
    description: 'O Ministério Público de Sergipe promoveu palestra sobre prevenção do assédio moral e sexual no setor público, reforçando a cultura do respeito nas relações de trabalho.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/assedio-servico-publico-mpse-palestra-prevencao.html',
    tags: ['O MPSE Coloca o Assédio na Pauta Institucional e Lidera Debate','Assédio Moral', 'Assédio Sexual', 'Setor Público', 'MPSE', 'Ministério Público de Sergipe', 'Prevenção Assédio', 'Assédio no Serviço Público: MPSE Lidera Debate']
  },
  {
    title: 'Operação Argos: PF Age Contra Abuso Sexual Infantil',
    description: 'A Polícia Federal deflagrou a Operação Argos em Porto Velho para combater crimes de abuso sexual infantojuvenil, cumprindo mandado de busca e apreensão expedido pela Justiça Federal de Rondônia.',
    category: 'Direito Criminal',
    url: 'direito-penal/operacao-argos-pf-abuso-sexual-infantojuvenil-porto-velho.html',
    tags: ['Operação Argos', 'Polícia Federal', 'Abuso Sexual Infantil', 'Porto Velho', 'Rondônia', 'ECA', 'Operação Argos: PF Age Contra Abuso Sexual Infantil']
  },
  {
    title: 'Instagram Pode Entrar na Partilha de Bens?',
    description: 'Perfil no Instagram pode ser partilhado no divórcio quando configurado como ativo intangível com valor econômico constituído durante a relação conjugal.',
    category: 'Direito de Família',
    url: 'direito-de-familia/instagram-perfil-partilha-bens-divorcio.html',
    tags: ['Partilha de Bens', 'Instagram', 'Divórcio', 'Ativo Intangível', 'Patrimônio Digital', 'Instagram Pode Entrar na Partilha de Bens?']
  },
  {
    title: 'Responsabilidade Objetiva e Nexo Causal no STJ',
    description: 'O STJ reforça a centralidade do nexo causal na responsabilidade objetiva, distinguindo risco da atividade e fortuito externo em precedentes recentes.',
    category: 'Direito Civil',
    url: 'direito-civil/responsabilidade-objetiva-stj-precedentes.html',
    tags: ['Responsabilidade Objetiva', 'Nexo Causal', 'STJ', 'Fortuito Externo', 'Risco da Atividade', 'Responsabilidade Objetiva e Nexo Causal no STJ']
   },
   {
        title: 'Ministra do TST derruba jornada 12x36 de vigilante após identificar acúmulo sistemático de horas extraordinárias',
        description: 'A prática de escalar vigilantes no regime de 12 horas de trabalho por 36 de descanso — amplamente utilizada no setor de segurança privada.',
        category: 'Direito Trabalhista',
        url: 'jurisprudencia/stf-prorroga-90-dias-fundo-participacao-estados.html',
        tags: ['vigilante', 'TST', 'Ministra do TST derruba jornada 12x36 de vigilante após identificar acúmulo sistemático de horas extraordinárias']
    },
    {
        title: 'STF Prorroga por 90 Dias as Regras de Distribuição do Fundo de Participação dos Estados',
        description: 'O Fundo de Participação dos Estados (FPE) é um dos pilares estruturais do federalismo fiscal brasileiro.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/stf-prorroga-90-dias-fundo-participacao-estados.html',
        tags: ['Participação dos Estados', ' Congresso Nacional ', 'STF Prorroga por 90 Dias as Regras de Distribuição do Fundo de Participação dos Estados']
    },
    {
        title: 'Nova Norma da Receita Federal Sobre Multas Beneficia Empresas',
        description: 'A Receita Federal do Brasil publicou, em 2 de março de 2026, a Instrução Normativa RFB nº 2.310, instrumento normativo que altera.',
        category: 'Legislação',
        url: 'legislacao/nova-norma-receita-federal-multa-beneficia-empresas.html',
        tags: ['Nova Norma da Receita Federal Sobre Multas Beneficia Empresas', 'Receita Federa ']
    },
    {
        title: 'Protegidas no Papel, Vulneráveis na Vida Real',
        description: 'A cada novo caso de feminicídio noticiado no país, um detalhe se repete.',
        category: 'Direito de Família',
        url: 'direito-de-familia/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.html',
        tags: ['Protegidas no Papel, Vulneráveis na Vida Real', 'compliance', 'Poder ', 'Os agentes']
    },
    {
        title: 'Projeto de Lei Proíbe Cobrança Extra para Famílias Ocuparem Assentos Vizinhos',
        description: 'Viajar em família nos céus brasileiros tem sido, para milhares de passageiros, uma experiência marcada.',
        category: 'Direito Civil',
        url: 'direito-civil/projeto-lei-proibe-cobranca-familias-assentos-vizinhos-voos.html',
        tags: ['Projeto de Lei Proíbe Cobrança Extra para Famílias Ocuparem Assentos Vizinhos', 'Proíbe Cobrança', 'Garantia']
    },
    {
        title: 'Empresa e Advogado São Condenados pelo TST',
        description: 'O Tribunal Superior do Trabalho condenou uma empresa e seu advogado por litigância.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/empresa-advogado-condenados-tst-citacoes-falsas-jurisprudencia.html',
        tags: ['condenação', 'Advogado', 'Empresa e Advogado São Condenados pelo TST']
    },
    {
        title: 'STM Concede Pela Primeira Vez Medidas Protetivas a Militar Trans Vítima de Assédio Sexual',
        description: 'O Superior Tribunal Militar proferiu, no dia 20 de fevereiro de 2026, uma decisão sem.',
        category: 'Direito Militar',
        url: 'direito-militar/stm-medidas-protetivas-militar-trans-assedio-sexual.html',
        tags: ['Primeira Vez', 'Militar ', ' Assédio Sexual', 'STM Concede Pela Primeira Vez Medidas Protetivas a Militar Trans Vítima de Assédio Sexual']
    },
    {
        title: 'A Decisão do TJMG que Ameaça Décadas de Proteção à Infância',
        description: 'Uma decisão proferida pela 9ª Câmara Criminal Especializada do Tribunal de Justiça de Minas Gerais provocou comoção nacional ao absolver.',
        category: 'Direito Criminal',
        url: 'direito-penal/casamento-crianca-crime-tjmg-estupro-vulneravel-protecao-infancia.html',
        tags: ['Câmara Criminal', 'Minas Gerais', 'Tribunal de Justiça ', 'A Decisão do TJMG que Ameaça Décadas de Proteção à Infância']
    },
    {
        title: 'O Que é Revelado Sobre o Caso do Banco Master ',
        description: 'Quando a Polícia Federal deflagrou a Operação Compliance Zero em novembro de 2025 e decretou a prisão.',
        category: 'Compliance',
        url: 'compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html',
        tags: ['Romer carvalho','esquema bilionário', 'Polícia Federal', 'Operação Compliance Zero', 'O Que é Revelado Sobre o Caso do Banco Master ']
    },
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
        tags: ['O Escudo que o Poder Tenta Dobrar', 'compliance', 'Poder ', 'Os agentes', 'Romer Carvalho']
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
        url: 'legislacao/programa-gas-do-povo.html',
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
        url: 'politica/advocacia-que-nao-se-conhece-financeiramente-nao-sobrevive-o-imperativo-da-gestao-para-escritorios-em-2026.html',
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
    category: 'Política',
        url: 'politica/advocacia-que-nao-se-conhece-financeiramente.html',
        tags: ['Advocacia ', 'sobrevive', 'Advocacia que não se conhece financeiramente não sobrevive', 'Prevenir']
    },
    {
        title: 'O Novo Labirinto Fiscal',
        description: 'O Brasil nunca teve uma relação simples com o capital estrangeiro. A história econômica do país é pontuada por ciclos de abertura e fechamento',
    category: 'Política',
        url: 'politica/o-novo-labirinto-fiscal-as-regras-de-tributacao.html',
        tags: ['O novo labirinto fiscal', 'Revolução Silenciosa', 'multinacional brasileira', 'Prevenir']
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