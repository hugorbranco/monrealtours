/**
 * MONREAL TOURS — Data Layer
 *
 * Esta estrutura foi projetada pensando no CMS futuro.
 * Cada objeto aqui representa um "tipo de conteúdo" que será
 * gerenciado pelo CMS. As chaves e formatos devem ser mantidos
 * para compatibilidade com a futura integração.
 *
 * MAPEAMENTO PARA CMS:
 * - window.MT.categories → Collection "Categorias"
 * - window.MT.products   → Collection "Produtos"
 * - Cada produto tem: id, title, brand, destination, category,
 *   description, coverImage, gallery[]
 */

window.MT = {

  /* ── CATEGORIAS ─────────────────────────────── */
  categories: [
    {
      id: 'snow',
      title: 'Snow',
      subtitle: 'Aventuras nas Montanhas',
      description: 'Paisagens deslumbrantes cobertas de neve e aventuras nas montanhas geladas.',
      coverImage: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1478020788461-74049fb2e83e?w=1800&q=80',
      longDescription: 'Explore destinos mágicos cobertos de neve e experimente aventuras emocionantes nas montanhas geladas. Seja esquiando nas pistas mais desafiadoras ou desfrutando de paisagens deslumbrantes, a categoria Snow da Monreal Tours oferece experiências únicas para os amantes do inverno.',
    },
    {
      id: 'kite',
      title: 'Kite',
      subtitle: 'Ventos Aventureiros',
      description: 'Experiências únicas de kitesurf nos melhores destinos de vento do mundo.',
      coverImage: 'https://images.unsplash.com/photo-1503912099637-1f47ebb73e8e?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1503912099637-1f47ebb73e8e?w=1800&q=80',
      longDescription: 'Sinta a adrenalina do kitesurf nos mais belos e ventilados destinos do planeta. Da Tailândia ao Brasil, a Monreal Tours seleciona os melhores spots para amadores e profissionais.',
    },
    {
      id: 'cruzeiro',
      title: 'Cruzeiro',
      subtitle: 'Maravilhas Aquáticas',
      description: 'Navegue pelos destinos mais deslumbrantes do mundo com total conforto e sofisticação.',
      coverImage: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=1800&q=80',
      longDescription: 'Embarque numa jornada pelos oceanos e mares mais fascinantes do planeta. Cruzeiros de luxo com serviço excepcional, gastronomia de alto nível e destinos exclusivos.',
    },
    {
      id: 'motor',
      title: 'Motor',
      subtitle: 'Viagens de Carro',
      description: 'Road trips exclusivos e aluguel de veículos de luxo nos melhores destinos.',
      coverImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&q=80',
      longDescription: 'Explore destinos incríveis ao seu próprio ritmo com nossas opções de road trip e aluguel de veículos de luxo. Da Route 66 às estradas panorâmicas europeias.',
    },
    {
      id: 'destinos',
      title: 'Destinos',
      subtitle: 'Descobertas à Vista',
      description: 'Os destinos mais exclusivos e encantadores ao redor do mundo, curados para você.',
      coverImage: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1800&q=80',
      longDescription: 'Descubra os destinos mais fascinantes do mundo, de cidades históricas a ilhas tropicais paradisíacas. A Monreal Tours cuida de cada detalhe para que sua experiência seja perfeita.',
    },
    {
      id: 'luxury',
      title: 'Luxury',
      subtitle: 'Viagens de Luxo',
      description: 'Experiências exclusivas nos hotéis e resorts mais luxuosos do planeta.',
      coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=80',
      longDescription: 'Para quem não aceita nada menos que o extraordinário. Hotéis cinco estrelas, suítes exclusivas, experiências gastronômicas únicas e serviço personalizado de ponta a ponta.',
    },
    {
      id: 'casas',
      title: 'Casas',
      subtitle: 'Viagens em sua casa',
      description: 'Aluguel de mansões, villas e casas exclusivas nos destinos mais desejados.',
      coverImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=80',
      longDescription: 'Sinta-se em casa em qualquer lugar do mundo. Selecionamos casas, villas e propriedades exclusivas que oferecem privacidade, conforto e localização privilegiada.',
    },
    {
      id: 'pousadas',
      title: 'Pousadas',
      subtitle: 'Refúgios Únicos',
      description: 'Pousadas e boutique hotels cuidadosamente selecionados para uma experiência autêntica.',
      coverImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1800&q=80',
      longDescription: 'Descubra o charme das pousadas boutique, onde cada detalhe conta a história de um lugar. Da Serra Gaúcha ao Pantanal, selecionamos as melhores pousadas do Brasil e do mundo.',
    },
  ],

  /* ── PRODUTOS ────────────────────────────────── */
  /* 
   * NOTA: Estrutura preparada para CMS.
   * Futuramente, novos produtos serão adicionados diretamente
   * pelo painel administrativo. O frontend lerá via API/JSON.
   */
  products: [
    {
      id: 'clubmed-peisey',
      title: 'Peisey-Vallandry',
      brand: 'ClubMed',
      category: 'snow',
      destination: 'França - Alpes',
      coverImage: 'https://images.unsplash.com/photo-1531356882484-ebb0e99a94c4?w=800&q=80',
      description: 'Se você escolher passar férias em Peisey-Vallandry, vai descobrir um Village aninhado no vale da Tarentaise a 1.600m de altitude, próximo de torrentes e de lagos, ao lado da floresta. O Village Club Med de Peisey-Vallandry representa a convivialidade e a autenticidade da região da Savóia.',
      gallery: [
        'https://images.unsplash.com/photo-1478920888033-e11fc3ce99e4?w=800&q=80',
        'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
        'https://images.unsplash.com/photo-1510973190682-e3af93e52d31?w=800&q=80',
        'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=800&q=80',
        'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      ],
    },
    {
      id: 'clubmed-pragelato',
      title: 'Pragelato',
      brand: 'ClubMed',
      category: 'snow',
      destination: 'Itália - Piemonte',
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      description: 'Para suas férias familiares no Piemonte, italiano, o Club Med o recebe no Village de Pragelato. Num local natural preservado, a 1.600 metros de altitude. Esse charmoso Village em chalet, encarna a convivialidade à italiana numa atmosfera Dolce Vie.',
      gallery: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
        'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80',
        'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
        'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      ],
    },
    {
      id: 'clubmed-valmorel',
      title: 'Valmorel',
      brand: 'ClubMed',
      category: 'snow',
      destination: 'França - Savóia',
      coverImage: 'https://images.unsplash.com/photo-1478920888033-e11fc3ce99e4?w=800&q=80',
      description: 'Com as experiências All Inclusive do Club Med, você não precisa se preocupar com nada, apenas consigo mesmo. No dia de chegada, tudo já está a sua espera, você se lança nas pistas de esqui!',
      gallery: [
        'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
        'https://images.unsplash.com/photo-1478920888033-e11fc3ce99e4?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        'https://images.unsplash.com/photo-1531356882484-ebb0e99a94c4?w=800&q=80',
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      ],
    },
    {
      id: 'clubmed-val-thorens',
      title: 'Val Thorens',
      brand: 'ClubMed',
      category: 'snow',
      destination: 'França - Três Vales',
      coverImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
      description: 'Aqui excepcional com os prazeres além do esqui num centro de paisagens suntuosas. Para que você possa desfrutar plenamente de suas férias em Val Thorens, o Club Med oferece todas as facilidades de esqui All Inclusive. Quando você chega, tudo já está pronto a sua inteira, você ski as pistas e segue para as pistas.',
      gallery: [
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
        'https://images.unsplash.com/photo-1531356882484-ebb0e99a94c4?w=800&q=80',
        'https://images.unsplash.com/photo-1510973190682-e3af93e52d31?w=800&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        'https://images.unsplash.com/photo-1478920888033-e11fc3ce99e4?w=800&q=80',
        'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
      ],
    },
    // Produtos de outras categorias (exemplos para demonstração)
    {
      id: 'luxury-bali',
      title: 'Four Seasons Bali',
      brand: 'Four Seasons',
      category: 'luxury',
      destination: 'Bali, Indonésia',
      coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      description: 'Uma experiência de luxo incomparável no coração de Bali. Villas privativas com piscina infinita, spa de classe mundial e gastronomia balinesa autêntica.',
      gallery: [
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe2e2?w=800&q=80',
        'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
      ],
    },
    {
      id: 'cruzeiro-mediterraeo',
      title: 'Mediterrâneo Exclusivo',
      brand: 'MSC Cruceros',
      category: 'cruzeiro',
      destination: 'Mediterrâneo',
      coverImage: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=800&q=80',
      description: 'Navegue pelas águas cristalinas do Mediterrâneo, visitando as mais belas cidades da Europa. Cabines de luxo, gastronomia de primeira linha e entretenimento de alto nível.',
      gallery: [
        'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=800&q=80',
        'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
        'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80',
      ],
    },
  ],

  /* ── UTILITÁRIOS ─────────────────────────────── */

  /** Retorna categoria por ID */
  getCategoryById(id) {
    return this.categories.find(c => c.id === id) || null;
  },

  /** Retorna produto por ID */
  getProductById(id) {
    return this.products.find(p => p.id === id) || null;
  },

  /** Retorna produtos de uma categoria */
  getProductsByCategory(categoryId) {
    return this.products.filter(p => p.category === categoryId);
  },
};
