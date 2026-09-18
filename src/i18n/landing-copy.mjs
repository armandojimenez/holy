// HX8 landing copy. The feature headlines come directly from the approved
// Holy screenshot deck; this file supplies the web-only prose and controls.
// Arrays keep every locale structurally identical and easy to audit.

import { LANGUAGES } from './language-names.mjs';
import { PUBLISHED_LOCALES } from './published.mjs';
import { WAVE2 } from './wave2/index.mjs';

const COPY = {
  en: {
    meta: [
      'Holy: Daily Bible Verses',
      'Daily Bible verses, Scripture reminders, Christian widgets, prayers and beautiful themes to help you stay close to God. Download free on iPhone and Android.',
      'Holy app screens showing daily Bible verses on an iPhone lock screen and widgets',
    ],
    nav: ['Features', 'FAQ', 'Download', 'Contact'],
    hero: [
      'Daily Bible verses and gentle Scripture reminders, on your lock screen, your Home Screen and always one glance away.',
      'Download on the App Store', 'Get it on Google Play',
      'Holy Scripture reminders arriving on an iPhone lock screen',
    ],
    proof: ['on the App Store', 'on Google Play', 'downloads across our family of apps'],
    bodies: [
      'Read one hand-picked Bible verse at a time, keep its Scripture reference close and save the passages you want to return to.',
      'Faith, hope, prayer, gratitude, Jesus, forgiveness and love. Choose what your heart needs and Holy shapes your feed, reminders and widgets around it.',
      'Place God’s Word where your eyes already go. Home Screen widgets keep a verse in view throughout the day.',
      'Choose a Holy card theme that fits the moment, from quiet cream and candlelight to deep teal, gold and night.',
      'Turn any verse into beautiful story or square art, keep its reference attached and share Scripture with care.',
      'Write your own prayers and words, keep them private and bring them into the same calm daily rhythm.',
      'Slow down with one passage, a gentle timer and day or night scenes that make Scripture reading a daily practice.',
      'Holy is part of a family of thoughtfully made apps with more than one million downloads together, across iPhone, iPad, Android and tablets.',
    ],
    alts: [
      'The Holy home screen with Bible verse cards fanned above the phone',
      'The Holy categories screen selecting Scripture topics',
      'Holy Bible verse widgets on a Home Screen',
      'The Holy card theme gallery selecting a theme',
      'The Holy share studio changing a Scripture card between story and square',
      'The My Verses screen adding a personal prayer',
      'A Holy Scripture practice with a countdown ring',
    ],
    more: 'and many more',
    faqTitle: 'Questions, answered',
    faqs: [
      ['What does Holy do?', 'Holy brings daily Bible verses and Christian reminders to your lock screen, Home Screen widgets and a beautiful reader with categories, themes and favorites.'],
      ['How do Scripture reminders work?', 'You choose how many reminders you want and when. Each notification includes a verse and its Bible reference, and widgets keep Scripture visible between reminders.'],
      ['Is Holy free?', 'Holy is free to download and includes Bible verses, reminders and widgets. Optional Premium+ access may unlock additional themes, categories and tools.'],
      ['Which devices does Holy support?', 'Holy is available for iPhone and iPad on the App Store, and for Android phones and tablets on Google Play.'],
      ['Can I add my own prayers?', 'Yes. Your prayers and personal words live in a private list inside Holy and can become part of your daily reminders.'],
      ['Which languages are available?', 'Holy supports English, Spanish, Portuguese, German, French, Italian, Japanese, Korean, Indonesian, Turkish and Polish.'],
    ],
    cta: ['Keep God’s Word close', 'Download Holy and begin with one verse today.'],
    contact: ['Contact us', 'Questions or feedback about Holy? Email us directly.', 'Copy email', 'Email copied', 'Contact'],
    footer: ['All rights reserved.', 'Privacy', 'Terms', 'Made with love for everyone seeking a closer walk with God.'],
    a11y: ['Close', 'Ratings', 'Main', 'Footer', 'Menu', 'Language'],
    banner: ['Holy is also available in English.', 'View in English', 'No thanks'],
    marks: ['“', '”'],
  },

  es: {
    meta: [
      'Holy: versículos bíblicos diarios',
      'Versículos de la Biblia, recordatorios cristianos, widgets, oraciones y temas para mantenerte cerca de Dios cada día. Descarga gratis en iPhone y Android.',
      'Pantallas de Holy con versículos bíblicos diarios en la pantalla de bloqueo y widgets de un iPhone',
    ],
    nav: ['Funciones', 'Preguntas', 'Descargar', 'Contacto'],
    hero: [
      'Versículos bíblicos y recordatorios suaves de la Palabra, en tu pantalla de bloqueo, tu pantalla de inicio y siempre a la vista.',
      'Descargar en App Store', 'Disponible en Google Play',
      'Recordatorios de versículos de Holy llegando a la pantalla de bloqueo de un iPhone',
    ],
    proof: ['en App Store', 'en Google Play', 'descargas en nuestra familia de apps'],
    bodies: [
      'Lee un versículo bíblico a la vez, conserva su referencia y guarda los pasajes a los que quieras volver.',
      'Fe, esperanza, oración, gratitud, Jesús, perdón y amor. Elige lo que tu corazón necesita y Holy adapta tu contenido, recordatorios y widgets.',
      'Pon la Palabra de Dios donde ya miras. Los widgets mantienen un versículo visible durante todo el día.',
      'Elige un tema de Holy para cada momento, desde crema y luz de vela hasta verde azulado, dorado y noche.',
      'Convierte cualquier versículo en una imagen para historia o formato cuadrado, conserva la referencia y comparte la Escritura con cariño.',
      'Escribe tus propias oraciones y palabras, mantenlas privadas e intégralas en tu ritmo diario.',
      'Detente con un pasaje, un temporizador suave y escenas de día o noche que convierten la lectura bíblica en una práctica diaria.',
      'Holy forma parte de una familia de apps creadas con cariño, con más de un millón de descargas en iPhone, iPad, Android y tablets.',
    ],
    alts: [
      'Pantalla principal de Holy con tarjetas de versículos sobre el teléfono', 'Pantalla de categorías de Holy seleccionando temas bíblicos',
      'Widgets de versículos de Holy en la pantalla de inicio', 'Galería de temas de Holy seleccionando un diseño',
      'Estudio de Holy cambiando un versículo entre historia y formato cuadrado', 'Pantalla Mis versículos añadiendo una oración personal',
      'Práctica de lectura bíblica de Holy con un anillo de tiempo',
    ],
    more: 'y muchas más', faqTitle: 'Preguntas y respuestas',
    faqs: [
      ['¿Qué hace Holy?', 'Holy lleva versículos bíblicos y recordatorios cristianos a tu pantalla de bloqueo, widgets y un lector con categorías, temas y favoritos.'],
      ['¿Cómo funcionan los recordatorios?', 'Tú eliges cuántos quieres y cuándo. Cada notificación incluye un versículo y su referencia bíblica, y los widgets mantienen la Palabra visible.'],
      ['¿Holy es gratis?', 'Holy se puede descargar gratis e incluye versículos, recordatorios y widgets. Premium+ opcional puede desbloquear temas, categorías y herramientas adicionales.'],
      ['¿Qué dispositivos admite?', 'Holy está disponible para iPhone y iPad en App Store, y para teléfonos y tablets Android en Google Play.'],
      ['¿Puedo añadir mis oraciones?', 'Sí. Tus oraciones y palabras personales viven en una lista privada dentro de Holy y pueden aparecer en tus recordatorios.'],
      ['¿Qué idiomas están disponibles?', 'Holy admite inglés, español, portugués, alemán, francés, italiano, japonés, coreano, indonesio, turco y polaco.'],
    ],
    cta: ['Mantén cerca la Palabra de Dios', 'Descarga Holy y comienza hoy con un versículo.'],
    contact: ['Contáctanos', '¿Tienes preguntas o comentarios sobre Holy? Escríbenos directamente.', 'Copiar correo', 'Correo copiado', 'Contacto'],
    footer: ['Todos los derechos reservados.', 'Privacidad', 'Términos', 'Hecho con amor para quienes buscan caminar más cerca de Dios.'],
    a11y: ['Cerrar', 'Calificaciones', 'Principal', 'Pie de página', 'Menú', 'Idioma'],
    banner: ['Holy también está disponible en español.', 'Ver en español', 'Ahora no'], marks: ['«', '»'],
  },

  pt: {
    meta: ['Holy: versículos bíblicos diários', 'Versículos da Bíblia, lembretes cristãos, widgets, orações e temas para manter você perto de Deus todos os dias. Baixe o Holy grátis no iPhone e Android.', 'Telas do Holy com versículos bíblicos diários na tela bloqueada e em widgets do iPhone'],
    nav: ['Recursos', 'Dúvidas', 'Baixar', 'Contato'],
    hero: ['Versículos bíblicos e lembretes suaves da Palavra na tela bloqueada, na Tela de Início e sempre ao alcance do olhar.', 'Baixar na App Store', 'Disponível no Google Play', 'Lembretes de versículos do Holy chegando à tela bloqueada de um iPhone'],
    proof: ['na App Store', 'no Google Play', 'downloads na nossa família de apps'],
    bodies: [
      'Leia um versículo por vez, mantenha a referência bíblica por perto e salve as passagens que deseja revisitar.',
      'Fé, esperança, oração, gratidão, Jesus, perdão e amor. Escolha o que seu coração precisa e o Holy adapta conteúdo, lembretes e widgets.',
      'Coloque a Palavra de Deus onde você já olha. Os widgets mantêm um versículo visível durante o dia.',
      'Escolha um tema do Holy para cada momento, do creme e luz de vela ao verde-azulado, dourado e noite.',
      'Transforme qualquer versículo em uma arte para story ou quadrado, preserve a referência e compartilhe a Escritura com carinho.',
      'Escreva suas orações e palavras, mantenha tudo privado e leve esse conteúdo para sua rotina diária.',
      'Desacelere com uma passagem, um cronômetro suave e cenas de dia ou noite que tornam a leitura bíblica uma prática diária.',
      'Holy faz parte de uma família de apps criados com carinho, com mais de um milhão de downloads em iPhone, iPad, Android e tablets.',
    ],
    alts: ['Tela inicial do Holy com cartões de versículos sobre o telefone', 'Tela de categorias do Holy selecionando temas bíblicos', 'Widgets de versículos do Holy na Tela de Início', 'Galeria de temas do Holy selecionando um visual', 'Estúdio do Holy alternando um versículo entre story e quadrado', 'Tela Meus versículos adicionando uma oração pessoal', 'Prática de leitura bíblica do Holy com um anel de tempo'],
    more: 'e muitos outros', faqTitle: 'Perguntas respondidas',
    faqs: [
      ['O que o Holy faz?', 'Holy leva versículos bíblicos e lembretes cristãos à tela bloqueada, aos widgets e a um leitor com categorias, temas e favoritos.'],
      ['Como funcionam os lembretes?', 'Você escolhe quantos quer e quando. Cada notificação inclui um versículo e sua referência, e os widgets mantêm a Palavra visível.'],
      ['O Holy é grátis?', 'Holy é gratuito para baixar e inclui versículos, lembretes e widgets. O Premium+ opcional pode liberar temas, categorias e ferramentas extras.'],
      ['Quais dispositivos são compatíveis?', 'Holy está disponível para iPhone e iPad na App Store e para celulares e tablets Android no Google Play.'],
      ['Posso adicionar minhas orações?', 'Sim. Suas orações e palavras pessoais ficam em uma lista privada no Holy e podem aparecer nos seus lembretes.'],
      ['Quais idiomas estão disponíveis?', 'Holy oferece inglês, espanhol, português, alemão, francês, italiano, japonês, coreano, indonésio, turco e polonês.'],
    ],
    cta: ['Mantenha a Palavra de Deus por perto', 'Baixe o Holy e comece hoje com um versículo.'],
    contact: ['Fale com a gente', 'Dúvidas ou comentários sobre o Holy? Envie um e-mail direto.', 'Copiar e-mail', 'E-mail copiado', 'Contato'],
    footer: ['Todos os direitos reservados.', 'Privacidade', 'Termos', 'Feito com amor para quem busca caminhar mais perto de Deus.'],
    a11y: ['Fechar', 'Avaliações', 'Principal', 'Rodapé', 'Menu', 'Idioma'],
    banner: ['Holy também está disponível em português.', 'Ver em português', 'Agora não'], marks: ['“', '”'],
  },

  de: {
    meta: ['Holy: Tägliche Bibelverse', 'Tägliche Bibelverse, christliche Erinnerungen, Widgets, Gebete und schöne Designs, die dich Gott näherbringen. Kostenlos für iPhone und Android herunterladen.', 'Holy App mit täglichen Bibelversen auf dem iPhone-Sperrbildschirm und in Widgets'],
    nav: ['Funktionen', 'Fragen', 'Download', 'Kontakt'],
    hero: ['Tägliche Bibelverse und sanfte Erinnerungen an Gottes Wort, auf Sperrbildschirm, Home-Bildschirm und immer nur einen Blick entfernt.', 'Im App Store laden', 'Bei Google Play laden', 'Holy Erinnerungen mit Bibelversen auf einem iPhone-Sperrbildschirm'],
    proof: ['im App Store', 'bei Google Play', 'Downloads in unserer App-Familie'],
    bodies: [
      'Lies jeweils einen ausgewählten Bibelvers, behalte die Bibelstelle im Blick und speichere Passagen, zu denen du zurückkehren möchtest.',
      'Glaube, Hoffnung, Gebet, Dankbarkeit, Jesus, Vergebung und Liebe. Wähle, was dein Herz braucht, und Holy passt Inhalt, Erinnerungen und Widgets an.',
      'Bring Gottes Wort dorthin, wo du ohnehin hinsiehst. Widgets halten einen Vers den ganzen Tag sichtbar.',
      'Wähle ein Holy Design für den Moment, von Creme und Kerzenlicht bis zu Petrol, Gold und Nacht.',
      'Gestalte jeden Vers als Story oder Quadrat, behalte die Bibelstelle bei und teile die Schrift mit Sorgfalt.',
      'Schreibe eigene Gebete und Worte, bewahre sie privat auf und nimm sie in deinen täglichen Rhythmus auf.',
      'Nimm dir Zeit für eine Passage, mit sanftem Timer und Tag- oder Nachtszenen als tägliche Bibelpraxis.',
      'Holy gehört zu einer mit Sorgfalt entwickelten App-Familie mit zusammen über einer Million Downloads auf iPhone, iPad, Android und Tablets.',
    ],
    alts: ['Holy Startseite mit aufgefächerten Bibelverskarten', 'Holy Kategorien mit ausgewählten Bibelthemen', 'Holy Bibelvers-Widgets auf dem Home-Bildschirm', 'Holy Designgalerie mit ausgewähltem Design', 'Holy Teilen-Ansicht wechselt einen Vers zwischen Story und Quadrat', 'Meine Verse mit einem persönlichen Gebet', 'Holy Bibelpraxis mit Countdown-Ring'],
    more: 'und viele mehr', faqTitle: 'Fragen und Antworten',
    faqs: [
      ['Was macht Holy?', 'Holy bringt Bibelverse und christliche Erinnerungen auf deinen Sperrbildschirm, in Widgets und in eine schöne Leseansicht mit Kategorien, Designs und Favoriten.'],
      ['Wie funktionieren Erinnerungen?', 'Du wählst Anzahl und Zeit. Jede Mitteilung enthält einen Vers mit Bibelstelle, und Widgets halten Gottes Wort dazwischen sichtbar.'],
      ['Ist Holy kostenlos?', 'Holy kann kostenlos geladen werden und enthält Verse, Erinnerungen und Widgets. Optionales Premium+ kann weitere Designs, Kategorien und Werkzeuge freischalten.'],
      ['Welche Geräte werden unterstützt?', 'Holy gibt es für iPhone und iPad im App Store sowie für Android-Smartphones und Tablets bei Google Play.'],
      ['Kann ich eigene Gebete hinzufügen?', 'Ja. Deine Gebete und persönlichen Worte bleiben in einer privaten Liste in Holy und können Teil deiner Erinnerungen werden.'],
      ['Welche Sprachen gibt es?', 'Holy unterstützt Englisch, Spanisch, Portugiesisch, Deutsch, Französisch, Italienisch, Japanisch, Koreanisch, Indonesisch, Türkisch und Polnisch.'],
    ],
    cta: ['Halte Gottes Wort nah', 'Lade Holy und beginne heute mit einem Vers.'],
    contact: ['Kontakt', 'Fragen oder Feedback zu Holy? Schreib uns direkt eine E-Mail.', 'E-Mail kopieren', 'E-Mail kopiert', 'Kontakt'],
    footer: ['Alle Rechte vorbehalten.', 'Datenschutz', 'Bedingungen', 'Mit Liebe gemacht für alle, die Gott näher sein möchten.'],
    a11y: ['Schließen', 'Bewertungen', 'Hauptnavigation', 'Fußzeile', 'Menü', 'Sprache'],
    banner: ['Holy ist auch auf Deutsch verfügbar.', 'Auf Deutsch ansehen', 'Nein danke'], marks: ['„', '“'],
  },

  fr: {
    meta: ['Holy : versets bibliques quotidiens', 'Des versets de la Bible, rappels chrétiens, widgets, prières et thèmes pour rester proche de Dieu chaque jour. Télécharge gratuitement sur iPhone et Android.', 'Écrans de Holy avec des versets bibliques sur l’écran verrouillé et les widgets d’un iPhone'],
    nav: ['Fonctions', 'Questions', 'Télécharger', 'Contact'],
    hero: ['Des versets bibliques et de doux rappels de la Parole, sur l’écran verrouillé, l’écran d’accueil et toujours à portée de regard.', 'Télécharger dans l’App Store', 'Disponible sur Google Play', 'Rappels de versets Holy sur l’écran verrouillé d’un iPhone'],
    proof: ['dans l’App Store', 'sur Google Play', 'téléchargements dans notre famille d’apps'],
    bodies: [
      'Lis un verset choisi avec soin, garde sa référence biblique près de toi et enregistre les passages que tu veux retrouver.',
      'Foi, espérance, prière, gratitude, Jésus, pardon et amour. Choisis ce dont ton cœur a besoin et Holy adapte ton contenu, tes rappels et tes widgets.',
      'Place la Parole de Dieu là où ton regard se pose déjà. Les widgets gardent un verset visible toute la journée.',
      'Choisis un thème Holy pour chaque moment, de la crème et la lueur d’une bougie au bleu-vert, à l’or et à la nuit.',
      'Transforme chaque verset en création pour story ou format carré, conserve sa référence et partage l’Écriture avec soin.',
      'Écris tes prières et tes mots, garde-les privés et intègre-les à ton rythme quotidien.',
      'Prends le temps d’un passage avec un minuteur doux et des scènes de jour ou de nuit pour faire de la lecture une pratique quotidienne.',
      'Holy fait partie d’une famille d’apps conçues avec soin, téléchargées plus d’un million de fois sur iPhone, iPad, Android et tablettes.',
    ],
    alts: ['Accueil de Holy avec des cartes de versets au-dessus du téléphone', 'Catégories Holy avec des thèmes bibliques sélectionnés', 'Widgets de versets Holy sur l’écran d’accueil', 'Galerie de thèmes Holy avec un thème sélectionné', 'Studio de partage Holy passant un verset du format story au carré', 'Écran Mes versets ajoutant une prière personnelle', 'Lecture guidée Holy avec un anneau de temps'],
    more: 'et bien plus', faqTitle: 'Vos questions, nos réponses',
    faqs: [
      ['Que fait Holy ?', 'Holy apporte des versets bibliques et des rappels chrétiens sur l’écran verrouillé, dans les widgets et dans un lecteur avec catégories, thèmes et favoris.'],
      ['Comment fonctionnent les rappels ?', 'Tu choisis leur nombre et leur heure. Chaque notification contient un verset et sa référence, et les widgets gardent la Parole visible.'],
      ['Holy est-elle gratuite ?', 'Holy est gratuite à télécharger et comprend versets, rappels et widgets. Premium+ facultatif peut débloquer davantage de thèmes, catégories et outils.'],
      ['Quels appareils sont compatibles ?', 'Holy est disponible sur iPhone et iPad dans l’App Store, ainsi que sur téléphones et tablettes Android dans Google Play.'],
      ['Puis-je ajouter mes prières ?', 'Oui. Tes prières et tes mots restent dans une liste privée dans Holy et peuvent rejoindre tes rappels.'],
      ['Quelles langues sont disponibles ?', 'Holy prend en charge l’anglais, l’espagnol, le portugais, l’allemand, le français, l’italien, le japonais, le coréen, l’indonésien, le turc et le polonais.'],
    ],
    cta: ['Garde la Parole de Dieu près de toi', 'Télécharge Holy et commence aujourd’hui avec un verset.'],
    contact: ['Nous contacter', 'Une question ou un commentaire sur Holy ? Écris-nous directement.', 'Copier l’adresse', 'Adresse copiée', 'Contact'],
    footer: ['Tous droits réservés.', 'Confidentialité', 'Conditions', 'Créé avec amour pour celles et ceux qui veulent se rapprocher de Dieu.'],
    a11y: ['Fermer', 'Évaluations', 'Navigation principale', 'Pied de page', 'Menu', 'Langue'],
    banner: ['Holy est aussi disponible en français.', 'Voir en français', 'Non merci'], marks: ['«', '»'],
  },

  it: {
    meta: ['Holy: versetti biblici quotidiani', 'Versetti della Bibbia, promemoria cristiani, widget, preghiere e temi per restare vicino a Dio ogni giorno. Scarica Holy gratis su iPhone e Android.', 'Schermate di Holy con versetti biblici sulla schermata di blocco e nei widget di un iPhone'],
    nav: ['Funzioni', 'Domande', 'Scarica', 'Contatti'],
    hero: ['Versetti biblici e promemoria delicati della Parola, sulla schermata di blocco, sulla Home e sempre a portata di sguardo.', 'Scarica su App Store', 'Disponibile su Google Play', 'Promemoria di versetti Holy sulla schermata di blocco di un iPhone'],
    proof: ['su App Store', 'su Google Play', 'download nella nostra famiglia di app'],
    bodies: [
      'Leggi un versetto scelto con cura, tieni vicina la citazione biblica e salva i passi a cui vuoi tornare.',
      'Fede, speranza, preghiera, gratitudine, Gesù, perdono e amore. Scegli ciò di cui il cuore ha bisogno e Holy adatta contenuti, promemoria e widget.',
      'Porta la Parola di Dio dove guardi già. I widget mantengono un versetto visibile per tutta la giornata.',
      'Scegli un tema Holy per ogni momento, dal crema e lume di candela al verde petrolio, oro e notte.',
      'Trasforma ogni versetto in una storia o immagine quadrata, conserva il riferimento e condividi la Scrittura con cura.',
      'Scrivi le tue preghiere e parole, conservale in privato e portale nel tuo ritmo quotidiano.',
      'Rallenta con un passo, un timer delicato e scene di giorno o notte che rendono la lettura una pratica quotidiana.',
      'Holy fa parte di una famiglia di app create con cura, con oltre un milione di download su iPhone, iPad, Android e tablet.',
    ],
    alts: ['Home di Holy con carte di versetti sopra il telefono', 'Categorie Holy con temi biblici selezionati', 'Widget di versetti Holy sulla Home', 'Galleria temi Holy con un tema selezionato', 'Studio Holy che cambia un versetto tra storia e quadrato', 'Schermata I miei versetti che aggiunge una preghiera', 'Pratica biblica Holy con anello del tempo'],
    more: 'e molte altre', faqTitle: 'Domande e risposte',
    faqs: [
      ['Cosa fa Holy?', 'Holy porta versetti biblici e promemoria cristiani sulla schermata di blocco, nei widget e in un lettore con categorie, temi e preferiti.'],
      ['Come funzionano i promemoria?', 'Scegli tu quanti riceverne e quando. Ogni notifica include un versetto e il suo riferimento, mentre i widget mantengono visibile la Parola.'],
      ['Holy è gratis?', 'Holy si scarica gratuitamente e include versetti, promemoria e widget. Premium+ facoltativo può sbloccare altri temi, categorie e strumenti.'],
      ['Quali dispositivi supporta?', 'Holy è disponibile per iPhone e iPad su App Store e per telefoni e tablet Android su Google Play.'],
      ['Posso aggiungere le mie preghiere?', 'Sì. Le tue preghiere e parole personali restano in un elenco privato in Holy e possono entrare nei promemoria.'],
      ['Quali lingue sono disponibili?', 'Holy supporta inglese, spagnolo, portoghese, tedesco, francese, italiano, giapponese, coreano, indonesiano, turco e polacco.'],
    ],
    cta: ['Tieni vicina la Parola di Dio', 'Scarica Holy e inizia oggi con un versetto.'],
    contact: ['Contattaci', 'Domande o commenti su Holy? Scrivici direttamente.', 'Copia email', 'Email copiata', 'Contatti'],
    footer: ['Tutti i diritti riservati.', 'Privacy', 'Termini', 'Creato con amore per chi desidera camminare più vicino a Dio.'],
    a11y: ['Chiudi', 'Valutazioni', 'Principale', 'Piè di pagina', 'Menu', 'Lingua'],
    banner: ['Holy è disponibile anche in italiano.', 'Vedi in italiano', 'No, grazie'], marks: ['“', '”'],
  },

  ja: {
    meta: ['Holy：毎日の聖書の言葉', '毎日の聖書の言葉、キリスト教のリマインダー、ウィジェット、祈り、美しいテーマで神を身近に。iPhoneとAndroidで無料ダウンロード。', 'iPhoneのロック画面とウィジェットに毎日の聖書の言葉を表示するHolyアプリ'],
    nav: ['機能', 'よくある質問', 'ダウンロード', 'お問い合わせ'],
    hero: ['毎日の聖書の言葉を、やさしいリマインダーで。ロック画面やホーム画面から、いつでもすぐに御言葉へ。', 'App Storeからダウンロード', 'Google Playで手に入れよう', 'iPhoneのロック画面に届くHolyの聖書リマインダー'],
    proof: ['App Storeで', 'Google Playで', 'アプリファミリー全体のダウンロード'],
    bodies: [
      '厳選された聖書の言葉を一節ずつ読み、聖書箇所とともに、また読みたい御言葉を保存できます。',
      '信仰、希望、祈り、感謝、イエス、赦し、愛。今の心に必要なテーマを選ぶと、Holyが表示内容やリマインダー、ウィジェットに反映します。',
      'いつも目にする場所に神の言葉を。ホーム画面のウィジェットが、一日を通して御言葉をそばに置きます。',
      'クリームやろうそくの光、深いティール、ゴールド、夜の景色など、その時に合うHolyのテーマを選べます。',
      '聖書の言葉をストーリーや正方形の美しい画像に。聖書箇所を添えたまま、心を込めて分かち合えます。',
      '自分の祈りや言葉を書き、非公開で大切に保存して、毎日のリズムに取り入れられます。',
      '一つの箇所にゆっくり向き合う時間。穏やかなタイマーと昼夜の景色が、聖書を読む習慣を支えます。',
      'Holyは、同じ思いで丁寧に作られたアプリファミリーの一員です。iPhone、iPad、Android、タブレットで合計100万ダウンロードを超えています。',
    ],
    alts: ['聖書カードが扇状に広がるHolyのホーム画面', '聖書テーマを選ぶHolyのカテゴリー画面', 'ホーム画面に並ぶHolyの聖書ウィジェット', 'テーマを選ぶHolyのカードギャラリー', '聖書カードをストーリーと正方形に切り替えるHolyの共有画面', '個人の祈りを追加する「マイ聖句」画面', 'カウントダウンリングを表示したHolyの聖書実践画面'],
    more: 'ほかにも多数', faqTitle: 'よくある質問',
    faqs: [
      ['Holyはどんなアプリですか？', '毎日の聖書の言葉とキリスト教のリマインダーを、ロック画面、ウィジェット、カテゴリーやテーマを備えた美しいリーダーで届けます。'],
      ['リマインダーはどのように届きますか？', '回数と時間を自分で選べます。通知には聖書の言葉と箇所が表示され、ウィジェットでも御言葉を見続けられます。'],
      ['Holyは無料ですか？', 'Holyは無料でダウンロードでき、聖書の言葉、リマインダー、ウィジェットを利用できます。任意のPremium+で追加のテーマや機能を利用できる場合があります。'],
      ['どの端末に対応していますか？', 'App StoreのiPhoneとiPad、Google PlayのAndroidスマートフォンとタブレットに対応しています。'],
      ['自分の祈りを追加できますか？', 'はい。祈りや自分の言葉はHoly内の非公開リストに保存され、毎日のリマインダーにも表示できます。'],
      ['対応言語は？', '英語、スペイン語、ポルトガル語、ドイツ語、フランス語、イタリア語、日本語、韓国語、インドネシア語、トルコ語、ポーランド語に対応しています。'],
    ],
    cta: ['神の言葉を、いつもそばに', 'Holyをダウンロードして、今日の一節から始めましょう。'],
    contact: ['お問い合わせ', 'Holyへのご質問やご意見は、メールでお送りください。', 'メールをコピー', 'メールをコピーしました', 'お問い合わせ'],
    footer: ['無断転載を禁じます。', 'プライバシー', '利用規約', '神とより近く歩みたいすべての方へ、愛を込めて。'],
    a11y: ['閉じる', '評価', 'メイン', 'フッター', 'メニュー', '言語'],
    banner: ['Holyは日本語でもご利用いただけます。', '日本語で見る', '今はしない'], marks: ['「', '」'],
  },

  ko: {
    meta: ['Holy: 매일 성경 말씀', '매일 성경 구절과 기독교 알림, 위젯, 기도, 아름다운 테마로 하나님을 가까이하세요. iPhone과 Android에서 무료로 다운로드하세요.', 'iPhone 잠금 화면과 위젯에 매일 성경 구절을 보여 주는 Holy 앱'],
    nav: ['기능', '자주 묻는 질문', '다운로드', '문의'],
    hero: ['매일의 성경 말씀을 부드러운 알림으로 만나세요. 잠금 화면과 홈 화면에서 언제든 한눈에 볼 수 있어요.', 'App Store에서 다운로드', 'Google Play에서 받기', 'iPhone 잠금 화면에 도착하는 Holy 성경 구절 알림'],
    proof: ['App Store에서', 'Google Play에서', '앱 패밀리 누적 다운로드'],
    bodies: [
      '정성껏 고른 성경 구절을 한 번에 하나씩 읽고, 성경 출처와 함께 다시 보고 싶은 말씀을 저장하세요.',
      '믿음, 소망, 기도, 감사, 예수님, 용서, 사랑. 지금 마음에 필요한 주제를 고르면 Holy가 피드와 알림, 위젯에 반영해요.',
      '늘 바라보는 곳에 하나님의 말씀을 두세요. 홈 화면 위젯이 하루 종일 성경 구절을 보여 줘요.',
      '크림과 촛불부터 깊은 청록, 골드, 밤까지, 순간에 어울리는 Holy 카드 테마를 고르세요.',
      '어떤 구절이든 스토리나 정사각형 이미지로 만들고, 성경 출처를 그대로 담아 정성껏 나눌 수 있어요.',
      '나만의 기도와 글을 쓰고 비공개로 간직해, 차분한 하루의 흐름 속에서 다시 만나세요.',
      '한 구절 앞에서 천천히 머물러 보세요. 부드러운 타이머와 낮과 밤 장면이 매일 말씀 읽는 습관을 도와요.',
      'Holy는 같은 정성으로 만든 앱 패밀리의 하나예요. iPhone, iPad, Android, 태블릿에서 누적 100만 회 넘게 다운로드되었어요.',
    ],
    alts: ['성경 구절 카드가 펼쳐진 Holy 홈 화면', '성경 주제를 선택하는 Holy 카테고리 화면', '홈 화면에 놓인 Holy 성경 위젯', '테마를 선택하는 Holy 카드 갤러리', '성경 카드를 스토리와 정사각형으로 바꾸는 Holy 공유 화면', '개인 기도를 추가하는 나의 구절 화면', '카운트다운 링이 있는 Holy 말씀 연습 화면'],
    more: '그 밖에도 다양하게', faqTitle: '자주 묻는 질문',
    faqs: [
      ['Holy는 어떤 앱인가요?', '매일 성경 구절과 기독교 알림을 잠금 화면, 홈 화면 위젯, 카테고리와 테마가 있는 아름다운 리더로 전해 드려요.'],
      ['말씀 알림은 어떻게 작동하나요?', '알림 횟수와 시간을 직접 정해요. 각 알림에는 구절과 성경 출처가 담기고, 위젯이 그 사이에도 말씀을 보여 줘요.'],
      ['Holy는 무료인가요?', 'Holy는 무료로 다운로드할 수 있고 성경 구절, 알림, 위젯을 제공해요. 선택형 Premium+로 추가 테마와 기능을 이용할 수 있어요.'],
      ['어떤 기기를 지원하나요?', 'App Store의 iPhone과 iPad, Google Play의 Android 휴대전화와 태블릿을 지원해요.'],
      ['나만의 기도를 추가할 수 있나요?', '네. 기도와 개인 글은 Holy의 비공개 목록에 보관되고 매일의 알림에도 넣을 수 있어요.'],
      ['어떤 언어를 지원하나요?', '영어, 스페인어, 포르투갈어, 독일어, 프랑스어, 이탈리아어, 일본어, 한국어, 인도네시아어, 터키어, 폴란드어를 지원해요.'],
    ],
    cta: ['하나님의 말씀을 가까이', 'Holy를 다운로드하고 오늘 한 구절로 시작하세요.'],
    contact: ['문의하기', 'Holy에 대한 질문이나 의견이 있나요? 이메일로 알려 주세요.', '이메일 복사', '이메일을 복사했어요', '문의'],
    footer: ['모든 권리 보유.', '개인정보 처리방침', '이용 약관', '하나님과 더 가까이 걷고 싶은 모든 분께 사랑을 담아 만들었어요.'],
    a11y: ['닫기', '평가', '메인', '바닥글', '메뉴', '언어'],
    banner: ['Holy는 한국어로도 이용할 수 있어요.', '한국어로 보기', '괜찮아요'], marks: ['“', '”'],
  },

  id: {
    meta: ['Holy: Ayat Alkitab Harian', 'Ayat Alkitab, pengingat Kristen, widget, doa, dan tema indah untuk membantumu tetap dekat dengan Tuhan setiap hari. Unduh gratis di iPhone dan Android.', 'Tampilan Holy dengan ayat Alkitab harian di layar kunci dan widget iPhone'],
    nav: ['Fitur', 'Tanya jawab', 'Unduh', 'Kontak'],
    hero: ['Ayat Alkitab harian dan pengingat Firman yang lembut, di layar kunci, layar utama, dan selalu mudah dilihat.', 'Unduh di App Store', 'Dapatkan di Google Play', 'Pengingat ayat Holy yang muncul di layar kunci iPhone'],
    proof: ['di App Store', 'di Google Play', 'unduhan dalam keluarga aplikasi kami'],
    bodies: [
      'Baca satu ayat pilihan, simpan referensi Alkitabnya, dan tandai bagian yang ingin kamu renungkan kembali.',
      'Iman, harapan, doa, syukur, Yesus, pengampunan, dan kasih. Pilih yang dibutuhkan hatimu, lalu Holy menyesuaikan beranda, pengingat, dan widget.',
      'Letakkan Firman Tuhan di tempat yang sering kamu lihat. Widget layar utama menjaga satu ayat tetap terlihat sepanjang hari.',
      'Pilih tema kartu Holy untuk setiap suasana, dari krem dan cahaya lilin hingga hijau kebiruan, emas, dan malam.',
      'Ubah ayat menjadi gambar story atau persegi yang indah, pertahankan referensinya, lalu bagikan Firman dengan penuh perhatian.',
      'Tulis doa dan kata-katamu sendiri, simpan secara privat, dan hadirkan kembali dalam ritme harianmu.',
      'Tenangkan diri bersama satu bagian Firman, timer lembut, serta suasana siang atau malam yang membangun kebiasaan membaca Alkitab.',
      'Holy adalah bagian dari keluarga aplikasi yang dibuat dengan penuh perhatian, dengan lebih dari satu juta unduhan di iPhone, iPad, Android, dan tablet.',
    ],
    alts: ['Layar utama Holy dengan kartu ayat di atas ponsel', 'Layar kategori Holy sedang memilih tema Alkitab', 'Widget ayat Holy di layar utama', 'Galeri tema Holy sedang memilih desain', 'Studio Holy mengubah kartu ayat antara story dan persegi', 'Layar Ayat Saya sedang menambahkan doa pribadi', 'Latihan Firman Holy dengan lingkar hitung mundur'],
    more: 'dan masih banyak lagi', faqTitle: 'Pertanyaan terjawab',
    faqs: [
      ['Apa fungsi Holy?', 'Holy menghadirkan ayat Alkitab dan pengingat Kristen ke layar kunci, widget, dan ruang baca indah dengan kategori, tema, serta favorit.'],
      ['Bagaimana pengingat Firman bekerja?', 'Kamu memilih jumlah dan waktunya. Setiap notifikasi berisi ayat dan referensi Alkitab, sementara widget menjaga Firman tetap terlihat.'],
      ['Apakah Holy gratis?', 'Holy dapat diunduh gratis dan menyediakan ayat, pengingat, serta widget. Premium+ opsional dapat membuka tema, kategori, dan alat tambahan.'],
      ['Perangkat apa yang didukung?', 'Holy tersedia untuk iPhone dan iPad di App Store, serta ponsel dan tablet Android di Google Play.'],
      ['Bisakah saya menambahkan doa sendiri?', 'Bisa. Doa dan kata-kata pribadimu tersimpan dalam daftar privat di Holy dan dapat hadir dalam pengingat harian.'],
      ['Bahasa apa saja yang tersedia?', 'Holy mendukung bahasa Inggris, Spanyol, Portugis, Jerman, Prancis, Italia, Jepang, Korea, Indonesia, Turki, dan Polandia.'],
    ],
    cta: ['Jaga Firman Tuhan tetap dekat', 'Unduh Holy dan mulailah hari ini dengan satu ayat.'],
    contact: ['Hubungi kami', 'Punya pertanyaan atau masukan tentang Holy? Kirim email langsung kepada kami.', 'Salin email', 'Email disalin', 'Kontak'],
    footer: ['Hak cipta dilindungi.', 'Privasi', 'Ketentuan', 'Dibuat dengan kasih untuk siapa pun yang ingin berjalan lebih dekat dengan Tuhan.'],
    a11y: ['Tutup', 'Penilaian', 'Utama', 'Footer', 'Menu', 'Bahasa'],
    banner: ['Holy juga tersedia dalam bahasa Indonesia.', 'Lihat dalam bahasa Indonesia', 'Tidak, terima kasih'], marks: ['“', '”'],
  },

  tr: {
    meta: ['Holy: Günlük Kutsal Kitap Ayetleri', 'Her gün Tanrı’ya yakın kalmana yardımcı olan Kutsal Kitap ayetleri, Hristiyan hatırlatıcıları, widget’lar, dualar ve temalar. Ücretsiz indir: iPhone ve Android.', 'iPhone kilit ekranında ve widget’larda günlük Kutsal Kitap ayetleri gösteren Holy uygulaması'],
    nav: ['Özellikler', 'Sorular', 'İndir', 'İletişim'],
    hero: ['Günlük Kutsal Kitap ayetleri ve nazik Söz hatırlatıcıları, kilit ekranında, Ana Ekranında ve her zaman bir bakış uzağında.', 'App Store’dan indir', 'Google Play’den alın', 'iPhone kilit ekranına gelen Holy ayet hatırlatıcıları'],
    proof: ['App Store’da', 'Google Play’de', 'uygulama ailemizdeki indirme'],
    bodies: [
      'Özenle seçilmiş bir ayeti tek seferde oku, Kutsal Kitap referansını yanında tut ve yeniden dönmek istediğin bölümleri kaydet.',
      'İman, umut, dua, şükür, İsa, bağışlanma ve sevgi. Kalbinin ihtiyacını seç, Holy akışını, hatırlatıcılarını ve widget’larını buna göre düzenlesin.',
      'Tanrı’nın Sözünü zaten baktığın yere koy. Ana Ekran widget’ları bir ayeti gün boyunca görünür tutar.',
      'Krem ve mum ışığından koyu turkuaz, altın ve geceye kadar ana uygun bir Holy kart teması seç.',
      'Her ayeti hikâye veya kare görsele dönüştür, referansını koru ve Kutsal Yazıyı özenle paylaş.',
      'Kendi dualarını ve sözlerini yaz, gizli tut ve sakin günlük ritmine kat.',
      'Tek bir bölümle yavaşla. Nazik zamanlayıcı ve gündüz ya da gece sahneleri Kutsal Kitap okumayı günlük bir alışkanlığa dönüştürür.',
      'Holy, özenle hazırlanan ve iPhone, iPad, Android ile tabletlerde toplam bir milyondan fazla indirilen uygulama ailesinin parçasıdır.',
    ],
    alts: ['Telefonun üzerinde açılan ayet kartlarıyla Holy ana ekranı', 'Kutsal Kitap konuları seçilen Holy kategori ekranı', 'Ana Ekrandaki Holy ayet widget’ları', 'Bir tasarım seçilen Holy tema galerisi', 'Ayeti hikâye ve kare arasında değiştiren Holy paylaşım ekranı', 'Kişisel dua eklenen Ayetlerim ekranı', 'Geri sayım halkalı Holy Kutsal Yazı çalışması'],
    more: 've çok daha fazlası', faqTitle: 'Sorular ve yanıtlar',
    faqs: [
      ['Holy ne yapar?', 'Holy, Kutsal Kitap ayetlerini ve Hristiyan hatırlatıcılarını kilit ekranına, widget’lara ve kategori, tema, favori içeren güzel bir okuyucuya getirir.'],
      ['Ayet hatırlatıcıları nasıl çalışır?', 'Kaç tane ve ne zaman istediğini seçersin. Her bildirimde ayet ve Kutsal Kitap referansı bulunur, widget’lar da Sözü görünür tutar.'],
      ['Holy ücretsiz mi?', 'Holy ücretsiz indirilebilir ve ayetler, hatırlatıcılar ile widget’lar içerir. İsteğe bağlı Premium+ ek tema, kategori ve araçların kilidini açabilir.'],
      ['Hangi cihazları destekler?', 'Holy, App Store’da iPhone ve iPad, Google Play’de Android telefon ve tabletler için sunulur.'],
      ['Kendi dualarımı ekleyebilir miyim?', 'Evet. Duaların ve kişisel sözlerin Holy içinde gizli bir listede tutulur ve günlük hatırlatıcılarına eklenebilir.'],
      ['Hangi diller var?', 'Holy İngilizce, İspanyolca, Portekizce, Almanca, Fransızca, İtalyanca, Japonca, Korece, Endonezce, Türkçe ve Lehçe destekler.'],
    ],
    cta: ['Tanrı’nın Sözünü yakınında tut', 'Holy’yi indir ve bugün tek bir ayetle başla.'],
    contact: ['Bize ulaşın', 'Holy hakkında sorun veya geri bildirimin mi var? Bize doğrudan e-posta gönder.', 'E-postayı kopyala', 'E-posta kopyalandı', 'İletişim'],
    footer: ['Tüm hakları saklıdır.', 'Gizlilik', 'Koşullar', 'Tanrı’ya daha yakın yürümek isteyen herkes için sevgiyle yapıldı.'],
    a11y: ['Kapat', 'Puanlar', 'Ana', 'Alt bilgi', 'Menü', 'Dil'],
    banner: ['Holy Türkçe olarak da kullanılabilir.', 'Türkçe görüntüle', 'Hayır, teşekkürler'], marks: ['“', '”'],
  },

  pl: {
    meta: ['Holy: Codzienne wersety biblijne', 'Codzienne wersety z Biblii, chrześcijańskie przypomnienia, widżety, modlitwy i motywy, które pomagają być blisko Boga. Bezpłatnie na iPhone’a i Androida.', 'Ekrany Holy z codziennymi wersetami biblijnymi na ekranie blokady i widżetach iPhone’a'],
    nav: ['Funkcje', 'Pytania', 'Pobierz', 'Kontakt'],
    hero: ['Codzienne wersety biblijne i łagodne przypomnienia o Słowie, na ekranie blokady, ekranie głównym i zawsze w zasięgu wzroku.', 'Pobierz w App Store', 'Pobierz z Google Play', 'Przypomnienia Holy z wersetami na ekranie blokady iPhone’a'],
    proof: ['w App Store', 'w Google Play', 'pobrań w naszej rodzinie aplikacji'],
    bodies: [
      'Czytaj po jednym starannie wybranym wersecie, miej pod ręką odnośnik biblijny i zapisuj fragmenty, do których chcesz wrócić.',
      'Wiara, nadzieja, modlitwa, wdzięczność, Jezus, przebaczenie i miłość. Wybierz to, czego potrzebuje serce, a Holy dopasuje treści, przypomnienia i widżety.',
      'Umieść Słowo Boże tam, gdzie często patrzysz. Widżety ekranu głównego pokazują werset przez cały dzień.',
      'Wybierz motyw Holy na daną chwilę, od kremu i blasku świecy po głęboki turkus, złoto i noc.',
      'Zamień dowolny werset w piękną relację lub kwadrat, zachowaj odnośnik i dziel się Pismem z troską.',
      'Zapisuj własne modlitwy i słowa, przechowuj je prywatnie i włączaj do spokojnego rytmu dnia.',
      'Zatrzymaj się przy jednym fragmencie. Łagodny minutnik oraz scenerie dnia i nocy pomagają codziennie czytać Biblię.',
      'Holy należy do starannie tworzonej rodziny aplikacji, pobranych łącznie ponad milion razy na iPhone, iPad, Android i tablety.',
    ],
    alts: ['Ekran główny Holy z wachlarzem kart wersetów nad telefonem', 'Ekran kategorii Holy z wyborem tematów biblijnych', 'Widżety Holy z wersetami na ekranie głównym', 'Galeria motywów Holy z wybranym wyglądem', 'Ekran udostępniania Holy zmieniający werset między relacją a kwadratem', 'Ekran Moje wersety dodający osobistą modlitwę', 'Praktyka biblijna Holy z pierścieniem odliczania'],
    more: 'i wiele innych', faqTitle: 'Pytania i odpowiedzi',
    faqs: [
      ['Co robi Holy?', 'Holy dostarcza wersety biblijne i chrześcijańskie przypomnienia na ekran blokady, do widżetów oraz czytnika z kategoriami, motywami i ulubionymi.'],
      ['Jak działają przypomnienia?', 'Wybierasz ich liczbę i porę. Każde powiadomienie zawiera werset oraz odnośnik, a widżety utrzymują Słowo w zasięgu wzroku.'],
      ['Czy Holy jest bezpłatne?', 'Holy można pobrać bezpłatnie i korzystać z wersetów, przypomnień oraz widżetów. Opcjonalne Premium+ może odblokować dodatkowe motywy, kategorie i narzędzia.'],
      ['Jakie urządzenia obsługuje?', 'Holy jest dostępne na iPhone i iPad w App Store oraz na telefony i tablety z Androidem w Google Play.'],
      ['Czy mogę dodać własne modlitwy?', 'Tak. Modlitwy i osobiste słowa są przechowywane na prywatnej liście w Holy i mogą pojawiać się w codziennych przypomnieniach.'],
      ['Jakie języki są dostępne?', 'Holy obsługuje angielski, hiszpański, portugalski, niemiecki, francuski, włoski, japoński, koreański, indonezyjski, turecki i polski.'],
    ],
    cta: ['Miej Słowo Boże blisko', 'Pobierz Holy i zacznij dziś od jednego wersetu.'],
    contact: ['Skontaktuj się', 'Masz pytanie lub opinię o Holy? Napisz do nas bezpośrednio.', 'Kopiuj e-mail', 'E-mail skopiowany', 'Kontakt'],
    footer: ['Wszelkie prawa zastrzeżone.', 'Prywatność', 'Warunki', 'Stworzone z miłością dla każdego, kto chce iść bliżej Boga.'],
    a11y: ['Zamknij', 'Oceny', 'Główna', 'Stopka', 'Menu', 'Język'],
    banner: ['Holy jest dostępne także po polsku.', 'Zobacz po polsku', 'Nie, dziękuję'], marks: ['„', '”'],
  },
};

