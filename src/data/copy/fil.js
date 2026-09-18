// Play-only deck: Filipino has no App Store listing. The iOS-only groups
// (myown, dark, storeIos) still carry reviewed copy so the module keeps
// en.js's shape and the studio can preview every slide.
export default {
  reminders: {
    hero: 'Laging malapit\nang Salita ng Diyos',
    date: 'Lunes, Enero 1',
    time: '3:16',
    whens: ['ngayon', '3:16', '3:16'],
  },
  hook: { hero: 'Isang talata sa Bibliya\npara sa bawat araw' },
  categories: { hero: 'Kasulatan sa bawat\ndamdamin at sandali' },
  widgets: {
    hero: 'Salita ng Diyos\nsa home screen mo',
    heroAndroid: 'Salita ng Diyos\nsa home screen mo',
  },
  themes: { hero: 'Gawing personal\nang bawat talata', sample: 'Aa' },
  share: { hero: 'Ibahagi ang Salita\nnang maganda' },
  myown: {
    hero: 'Panatilihing malapit\nang mga panalangin mo',
    dialogTyped: 'Panginoon, gabayan Mo ang puso at mga hakbang ko ngayon.',
    dialogAuthor: 'Aking panalangin',
    rows: [
      { text: 'Panginoon, tulungan Mo akong lumakad sa pananampalataya ngayon.', date: 'Hulyo 21' },
      { text: 'Bigyan Mo ako ng karunungan sa mga darating.', date: 'Hulyo 14' },
      { text: 'Salamat sa Iyong awa na bago tuwing umaga.', date: 'Hulyo 6' },
      { text: 'Panatilihin Mong matatag ang puso ko sa Iyong kapayapaan.', date: 'Hunyo 28' },
      { text: 'Turuan Mo akong magpatawad nang buong puso.', date: 'Hunyo 19' },
      { text: 'Nawa’y magbigay ng pag-asa ang mga salita ko ngayon.', date: 'Hunyo 9' },
      { text: 'Ipinagkakatiwala ko sa Iyo ang araw na ito.', date: 'Hunyo 1' },
    ],
  },
  practice: { hero: 'Huminto sandali\nsa isang talata' },
  dark: { hero: 'Kasama mo,\naraw at gabi' },
  proof: {
    hero: 'Mahal ng mambabasang\nbumabalik sa Kasulatan',
    heroAndroid: 'Mahal ng marami\nsa buong mundo',
    storeIos: 'sa App Store',
    storeAndroid: 'sa Google Play',
    familyTitle: 'Buong pusong gawa ng pamilyang Believe',
    familySub: 'Mahigit 1 milyong download sa aming mga app',
  },
  feature: { hero: 'Araw-araw na\ntalata sa Bibliya', qOpen: '“', qClose: '”' },
};
