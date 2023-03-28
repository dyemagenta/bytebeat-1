text = 'bytebeat is awesome!',
morse = {
  'a': '. ..',    'b': '.. . . .',  'c': '.. . .. .',  'd': '.. . .',
  'e': '.',     'f': '. . .. .',  'g': '.. .. .',   'h': '. . . .',
  'i': '. .',    'j': '. .. .. ..',  'k': '.. . ..',   'l': '. .. . .',
  'm': '.. ..',    'n': '...',    'o': '.. .. ..',   'p': '. .. .. .',
  'q': '.. .. . ..',  'r': '. .. .',   's': '. . .',   't': '..',
  'u': '. . ..',   'v': '. . . ..',  'w': '. .. ..',   'x': '.. . . ..',
  'y': '.. . .. ..',  'z': '.. .. . .',  ' ': '  ',
  '1': '. .. .. .. ..',
  '2': '. . .. .. ..',
  '3': '. . . .. ..',
  '4': '. . . . ..',
  '5': '. . . . .',
  '6': '.. . . . .',
  '7': '.. .. . . .',
  '8': '.. .. .. . .',
  '9': '.. .. .. .. .',
  '0': '.. .. .. .. ..',
},
convert = ()=> {
	return text.toLowerCase().split('')
												 .map((char) => morse[char])
												 .join('  ');
},
chr=convert().charCodeAt(floor(t/3528)),
chr == 46?sin(t/10)*127+127:127
