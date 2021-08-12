import art from '../jsonfortunes/art.json';
import asciiart from '../jsonfortunes/ascii-art.json';
import computers from '../jsonfortunes/computers.json';
import cookie from '../jsonfortunes/cookie.json';
import debian from '../jsonfortunes/debian.json';
import definitions from '../jsonfortunes/definitions.json';
import drugs from '../jsonfortunes/drugs.json';
import disclaimer from '../jsonfortunes/disclaimer.json';
import education from '../jsonfortunes/education.json';
import ethnic from '../jsonfortunes/ethnic.json';
import food from '../jsonfortunes/food.json';
import fortunes from '../jsonfortunes/fortunes.json';
import goedel from '../jsonfortunes/goedel.json';
import humorists from '../jsonfortunes/humorists.json';
import kids from '../jsonfortunes/kids.json';
import knghtbrd from '../jsonfortunes/knghtbrd.json';
import law from '../jsonfortunes/law.json';
import linux from '../jsonfortunes/linux.json';
import linuxcookie from '../jsonfortunes/linuxcookie.json';
import literature from '../jsonfortunes/literature.json';
import love from '../jsonfortunes/love.json';
import magic from '../jsonfortunes/magic.json';
import medicine from '../jsonfortunes/medicine.json';
import menwomen from '../jsonfortunes/men-women.json';
import miscellaneous from '../jsonfortunes/miscellaneous.json';
import news from '../jsonfortunes/news.json';
import paradoxum from '../jsonfortunes/paradoxum.json';
import people from '../jsonfortunes/people.json';
import perl from '../jsonfortunes/perl.json';
import pets from '../jsonfortunes/pets.json';
import platitudes from '../jsonfortunes/platitudes.json';
import politics from '../jsonfortunes/politics.json';
import pratchett from '../jsonfortunes/pratchett.json';
import riddles from '../jsonfortunes/riddles.json';
import science from '../jsonfortunes/science.json';
import songspoems from '../jsonfortunes/songs-poems.json';
import sports from '../jsonfortunes/sports.json';
import startrek from '../jsonfortunes/startrek.json';
import tao from '../jsonfortunes/tao.json';
import translateme from '../jsonfortunes/translate-me.json';
import wisdom from '../jsonfortunes/wisdom.json';
import work from '../jsonfortunes/work.json';
import zippy from '../jsonfortunes/zippy.json';

import art_off from '../jsonfortunes/off/art.json';
import astrology_off from '../jsonfortunes/off/astrology.json';
import atheism_off from '../jsonfortunes/off/atheism.json';
import blackhumor_off from '../jsonfortunes/off/black-humor.json';
import cookie_off from '../jsonfortunes/off/cookie.json';
import debian_off from '../jsonfortunes/off/debian.json';
import definitions_off from '../jsonfortunes/off/definitions.json';
import drugs_off from '../jsonfortunes/off/drugs.json';
import ethnic_off from '../jsonfortunes/off/ethnic.json';
import fortunes_off from '../jsonfortunes/off/fortunes.json';
import hphobia_off from '../jsonfortunes/off/hphobia.json';
import knghtbrd_off from '../jsonfortunes/off/knghtbrd.json';
import limerick_off from '../jsonfortunes/off/limerick.json';
import linux_off from '../jsonfortunes/off/linux.json';
import misandry_off from '../jsonfortunes/off/misandry.json';
import miscellaneous_off from '../jsonfortunes/off/miscellaneous.json';
import misogyny_off from '../jsonfortunes/off/misogyny.json';
import politics_off from '../jsonfortunes/off/politics.json';
import racism_off from '../jsonfortunes/off/racism.json';
import religion_off from '../jsonfortunes/off/religion.json';
import riddles_off from '../jsonfortunes/off/riddles.json';
import sex_off from '../jsonfortunes/off/sex.json';
import songspoems_off from '../jsonfortunes/off/songs-poems.json';
import vulgarity_off from '../jsonfortunes/off/vulgarity.json';
import zippy_off from '../jsonfortunes/off/zippy.json';

const catlist_off = [
  {catname: 'art_off', displayname: 'Art (Off)', o: 'y'},
  {catname: 'astrology_off', displayname: 'Astrology (Off)', o: 'y'},
  {catname: 'atheism_off', displayname: 'Atheism (Off)', o: 'y'},
  {catname: 'blackhumor_off', displayname: 'Black humor (Off)', o: 'y'},
  {catname: 'cookie_off', displayname: 'Cookie (Off)', o: 'y'},
  {catname: 'debian_off', displayname: 'Debain (Off)', o: 'y'},
  {catname: 'definitions_off', displayname: 'Definitions (Off)', o: 'y'},
  {catname: 'drugs_off', displayname: 'Drugs (Off)', o: 'y'},
  {catname: 'ethnic_off', displayname: 'Ethnic (Off)', o: 'y'},
  {catname: 'fortunes_off', displayname: 'Fortunes (Off)', o: 'y'},
  {catname: 'hphobia_off', displayname: 'Hphobia (Off)', o: 'y'},
  {catname: 'knghtbrd_off', displayname: 'Knghtbrd (Off)', o: 'y'},
  {catname: 'limerick_off', displayname: 'Limerick (Off)', o: 'y'},
  {catname: 'linux_off', displayname: 'Linux (Off)', o: 'y'},
  {catname: 'misandry_off', displayname: 'Misandry (Off)', o: 'y'},
  {catname: 'miscellaneous_off', displayname: 'Miscellaneous (Off)', o: 'y'},
  {catname: 'misogyny_off', displayname: 'Misogyny (Off)', o: 'y'},
  {catname: 'politics_off', displayname: 'Politics (Off)', o: 'y'},
  {catname: 'racism_off', displayname: 'Racism (Off)', o: 'y'},
  {catname: 'religion_off', displayname: 'Religion (Off)', o: 'y'},
  {catname: 'riddles_off', displayname: 'Riddles (Off)', o: 'y'},
  {catname: 'sex_off', displayname: 'Sex (Off)', o: 'y'},
  {catname: 'songspoems_off', displayname: 'Songs Poems (Off)', o: 'y'},
  {catname: 'vulgarity_off', displayname: 'Vulgarity (Off)', o: 'y'},
  {catname: 'zippy_off', displayname: 'Zippy (Off)', o: 'y'},
];