const sectionKeys = ['cards', 'categories', 'widgets', 'themes', 'share', 'myown', 'practice'];

// Landing-fit breaks. The HX7 deck headlines were authored for a portrait
// canvas; these preserve the exact words while keeping each span to one line
// in the wider, larger web hero.
const HERO_TITLES = {
  en: 'Keep God’s\nWord close\nall day',
  es: 'Mantén la\nPalabra de\nDios cerca',
  pt: 'Mantenha a\nPalavra de\nDeus por perto',
  de: 'Gottes Wort\nden ganzen\nTag bei dir',
  fr: 'Gardez la\nParole de\nDieu près de\nvous',
  it: 'La Parola\ndi Dio\nsempre\ncon te',
  ja: '神の言葉を\nいつもそばに',
  ko: '하루 종일\n하나님 말씀을\n가까이',
  id: 'Dekatkan\nFirman Tuhan\nsepanjang\nhari',
  tr: 'Tanrı’nın\nSözü\ngün boyu\nyanında',
  pl: 'Słowo Boże\nblisko przez\ncały dzień',
};

// The English block is the shape every Wave 2 module is validated against.
export const COPY_EN = COPY.en;

// "Which languages are available?" lists exactly the published locales, in
// each page's own language, so the answer can never promise an unshipped one.
function languagesAnswer(locale) {
  const table = LANGUAGES[locale] ?? WAVE2[locale]?.languages ?? LANGUAGES.en;
  const names = PUBLISHED_LOCALES.map((code) => table.names[code]);
  const [sep, last] = table.join;
  const list = names.length > 1 ? `${names.slice(0, -1).join(sep)}${last}${names.at(-1)}` : names[0];
  return table.sentence.replace('{list}', list);
}

