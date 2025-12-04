
import { Question, QuestionCategory } from './types';

// These questions are curated to have a balance of Basic, Standard, and Advanced levels
// covering Earth sciences, physics (light/heat), and biology.
export const QUIZ_DATA: Question[] = [
  // ==========================================
  // ASTRONOMY (Earth, Sun, Seasons, Moon, Stars)
  // ==========================================
  // 【基礎】
  {
    id: 101,
    category: QuestionCategory.ASTRONOMY,
    text: "地球が北極と南極を結ぶ軸（地軸）を中心に、1日1回まわることを何といいますか？",
    options: [
      { id: 'a', text: '公転（こうてん）' },
      { id: 'b', text: '自転（じてん）' },
      { id: 'c', text: '反転（はんてん）' },
      { id: 'd', text: '運転（うんてん）' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】地球はコマのように1日1回「自転」しています。これにより昼と夜が繰り返されます。"
  },
  {
    id: 102,
    category: QuestionCategory.ASTRONOMY,
    text: "地球が太陽のまわりを1年かけてまわることを何といいますか？",
    options: [
      { id: 'a', text: '自転' },
      { id: 'b', text: '公転' },
      { id: 'c', text: '回転' },
      { id: 'd', text: '周回' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】地球は太陽のまわりを1年かけて「公転」しています。これと地軸の傾きによって季節が生まれます。"
  },
  {
    id: 103,
    category: QuestionCategory.ASTRONOMY,
    text: "太陽が真南にきて、高度が一番高くなることを何といいますか？",
    options: [
      { id: 'a', text: '南中（なんちゅう）' },
      { id: 'b', text: '日没（にちぼつ）' },
      { id: 'c', text: '日の出' },
      { id: 'd', text: '頂点' },
    ],
    correctOptionId: 'a',
    explanation: "【基礎】太陽が真南の方角に来ることを「南中」といいます。この時の高度を「南中高度」といいます。"
  },
  {
    id: 115,
    category: QuestionCategory.ASTRONOMY,
    text: "次のうち、冬の代表的な星座はどれですか？",
    options: [
      { id: 'a', text: 'さそり座' },
      { id: 'b', text: 'オリオン座' },
      { id: 'c', text: 'はくちょう座' },
      { id: 'd', text: 'おとめ座' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】オリオン座は冬の代表的な星座です。中心にある3つの星（三ツ星）が特徴です。さそり座は夏、はくちょう座は夏の星座です。"
  },
  {
    id: 116,
    category: QuestionCategory.ASTRONOMY,
    text: "北の空にあり、一年中ほとんど動かないように見える星はどれですか？",
    options: [
      { id: 'a', text: '北極星' },
      { id: 'b', text: 'シリウス' },
      { id: 'c', text: 'ベガ' },
      { id: 'd', text: 'アンタレス' },
    ],
    correctOptionId: 'a',
    explanation: "【基礎】北極星は地軸の延長線上にあるため、地球が自転しても動かないように見え、真北の方角を知る目印になります。"
  },
  // 【標準】
  {
    id: 104,
    category: QuestionCategory.ASTRONOMY,
    text: "地球の自転の向きと、太陽が動いて見える向きの正しい組み合わせはどれですか？",
    options: [
      { id: 'a', text: '地球：東から西 ／ 太陽：東から西' },
      { id: 'b', text: '地球：西から東 ／ 太陽：西から東' },
      { id: 'c', text: '地球：西から東 ／ 太陽：東から西' },
      { id: 'd', text: '地球：東から西 ／ 太陽：西から東' },
    ],
    correctOptionId: 'c',
    explanation: "【標準】地球は「西から東（反時計回り）」へ自転しています。そのため、太陽や星は逆の「東から西」へ動いて見えます。"
  },
  {
    id: 105,
    category: QuestionCategory.ASTRONOMY,
    text: "北半球の夏に暑くなる主な理由として、正しいものはどれですか？",
    options: [
      { id: 'a', text: '地球が太陽に一番近づくから' },
      { id: 'b', text: '太陽の活動が活発になるから' },
      { id: 'c', text: '南中高度が高くなり、地面が受ける日光の量が増えるから' },
    ],
    correctOptionId: 'c',
    explanation: "【標準】実は夏、地球は太陽から遠い位置にあります。重要なのは「角度」です。高い角度から長時間照らされるため暑くなります。"
  },
  {
    id: 106,
    category: QuestionCategory.ASTRONOMY,
    text: "冬至の日の太陽の動きについて、正しい記述はどれですか？",
    options: [
      { id: 'a', text: '真東から昇り、真西に沈む' },
      { id: 'b', text: '真東より北寄りから昇り、真西より北寄りに沈む' },
      { id: 'c', text: '真東より南寄りから昇り、真西より南寄りに沈む' },
    ],
    correctOptionId: 'c',
    explanation: "【標準】冬は太陽の通り道が南にずれます。「南寄りの東」から出て、空の低い所を通り、「南寄りの西」へ沈みます。"
  },
  {
    id: 107,
    category: QuestionCategory.ASTRONOMY,
    text: "地面に垂直に立てた棒の影の動きについて、正しいものはどれですか？",
    options: [
      { id: 'a', text: '太陽と同じ向きに動く' },
      { id: 'b', text: '太陽と反対の向きに動く' },
      { id: 'c', text: '常に北を向いている' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】影は常に太陽と反対側にできます。太陽が「東→南→西」と動くと、影は「西→北→東」と動きます。"
  },
  {
    id: 117,
    category: QuestionCategory.ASTRONOMY,
    text: "満月、上弦の月、新月のうち、夕方に見える月はどれですか？",
    options: [
      { id: 'a', text: '満月（東の空）' },
      { id: 'b', text: '上弦の月（南の空）' },
      { id: 'c', text: '新月（西の空）' },
      { id: 'd', text: 'どれも見えない' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】上弦の月（右半分が光る半月）は、昼頃に昇り、夕方6時頃に南中し、夜中に沈みます。満月は夕方に出てきます。"
  },
  {
    id: 118,
    category: QuestionCategory.ASTRONOMY,
    text: "北斗七星は、何という星座の一部ですか？",
    options: [
      { id: 'a', text: 'おおぐま座' },
      { id: 'b', text: 'こぐま座' },
      { id: 'c', text: 'カシオペヤ座' },
      { id: 'd', text: 'オリオン座' },
    ],
    correctOptionId: 'a',
    explanation: "【標準】北斗七星はおおぐま座の背中から尻尾の部分にあたる7つの星です。北極星を見つける目印になります。"
  },
  // 【応用】
  {
    id: 108,
    category: QuestionCategory.ASTRONOMY,
    text: "東京（北緯35度）での「春分の日」の太陽の南中高度を求める式はどれですか？",
    options: [
      { id: 'a', text: '90 - 35 = 55度' },
      { id: 'b', text: '90 - 35 + 23.4 = 78.4度' },
      { id: 'c', text: '90 - 35 - 23.4 = 31.6度' },
      { id: 'd', text: '90 + 35 = 125度' },
    ],
    correctOptionId: 'a',
    explanation: "【応用】春分・秋分は地軸の傾きの影響がないため、「90 - その場所の緯度」で計算できます。"
  },
  {
    id: 109,
    category: QuestionCategory.ASTRONOMY,
    text: "夏至の日、北緯35度の地点で正午に長さ1mの棒を立てました。冬至の日の正午に同じ棒を立てたとき、影の長さはどうなりますか？",
    options: [
      { id: 'a', text: '夏至の時より短くなる' },
      { id: 'b', text: '夏至の時より長くなる' },
      { id: 'c', text: '変わらない' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】冬至は南中高度が低いため、太陽の光が横から当たる形になり、影は1年で最も長く伸びます。"
  },
  {
    id: 110,
    category: QuestionCategory.ASTRONOMY,
    text: "もし地軸が傾いておらず、公転面に対して垂直（90度）だったとしたら、日本での季節はどうなりますか？",
    options: [
      { id: 'a', text: '1年中、今の夏のような暑さが続く' },
      { id: 'b', text: '1年中、今の春や秋のような状態が続き、季節変化がなくなる' },
      { id: 'c', text: '昼と夜の長さが毎日入れ替わる' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】季節の変化は「地軸の傾き」によって生じます。傾きがなければ、太陽の当たる角度が1年中変わらないため、季節の変化もなくなります。"
  },
  {
    id: 111,
    category: QuestionCategory.ASTRONOMY,
    text: "北極点に近い場所で見られる、夏に太陽が一日中沈まない現象を何といいますか？",
    options: [
      { id: 'a', text: 'オーロラ' },
      { id: 'b', text: '白夜（びゃくや）' },
      { id: 'c', text: '極夜（きょくや）' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】地軸が太陽の方に傾いている夏、北極付近では太陽が地平線の下に沈まない状態が続きます。これを白夜といいます。"
  },
  {
    id: 112,
    category: QuestionCategory.ASTRONOMY,
    text: "日時計の文字盤の目盛り（時刻の線）の間隔が均等ではないのはなぜですか？",
    options: [
      { id: 'a', text: '太陽の動く速さが時間によって違うから' },
      { id: 'b', text: '影の伸びる長さが時間によって変わり、進む角度が変わって見えるから' },
      { id: 'c', text: '昔の人が適当に決めたから' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】太陽は一定の速さで動きますが、影を平面（地面）に映すと、太陽が高い時（昼）は影の動きが遅く、低い時（朝夕）は速く動くように見えるため、目盛りは均等になりません。"
  },
  {
    id: 113,
    category: QuestionCategory.ASTRONOMY,
    text: "満月が南中するのは、およそ何時ごろですか？",
    options: [
      { id: 'a', text: '夕方6時ごろ' },
      { id: 'b', text: '真夜中の0時ごろ' },
      { id: 'c', text: '朝の6時ごろ' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】満月は太陽と地球を挟んで反対側にあります。太陽が一番沈んでいる真夜中に、満月は一番高く（南中）なります。"
  },
  {
    id: 114,
    category: QuestionCategory.ASTRONOMY,
    text: "日食が起こる可能性があるのは、月がどの状態のときですか？",
    options: [
      { id: 'a', text: '新月' },
      { id: 'b', text: '満月' },
      { id: 'c', text: '上弦の月' },
    ],
    correctOptionId: 'a',
    explanation: "【応用】日食は「太陽・月・地球」の順に並ぶときです。地球から見て月が太陽の方向にある、つまり「新月」の時に起こります。"
  },
  {
    id: 119,
    category: QuestionCategory.ASTRONOMY,
    text: "月がいつも同じ模様に見える（地球に同じ面を向けている）のはなぜですか？",
    options: [
      { id: 'a', text: '月は自転していないから' },
      { id: 'b', text: '月の自転周期と公転周期がぴったり同じだから' },
      { id: 'c', text: '地球が自転しているから' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】月は地球の周りを一回公転する間に、自分も一回自転します。そのため、常に同じ面を地球に向けています。"
  },

  // ==========================================
  // PHYSICS / WEATHER (Light, Heat, Temperature, Weather)
  // ==========================================
  // 【基礎】
  {
    id: 201,
    category: QuestionCategory.PHYSICS,
    text: "気温をはかる際、直射日光が当たらないようにするための白い箱を何といいますか？",
    options: [
      { id: 'a', text: '百葉箱（ひゃくようばこ）' },
      { id: 'b', text: '気圧箱' },
      { id: 'c', text: '冷蔵庫' },
    ],
    correctOptionId: 'a',
    explanation: "【基礎】百葉箱は、正しい気温を測るために日光や雨風の影響を防ぐ装置です。"
  },
  {
    id: 202,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日、気温が一番高くなるのは通常何時ごろですか？",
    options: [
      { id: 'a', text: '正午（12時）' },
      { id: 'b', text: '午後2時（14時）' },
      { id: 'c', text: '午後4時（16時）' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】太陽高度が最高の12時から少し遅れて、地面の熱が空気に伝わるため、14時ごろが最高気温になります。"
  },
  {
    id: 210,
    category: QuestionCategory.PHYSICS,
    text: "雨が降っているときの雲の量は、空全体の何割以上ですか？",
    options: [
      { id: 'a', text: '5割以上' },
      { id: 'b', text: '9割以上' },
      { id: 'c', text: '関係ない' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】空全体の9割以上が雲におおわれている状態を「くもり」といいますが、雨が降っていれば雲量に関わらず天気は「雨」です。"
  },
  {
    id: 211,
    category: QuestionCategory.PHYSICS,
    text: "虫眼鏡で太陽の光を集めるとき、光が一点に集まって一番明るくなる部分を何といいますか？",
    options: [
      { id: 'a', text: '中心（ちゅうしん）' },
      { id: 'b', text: '焦点（しょうてん）' },
      { id: 'c', text: '頂点（ちょうてん）' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】凸レンズ（虫眼鏡）を通った光が一点に集まる場所を焦点といいます。ここは温度が非常に高くなります。"
  },
  // 【標準】
  {
    id: 203,
    category: QuestionCategory.PHYSICS,
    text: "晴れた日、気温よりも地温（地面の温度）の方が先に上がるのはなぜですか？",
    options: [
      { id: 'a', text: '空気は温まりにくく、冷めやすいから' },
      { id: 'b', text: '太陽の光は空気を素通りして、まず地面を温めるから' },
      { id: 'c', text: '地面の下にマグマがあるから' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】太陽光は空気をほとんど温めず、地面に吸収されて熱になります。その熱が空気に伝わるため、地温上昇→気温上昇の順になります。"
  },
  {
    id: 204,
    category: QuestionCategory.PHYSICS,
    text: "百葉箱を設置する際、扉を北向きにする理由は何ですか？",
    options: [
      { id: 'a', text: '北風を取り入れるため' },
      { id: 'b', text: '神様の方角だから' },
      { id: 'c', text: '観測時に直射日光が温度計に当たらないようにするため' },
    ],
    correctOptionId: 'c',
    explanation: "【標準】観察しようとして扉を開けたとき、日光が差し込むと温度計が上がってしまいます。北半球では太陽は南を通るので、北向きなら安心です。"
  },
  {
    id: 205,
    category: QuestionCategory.PHYSICS,
    text: "放射冷却（ほうしゃれいきゃく）によって、1日で最も気温が低くなるのはいつですか？",
    options: [
      { id: 'a', text: '夜の0時' },
      { id: 'b', text: '日の出の直前' },
      { id: 'c', text: '日が沈んだ直後' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】夜の間、地面から熱が宇宙へ逃げ続けます。太陽が出て再び温められる直前（日の出前）が、熱が逃げ切って一番寒くなります。"
  },
  {
    id: 206,
    category: QuestionCategory.PHYSICS,
    text: "曇りや雨の日は、晴れの日と比べて気温の変化はどうなりますか？",
    options: [
      { id: 'a', text: '変化が大きくなる' },
      { id: 'b', text: '変化が小さくなる' },
      { id: 'c', text: '変わらない' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】雲が日傘のように日光を遮り（最高気温が低い）、布団のように熱を逃さない（最低気温が高い）ため、変化が小さくなります。"
  },
  {
    id: 212,
    category: QuestionCategory.PHYSICS,
    text: "鏡に映った自分は、本物と比べてどうなっていますか？",
    options: [
      { id: 'a', text: '上下が逆になっている' },
      { id: 'b', text: '左右が逆になっている' },
      { id: 'c', text: 'すべて同じ' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】鏡は光を反射するため、左右が逆（向かい合わせ）に映ります。右手で持ったお箸は、鏡の中では左手で持っているように見えます。"
  },
  {
    id: 213,
    category: QuestionCategory.PHYSICS,
    text: "コップに入れたストローが、水面で折れ曲がって見えるのはなぜですか？",
    options: [
      { id: 'a', text: '光の反射（はんしゃ）' },
      { id: 'b', text: '光の直進（ちょくしん）' },
      { id: 'c', text: '光の屈折（くっせつ）' },
    ],
    correctOptionId: 'c',
    explanation: "【標準】光が空気から水へ進むとき、その境目で進む方向が変わる「屈折」という現象が起こるため、折れて見えます。"
  },
  // 【応用】
  {
    id: 207,
    category: QuestionCategory.PHYSICS,
    text: "地面の温度を測るとき、温度計の球部（液がたまっている部分）に土をかけたり、覆ったりするのはなぜですか？",
    options: [
      { id: 'a', text: '温度計が汚れないようにするため' },
      { id: 'b', text: '直射日光が温度計に直接当たるのを防ぎ、地面そのものの温度を測るため' },
      { id: 'c', text: '温度計を固定するため' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】温度計に日光が直接当たると、本来の「土の温度」よりもはるかに高い温度を示してしまいます。"
  },
  {
    id: 208,
    category: QuestionCategory.PHYSICS,
    text: "アスファルトの地面と草が生えた地面、晴れた日の昼間に表面温度が高くなるのはどっち？またその理由は？",
    options: [
      { id: 'a', text: '草地。植物が呼吸して熱を出すから' },
      { id: 'b', text: 'アスファルト。黒っぽくて熱を吸収しやすく、水分の蒸発による冷却もないから' },
      { id: 'c', text: 'どちらも同じ' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】黒い色は熱を吸収します。また、草地は葉から水が出る（蒸散）ときに熱を奪いますが、アスファルトにはそれがありません。"
  },
  {
    id: 209,
    category: QuestionCategory.PHYSICS,
    text: "内陸の盆地（ぼんち）が、海沿いの町よりも夏に暑くなりやすく、冬に寒くなりやすいのはなぜですか？",
    options: [
      { id: 'a', text: '地面（土や岩）は水よりも温まりやすく、冷めやすい性質があるから' },
      { id: 'b', text: '山に囲まれていて太陽に近いから' },
      { id: 'c', text: '海沿いは魚がたくさんいて涼しいから' },
    ],
    correctOptionId: 'a',
    explanation: "【応用】水は温度変化がゆっくりですが、陸地は急激です。海の影響を受けにくい内陸部は、昼夜や季節の温度差が大きくなります。"
  },
  {
    id: 214,
    category: QuestionCategory.PHYSICS,
    text: "夏、晴れた日の海辺で、昼間に風が「海から陸」へ吹く（海風）のはなぜですか？",
    options: [
      { id: 'a', text: '波が押し寄せるから' },
      { id: 'b', text: '陸の方が暖まりやすく、上昇気流ができて、そこに海の涼しい空気が流れ込むから' },
      { id: 'c', text: '海の方が暖まりやすく、上昇気流ができるから' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】陸は海より暖まりやすいため、陸の上の空気が暖まって軽くなり上昇します。その空いた場所に海から空気が流れ込みます。"
  },
  {
    id: 215,
    category: QuestionCategory.PHYSICS,
    text: "氷を入れたコップの周りに水滴がつく現象（結露）と同じ仕組みでできるものはどれですか？",
    options: [
      { id: 'a', text: '雨上がりの水たまりが乾く' },
      { id: 'b', text: '雲ができる' },
      { id: 'c', text: 'ドライアイスから煙が出る' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】結露は空気中の水蒸気が冷やされて水に戻る現象です。雲も、上昇した空気が冷やされて、水蒸気が水や氷の粒になったものです。"
  },

  // ==========================================
  // BIOLOGY (Insects, Plants, Animals)
  // ==========================================
  // 【基礎】
  {
    id: 301,
    category: QuestionCategory.BIOLOGY,
    text: "昆虫の体は3つの部分に分かれています。頭、胸、あと一つは？",
    options: [
      { id: 'a', text: '腰（こし）' },
      { id: 'b', text: '腹（はら）' },
      { id: 'c', text: '尾（お）' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】昆虫の体は「頭部・胸部・腹部」の3つです。"
  },
  {
    id: 302,
    category: QuestionCategory.BIOLOGY,
    text: "種子が発芽（芽が出ること）するために必要な3つの条件は？",
    options: [
      { id: 'a', text: '水・空気・日光' },
      { id: 'b', text: '水・肥料・日光' },
      { id: 'c', text: '水・空気・適当な温度' },
    ],
    correctOptionId: 'c',
    explanation: "【基礎】発芽の3条件は「水・空気・適当な温度」です。日光や肥料は、発芽した後の成長に必要です。"
  },
  {
    id: 303,
    category: QuestionCategory.BIOLOGY,
    text: "デンプンがあるかどうかを調べる液体は？",
    options: [
      { id: 'a', text: '石灰水' },
      { id: 'b', text: 'ヨウ素液' },
      { id: 'c', text: '食塩水' },
    ],
    correctOptionId: 'b',
    explanation: "【基礎】ヨウ素液はデンプンに反応して「青紫色」になります。"
  },
  {
    id: 312,
    category: QuestionCategory.BIOLOGY,
    text: "メダカのオスとメスを見分けるとき、背びれに「切れ込み」があるのはどっち？",
    options: [
      { id: 'a', text: 'オス' },
      { id: 'b', text: 'メス' },
      { id: 'c', text: 'どちらもない' },
    ],
    correctOptionId: 'a',
    explanation: "【基礎】オスの背びれには切れ込みがあり、尻びれは平行四辺形で大きいです。メスの背びれには切れ込みがなく、尻びれは小さいです。"
  },
  {
    id: 313,
    category: QuestionCategory.BIOLOGY,
    text: "次のうち、昆虫ではないものはどれですか？",
    options: [
      { id: 'a', text: 'カブトムシ' },
      { id: 'b', text: 'アリ' },
      { id: 'c', text: 'クモ' },
      { id: 'd', text: 'トンボ' },
    ],
    correctOptionId: 'c',
    explanation: "【基礎】昆虫は足が6本ですが、クモは足が8本あります。クモは昆虫の仲間ではありません。"
  },
  // 【標準】
  {
    id: 304,
    category: QuestionCategory.BIOLOGY,
    text: "昆虫の足はどこから生えていますか？",
    options: [
      { id: 'a', text: '頭部から6本' },
      { id: 'b', text: '胸部から6本' },
      { id: 'c', text: '腹部から6本' },
      { id: 'd', text: '胸部から4本、腹部から2本' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】昆虫の運動器官（足や羽）は、すべて筋肉の発達した「胸部」についています。"
  },
  {
    id: 305,
    category: QuestionCategory.BIOLOGY,
    text: "次のうち、「完全変態（かんぜんへんたい）」をする昆虫はどれですか？",
    options: [
      { id: 'a', text: 'バッタ' },
      { id: 'b', text: 'カマキリ' },
      { id: 'c', text: 'モンシロチョウ' },
      { id: 'd', text: 'トンボ' },
    ],
    correctOptionId: 'c',
    explanation: "【標準】卵→幼虫→【さなぎ】→成虫となるのが完全変態です。バッタやトンボはさなぎになりません（不完全変態）。"
  },
  {
    id: 306,
    category: QuestionCategory.BIOLOGY,
    text: "植物の葉に日光が当たるとデンプンができる働きを何といいますか？",
    options: [
      { id: 'a', text: '呼吸' },
      { id: 'b', text: '蒸散' },
      { id: 'c', text: '光合成（こうごうせい）' },
    ],
    correctOptionId: 'c',
    explanation: "【標準】根から吸った水と、空気中の二酸化炭素を原料に、光のエネルギーを使って養分を作る働きです。"
  },
  {
    id: 307,
    category: QuestionCategory.BIOLOGY,
    text: "ジャガイモとサツマイモ、食べている部分の正しい組み合わせは？",
    options: [
      { id: 'a', text: 'ジャガイモ：根 ／ サツマイモ：根' },
      { id: 'b', text: 'ジャガイモ：茎 ／ サツマイモ：根' },
      { id: 'c', text: 'ジャガイモ：根 ／ サツマイモ：茎' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】ジャガイモは地下茎（塊茎）、サツマイモは根（塊根）が太くなったものです。"
  },
  {
    id: 314,
    category: QuestionCategory.BIOLOGY,
    text: "カエルやヘビなどが、冬の間、土の中などで動かずに過ごすことを何といいますか？",
    options: [
      { id: 'a', text: '冬眠（とうみん）' },
      { id: 'b', text: '仮眠（かみん）' },
      { id: 'c', text: '休眠（きゅうみん）' },
    ],
    correctOptionId: 'a',
    explanation: "【標準】変温動物（周りの温度によって体温が変わる動物）は、寒くなると動けなくなるため、暖かくなるまで冬眠します。"
  },
  {
    id: 315,
    category: QuestionCategory.BIOLOGY,
    text: "アブラナ（菜の花）の花びらの数は何枚ですか？",
    options: [
      { id: 'a', text: '3枚' },
      { id: 'b', text: '4枚' },
      { id: 'c', text: '5枚' },
      { id: 'd', text: '6枚' },
    ],
    correctOptionId: 'b',
    explanation: "【標準】アブラナ科の植物（アブラナ、キャベツ、ナズナなど）の花弁は十字型に4枚つきます。サクラやウメは5枚です。"
  },
  // 【応用】
  {
    id: 308,
    category: QuestionCategory.BIOLOGY,
    text: "インゲンマメの発芽実験で、光を当てたものと、箱に入れて暗くしたものを比べました。発芽率はどうなりますか？",
    options: [
      { id: 'a', text: '光を当てた方しか発芽しない' },
      { id: 'b', text: '暗くした方しか発芽しない' },
      { id: 'c', text: 'どちらも同じように発芽する' },
    ],
    correctOptionId: 'c',
    explanation: "【応用】発芽条件に「日光」は含まれません。種の中の養分を使って発芽するため、光がなくても芽は出ます（ただしその後の成長には光が必要です）。"
  },
  {
    id: 309,
    category: QuestionCategory.BIOLOGY,
    text: "なぜ多くの植物は、種子を遠くへ運ぼうとするのですか？",
    options: [
      { id: 'a', text: '世界中を旅したいから' },
      { id: 'b', text: '親植物の近くだと、日光や水、養分を奪い合ってしまうから' },
      { id: 'c', text: '他の植物と戦わせるため' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】親の足元に落ちると、親の陰になって光が当たらず、生存競争に負けてしまいます。分布を広げ、生き残るチャンスを増やすためです。"
  },
  {
    id: 310,
    category: QuestionCategory.BIOLOGY,
    text: "モンシロチョウの幼虫がキャベツを食べるとき、緑色に見えるのはなぜですか？",
    options: [
      { id: 'a', text: '食べたキャベツが透けて見えているから' },
      { id: 'b', text: '敵に見つかりにくいように保護色になっているから' },
      { id: 'c', text: '光合成をしているから' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】葉っぱと同じ色になることで、鳥などの天敵から身を守っています（保護色）。"
  },
  {
    id: 311,
    category: QuestionCategory.BIOLOGY,
    text: "トンボの成虫の口と、チョウの成虫の口、形が違うのはなぜですか？",
    options: [
      { id: 'a', text: '食べるものが違うから（トンボは虫をかじる、チョウは蜜を吸う）' },
      { id: 'b', text: '飛ぶスピードが違うから' },
      { id: 'c', text: 'オスとメスの違い' },
    ],
    correctOptionId: 'a',
    explanation: "【応用】生物の体のつくりは、その生活様式や食べ物に適した形に進化しています。"
  },
  {
    id: 316,
    category: QuestionCategory.BIOLOGY,
    text: "植物の葉から水蒸気が出ていく現象を「蒸散」といいますが、この働きにはどんな役割がありますか？",
    options: [
      { id: 'a', text: '植物の体温を上げる' },
      { id: 'b', text: '根から水を吸い上げる力を生む' },
      { id: 'c', text: '空気中の二酸化炭素を増やす' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】葉から水が出ることで、ストローで吸うように、根から茎、葉へと水が吸い上げられます。また、体温を下げる効果もあります。"
  },
  {
    id: 317,
    category: QuestionCategory.BIOLOGY,
    text: "アサガオの花粉を顕微鏡で見ると、どのような形をしていますか？",
    options: [
      { id: 'a', text: 'ツルツルした球形' },
      { id: 'b', text: 'トゲトゲした球形' },
      { id: 'c', text: '松ぼっくりのような形' },
    ],
    correctOptionId: 'b',
    explanation: "【応用】アサガオの花粉は表面がトゲトゲしています。これは虫の体にくっつきやすくして、運んでもらうため（虫媒花）の特徴です。"
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
