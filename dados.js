let dados = [
    {
        titulo: "Dragon Ball",
        descricao: `Dragon Ball é uma das franquias de anime mais populares e influentes do mundo,
        criada por Akira Toriyama. A história acompanha Goku, um jovem Saiyan com uma força sobre-humana,
        em suas aventuras para coletar as Esferas do Dragão, artefatos místicos capazes de realizar qualquer desejo.`,
        link: "https://dragonball.fandom.com/pt-br/wiki/Dragon_Ball_Wiki",
        genero: "Ação, Aventura, Artes Marciais",
        autor: "Akira Toriyama",
        ano: "1986",
        tags: "ação aventura artes marciais superpoderes"
    },
    {
        titulo: "Naruto",
        descricao: `Naruto Uzumaki é um jovem ninja que busca reconhecimento e
        sonha em se tornar Hokage, o líder da vila de Konoha. 
        A história acompanha sua jornada para dominar suas habilidades ninja e proteger suas pessoas.`,
        link: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto",
        genero: "Ação, Aventura, Fantasia",
        autor: "Masashi Kishimoto",
        ano: "2002",
        tags: "ação aventura ninjas fantasia"
    },
    {
        titulo: "One Piece",
        descricao: `One Piece é uma aventura épica que acompanha Monkey D. Luffy,
        um jovem pirata que busca o tesouro mais famoso do mundo, o One Piece, para se tornar o Rei dos Piratas.
        Juntamente com sua tripulação, ele navega pelos mares, enfrentando desafios e inimigos poderosos.`,
        link: "https://onepiece.fandom.com/pt/wiki/P%C3%A1gina_principal",
        genero: "Ação, Aventura, Comédia",
        autor: "Eiichiro Oda",
        ano: "1999",
        tags: "ação aventura piratas comédia"
    },
    {
        titulo: "Attack on Titan",
        descricao: `Em um mundo onde a humanidade vive cercada por muralhas devido à ameaça dos Titãs,
        seres gigantes que devoram pessoas, Eren Yeager se junta ao Exército para lutar contra esses monstros.`,
        link: "https://attackontitan.fandom.com/pt-br/wiki/Attack_on_Titan_Wiki",
        genero: "Ação, Fantasia, Horror",
        autor: "Hajime Isayama",
        ano: "2013",
        tags: "ação fantasia horror titãs"
    },
    {
        titulo: "Fullmetal Alchemist: Brotherhood",
        descricao: `Os irmãos Edward e Alphonse Elric usam alquimia para tentar reviver sua mãe, mas falham e pagam um preço terrível.
        Agora, eles buscam a lendária Pedra Filosofal para recuperar o que perderam.`,
        link: "https://fma.fandom.com/wiki/Fullmetal_Alchemist:_Brotherhood",
        genero: "Aventura, Ação, Fantasia",
        autor: "Hiromu Arakawa",
        ano: "2009",
        tags: "aventura ação fantasia alquimia"
    },
    {
        titulo: "Death Note",
        descricao: `Light Yagami encontra um caderno sobrenatural que tem o poder de matar qualquer pessoa cujo nome seja escrito nele.
        Ele decide usar esse poder para livrar o mundo de criminosos, mas logo atrai a atenção de um misterioso detetive chamado L.`,
        link: "https://deathnote.fandom.com/pt/wiki/Death_Note_Wiki",
        genero: "Suspense, Mistério, Sobrenatural",
        autor: "Tsugumi Ohba",
        ano: "2006",
        tags: "suspense mistério sobrenatural thriller"
    },
    {
        titulo: "My Hero Academia",
        descricao: `Em um mundo onde quase todos têm superpoderes chamados "quirks", Izuku Midoriya nasce sem nenhum poder,
        mas não desiste de seu sonho de se tornar um grande herói.`,
        link: "https://myheroacademia.fandom.com/pt-br/wiki/P%C3%A1gina_principal",
        genero: "Ação, Super-herói, Fantasia",
        autor: "Kohei Horikoshi",
        ano: "2016",
        tags: "ação super-herói fantasia quirks"
    },
    {
        titulo: "Sword Art Online",
        descricao: `Um grupo de jogadores fica preso dentro de um videogame de realidade virtual,
        onde se morrerem no jogo, também morrerão na vida real. Kirito, um jogador solo, luta para libertar a todos.`,
        link: "https://swordartonline.fandom.com/pt-br/wiki/Wiki_Sword_Art_Online",
        genero: "Ação, Fantasia, Ficção Científica",
        autor: "Reki Kawahara",
        ano: "2012",
        tags: "ação fantasia ficção científica realidade virtual"
    },
    {
        titulo: "Demon Slayer",
        descricao: `Tanjiro Kamado é um jovem que, após ver sua família ser massacrada por demônios, decide se tornar um matador de demônios
        para salvar sua irmã, que foi transformada em um deles.`,
        link: "https://kimetsu-no-yaiba.fandom.com/pt-br/wiki/Wiki_Kimetsu_No_Yaiba",
        genero: "Ação, Aventura, Sobrenatural",
        autor: "Koyoharu Gotouge",
        ano: "2019",
        tags: "ação aventura sobrenatural demônios"
    },
    {
        titulo: "Hunter x Hunter",
        descricao: `Gon Freecss parte em uma jornada para se tornar um Hunter, assim como seu pai, a fim de encontrá-lo.
        Ao longo do caminho, ele faz amigos e enfrenta desafios mortais.`,
        link: "https://hunterxhunter.fandom.com/wiki/Hunterpedia",
        genero: "Ação, Aventura, Fantasia",
        autor: "Yoshihiro Togashi",
        ano: "2011",
        tags: "ação aventura fantasia caçadores"
    },
    {
        titulo: "Neon Genesis Evangelion",
        descricao: `Em um mundo pós-apocalíptico, o jovem Shinji Ikari é recrutado para pilotar um mecha gigante,
        o EVA, e lutar contra misteriosas criaturas chamadas Anjos.`,
        link: "https://neongenesisevangelion.fandom.com/pt-br/wiki/P%C3%A1gina_principal",
        genero: "Ficção Científica, Mecha, Psicológico",
        autor: "Hideaki Anno",
        ano: "1995",
        tags: "ficção científica mecha psicológico"
    },
    {
        titulo: "Steins;Gate",
        descricao: `Um grupo de amigos descobre um método de enviar mensagens de texto para o passado,
        mas logo se veem envolvidos em uma conspiração mortal envolvendo viagens no tempo.`,
        link: "https://steins-gate.fandom.com/wiki/Steins;Gate_Wiki",
        genero: "Ficção Científica, Suspense, Drama",
        autor: "Chiyomaru Shikura",
        ano: "2011",
        tags: "ficção científica suspense drama viagens no tempo"
    }
];