const catlist_clean = [
  {catname: 'art', displayname: 'Art', o: 'n'},
  {catname: 'asciiart', displayname: 'ASCII Art', o: 'n'},
  {catname: 'computers', displayname: 'Computers', o: 'n'},
  {catname: 'cookie', displayname: 'Cookie', o: 'n'},
  {catname: 'debian', displayname: 'Debian', o: 'n'},
  {catname: 'definitions', displayname: 'Definitions', o: 'n'},
  {catname: 'disclaimer', displayname: 'Disclaimer', o: 'n'},
  {catname: 'drugs', displayname: 'Drugs', o: 'n'},
  {catname: 'education', displayname: 'Education', o: 'n'},
  {catname: 'ethnic', displayname: 'Ethnic', o: 'n'},
  {catname: 'food', displayname: 'Food', o: 'n'},
  {catname: 'fortunes', displayname: 'Fortunes', o: 'n'},
  {catname: 'goedel', displayname: 'Goedel', o: 'n'},
  {catname: 'humorists', displayname: 'Humorists'},
  {catname: 'kids', displayname: 'Kids'},
  {catname: 'knghtbrd', displayname: 'knghtbrd', o: 'n'},
  {catname: 'law', displayname: 'Law', o: 'n'},
  {catname: 'linux', displayname: 'Linux', o: 'n'},
  {catname: 'linuxcookie', displayname: 'Linux Cookie', o: 'n'},
  {catname: 'literature', displayname: 'Literature', o: 'n'},
  {catname: 'love', displayname: 'Love', o: 'n'},
  {catname: 'magic', displayname: 'Magic', o: 'n'},
  {catname: 'medicine', displayname: 'Medicine', o: 'n'},
  {catname: 'menwomen', displayname: 'Men/Women', o: 'n'},
  {catname: 'miscellaneous', displayname: 'Miscellaneous', o: 'n'},
  {catname: 'news', displayname: 'News', o: 'n'},
  {catname: 'paradoxum', displayname: 'Paradoxum', o: 'n'},
  {catname: 'people', displayname: 'People', o: 'n'},
  {catname: 'pets', displayname: 'Pets', o: 'n'},
  {catname: 'platitudes', displayname: 'Platitudes', o: 'n'},
  {catname: 'politics', displayname: 'Politics', o: 'n'},
  {catname: 'pratchett', displayname: 'pratchett', o: 'n'},
  {catname: 'riddles', displayname: 'Riddles', o: 'n'},
  {catname: 'science', displayname: 'Science', o: 'n'},
  {catname: 'songspoems', displayname: 'Songs/Poems', o: 'n'},
  {catname: 'sports', displayname: 'Sports', o: 'n'},
  {catname: 'startrek', displayname: 'Star Trek', o: 'n'},
  {catname: 'tao', displayname: 'Tao', o: 'n'},
  {catname: 'translateme', displayname: 'Translate Me', o: 'n'},
  {catname: 'wisdom', displayname: 'Wisdom', o: 'n'},
  {catname: 'work', displayname: 'work', o: 'n'},
  {catname: 'zippy', displayname: 'Zippy', o: 'n'},
];

const fortunefiles_off = {
  art_off,
  astrology_off,
  atheism_off,
  blackhumor_off,
  cookie_off,
  debian_off,
  definitions_off,
  drugs_off,
  ethnic_off,
  fortunes_off,
  hphobia_off,
  knghtbrd_off,
  limerick_off,
  linux_off,
  misandry_off,
  miscellaneous_off,
  misogyny_off,
  politics_off,
  racism_off,
  religion_off,
  riddles_off,
  sex_off,
  songspoems_off,
  vulgarity_off,
  zippy_off,
};

const fortunefiles_clean = {
  art,
  asciiart,
  computers,
  cookie,
  debian,
  definitions,
  disclaimer,
  drugs,
  education,
  ethnic,
  food,
  fortunes,
  goedel,
  humorists,
  kids,
  knghtbrd,
  law,
  linux,
  linuxcookie,
  literature,
  love,
  magic,
  medicine,
  menwomen,
  miscellaneous,
  news,
  paradoxum,
  people,
  perl,
  pets,
  platitudes,
  politics,
  pratchett,
  riddles,
  science,
  songspoems,
  sports,
  startrek,
  tao,
  translateme,
  wisdom,
  zippy,
  work,
};
const fortunefiles = {...fortunefiles_clean, ...fortunefiles_off};
const catlist = catlist_clean.concat(catlist_off);

export {
  catlist_clean,
  fortunefiles_clean,
  catlist_off,
  fortunefiles_off,
  fortunefiles,
  catlist,
};