export function landingCopy(locale) {
  const c = COPY[locale] ?? WAVE2[locale]?.copy ?? COPY.en;
  const heroTitle = HERO_TITLES[locale] ?? WAVE2[locale]?.heroTitle ?? HERO_TITLES.en;
  const faqs = c.faqs.map(([q, a], i) => [q, i === 5 ? languagesAnswer(locale) : a]);
  const sections = Object.fromEntries(sectionKeys.map((key, i) => [key, {
    body: c.bodies[i],
    artLabel: c.alts[i],
  }]));
  sections.family = { body: c.bodies[7], more: c.more };
  return {
    meta: { title: c.meta[0], description: c.meta[1], ogAlt: c.meta[2] },
    nav: { features: c.nav[0], faq: c.nav[1], download: c.nav[2], contact: c.nav[3] },
    hero: { title: heroTitle, sub: c.hero[0], badgeIos: c.hero[1], badgeAndroid: c.hero[2], artLabel: c.hero[3] },
    proof: { ratingIos: c.proof[0], ratingAndroid: c.proof[1], downloadsValue: '1M+', downloads: c.proof[2] },
    quoteMarks: c.marks,
    sections,
    faq: { title: c.faqTitle, items: faqs.map(([q, a]) => ({ q, a })) },
    cta: { title: c.cta[0], body: c.cta[1] },
    contact: { title: c.contact[0], body: c.contact[1], copy: c.contact[2], copied: c.contact[3], open: c.contact[4] },
    footer: { rights: c.footer[0], privacy: c.footer[1], terms: c.footer[2], tagline: c.footer[3] },
    a11y: { close: c.a11y[0], ratings: c.a11y[1], mainNav: c.a11y[2], footerNav: c.a11y[3], menu: c.a11y[4], language: c.a11y[5] },
    langBanner: { text: c.banner[0], cta: c.banner[1], dismiss: c.banner[2] },
  };
}
