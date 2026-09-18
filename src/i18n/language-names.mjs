// Language names for the FAQ answer "Which languages are available?", per
// page locale. The answer lists PUBLISHED_LOCALES in order, so it grows with
// the launch gate instead of being edited by hand. The eleven Wave 1 names
// are the approved HX8 wording, extracted verbatim; `join` is [separator,
// last separator]. Wave 2 locales carry their own table in wave2/<locale>.mjs.

export const LANGUAGES = {
  "en": {
    "sentence": "Holy supports {list}.",
    "join": [
      ", ",
      " and "
    ],
    "names": {
      "en": "English",
      "es": "Spanish",
      "pt": "Portuguese",
      "de": "German",
      "fr": "French",
      "it": "Italian",
      "ja": "Japanese",
      "ko": "Korean",
      "id": "Indonesian",
      "tr": "Turkish",
      "pl": "Polish",
      "fil": "Filipino",
      "hi": "Hindi",
      "ro": "Romanian",
      "nl": "Dutch",
      "cs": "Czech",
      "hr": "Croatian",
      "hu": "Hungarian",
      "sl": "Slovenian",
      "sv": "Swedish",
      "nb": "Norwegian"
    }
  },
  "es": {
    "sentence": "Holy admite {list}.",
    "join": [
      ", ",
      " y "
    ],
    "names": {
      "en": "inglés",
      "es": "español",
      "pt": "portugués",
      "de": "alemán",
      "fr": "francés",
      "it": "italiano",
      "ja": "japonés",
      "ko": "coreano",
      "id": "indonesio",
      "tr": "turco",
      "pl": "polaco",
      "fil": "filipino",
      "hi": "hindi",
      "ro": "rumano",
      "nl": "neerlandés",
      "cs": "checo",
      "hr": "croata",
      "hu": "húngaro",
      "sl": "esloveno",
      "sv": "sueco",
      "nb": "noruego"
    }
  },
  "pt": {
    "sentence": "Holy oferece {list}.",
    "join": [
      ", ",
      " e "
    ],
    "names": {
      "en": "inglês",
      "es": "espanhol",
      "pt": "português",
      "de": "alemão",
      "fr": "francês",
      "it": "italiano",
      "ja": "japonês",
      "ko": "coreano",
      "id": "indonésio",
      "tr": "turco",
      "pl": "polonês",
      "fil": "filipino",
      "hi": "hindi",
      "ro": "romeno",
      "nl": "holandês",
      "cs": "tcheco",
      "hr": "croata",
      "hu": "húngaro",
      "sl": "esloveno",
      "sv": "sueco",
      "nb": "norueguês"
    }
  },
  "de": {
    "sentence": "Holy unterstützt {list}.",
    "join": [
      ", ",
      " und "
    ],
    "names": {
      "en": "Englisch",
      "es": "Spanisch",
      "pt": "Portugiesisch",
      "de": "Deutsch",
      "fr": "Französisch",
      "it": "Italienisch",
      "ja": "Japanisch",
      "ko": "Koreanisch",
      "id": "Indonesisch",
      "tr": "Türkisch",
      "pl": "Polnisch",
      "fil": "Filipino",
      "hi": "Hindi",
      "ro": "Rumänisch",
      "nl": "Niederländisch",
      "cs": "Tschechisch",
      "hr": "Kroatisch",
      "hu": "Ungarisch",
      "sl": "Slowenisch",
      "sv": "Schwedisch",
      "nb": "Norwegisch"
    }
  },
  "fr": {
    "sentence": "Holy prend en charge {list}.",
    "join": [
      ", ",
      " et "
    ],
    "names": {
      "en": "l’anglais",
      "es": "l’espagnol",
      "pt": "le portugais",
      "de": "l’allemand",
      "fr": "le français",
      "it": "l’italien",
      "ja": "le japonais",
      "ko": "le coréen",
      "id": "l’indonésien",
      "tr": "le turc",
      "pl": "le polonais",
      "fil": "le filipino",
      "hi": "l’hindi",
      "ro": "le roumain",
      "nl": "le néerlandais",
      "cs": "le tchèque",
      "hr": "le croate",
      "hu": "le hongrois",
      "sl": "le slovène",
      "sv": "le suédois",
      "nb": "le norvégien"
    }
  },
  "it": {
    "sentence": "Holy supporta {list}.",
    "join": [
      ", ",
      " e "
    ],
    "names": {
      "en": "inglese",
      "es": "spagnolo",
      "pt": "portoghese",
      "de": "tedesco",
      "fr": "francese",
      "it": "italiano",
      "ja": "giapponese",
      "ko": "coreano",
      "id": "indonesiano",
      "tr": "turco",
      "pl": "polacco",
      "fil": "filippino",
      "hi": "hindi",
      "ro": "rumeno",
      "nl": "olandese",
      "cs": "ceco",
      "hr": "croato",
      "hu": "ungherese",
      "sl": "sloveno",
      "sv": "svedese",
      "nb": "norvegese"
    }
  },
  "ja": {
    "sentence": "{list}に対応しています。",
    "join": [
      "、",
      "、"
    ],
    "names": {
      "en": "英語",
      "es": "スペイン語",
      "pt": "ポルトガル語",
      "de": "ドイツ語",
      "fr": "フランス語",
      "it": "イタリア語",
      "ja": "日本語",
      "ko": "韓国語",
      "id": "インドネシア語",
      "tr": "トルコ語",
      "pl": "ポーランド語",
      "fil": "フィリピン語",
      "hi": "ヒンディー語",
      "ro": "ルーマニア語",
      "nl": "オランダ語",
      "cs": "チェコ語",
      "hr": "クロアチア語",
      "hu": "ハンガリー語",
      "sl": "スロベニア語",
      "sv": "スウェーデン語",
      "nb": "ノルウェー語"
    }
  },
  "ko": {
    "sentence": "{list}를 지원해요.",
    "join": [
      ", ",
      ", "
    ],
    "names": {
      "en": "영어",
      "es": "스페인어",
      "pt": "포르투갈어",
      "de": "독일어",
      "fr": "프랑스어",
      "it": "이탈리아어",
      "ja": "일본어",
      "ko": "한국어",
      "id": "인도네시아어",
      "tr": "터키어",
      "pl": "폴란드어",
      "fil": "필리핀어",
      "hi": "힌디어",
      "ro": "루마니아어",
      "nl": "네덜란드어",
      "cs": "체코어",
      "hr": "크로아티아어",
      "hu": "헝가리어",
      "sl": "슬로베니아어",
      "sv": "스웨덴어",
      "nb": "노르웨이어"
    }
  },
  "id": {
    "sentence": "Holy mendukung bahasa {list}.",
    "join": [
      ", ",
      ", dan "
    ],
    "names": {
      "en": "Inggris",
      "es": "Spanyol",
      "pt": "Portugis",
      "de": "Jerman",
      "fr": "Prancis",
      "it": "Italia",
      "ja": "Jepang",
      "ko": "Korea",
      "id": "Indonesia",
      "tr": "Turki",
      "pl": "Polandia",
      "fil": "Filipino",
      "hi": "Hindi",
      "ro": "Rumania",
      "nl": "Belanda",
      "cs": "Ceko",
      "hr": "Kroasia",
      "hu": "Hongaria",
      "sl": "Slovenia",
      "sv": "Swedia",
      "nb": "Norwegia"
    }
  },
  "tr": {
    "sentence": "Holy {list} destekler.",
    "join": [
      ", ",
      " ve "
    ],
    "names": {
      "en": "İngilizce",
      "es": "İspanyolca",
      "pt": "Portekizce",
      "de": "Almanca",
      "fr": "Fransızca",
      "it": "İtalyanca",
      "ja": "Japonca",
      "ko": "Korece",
      "id": "Endonezce",
      "tr": "Türkçe",
      "pl": "Lehçe",
      "fil": "Filipince",
      "hi": "Hintçe",
      "ro": "Rumence",
      "nl": "Felemenkçe",
      "cs": "Çekçe",
      "hr": "Hırvatça",
      "hu": "Macarca",
      "sl": "Slovence",
      "sv": "İsveççe",
      "nb": "Norveççe"
    }
  },
  "pl": {
    "sentence": "Holy obsługuje {list}.",
    "join": [
      ", ",
      " i "
    ],
    "names": {
      "en": "angielski",
      "es": "hiszpański",
      "pt": "portugalski",
      "de": "niemiecki",
      "fr": "francuski",
      "it": "włoski",
      "ja": "japoński",
      "ko": "koreański",
      "id": "indonezyjski",
      "tr": "turecki",
      "pl": "polski",
      "fil": "filipiński",
      "hi": "hindi",
      "ro": "rumuński",
      "nl": "niderlandzki",
      "cs": "czeski",
      "hr": "chorwacki",
      "hu": "węgierski",
      "sl": "słoweński",
      "sv": "szwedzki",
      "nb": "norweski"
    }
  }
};
