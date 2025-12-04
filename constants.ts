
import { Question, QuestionCategory } from './types';

// These questions are derived from the provided workbook content 
// covering Earth sciences, physics (light/heat), and biology.
export const QUIZ_DATA: Question[] = [
  // ==========================================
  // ASTRONOMY (Earth, Sun, Seasons, Moon)
  // ==========================================
  {
    id: 101,
    category: QuestionCategory.ASTRONOMY,
    text: "地球が北極と南極を結ぶ軸（地軸）を中心に、1日1回回転することを何といいますか？",
    options: [
      { id: 'a', text: '公転（こうてん）' },
      { id: 'b', text: '自転（じてん）' },
      { id: 'c', text: '反転（はんてん）' },
      { id: 'd', text: '運転（うんてん）' },
    ],
    correctOptionId: 'b',
    explanation: "地球はコマのように1日1回「自転」しています。これにより昼と夜が繰り返されます。"
  },
  {
    id: 102,
    category: QuestionCategory.ASTRONOMY,
    text: "地球が太陽の周りを1年かけて回ることを何といいますか？",
    options: [
      { id: 'a', text: '自転' },
      { id: 'b', text: '公転' },
      { id: 'c', text: '回転' },
      { id: 'd', text: '周回' },
    ],
    correctOptionId: 'b',
    explanation: "地球は太陽の周りを1年かけて「公転」しています。これと地軸の傾きによって季節が生まれます。"
  },
  {
    id: 103,
    category: QuestionCategory.ASTRONOMY,
    text: "地球の自転の向きはどちらですか？",
    options: [
      { id: 'a', text: '東から西へ' },
      { id: 'b', text: '西から東へ' },
      { id: 'c', text: '北から南へ' },
      { id: 'd', text: '南から北へ' },
    ],
    correctOptionId: 'b',
    explanation: "地球は「西から東」へ自転しています。そのため、太陽や星は逆の「東から西」へ動いて見えます。"
  },
  {
    id: 104,
    category: QuestionCategory.ASTRONOMY,
    text: "地球の地軸は、公転面に対して垂直な線から約何度傾いていますか？",
    options: [
      { id: 'a', text: '傾いていない（0度）' },
      { id: 'b', text: '約23.4度' },
      { id: 'c', text: '約45度' },
      { id: 'd', text: '約90度' },
    ],
    correctOptionId: 'b',
    explanation: "地軸は約23.4度傾いたまま公転しています。この傾きが季節の変化を生み出します。"
  },
  {
    id: 105,
    category: QuestionCategory.ASTRONOMY,
    text: "北半球において、1年の中で昼の長さが最も長く、太陽の南中高度が最も高い日を何といいますか？",
    options: [
      { id: 'a', text: '春分の日' },
      { id: 'b', text: '夏至（げし）の日' },
      { id: 'c', text: '秋分の日' },
      { id: 'd', text: '冬至（とうじ）の日' },
    ],
    correctOptionId: 'b',
    explanation: "夏至は6月21日頃で、北半球では太陽が最も高く昇り、昼が最も長くなります。"
  },
  {
    id: 106,
    category: QuestionCategory.ASTRONOMY,
    text: "北半球において、1年の中で昼の長さが最も短く、太陽の南中高度が最も低い日を何といいますか？",
    options: [
      { id: 'a', text: '春分の日' },
      { id: 'b', text: '夏至の日' },
      { id: 'c', text: '秋分の日' },
      { id: 'd', text: '冬至（とうじ）の日' },
    ],
    correctOptionId: 'd',
    explanation: "冬至は12月22日頃で、太陽の位置が最も低く、昼が最も短くなります。"
  },
  {
    id: 107,
    category: QuestionCategory.ASTRONOMY,
    text: "春分の日と秋分の日の特徴として正しいものはどれですか？",
    options: [
      { id: 'a', text: '昼が一番長い' },
      { id: 'b', text: '夜が一番長い' },
      { id: 'c', text: '昼と夜の長さがほぼ同じ' },
      { id: 'd', text: '太陽が真北から昇る' },
    ],
    correctOptionId: 'c',
    explanation: "春分と秋分は、太陽が真東から昇り真西に沈むため、昼と夜の長さがほぼ12時間ずつになります。"
  },
  {
    id: 108,
    category: QuestionCategory.ASTRONOMY,
    text: "夏至の日の太陽は、真東よりもどの方角寄りから昇りますか？",
    options: [
      { id: 'a', text: '北寄り' },
      { id: 'b', text: '南寄り' },
      { id: 'c', text: '真東から変わらない' },
    ],
    correctOptionId: 'a',
    explanation: "夏は太陽が「北寄り」の東から昇り、高い空を通って、「北寄り」の西に沈みます。"
  },
  {
    id: 109,
    category: QuestionCategory.ASTRONOMY,
    text: "冬至の日の太陽は、真東よりもどの方角寄りから昇りますか？",
    options: [
      { id: 'a', text: '北寄り' },
      { id: 'b', text: '南寄り' },
      { id: 'c', text: '真東から変わらない' },
    ],
    correctOptionId: 'b',
    explanation: "冬は太陽が「南寄り」の東から昇り、低い空を通って、「南寄り」の西に沈みます。"
  },
  {
    id: 110,
    category: QuestionCategory.ASTRONOMY,
    text: "太陽の南中高度（真南に来た時の高さ）を求める式として、春分・秋分の日の東京（北緯35度）で正しいものは？",
    options: [
      { id: 'a', text: '90 - 35 = 55度' },
      { id: 'b', text: '90 - 35 + 23.4 = 78.4度' },
      { id: 'c', text: '90 - 35 - 23.4 = 31.6度' },
    ],
    correctOptionId: 'a',
    explanation: "春分・秋分は地軸の傾きの影響がないため、「90 - その場所の緯度」で計算できます。"
  },
  {
    id: 111,
    category: QuestionCategory.ASTRONOMY,
    text: "夏至の日の東京（北緯35度）での太陽の南中高度はおよそ何度ですか？",
    options: [
      { id: 'a', text: '約30度' },
      { id: 'b', text: '約55度' },
      { id: 'c', text: '約78度' },
    ],
    correctOptionId: 'c',
    explanation: "夏至は「90 - 緯度(35) + 23.4」となり、約78.4度と最も高くなります。"
  },
  {
    id: 112,
    category: QuestionCategory.ASTRONOMY,
    text: "冬至の日の東京（北緯35度）での太陽の南中高度はおよそ何度ですか？",
    options: [
      { id: 'a', text: '約32度' },
      { id: 'b', text: '約55度' },
      { id: 'c', text: '約78度' },
    ],
    correctOptionId: 'a',
    explanation: "冬至は「90 - 緯度(35) - 23.4」となり、約31.6度と最も低くなります。"
  },
  {
    id: 113,
    category: QuestionCategory.ASTRONOMY,
    text: "地面に垂直に立てた棒の影の先端は、1日を通じてどのように動きますか？",
    options: [
      { id: 'a', text: '東から南を通って西へ' },
      { id: 'b', text: '西から北を通って東へ' },
      { id: 'c', text: '西から南を通って東へ' },
    ],
    correctOptionId: 'b',
    explanation: "太陽は東→南→西と動くため、影はその反対の「西→北→東」へと動きます。"
  },
  {
    id: 114,
    category: QuestionCategory.ASTRONOMY,
    text: "1年の中で、正午（南中時）の影の長さが最も長くなるのはいつですか？",
    options: [
      { id: 'a', text: '夏至の日' },
      { id: 'b', text: '春分の日' },
      { id: 'c', text: '冬至の日' },
    ],
    correctOptionId: 'c',
    explanation: "冬至は太陽の高度が最も低いため、光が横から当たる形になり、影が最も長く伸びます。"
  },
  {
    id: 115,
    category: QuestionCategory.ASTRONOMY,
    text: "1年の中で、正午（南中時）の影の長さが最も短くなるのはいつですか？",
    options: [
      { id: 'a', text: '夏至の日' },
      { id: 'b', text: '春分の日' },
      { id: 'c', text: '冬至の日' },
    ],
    correctOptionId: 'a',
    explanation: "夏至は太陽の高度が最も高いため、上から照らされる形になり、影が最も短くなります。"
  },
  {
    id: 116,
    category: QuestionCategory.ASTRONOMY,
    text: "太陽が月に隠されて見えなくなる現象を何といいますか？",
    options: [
      { id: 'a', text: '月食（げっしょく）' },
      { id: 'b', text: '日食（にっしょく）' },
      { id: 'c', text: '満月' },
      { id: 'd', text: '新月' },
    ],
    correctOptionId: 'b',
    explanation: "太陽・月・地球の順に一直線に並び、月が太陽を隠す現象が「日食」です。"
  },
  {
    id: 117,
    category: QuestionCategory.ASTRONOMY,
    text: "月が地球の影に入って欠けて見える現象を何といいますか？",
    options: [
      { id: 'a', text: '月食（げっしょく）' },
      { id: 'b', text: '日食（にっしょく）' },
      { id: 'c', text: '三日月' },
    ],
    correctOptionId: 'a',
    explanation: "太陽・地球・月の順に一直線に並び、満月が地球の影に入る現象が「月食」です。"
  },
  {
    id: 118,
    category: QuestionCategory.ASTRONOMY,
    text: "北極星が時間がたってもほとんど動かないように見えるのはなぜですか？",
    options: [
      { id: 'a', text: '北極星は地球と一緒に動いているから' },
      { id: 'b', text: '地軸（自転軸）を北に伸ばした方向にあるから' },
      { id: 'c', text: '北極星は非常に遠くにあるから' },
    ],
    correctOptionId: 'b',
    explanation: "地球は地軸を中心に回転しており、北極星はその軸の延長線上にあるため、止まっているように見えます。"
  },
  {
    id: 119,
    category: QuestionCategory.ASTRONOMY,
    text: "星は北極星を中心に1時間に約何度回転して見えますか？",
    options: [
      { id: 'a', text: '約1度' },
      { id: 'b', text: '約15度' },
      { id: 'c', text: '約30度' },
      { id: 'd', text: '約45度' },
    ],
    correctOptionId: 'b',
    explanation: "地球が1日（24時間）で360度自転するため、360÷24＝15度となります。"
  },
  {
    id: 120,
    category: QuestionCategory.ASTRONOMY,
    text: "半月（上弦・下弦の月）のとき、太陽・地球・月の位置関係はどうなっていますか？",
    options: [
      { id: 'a', text: '一直線に並んでいる' },
      { id: 'b', text: '地球を中心にして直角（90度）になっている' },
      { id: 'c', text: '太陽と月が同じ方向にある' },
    ],
    correctOptionId: 'b',
    explanation: "地球から見て太陽と月が90度の方向にあるとき、月は半分だけ光って見えます。"
  },
  {
    id: 121,
    category: QuestionCategory.ASTRONOMY,
    text: "古代エジプトなどで使われた、影の長さや向きで時刻を知る道具を何といいますか？",
    options: [
      { id: 'a', text: '砂時計' },
      { id: 'b', text: '水時計' },
      { id: 'c', text: '日時計' },
      { id: 'd', text: '振り子時計' },
    ],
    correctOptionId: 'c',
    explanation: "太陽の動きによる影の変化を利用した時計を「日時計」といいます。"
  },
  {
    id: 122,
    category: QuestionCategory.ASTRONOMY,
    text: "日時計を使うとき、正しい設置方法はどれですか？",
    options: [
      { id: 'a', text: '文字盤を垂直に立てる' },
      { id: 'b', text: '文字盤を水平にし、方位磁針で北に合わせて置く' },
      { id: 'c', text: '好きな向きに置く' },
    ],
    correctOptionId: 'b',
    explanation: "影の向きは方角によって決まるため、正確な方角に合わせて水平に設置する必要があります。"
  },

  // ==========================================
  // PHYSICS / WEATHER (Light, Heat, Temperature)
  // ==========================================
  {
    id: 201,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日、気温（空気の温度）と地温（地面の温度）、どちらが先に上がりますか？",
    options: [
      { id: 'a', text: '気温' },
      { id: 'b', text: '地温' },
      { id: 'c', text: '同時に上がる' },
    ],
    correctOptionId: 'b',
    explanation: "太陽の光でまず地面が温められ、その熱が空気に伝わるため、地温の方が先に上がります。"
  },
  {
    id: 202,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日、1日の中で気温が最も高くなるのは通常何時ごろですか？",
    options: [
      { id: 'a', text: '正午（12時）ごろ' },
      { id: 'b', text: '午後2時（14時）ごろ' },
      { id: 'c', text: '午後4時（16時）ごろ' },
    ],
    correctOptionId: 'b',
    explanation: "太陽高度のピークは12時ですが、地面が温まり空気が温まるまでに時間がかかるため、14時ごろがピークになります。"
  },
  {
    id: 203,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日、1日の中で気温が最も低くなるのはいつごろですか？",
    options: [
      { id: 'a', text: '深夜0時' },
      { id: 'b', text: '日の出の直前' },
      { id: 'c', text: '日が沈んだ直後' },
    ],
    correctOptionId: 'b',
    explanation: "夜の間、地面から熱が逃げ続けるため（放射冷却）、太陽が出る直前が最も寒くなります。"
  },
  {
    id: 204,
    category: QuestionCategory.PHYSICS,
    text: "気温を正しく測るために使われる、白い箱のような装置を何といいますか？",
    options: [
      { id: 'a', text: '万華鏡' },
      { id: 'b', text: '顕微鏡' },
      { id: 'c', text: '百葉箱（ひゃくようばこ）' },
    ],
    correctOptionId: 'c',
    explanation: "日光や雨を防ぎ、風通しを良くして正しい気温を測るための箱です。"
  },
  {
    id: 205,
    category: QuestionCategory.PHYSICS,
    text: "百葉箱の扉は、通常どの方角に向けて設置しますか？",
    options: [
      { id: 'a', text: '南' },
      { id: 'b', text: '北' },
      { id: 'c', text: '東' },
      { id: 'd', text: '西' },
    ],
    correctOptionId: 'b',
    explanation: "観測するときに温度計に直射日光が当たらないようにするため、北半球では太陽が通らない「北向き」にします。"
  },
  {
    id: 206,
    category: QuestionCategory.PHYSICS,
    text: "百葉箱の中にある温度計の球部は、地面からおよそどのくらいの高さにしますか？",
    options: [
      { id: 'a', text: '0.5m 〜 1.0m' },
      { id: 'b', text: '1.2m 〜 1.5m' },
      { id: 'c', text: '2.0m 以上' },
    ],
    correctOptionId: 'b',
    explanation: "地面の照り返しの影響を避け、大人が観測しやすい高さである1.2m〜1.5mに設置します。"
  },
  {
    id: 207,
    category: QuestionCategory.PHYSICS,
    text: "百葉箱が白く塗られている主な理由は何ですか？",
    options: [
      { id: 'a', text: '汚れを目立たせるため' },
      { id: 'b', text: '日光を反射して熱を持たないようにするため' },
      { id: 'c', text: '虫が寄ってこないようにするため' },
    ],
    correctOptionId: 'b',
    explanation: "白は光を反射する性質があるため、箱自体が熱くなるのを防ぐことができます。"
  },
  {
    id: 208,
    category: QuestionCategory.PHYSICS,
    text: "百葉箱の側面が「よろい戸（隙間のある板）」になっている理由は何ですか？",
    options: [
      { id: 'a', text: '日光を入れるため' },
      { id: 'b', text: '風通しを良くし、日光や雨が入らないようにするため' },
      { id: 'c', text: '外の景色が見えるようにするため' },
    ],
    correctOptionId: 'b',
    explanation: "正しい気温は「風通しの良い日陰」で測る必要があるため、空気が通る構造になっています。"
  },
  {
    id: 209,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日の気温の変化のグラフは、一般的にどのような形になりますか？",
    options: [
      { id: 'a', text: '昼過ぎに山なりになる' },
      { id: 'b', text: '朝が一番高く、夕方が一番低い' },
      { id: 'c', text: '一日中水平な直線になる' },
    ],
    correctOptionId: 'a',
    explanation: "日の出とともに上がり、14時ごろにピークを迎え、その後下がる山なりの形になります。"
  },
  {
    id: 210,
    category: QuestionCategory.PHYSICS,
    text: "曇りや雨の日の気温の変化の特徴は？",
    options: [
      { id: 'a', text: '晴れの日よりも変化が大きく、最高気温が高い' },
      { id: 'b', text: '晴れの日よりも変化が小さく、最高気温と最低気温の差が少ない' },
      { id: 'c', text: '変化の仕方は晴れの日と全く同じ' },
    ],
    correctOptionId: 'b',
    explanation: "雲が日光を遮るため気温が上がりにくく、また雲が熱を逃さない保温効果もあるため、変化が小さくなります。"
  },

  // ==========================================
  // BIOLOGY (Insects, Plants, Animals)
  // ==========================================
  {
    id: 301,
    category: QuestionCategory.BIOLOGY,
    text: "昆虫の体は、大きく3つの部分に分かれています。頭、胸、あと一つは？",
    options: [
      { id: 'a', text: '腰（こし）' },
      { id: 'b', text: '腹（はら）' },
      { id: 'c', text: '尻（しり）' },
      { id: 'd', text: '背（せ）' },
    ],
    correctOptionId: 'b',
    explanation: "昆虫の体は「頭部・胸部・腹部」の3つに分かれています。"
  },
  {
    id: 302,
    category: QuestionCategory.BIOLOGY,
    text: "昆虫の足は全部で何本ありますか？",
    options: [
      { id: 'a', text: '4本' },
      { id: 'b', text: '6本' },
      { id: 'c', text: '8本' },
      { id: 'd', text: '10本' },
    ],
    correctOptionId: 'b',
    explanation: "昆虫の足は6本です。クモは8本なので昆虫ではありません。"
  },
  {
    id: 303,
    category: QuestionCategory.BIOLOGY,
    text: "昆虫の足は、体のどの部分から生えていますか？",
    options: [
      { id: 'a', text: '頭' },
      { id: 'b', text: '胸' },
      { id: 'c', text: '腹' },
    ],
    correctOptionId: 'b',
    explanation: "6本の足と、羽（ある場合）はすべて「胸」から生えています。"
  },
  {
    id: 304,
    category: QuestionCategory.BIOLOGY,
    text: "次のうち、昆虫ではない生き物はどれですか？",
    options: [
      { id: 'a', text: 'カブトムシ' },
      { id: 'b', text: 'アリ' },
      { id: 'c', text: 'クモ' },
      { id: 'd', text: 'バッタ' },
    ],
    correctOptionId: 'c',
    explanation: "クモは足が8本あり、体が2つ（頭胸部と腹部）にしか分かれていないため、昆虫の仲間ではありません。"
  },
  {
    id: 305,
    category: QuestionCategory.BIOLOGY,
    text: "ダンゴムシの足の数は何本ですか？",
    options: [
      { id: 'a', text: '6本' },
      { id: 'b', text: '8本' },
      { id: 'c', text: '14本' },
    ],
    correctOptionId: 'c',
    explanation: "ダンゴムシは昆虫ではなく、エビやカニと同じ「甲殻類（こうかくるい）」の仲間で、足は14本あります。"
  },
  {
    id: 306,
    category: QuestionCategory.BIOLOGY,
    text: "種子が発芽（芽が出ること）するために必要な3つの条件は、水、空気と、もう一つは何ですか？",
    options: [
      { id: 'a', text: '日光' },
      { id: 'b', text: '肥料' },
      { id: 'c', text: '適当な温度' },
      { id: 'd', text: '土' },
    ],
    correctOptionId: 'c',
    explanation: "発芽には「水・空気・適当な温度」が必要です。日光や肥料は、芽が出た後の成長に必要です。"
  },
  {
    id: 307,
    category: QuestionCategory.BIOLOGY,
    text: "インゲンマメの種子の中にある、発芽するための養分（デンプン）を調べるには何を使いますか？",
    options: [
      { id: 'a', text: '石灰水' },
      { id: 'b', text: 'ヨウ素液' },
      { id: 'c', text: 'ホウ酸水' },
    ],
    correctOptionId: 'b',
    explanation: "ヨウ素液はデンプンに反応して「青紫色」に変わります。"
  },
  {
    id: 308,
    category: QuestionCategory.BIOLOGY,
    text: "ジャガイモは、植物のどの部分を食べていますか？",
    options: [
      { id: 'a', text: '根（ね）' },
      { id: 'b', text: '茎（くき）' },
      { id: 'c', text: '実（み）' },
      { id: 'd', text: '葉（は）' },
    ],
    correctOptionId: 'b',
    explanation: "ジャガイモは地下にある茎が養分を蓄えて太くなったもので、「塊茎（かいけい）」と呼ばれます。"
  },
  {
    id: 309,
    category: QuestionCategory.BIOLOGY,
    text: "サツマイモは、植物のどの部分を食べていますか？",
    options: [
      { id: 'a', text: '根（ね）' },
      { id: 'b', text: '茎（くき）' },
      { id: 'c', text: '実（み）' },
    ],
    correctOptionId: 'a',
    explanation: "サツマイモは根が養分を蓄えて太くなったもので、「塊根（かいこん）」と呼ばれます。"
  },
  {
    id: 310,
    category: QuestionCategory.BIOLOGY,
    text: "植物が日光のエネルギーを使って、水と二酸化炭素から養分（デンプン）を作る働きを何といいますか？",
    options: [
      { id: 'a', text: '呼吸' },
      { id: 'b', text: '蒸散' },
      { id: 'c', text: '光合成（こうごうせい）' },
    ],
    correctOptionId: 'c',
    explanation: "葉にある葉緑体で行われるこの働きを光合成といいます。"
  },
  {
    id: 311,
    category: QuestionCategory.BIOLOGY,
    text: "カマキリは冬の間、どのような姿で冬を越しますか？",
    options: [
      { id: 'a', text: '卵' },
      { id: 'b', text: '幼虫' },
      { id: 'c', text: '成虫' },
    ],
    correctOptionId: 'a',
    explanation: "カマキリは秋にスポンジのような卵のうを産み、その中の「卵」で冬を越します。"
  },
  {
    id: 312,
    category: QuestionCategory.BIOLOGY,
    text: "テントウムシは冬の間、どのような姿で冬を越しますか？",
    options: [
      { id: 'a', text: '卵' },
      { id: 'b', text: '幼虫' },
      { id: 'c', text: '成虫' },
    ],
    correctOptionId: 'c',
    explanation: "テントウムシは「成虫」のまま、落ち葉の下や木の割れ目などで集まって冬を越します。"
  },
  {
    id: 313,
    category: QuestionCategory.BIOLOGY,
    text: "アブラナ（菜の花）の花が咲く季節はいつですか？",
    options: [
      { id: 'a', text: '春' },
      { id: 'b', text: '夏' },
      { id: 'c', text: '秋' },
      { id: 'd', text: '冬' },
    ],
    correctOptionId: 'a',
    explanation: "アブラナは春を代表する花で、黄色い花を咲かせます。"
  },
  {
    id: 314,
    category: QuestionCategory.BIOLOGY,
    text: "イネ（お米）の花が咲き、実がなる季節はいつですか？",
    options: [
      { id: 'a', text: '春から夏' },
      { id: 'b', text: '夏から秋' },
      { id: 'c', text: '冬' },
    ],
    correctOptionId: 'b',
    explanation: "イネは夏に花を咲かせ、秋に実（米）を収穫します。"
  },
  {
    id: 315,
    category: QuestionCategory.BIOLOGY,
    text: "次のうち、実ではなく「葉」を食べる野菜はどれですか？",
    options: [
      { id: 'a', text: 'ニンジン' },
      { id: 'b', text: 'キャベツ' },
      { id: 'c', text: 'トマト' },
      { id: 'd', text: 'キュウリ' },
    ],
    correctOptionId: 'b',
    explanation: "キャベツ、レタス、ホウレンソウなどは葉を食べる野菜（葉菜類）です。ニンジンは根、トマトは実です。"
  },
  {
    id: 316,
    category: QuestionCategory.BIOLOGY,
    text: "次のうち、実ではなく「根」を食べる野菜はどれですか？",
    options: [
      { id: 'a', text: 'ゴボウ' },
      { id: 'b', text: 'タマネギ' },
      { id: 'c', text: 'レンコン' },
    ],
    correctOptionId: 'a',
    explanation: "ゴボウ、ダイコン、ニンジンは根を食べる野菜（根菜類）です。タマネギは葉、レンコンは茎（地下茎）です。"
  },
  {
    id: 317,
    category: QuestionCategory.BIOLOGY,
    text: "ヘチマの種をまくのに最も適した季節はいつですか？",
    options: [
      { id: 'a', text: '冬の終わり' },
      { id: 'b', text: '春の終わりから初夏' },
      { id: 'c', text: '秋' },
    ],
    correctOptionId: 'b',
    explanation: "ヘチマは温かい気温を好むため、気温が十分上がった春の終わり頃に種をまきます。"
  },
  {
    id: 318,
    category: QuestionCategory.BIOLOGY,
    text: "モンシロチョウの幼虫が好んで食べる植物はどれですか？",
    options: [
      { id: 'a', text: 'キャベツ' },
      { id: 'b', text: 'ミカン' },
      { id: 'c', text: 'サクラ' },
    ],
    correctOptionId: 'a',
    explanation: "モンシロチョウの幼虫（アオムシ）は、キャベツやブロッコリーなどのアブラナ科の植物を食べます。"
  },
  {
    id: 319,
    category: QuestionCategory.BIOLOGY,
    text: "アゲハチョウの幼虫が好んで食べる植物はどれですか？",
    options: [
      { id: 'a', text: 'キャベツ' },
      { id: 'b', text: 'ミカンやサンショウ' },
      { id: 'c', text: 'スミレ' },
    ],
    correctOptionId: 'b',
    explanation: "アゲハチョウの幼虫は、ミカン、レモン、サンショウなどのミカン科の植物を食べます。"
  },
  {
    id: 320,
    category: QuestionCategory.BIOLOGY,
    text: "完全変態（かんぜんへんたい）をする昆虫の特徴は何ですか？",
    options: [
      { id: 'a', text: '卵から生まれない' },
      { id: 'b', text: 'さなぎ（蛹）の時期がある' },
      { id: 'c', text: '幼虫と成虫の姿が似ている' },
    ],
    correctOptionId: 'b',
    explanation: "チョウ、カブトムシ、ハチなどは「卵→幼虫→さなぎ→成虫」と育ち、これを完全変態といいます。"
  },
  {
    id: 321,
    category: QuestionCategory.BIOLOGY,
    text: "不完全変態（ふかんぜんへんたい）をする昆虫はどれですか？",
    options: [
      { id: 'a', text: 'カブトムシ' },
      { id: 'b', text: 'モンシロチョウ' },
      { id: 'c', text: 'バッタ' },
    ],
    correctOptionId: 'c',
    explanation: "バッタ、カマキリ、トンボなどはさなぎにならず、「卵→幼虫→成虫」と育ちます。"
  },
  {
    id: 322,
    category: QuestionCategory.BIOLOGY,
    text: "トンボの幼虫は何と呼ばれますか？またどこに住んでいますか？",
    options: [
      { id: 'a', text: 'ウジといい、土の中に住む' },
      { id: 'b', text: 'ヤゴといい、水の中に住む' },
      { id: 'c', text: 'ボウフラといい、水たまりに住む' },
    ],
    correctOptionId: 'b',
    explanation: "トンボの幼虫は「ヤゴ」と呼ばれ、池や川の水中で生活します。"
  }
];

export const TEACHER_SYSTEM_INSTRUCTION = `
あなたは熱心で優しい「理科の塾講師」です。
小学生から中学生の生徒に対して、理科の質問に答えてください。
特に以下の分野についての知識が豊富です：
1. 天体（地球の自転・公転、季節の変化、太陽の動き、月）
2. 気象（気温の変化、地温）
3. 生物（昆虫とクモの違い、植物の分類）

回答のルール:
- 小学生にもわかるように、難しい言葉は噛み砕いて説明してください。
- 励ましの言葉（「いい質問だね！」「その調子！」など）を適度に使ってください。
- 説明は長くなりすぎないように、簡潔にまとめてください。
- 必要であれば、身近な例（「コマのように回っている」「懐中電灯を当てたときのように」など）を使ってください。
`;
