
import { Question, QuestionCategory } from './types';

// These questions are strictly derived from the provided PDF content 
// (Earth's rotation/revolution, seasons, sun path, shadows, temperature, biology)
export const QUIZ_DATA: Question[] = [
  // --- ASTRONOMY (Earth, Sun, Seasons) ---
  {
    id: 1,
    category: QuestionCategory.ASTRONOMY,
    text: "地球が自分の軸（地軸）を中心に1日1回回ることを何といいますか？",
    options: [
      { id: 'a', text: '公転 (こうてん)' },
      { id: 'b', text: '自転 (じてん)' },
      { id: 'c', text: '反転 (はんてん)' },
      { id: 'd', text: '回転 (かいてん)' },
    ],
    correctOptionId: 'b',
    explanation: "地球はコマのように「自転」しています。これにより昼と夜が生まれます。"
  },
  {
    id: 2,
    category: QuestionCategory.ASTRONOMY,
    text: "地球が太陽の周りを1年かけて回ることを何といいますか？",
    options: [
      { id: 'a', text: '自転' },
      { id: 'b', text: '公転' },
      { id: 'c', text: '周回' },
      { id: 'd', text: '巡回' },
    ],
    correctOptionId: 'b',
    explanation: "地球は太陽の周りを「公転」しています。これと地軸の傾きによって季節が生まれます。"
  },
  {
    id: 3,
    category: QuestionCategory.ASTRONOMY,
    text: "地球の地軸は、公転面に対して垂直な線から約何度傾いていますか？",
    options: [
      { id: 'a', text: '傾いていない (0度)' },
      { id: 'b', text: '約23.4度' },
      { id: 'c', text: '約45度' },
      { id: 'd', text: '約66.6度' },
    ],
    correctOptionId: 'b',
    explanation: "地軸は約23.4度傾いています。この傾きがあるまま公転するため、季節によって太陽の高さが変わります。"
  },
  {
    id: 4,
    category: QuestionCategory.ASTRONOMY,
    text: "日本において、1年の中で昼の長さが最も長く、太陽の南中高度が最も高い日は何と呼ばれますか？",
    options: [
      { id: 'a', text: '春分の日' },
      { id: 'b', text: '夏至の日' },
      { id: 'c', text: '秋分の日' },
      { id: 'd', text: '冬至の日' },
    ],
    correctOptionId: 'b',
    explanation: "夏至（げし）は6月21日頃で、太陽が最も北寄りに昇り、最も高く上がります。"
  },
  {
    id: 5,
    category: QuestionCategory.ASTRONOMY,
    text: "日本において、1年の中で昼の長さが最も短く、太陽の南中高度が最も低い日は何と呼ばれますか？",
    options: [
      { id: 'a', text: '春分の日' },
      { id: 'b', text: '夏至の日' },
      { id: 'c', text: '秋分の日' },
      { id: 'd', text: '冬至の日' },
    ],
    correctOptionId: 'd',
    explanation: "冬至（とうじ）は12月22日頃で、太陽が最も南寄りに昇り、低い位置を通ります。"
  },
  {
    id: 6,
    category: QuestionCategory.ASTRONOMY,
    text: "春分の日と秋分の日の、昼と夜の長さの関係として正しいものはどれですか？",
    options: [
      { id: 'a', text: '昼の方が長い' },
      { id: 'b', text: '夜の方が長い' },
      { id: 'c', text: '昼と夜の長さがほぼ同じ' },
    ],
    correctOptionId: 'c',
    explanation: "春分と秋分は、太陽が真東から昇り真西に沈むため、昼と夜の長さがほぼ12時間ずつになります。"
  },
  {
    id: 7,
    category: QuestionCategory.ASTRONOMY,
    text: "太陽は通常、どの方角から昇り、どの方角へ沈みますか？",
    options: [
      { id: 'a', text: '西から昇って東へ沈む' },
      { id: 'b', text: '北から昇って南へ沈む' },
      { id: 'c', text: '東から昇って西へ沈む' },
    ],
    correctOptionId: 'c',
    explanation: "地球が西から東へ自転しているため、太陽は東から昇って西へ沈むように見えます。"
  },
  {
    id: 8,
    category: QuestionCategory.ASTRONOMY,
    text: "夏至の日、太陽は真東よりもどの方角寄りから昇りますか？",
    options: [
      { id: 'a', text: '北寄り' },
      { id: 'b', text: '南寄り' },
      { id: 'c', text: '真東から変わらない' },
    ],
    correctOptionId: 'a',
    explanation: "夏は太陽が北寄りの東から昇り、高い空を通って、北寄りの西に沈みます。"
  },
  {
    id: 9,
    category: QuestionCategory.ASTRONOMY,
    text: "冬至の日、太陽は真東よりもどの方角寄りから昇りますか？",
    options: [
      { id: 'a', text: '北寄り' },
      { id: 'b', text: '南寄り' },
      { id: 'c', text: '真東から変わらない' },
    ],
    correctOptionId: 'b',
    explanation: "冬は太陽が南寄りの東から昇り、低い空を通って、南寄りの西に沈みます。"
  },
  
  // --- PHYSICS (Shadows, Temperature) ---
  {
    id: 10,
    category: QuestionCategory.PHYSICS,
    text: "地面に垂直に立てた棒の影について、影が「最も短くなる」のは1日の中でいつですか？",
    options: [
      { id: 'a', text: '日の出のとき' },
      { id: 'b', text: '南中（正午ごろ）のとき' },
      { id: 'c', text: '日の入りのとき' },
    ],
    correctOptionId: 'b',
    explanation: "太陽が最も高く上がる（南中する）とき、上から照らされるため影は最も短くなります。"
  },
  {
    id: 11,
    category: QuestionCategory.PHYSICS,
    text: "同じ時刻（正午）に影の長さを1年間観察しました。影が「最も長く」なるのはどの季節ですか？",
    options: [
      { id: 'a', text: '夏（夏至）' },
      { id: 'b', text: '春・秋（春分・秋分）' },
      { id: 'c', text: '冬（冬至）' },
    ],
    correctOptionId: 'c',
    explanation: "冬至は太陽の南中高度が最も低いため、光が横から当たる形になり、影が最も長く伸びます。"
  },
  {
    id: 12,
    category: QuestionCategory.PHYSICS,
    text: "影ができる方角と、太陽がある方角の関係はどうなっていますか？",
    options: [
      { id: 'a', text: '同じ方角にできる' },
      { id: 'b', text: '反対の方角にできる' },
      { id: 'c', text: '常にお北にできる' },
    ],
    correctOptionId: 'b',
    explanation: "影は光が遮られた場所にできるので、太陽がある方角のちょうど反対側にできます。"
  },
  {
    id: 13,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日、1日の中で「太陽の高度が最も高い時刻」と「気温が最も高い時刻」の関係はどうなっていますか？",
    options: [
      { id: 'a', text: '同時刻である' },
      { id: 'b', text: '太陽高度のピークより、気温のピークの方が遅い' },
      { id: 'c', text: '気温のピークより、太陽高度のピークの方が遅い' },
    ],
    correctOptionId: 'b',
    explanation: "太陽は12時頃に最も高くなりますが、地面が温まり空気が温まるまでに時間がかかるため、気温は14時頃に最高になります。"
  },
  {
    id: 14,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日の地温（地面の温度）と気温（空気の温度）の関係として正しいものは？",
    options: [
      { id: 'a', text: '気温の方が早く上がり、地温が後から上がる' },
      { id: 'b', text: '地温の方が早く上がり、気温が後から上がる' },
      { id: 'c', text: '全く同時に上がる' },
    ],
    correctOptionId: 'b',
    explanation: "まず太陽光で地面が温められ（地温上昇）、その熱が空気に伝わるため、地温の方が先に上がります。"
  },

  // --- BIOLOGY (Insects, Plants) ---
  {
    id: 15,
    category: QuestionCategory.BIOLOGY,
    text: "昆虫（こんちゅう）の体は、大きく3つの部分に分かれています。頭、胸と、もう一つは何ですか？",
    options: [
      { id: 'a', text: '腰 (こし)' },
      { id: 'b', text: '腹 (はら)' },
      { id: 'c', text: '尻 (しり)' },
      { id: 'd', text: '背 (せ)' },
    ],
    correctOptionId: 'b',
    explanation: "昆虫の体は「頭（あたま）・胸（むね）・腹（はら）」の3つに分かれています。"
  },
  {
    id: 16,
    category: QuestionCategory.BIOLOGY,
    text: "昆虫の足は何本ありますか？また、体のどの部分から生えていますか？",
    options: [
      { id: 'a', text: '4本で、腹から生えている' },
      { id: 'b', text: '6本で、胸から生えている' },
      { id: 'c', text: '8本で、頭から生えている' },
    ],
    correctOptionId: 'b',
    explanation: "昆虫は足が6本あり、すべて「胸」から生えています。"
  },
  {
    id: 17,
    category: QuestionCategory.BIOLOGY,
    text: "次のうち、「昆虫」ではない生き物はどれですか？",
    options: [
      { id: 'a', text: 'アリ' },
      { id: 'b', text: 'カブトムシ' },
      { id: 'c', text: 'クモ' },
      { id: 'd', text: 'トンボ' },
    ],
    correctOptionId: 'c',
    explanation: "クモは足が8本あり、体が「頭胸部」と「腹部」の2つに分かれているため、昆虫ではありません。"
  },
  {
    id: 18,
    category: QuestionCategory.BIOLOGY,
    text: "ジャガイモは植物のどの部分を食べていますか？",
    options: [
      { id: 'a', text: '根 (ね)' },
      { id: 'b', text: '茎 (くき)' },
      { id: 'c', text: '実 (み)' },
      { id: 'd', text: '葉 (は)' },
    ],
    correctOptionId: 'b',
    explanation: "ジャガイモは地下にある茎が肥大した「塊茎（かいけい）」です。"
  },
  {
    id: 19,
    category: QuestionCategory.BIOLOGY,
    text: "サツマイモは植物のどの部分を食べていますか？",
    options: [
      { id: 'a', text: '根 (ね)' },
      { id: 'b', text: '茎 (くき)' },
      { id: 'c', text: '実 (み)' },
      { id: 'd', text: '葉 (は)' },
    ],
    correctOptionId: 'a',
    explanation: "サツマイモは根が養分を蓄えて太くなった「塊根（かいこん）」です。"
  },
  {
    id: 20,
    category: QuestionCategory.BIOLOGY,
    text: "植物が光を受けて養分を作る働きを何といいますか？",
    options: [
      { id: 'a', text: '呼吸作用' },
      { id: 'b', text: '蒸散作用' },
      { id: 'c', text: '光合成 (こうごうせい)' },
    ],
    correctOptionId: 'c',
    explanation: "光合成は、日光のエネルギーを使って、水と二酸化炭素からデンプンなどの養分を作る働きです。"
  },

  // --- ADVANCED / MIXED ---
  {
    id: 21,
    category: QuestionCategory.ASTRONOMY,
    text: "星も太陽と同じように動いているように見えます。1時間に約何度動きますか？",
    options: [
      { id: 'a', text: '約1度' },
      { id: 'b', text: '約15度' },
      { id: 'c', text: '約30度' },
      { id: 'd', text: '約45度' },
    ],
    correctOptionId: 'b',
    explanation: "地球は1周360度を24時間かけて自転するため、360÷24＝15度。1時間に約15度動いて見えます。"
  },
  {
    id: 22,
    category: QuestionCategory.ASTRONOMY,
    text: "北の空にある星の中で、ほとんど動かないように見える星は何ですか？",
    options: [
      { id: 'a', text: 'オリオン座' },
      { id: 'b', text: '北極星 (ほっきょくせい)' },
      { id: 'c', text: '北斗七星' },
      { id: 'd', text: 'カシオペヤ座' },
    ],
    correctOptionId: 'b',
    explanation: "北極星は地軸の延長線上にあるため、地球が自転してもほとんど位置が変わりません。"
  },
  {
    id: 23,
    category: QuestionCategory.PHYSICS,
    text: "百葉箱（ひゃくようばこ）で気温を測るとき、扉はどの方角に向けて設置しますか？",
    options: [
      { id: 'a', text: '南' },
      { id: 'b', text: '北' },
      { id: 'c', text: '東' },
    ],
    correctOptionId: 'b',
    explanation: "日光が直接温度計に当たらないようにするため、北半球では太陽が通らない「北向き」に扉をつけます。"
  },
  {
    id: 24,
    category: QuestionCategory.BIOLOGY,
    text: "ダンゴムシは昆虫ですか？",
    options: [
      { id: 'a', text: 'はい、昆虫です' },
      { id: 'b', text: 'いいえ、昆虫ではありません' },
    ],
    correctOptionId: 'b',
    explanation: "ダンゴムシは足の数が多く（14本）、エビやカニに近い甲殻類（こうかくるい）の仲間です。"
  },
  {
    id: 25,
    category: QuestionCategory.ASTRONOMY,
    text: "月の形が変わって見えることを何といいますか？",
    options: [
      { id: 'a', text: '日食' },
      { id: 'b', text: '月食' },
      { id: 'c', text: '満ち欠け (みちかけ)' },
    ],
    correctOptionId: 'c',
    explanation: "太陽の光が当たっている部分が、地球からの角度によって変わって見える現象を「満ち欠け」といいます。"
  },
  {
    id: 26,
    category: QuestionCategory.ASTRONOMY,
    text: "太陽全体が月に隠される現象を何といいますか？",
    options: [
      { id: 'a', text: '日食 (にっしょく)' },
      { id: 'b', text: '月食 (げっしょく)' },
      { id: 'c', text: '満月' },
    ],
    correctOptionId: 'a',
    explanation: "太陽・月・地球が一直線に並び、太陽が月に隠されるのが日食です。"
  },
  {
    id: 27,
    category: QuestionCategory.BIOLOGY,
    text: "ヨウ素液を垂らすと青紫色（あおむらさきいろ）に変わるものは何ですか？",
    options: [
      { id: 'a', text: '脂肪' },
      { id: 'b', text: 'デンプン' },
      { id: 'c', text: 'タンパク質' },
    ],
    correctOptionId: 'b',
    explanation: "ヨウ素デンプン反応といって、デンプンがあるかどうかを調べる実験で使われます。"
  },
  {
    id: 28,
    category: QuestionCategory.PHYSICS,
    text: "晴れの日、1日の気温の変化を表すグラフの形は一般的にどうなりますか？",
    options: [
      { id: 'a', text: '朝からずっと上がり続ける' },
      { id: 'b', text: '昼過ぎに山なりになり、夕方下がる' },
      { id: 'c', text: '正午に一番高くなり、すぐに下がる' },
    ],
    correctOptionId: 'b',
    explanation: "気温は14時頃をピークにした山なりのカーブを描きます。"
  },
  {
    id: 29,
    category: QuestionCategory.ASTRONOMY,
    text: "冬に日本で、昼の長さが短くなるのはなぜですか？",
    options: [
      { id: 'a', text: '太陽の動く速さが速くなるから' },
      { id: 'b', text: '太陽が通る空の道筋が短くなるから' },
      { id: 'c', text: '地球が太陽から遠ざかるから' },
    ],
    correctOptionId: 'b',
    explanation: "冬は太陽が南寄りの低い空を通るため、地平線の上にでている時間が短くなります。"
  },
  {
    id: 30,
    category: QuestionCategory.BIOLOGY,
    text: "イネ（お米）の花が咲くのはいつ頃ですか？",
    options: [
      { id: 'a', text: '春' },
      { id: 'b', text: '夏から秋' },
      { id: 'c', text: '冬' },
    ],
    correctOptionId: 'b',
    explanation: "イネは夏から秋にかけて花を咲かせ、その後実（米）がみのります。"
  },
  {
    id: 31,
    category: QuestionCategory.ASTRONOMY,
    text: "半月（はんげつ）のとき、太陽と地球と月の位置関係はどうなっていますか？",
    options: [
      { id: 'a', text: '一直線に並んでいる' },
      { id: 'b', text: '直角（90度）になっている' },
      { id: 'c', text: '同じ位置にある' },
    ],
    correctOptionId: 'b',
    explanation: "地球から見て太陽と月が90度の方向にあるとき、半分だけ光って見えます（上弦・下弦の月）。"
  },
  {
    id: 32,
    category: QuestionCategory.PHYSICS,
    text: "冬至の日、東京での太陽の南中高度はおよそ何度ですか？（北緯35度とする）",
    options: [
      { id: 'a', text: '約30度' },
      { id: 'b', text: '約55度' },
      { id: 'c', text: '約78度' },
    ],
    correctOptionId: 'a',
    explanation: "90 - 北緯(35) - 23.4 = 31.6度。冬至は一番低くなります。"
  },
  {
    id: 33,
    category: QuestionCategory.PHYSICS,
    text: "夏至の日、東京での太陽の南中高度はおよそ何度ですか？（北緯35度とする）",
    options: [
      { id: 'a', text: '約30度' },
      { id: 'b', text: '約55度' },
      { id: 'c', text: '約78度' },
    ],
    correctOptionId: 'c',
    explanation: "90 - 北緯(35) + 23.4 = 78.4度。夏至は一番高くなります。"
  },
  {
    id: 34,
    category: QuestionCategory.BIOLOGY,
    text: "次のうち、カニやエビの仲間（甲殻類）はどれですか？",
    options: [
      { id: 'a', text: 'ダンゴムシ' },
      { id: 'b', text: 'ムカデ' },
      { id: 'c', text: 'ゲジ' },
    ],
    correctOptionId: 'a',
    explanation: "ダンゴムシは陸上にいますが、エビやカニと同じ甲殻類です。"
  },
  {
    id: 35,
    category: QuestionCategory.ASTRONOMY,
    text: "地球が太陽の周りを回る軌道（通り道）は、どんな形をしていますか？",
    options: [
      { id: 'a', text: '完全な円' },
      { id: 'b', text: '少しつぶれた円（だ円）' },
      { id: 'c', text: '四角形' },
    ],
    correctOptionId: 'b',
    explanation: "地球の公転軌道は完全な円ではなく、わずかに楕円（だ円）を描いています。"
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
