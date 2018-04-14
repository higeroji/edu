// ４年生用の問題を登録する
var question4nen = [
    //    {q:"", ans:""},
    {q:"'しゅうい' を見回す", ans:"周囲"},
    {q:"強い 'りきし'", ans:"力士"},
    {q:"'うめ' ぼし", ans:"梅"},
    {q:"'たいけん' 学習", ans:"体験"},
    {q:"'ゆうはん' の時間", ans:"夕飯"},
    {q:"アルプス 'さんみゃく'", ans:"山脈"},
    {q:"'はく' らん会", ans:"博"},
    {q:"'きょうとふ'", ans:"京都府"},
    {q:"'めいれい' する", ans:"命令"},
    {q:"'そうこ' に運ぶ", ans:"倉庫"},
    {q:"'ていしゃ' する", ans:"停車"},
    {q:"'けんこう' な体", ans:"健康"},
    {q:"必勝 'ほう'", ans:"法"},
    {q:"地球の 'みらい'", ans:"未来"},
    {q:"世界 'かくち'", ans:"各地"},
    {q:"'なふだ' をつける", ans:"名札"},
    {q:"三月の 'すえ'", ans:"末"},
    {q:"'がいこうかん' を目指す", ans:"外交官"},
    {q:"ビルの 'かんせい'", ans:"完成"},
    {q:"'やくそく' を守る", ans:"約束"},
    {q:"'くん' 読み", ans:"訓"},
    {q:"'せき' に着く", ans:"席"},
    {q:"'きねん' 写真", ans:"記念"},
    {q:"'かふん' が飛ぶ", ans:"花粉"},
    {q:"日本の 'れきし'", ans:"歴史"},
    {q:"'とくい' な教科", ans:"得意"},
    {q:"市と 'ぐん'", ans:"郡"},
    {q:"'そくたつ' で送る", ans:"速達"},
    {q:"'じゅうよう' な仕事", ans:"重要"},
    {q:"'かいぎ' が始まる", ans:"会議"},
    {q:"かい犬が 'おいる'", ans:"老いる"},
    {q:"'あたり' が暗くなる", ans:"辺り"},
    {q:"さいふを 'うしなう'", ans:"失う"},
    {q:"'きよい' 心", ans:"清い"},
    {q:"'もっとも' 高い山", ans:"最も"},
    {q:"入学を 'いわう'", ans:"祝う"},
    {q:"'ゆうき' をだす", ans:"勇気"},
    {q:"'がっき' を演奏する", ans:"楽器"},
    {q:"'みんわ' を読む", ans:"民話"},
    {q:"駅の 'きんぺん'", ans:"近辺"},
    {q:"'ふく' 会長", ans:"副"},
    {q:"円の 'はんけい'", ans:"半径"},
    {q:"'さくじつ' の天気", ans:"昨日"},
    {q:"試合に 'やぶれる'", ans:"敗れる"},
    {q:"えだが 'おれる'", ans:"折れる"},
    {q:"子どもを 'やしなう'", ans:"養う"},
    {q:"雪が 'つもる'", ans:"積もる"},
    {q:"'おっと' と妻", ans:"夫"},
    {q:"'えいご' を習う", ans:"英語"},
    {q:"白い 'ぐんて'", ans:"軍手"},
    {q:"'しかい' をする", ans:"司会"},
    {q:"'とうだい' が見える", ans:"灯台"},
    {q:"'やく' 百秒間", ans:"約"},
    {q:"昆虫の 'ひょうほん'", ans:"標本"},
    {q:"'ざいもく' をきる", ans:"材木"},
    {q:"'へいし' になる", ans:"兵士"},
    {q:"着物と 'おび'", ans:"帯"},
    {q:"'じょうりく' する", ans:"上陸"},
    {q:"実験の 'せいこう'", ans:"成功"},
    {q:"'えいよう' をとる", ans:"栄養"},
    {q:"'えんぶん' が多い", ans:"塩分"},
    {q:"'たいりょう' 旗", ans:"大漁"},
    {q:"'がんぼう' がかなう", ans:"願望"},
    {q:"冬の 'いふく'", ans:"衣服"},
    {q:"'しゃくや' に住む", ans:"借家"},
    {q:"音楽 'たい'", ans:"隊"},
    {q:"'きぼう' がある", ans:"希望"},
    {q:"手を 'さしだす'", ans:"差し出す"},
    {q:"'とほ' で行く", ans:"徒歩"},
    {q:"'ろうどう' 時間", ans:"労働"},
    {q:"おかしを 'つつむ'", ans:"包む"},
    {q:"へいで 'かこむ'", ans:"囲む"},
    {q:"信号の色が 'かわる'", ans:"変わる"},
    {q:"強い相手と 'たたかう'", ans:"戦う"},
    {q:"国を 'おさめる'", ans:"治める"},
    {q:"新聞を 'する'", ans:"刷る"},
    {q:"一等 'しょう'", ans:"賞"},
    {q:"品物の 'とくちょう'", ans:"特長"},
    {q:"市長の 'せんきょ'", ans:"選挙"},
    {q:"も 'けい' を作る", ans:"型"},
    {q:"'わなげ' をする", ans:"輪投げ"},
    {q:"けんび 'きょう'", ans:"鏡"},
    {q:"道が長く 'つづく'", ans:"続く"},
    {q:"一位を 'あらそう'", ans:"争う"},
    {q:"目を 'さます'", ans:"覚ます"},
    {q:"日に 'やける'", ans:"焼ける"},
    {q:"明るく 'てらす'", ans:"照らす"},
    {q:"'しかい' をする", ans:"司会"},
    {q:"'もくひょう' を決める", ans:"目標"},
    {q:"'もくざい' を運ぶ", ans:"木材"},
    {q:"'しゃりん' の再発明", ans:"車輪"},
    {q:"強く 'ねがう'", ans:"願う"},
    {q:"においが 'へんか' する", ans:"変化"},
    {q:"するどい 'かんかく'", ans:"感覚"},
    {q:"土が 'かたまる'", ans:"固まる"},
    {q:"消しゴムを 'かりる'", ans:"借りる"},
    {q:"'と' 競争に参加する", ans:"徒"},
    {q:"'まご' にお年玉をあげる", ans:"孫"},
    {q:"ボタンを 'つける'", ans:"付ける"},
    {q:"'とくべつ' な仕事", ans:"特別"},
    {q:"漢字を 'おぼえる'", ans:"覚える"},
    {q:"注目の 'たいせん'", ans:"対戦"},
    {q:"今週は 'きゅうしょく' 当番だ", ans:"給食"},
    {q:"魚を 'やく'", ans:"焼く"},
    {q:"'ほう' そう紙", ans:"包"},
    {q:"京浜工業 'ちたい'", ans:"地帯"},
    {q:"'いさましい' かけ声", ans:"勇ましい"},
    {q:"古い 'ぐんぷく'", ans:"軍服"},
    {q:"新人の 'へいし'", ans:"兵士"},
    {q:"'こけい' せっけん", ans:"固形"},
    {q:"悪者を 'たいじ' する", ans:"退治"},
    {q:"'むりょう' でサービスをうける", ans:"無料"},
    {q:"'せつやく' する", ans:"節約"},
    {q:"太陽が 'てる'", ans:"照る"},
    {q:"'かどまつ' を立てる", ans:"門松"},
    {q:"'とうろく' する", ans:"登録"},
    {q:"寺の 'ほんどう'", ans:"本堂"},
    {q:"'かんさつ' 日記", ans:"観察"},
    {q:"寒い 'きせつ'", ans:"季節"},
    {q:"'かもつ' 船", ans:"貨物"},
    {q:"'きょうそう' する", ans:"競争"},
    {q:"'ほっきょく' の生物", ans:"北極"},
    {q:"'こうこう' 中の船", ans:"航行"},
    {q:"重さの 'たんい'", ans:"単位"},    
    {q:"'いえじ' を急ぐ", ans:"家路"},
    {q:"'びょうどう' に分ける", ans:"平等"},
    {q:"'しんりょく' の山を見る", ans:"新緑"},
    {q:"後ろに 'そり' 返る", ans:"反り"},
    {q:"学校に 'つく'", ans:"着く"},
    {q:"文章の段 'らく'", ans:"落"},
    {q:"'くうこう' へ行く", ans:"空港"},
    {q:"'けい' かいな音", ans:"軽"},
    {q:"三角 'じょう' 規", ans:"定"},
    {q:"外の 'ようす'", ans:"様子"},
    {q:"取り 'つぐ'", ans:"次ぐ"},
    {q:"市街地が 'さかえる'", ans:"栄える"},
    {q:"市役所で 'はたらく'", ans:"働く"},
    {q:"'さくねん' の夏", ans:"昨年"},
    {q:"例を 'あげる'", ans:"挙げる"},
    {q:"カメラに 'ぼうえん' レンズをつける", ans:"望遠"},
    {q:"病気を 'なおす'", ans:"治す"},
    {q:"一点 'さ' で勝った", ans:"差"},
    {q:"天ぷらに 'しお' をふる", ans:"塩"},
    {q:"'でんとう' をつける", ans:"電灯"},
    {q:"'かがみ' にうつった姿", ans:"鏡"},
    {q:"'しょっき' を洗う", ans:"食器"},
    {q:"'いんさつ' する", ans:"印刷"},
    {q:"'えいじ' 新聞", ans:"英字"},
    {q:"'こうたい' で話す", ans:"交代"},
    {q:"'きょうつう' の話題", ans:"共通"},
    {q:"リレーの選手を 'えらぶ'", ans:"選ぶ"},
    {q:"先生に 'つたえる'", ans:"伝える"},
    {q:"'めじるし' をつける", ans:"目印"},
    {q:"'しんごう' が青になる", ans:"信号"},
    {q:"新聞の 'はいたつ'", ans:"配達"},
    {q:"かばんを 'おく'", ans:"置く"},
    {q:"鳥が空を 'とぶ'", ans:"飛ぶ"},
    {q:"自分の 'せき' にすわる", ans:"席"},
    {q:"'あたり' が暗くなる", ans:"辺り"},
    {q:"駅の 'きんぺん' はお店が多い", ans:"近辺"},
    {q:"大きな 'たてもの'", ans:"建物"},
    {q:"'にがり' 切った顔", ans:"苦り"},
    {q:"主語に 'かかる' 語", ans:"係る"},
    {q:"古い 'じんじゃ'", ans:"神社"},
    {q:"'てっきょう' をわたる", ans:"鉄橋"},
    {q:"'ようもう' のセーター", ans:"羊毛"},
    {q:"王に 'つかえる'", ans:"仕える"},
    {q:"'きたい' する", ans:"期待"},
    {q:"文化 'さい' を行う", ans:"祭"},
    {q:"明日は 'けんこくきねんび' だ", ans:"建国記念日"},
    {q:"'やさい' を買う", ans:"野菜"},
    {q:"雪がとけずに 'のこる'", ans:"残る"},
    {q:"アニメの内容を 'せつめい' する", ans:"説明"},
    {q:"'ふしぎ' なできごと", ans:"不思議"},
    {q:"'ともだち' と遊ぶ", ans:"友達"},
    {q:"'れい' をあげる", ans:"例"},
    {q:"おもしろい 'たいけん'", ans:"体験"},
    {q:"'はじめて' 歩く", ans:"初めて"},
    {q:"母を 'てつだう'", ans:"手伝う"},
    {q:"ケラケラと 'わらう'", ans:"笑う"},
    {q:"親しい 'かんけい' になる", ans:"関係"},
    {q:"'にっこうよく' をする", ans:"日光浴"},
    {q:"かぜ 'ぐすり' をのむ", ans:"薬"},
    {q:"クラスのみんなが 'きょうりょく' してくれた", ans:"協力"},
    {q:"'はんせい' する", ans:"反省"},
    {q:"'たんこうぼん' を買う", ans:"単行本"},
    {q:"鳥の 'すばこ'", ans:"巣箱"},
    {q:"国語 'じてん' を買う", ans:"辞典"},
    {q:"次は 'こくご' の時間だ", ans:"国語"},
    {q:"クラス委員を 'とうひょう' して決める", ans:"投票"},
    {q:"'きせつ' のかわりめ", ans:"季節"},
    {q:"明るい 'たいよう'", ans:"太陽"},
    {q:"'とざん' する", ans:"登山"},
    {q:"木の 'はっぱ'", ans:"葉っぱ"},
    {q:"'むかい' かぜ", ans:"向かい"},
    {q:"大きな 'みずうみ'", ans:"湖"},
    {q:"'のうぎょう' 体験をする", ans:"農業"},
    {q:"'はたけ' をたがやす", ans:"畑"},
    {q:"魚を 'ほうりゅう' する", ans:"放流"},
    {q:"みかんの 'かわ' をむく", ans:"皮"},
    {q:"'せきたん' を運ぶ", ans:"石炭"},
    {q:"'せんろ' がある", ans:"線路"},
    {q:"花の 'め' が出る", ans:"芽"},
    {q:"問題を 'ついか' する", ans:"追加"},
    {q:"'どりょく' する", ans:"努力"},
    {q:"大きなビルが 'かんせい' する", ans:"完成"},
    {q:"'じどうかん' で遊ぶ", ans:"児童館"},
    {q:"'がっしょう' の練習をする", ans:"合唱"},
    {q:"'いちょう' が弱い", ans:"胃腸"},
    {q:"大きな 'てっきょう'", ans:"鉄橋"},
    {q:"'でんちゅう' がある", ans:"電柱"},
    {q:"はがきに 'じゅうしょ' を書く", ans:"住所"},
    {q:"'まがり'角", ans:"曲がり"},
    {q:"'まつり' に行く", ans:"祭り"},
    {q:"'みなと' に船がある", ans:"港"},
    {q:"'きし' がちかい", ans:"岸"},
    {q:"'しま' が見える", ans:"島"},
    {q:"'きてき' が鳴る", ans:"汽笛"},
    {q:"'じっけん' を行う", ans:"実験"},
    {q:"'ひつよう' な道具を用意する", ans:"必要"},
    {q:"毎日 'かならず' 勉強する", ans:"かならず"},
    {q:"チームの 'かなめ' になる", ans:"要"},
    {q:"点数を 'きろく' する", ans:"記録"},
    {q:"チューリップを 'かんさつ' する", ans:"観察"},
    {q:"いろいろな 'しゅるい'", ans:"種類"},
    {q:"朝顔の 'たね' をまく", ans:"種"},
    {q:"小動物の 'たぐい'", ans:"類い"},
    {q:"チョウが空を 'とぶ'", ans:"飛ぶ"},
    {q:"'べつ' の問題", ans:"別"},
    {q:"友達と 'わかれる'", ans:"別れる"},
    {q:"美しい 'しぜん'", ans:"自然"},
    {q:"工場の 'きかい'", ans:"機械"},
    {q:"さかんな 'さんぎょう'", ans:"産業"},
    {q:"漢字の音と 'くん'", ans:"訓"},
    {q:"家 'いがい' の場所", ans:"以外"},
    {q:"サッカーの 'しあい' を見る", ans:"試合"},
    {q:"画面が 'せいし' する", ans:"静止"},
    {q:"道を 'あんない' する", ans:"案内"},
    {q:"'ほうい' を調べる", ans:"方位"},
    {q:"父の 'あいどくしょ' を読む", ans:"愛読書"},
    {q:"'しずかな' 夜", ans:"静かな"},
    {q:"点数に 'まんぞく' する", ans:"満足"},
    {q:"小学校を 'そつぎょう' する", ans:"卒業"},
    {q:"'どくほん' を買う", ans:"読本"},
    {q:"年末に 'きせい' する", ans:"帰省"},
    {q:"'すいでん' が広がる", ans:"水田"},
    {q:"'もっとも' 好きなキャラ", ans:"最も"},
    {q:"'さいしょ' のページを読む", ans:"最初"},
    {q:"'ねん' のため用意する", ans:"念"},
    {q:"新しい 'ほうほう' を見つける", ans:"方法"},
    {q:"テストの 'けっか' を見せる", ans:"結果"},
    {q:"ひもを 'むすぶ'", ans:"結ぶ"},
    {q:"約束を 'はたす'", ans:"果たす"},
    {q:"地の 'はて'", ans:"果て"},
    {q:"カードを 'じゅん' にならべる", ans:"順"},
    {q:"日本の 'れきし' を学ぶ", ans:"歴史"},
    {q:"神社の 'さんどう' を歩く", ans:"参道"},
    {q:"お寺に 'まいる'", ans:"参る"},
    {q:"心を 'みたす'", ans:"満たす"},
    {q:"店内が 'しずまる'", ans:"静まる"},
    {q:"詩を 'となえる'", ans:"唱える"},
    {q:"'たとえば' のはなし", ans:"例えば"},
    {q:"'ざんねん' な話", ans:"残念"},
    {q:"'かいすいよく' に行く", ans:"海水浴"},
    {q:"'しょう' エネルギー", ans:"省"},
    {q:"ひもを 'つたう'", ans:"伝う"},
    {q:"むれを 'なす'", ans:"成す"},
    {q:"'ふしめ' をむかえる", ans:"節目"},
    {q:"'ともに' に歩む", ans:"共"},
    {q:"研究に 'つとめる'", ans:"努める"},
    {q:"教えを 'とく'", ans:"説く"},
    {q:"図書館を 'りよう' する", ans:"利用"},
    {q:"'うりょう' を調べる", ans:"雨量"},
    {q:"'ひよう' をみつもる", ans:"費用"},
    {q:"'ごおくえん' が当たる宝くじ", ans:"五億円"},
    {q:"自然の 'ふうけい'", ans:"風景"},
    {q:"まどから見える 'けしき'", ans:"景色"},
    {q:"花びらが 'ちる'", ans:"散る"},
    {q:"おこられて 'なく'", ans:"泣く"},
    {q:"'すきな' 色を聞く", ans:"好きな"},
    {q:"月の 'みちかけ'", ans:"満ち欠け"},
    {q:"池の 'まわり' を歩く", ans:"周り"},
    {q:"学校の 'しゅうへん'", ans:"周辺"},
    {q:"'つめたい' 空気", ans:"冷たい"},
    {q:"ふと 'れいせい' になる", ans:"冷静"},
    {q:"１００点をとって 'よろこぶ'", ans:"喜ぶ"},
    {q:"強い 'いんしょう' を残す", ans:"印象"},
    {q:"'ぞう' の鼻は長い", ans:"象"},
    {q:"子犬を 'きゅうしゅつ'", ans:"救出"},
    {q:"子どもを 'すくう'", ans:"救う"},
    {q:"ごほうびを 'ようきゅう' する", ans:"要求"},
    {q:"平和を 'もとめる'", ans:"求める"},
    {q:"'きんか' を見つける", ans:"金貨"},
    {q:"'かふん' が飛ぶ", ans:"花粉"},
    {q:"実験を 'こころみる'", ans:"試みる"},
    {q:"点数を 'ほうこく' する", ans:"報告"},
    {q:"'かだい' を見つける", ans:"課題"},
    {q:"ゴミの 'しゅうせきじょう'", ans:"集積場"},
    {q:"雪が 'つもる'", ans:"積もる"},
    {q:"'しりょう' を作成する", ans:"資料"},
    {q:"勉強の 'もくてき'", ans:"目的"},
    {q:"ビルの 'かんり'", ans:"管理"},
    {q:"'ねつ' がでた", ans:"熱"},
    {q:"'あつい' お茶を飲む", ans:"熱い"},
    {q:"今日は 'あつい'", ans:"暑い"},
    {q:"'ゆうがい' な物質", ans:"有害"},
    {q:"'こむぎこ' を買ってくる", ans:"小麦粉"},
    {q:"'かくち' の特産品を集める", ans:"各地"},
    {q:"'みらい' を予想する", ans:"未来"},
    {q:"'ごうれい' をかける", ans:"号令"},
    {q:"'ごはん' の時間", ans:"ご飯"},
    {q:"にぎり 'めし' を食べる", ans:"飯"},
    {q:"'あんしん' する", ans:"安心"},
    {q:"'いき' をすう", ans:"息"},
    {q:"'ぜんしん' をのばす", ans:"全身"},
    {q:"'ししゅう' を買う", ans:"詩集"},
    {q:"'にがみ' がある", ans:"苦味"},
    {q:"'さら' をわる", ans:"皿"},
    {q:"'かい' だんをのぼる", ans:"階"},
    {q:"'めんかい' に行く", ans:"面会"},
    {q:"お 'いしゃ' さん", ans:"医者"},
    {q:"病院の 'まちあいしつ'", ans:"待合室"},
    {q:"先生に 'そうだん' する", ans:"相談"},
    {q:"わたしの 'かぞく'", ans:"家族"},
    {q:"'はなぢ' がでる", ans:"鼻血"},
    {q:"調子が 'わるい'", ans:"悪い"},
    {q:"'うけ' つけ", ans:"受け"},
    {q:"小さな 'いのち'", ans:"命"},
    {q:"'ゆび' おり数える", ans:"指"},
    {q:"'よこ' を向く", ans:"横"},
    {q:"大きな 'びょういん'", ans:"病院"},
    {q:"バスの 'うんてんしゅ' に道を聞く", ans:"運転手"},
    {q:"'はた' をふる", ans:"旗"},
    {q:"日本の 'こっき'", ans:"国旗"},
    {q:"'なかなおり' をする", ans:"仲直り"},
    {q:"'なかま' と遊ぶ", ans:"仲間"},
    {q:"広い 'ぼくじょう'", ans:"牧場"},
    {q:"開会式が 'はじまる'", ans:"始まる"},
    {q:"'ひゃくびょう' で問題をとく", ans:"百秒"},
    {q:"'せかい' をすくうヒーロー", ans:"世界"},
    {q:"大きな 'とし'", ans:"都市"},
    {q:"'しゃしん' を買う", ans:"写真"},
    {q:"'きじつ' を守る", ans:"期日"},
    {q:"'きゅうしゅう' にある県をすべて言える", ans:"九州"},
    {q:"'よていひょう' が配られる", ans:"予定表"},
    {q:"'どうどう' とした態度", ans:"堂々"},
    {q:"二十一 'せいき' になる", ans:"世紀"},
    {q:"年の 'すえ'", ans:"末"},
    {q:"'しゅうまつ' は温泉地で過ごす", ans:"週末"},
    {q:"アニメの 'けつまつ' が気になる", ans:"結末"},
    {q:"幼稚園で 'しゅげい' を習う", ans:"手芸"},
    {q:"'こうげいひん' を見に行く", ans:"工芸品"},
    {q:"'しつれい' な態度を注意される", ans:"失礼"},
    {q:"気を 'うしなう'", ans:"失う"},
    {q:"映画を 'さいご' まで見る", ans:"最後"},
    {q:"公園まで 'さんぽ' をする", ans:"散歩"},
    {q:"三島大社に 'まいる'", ans:"参る"},
    {q:"'とうぜん' の結果", ans:"当然"},
    {q:"バザーでみかんが 'うれのこる'", ans:"売れ残る"},
    {q:"作文の 'だいざい' を探す", ans:"題材"},
    {q:"赤みを 'おびる'", ans:"帯びる"},
    {q:"平和を 'のぞむ'", ans:"望む"},
    {q:"'しょうひん' をもらう", ans:"賞品"},
    {q:"'しそん' を残す", ans:"子孫"},
    {q:"'こくばん' の字がよく見える", ans:"黒板"},
    {q:"'さんばい' の金額", ans:"三倍"},
    {q:"帰ったらすぐに 'しゅくだい' をする", ans:"宿題"},
    {q:"けんかした 'りゆう' を話す", ans:"理由"},
    {q:"クラスで 'いけん' を言う", ans:"意見"},
    {q:"呼ばれたら 'へんじ' をする", ans:"返事"},
    {q:"新しい 'ふでばこ' を買いに行く", ans:"筆箱"},
    {q:"'ほか' のカードを確認する", ans:"他"},
    {q:"教科書を 'あんき' する", ans:"暗記"},
    {q:"漢字の 'べんきょう' をする", ans:"勉強"},
    {q:"'とい' と答え", ans:"問い"},
    {q:"時間を 'はかる'", ans:"計る"},
    {q:"'ひや' あせ", ans:"冷や"},
    {q:"'きゅうきゅうしゃ' を呼ぶ", ans:"救急車"},
    {q:"漢字 'れんしゅうちょう'", ans:"練習帳"},
    {q:"'じしん' がつく", ans:"自信"},
    {q:"'よくしつ' のそうじをする", ans:"浴室"},
    {q:"'こうこく' をだす", ans:"広告"},
    {q:"'まと' をねらう", ans:"的"},
    {q:"'こうかん' をもつ", ans:"好感"},
    {q:"荷台に 'つむ'", ans:"積む"},
        
    //    {q:"", ans:""},
    {q:"念仏を 'となえる'", ans:"唱える"},
    {q:"都市が 'さかえる'", ans:"栄える"},
    {q:"新聞を 'する'", ans:"刷る"},
    {q:"水が糸を 'つたう'", ans:"伝う"},
    {q:"年の 'すえ' になる", ans:"末"},
    {q:"むれを 'なす'", ans:"成す"},
    {q:"ざっしの 'ふろく'", ans:"付録"},
    {q:"細い 'くだ' を通す", ans:"管"},
    {q:"'ふしめ' をむかえる", ans:"節目"},
    {q:"歯を 'ち' りょうする", ans:"治"},
    {q:"昔の 'せきしょ'", ans:"関所"},
    {q:"'き'げき 役者", ans:"喜"},
    {q:"指先の 'かんかく'", ans:"感覚"},
    {q:"'こっき' をふる", ans:"国旗"},
    {q:"重さを 'はかる'", ans:"量る"},
    {q:"'しゃくよう' する", ans:"借用"},
    {q:"教えを 'とく'", ans:"説く"},
    {q:"勉強に 'つとめる'", ans:"努める"},
    {q:"'ほうたい' を取る", ans:"包帯"},
    {q:"新しく 'こころみる'", ans:"試みる"},
    {q:"船が 'ぎょこう' に入る", ans:"漁港"},
    {q:"海へ 'りょう' に出る", ans:"漁"},
    {q:"'ざいりょう' を集める", ans:"材料"},
    {q:"'むり' もない", ans:"無理"},
    {q:"'ぶじ' をたしかめる", ans:"無事"},
    {q:"実験が 'せいこう' する", ans:"成功"},
    {q:"努力を 'つづける'", ans:"続ける"},
    {q:"試合を 'ぞっこう' する", ans:"続行"},
    {q:"食べ物が何も 'ない'", ans:"無い"},
    {q:"雨の日が 'つづく'", ans:"続く"},
    {q:"ひなが 'じゅんちょう' に育つ", ans:"順調"},
    {q:"海岸に 'じょうりく' する", ans:"上陸"},
    {q:"文章を 'ようやく' する", ans:"要約"},
    {q:"水をまき 'ちらす'", ans:"散らす"},
    {q:"野菜を 'くわえる'", ans:"加える"},
    {q:"夕日が 'てる'", ans:"照る"},
    {q:"部屋の 'しょうめい' を消す", ans:"照明"},
    {q:"'まつ' の木を植える", ans:"松"},
    {q:"'しょうちくばい' をえがく", ans:"松竹梅"},
    {q:"足元を 'てらす'", ans:"照らす"},
    {q:"'ふしぎ' なことがら", ans:"不思議"},
    {q:"バスを 'りよう' する", ans:"利用"},
    {q:"新聞の 'しゅざい' を受ける", ans:"取材"},
    {q:"池の 'しゅうい' を散歩する", ans:"周囲"},
    {q:"庭をへいで 'かこむ'", ans:"囲む"},
    {q:"'せつめい' を加える", ans:"説明"},
    {q:"十人 'いじょう' 集まる", ans:"以上"},
    {q:"'はじめて' わけを知る", ans:"初めて"},
    {q:"感想を 'つたえる'", ans:"伝える"},
    {q:"さくで牛を 'かこう'", ans:"囲う"},
    {q:"今後の 'かだい'", ans:"課題"},
    {q:"会社員の 'おっと'", ans:"夫"},
    {q:"キューリー 'ふじん' の伝記", ans:"夫人"},
    {q:"'しみん' の意見を聞く", ans:"市民"},
    {q:"病院の 'ふくいんちょう'", ans:"副院長"},
    {q:"今年の 'もくひょう' を立てる", ans:"目標"},
    {q:"くつの 'げんけい' を作る", ans:"原型"},
    {q:"父が 'しんがた' の車を買う", ans:"新型"},
    {q:"冬の 'いふく' を出す", ans:"衣服"},
    {q:"'ちゃくせき' して先生を待つ", ans:"着席"},
    {q:"'ひっし' に走る", ans:"必死"},
    {q:"'おい' かける", ans:"追い"},
    {q:"'うんどうぎ'に着がえる", ans:"運動着"},
    {q:"赤い 'やね'", ans:"屋根"},
    {q:"'たいいくかん' で走る", ans:"体育館"},
    {q:"'かかり' の仕事", ans:"係"},
    {q:"広い 'こうてい'", ans:"校庭"},
    {q:"'せいれつ' する", ans:"整列"},
    {q:"水泳の 'たいけつ'", ans:"対決"},
    {q:"公園の 'ゆうぐ' で遊ぶ", ans:"遊具"},
    {q:"'だいだ' の選手", ans:"代打"},
    {q:"町の 'ちゅうおう'", ans:"中央"},
    {q:"'ぜんりょく' を出す", ans:"全力"},
    {q:"'とうきゅう' 練習をする", ans:"投球"},
    {q:"真けん 'しょうぶ'", ans:"勝負"},
    {q:"ルールを 'まもる'", ans:"守る"},
    {q:"'うえき' ばちの花がさいている", ans:"植木"},
    {q:"町の 'びか'", ans:"美化"},
    {q:"図書 'いいん' になった", ans:"委員"},
    {q:"ごみを 'ひろう'", ans:"拾う"},
    {q:"文章の 'ようやく'", ans:"要約"},
    {q:"古い 'みんわ'", ans:"民話"},
    {q:"山道が 'つづく'", ans:"続く"},
    {q:"'ふく' 会長になる", ans:"副"},
    {q:"'いるい' の整理", ans:"衣類"},
    {q:"'ぎょせん' に乗る", ans:"漁船"},
    {q:"'りくじょう' の生物", ans:"陸上"},
    {q:"さくで 'かこむ'", ans:"囲む"},
    {q:"母が 'てれる'", ans:"照れる"},
    {q:"試合の 'ぞっこう'", ans:"続行"},
    {q:"'あさい' 池", ans:"浅い"},
    {q:"'しめい' を書く", ans:"氏名"},
    {q:"'てんこう' が変化する", ans:"天候"},
    {q:"病気の 'ちょうこう' が見える", ans:"兆候"},
    {q:"'こうくうき' 事故を調査する", ans:"航空機"},
    {q:"電車の 'うんこう' 情報", ans:"運航"},
    {q:"'せいこう' する", ans:"成功"},
    {q:"'ぶじ' に着く", ans:"無事"},
    {q:"洋服の 'かたがみ'", ans:"型紙"},
    {q:"'しゅうい' の様子", ans:"周囲"},
    {q:"'しょうめい' の光", ans:"照明"},
    {q:"車の模 'けい'", ans:"型"},
    {q:"食料が 'ない'", ans:"無い"},
    {q:"紙を 'おる'", ans:"折る"},
    {q:"'おり' を見て話す", ans:"折"},
    {q:"'うせつ' する", ans:"右折"},
    {q:"道路の 'みぎがわ' を歩く", ans:"右側"},
    {q:"立方体の 'そくめん'", ans:"側面"},
    {q:"'れんぞく' テレビ小説", ans:"連続"},
    {q:"犬を 'つれる'", ans:"連れる"},
    {q:"車が 'つらなる'", ans:"連なる"},
    {q:"'なんきょく' 物語を読む", ans:"南極"},
    {q:"'せっきょくてき' に発言する", ans:"積極的"},
    {q:"'ちてい' に広がる空間", ans:"地底"},
    {q:"'そこぢから' をみせる", ans:"底力"},
    {q:"'やくそく' を守る", ans:"約束"},
    {q:"'はなたば' をもらう", ans:"花束"},
    {q:"実験に 'しっぱい' する", ans:"失敗"},
    {q:"'はくぶつかん' に行く", ans:"博物館"},
    {q:"'うめ' の花がさく", ans:"梅"},
    {q:"'きょうくん' を得る", ans:"教訓"},
    {q:"先生の協力を 'える'", ans:"得る"},
    {q:"'よい' カードを選ぶ", ans:"良い"},
    {q:"'りょうやく' 口に苦し", ans:"良薬"},
    {q:"'ろうじん' に道を聞く", ans:"老人"},
    {q:"'おいた' 犬とさんぽする", ans:"老いた"},
    {q:"'せんえんさつ' をもらう", ans:"千円札"},
    {q:"'どく'りんごをかじった白雪姫", ans:"毒"},
    {q:"きずを 'しょうどく' する", ans:"消毒"},
    {q:"かきぞめを 'せいしょ' する", ans:"清書"},
    {q:"'きよく' 正しく 美しく", ans:"清く"},
    {q:"'しゅくじつ' は学校が休みだ", ans:"祝日"},
    {q:"'ていがくねん' の弟", ans:"低学年"},
    {q:"気温が 'ひくい'", ans:"低い"},
    {q:"'とどうふけん' の位置を覚える", ans:"都道府県"},
    {q:"アルプス 'さんみゃく'", ans:"山脈"},
    {q:"'みゃく' をとる", ans:"脈"},
    {q:"息を 'ころす'", ans:"殺す"},
    {q:"'さっちゅう' ざいを買う", ans:"殺虫"},
    {q:"'ちょすいち' に水がたまる", ans:"貯水池"},
    {q:"お年玉を 'ちょきん' する", ans:"貯金"},
    {q:"'いっちょうえん' ほしい", ans:"一兆円"},
    {q:"漢字の 'なりたち'", ans:"成り立ち"},
    {q:"水の 'ぶんりょう' が多い", ans:"分量"},
    {q:"'べんり' な道具を買う", ans:"便利"},
    {q:"'たより' が届く", ans:"便り"},
    {q:"道具を 'かいりょう' する", ans:"改良"},
    {q:"気持ちを 'あらためる'", ans:"改める"},
    {q:"雷が落ちたので 'ていでん' した", ans:"停電"},
    {q:"'ていりゅうじょ' でバスを待つ", ans:"停留所"},
    {q:"'そうこ' へ探しに行く", ans:"倉庫"},
    {q:"商品を 'くら' におさめる", ans:"倉"},
    {q:"１００メートル 'きょうそう'", ans:"競走"},
    {q:"玉入れ 'きょうそう'", ans:"競争"},
    {q:"船橋 'けいばじょう'", ans:"競馬場"},
    {q:"'しょうてんがい' に買い物へ行く", ans:"商店街"},
    {q:"学生の 'まち' でくらす", ans:"街"},
    {q:"あらしの 'ぜんちょう'", ans:"前兆"},
    {q:"'だいじん' とあくしゅする", ans:"大臣"},
    {q:"織田信長の 'かしん'", ans:"家臣"},
    {q:"'にもつ' をまとめる", ans:"荷物"},
    {q:"父は今日も 'しごと' だ", ans:"仕事"},
    {q:"おもちゃの 'ぶひん' を無くす", ans:"部品"},
    {q:"この 'ちく' の住民", ans:"地区"},
    {q:"家具を 'はいそう' してもらう", ans:"配送"},
    {q:"'ぎんこう' へ行く", ans:"銀行"},
    {q:"'しんごう' で止まる", ans:"信号"},
    {q:"'けんりつ' のこうこう", ans:"県立"},
    {q:"'そくど' を計る", ans:"速度"},
    {q:"白い 'けい' 自動車", ans:"軽"},
    {q:"ゆうびん 'きょく'", ans:"局"},
    {q:"とり肉を 'あぶら' であげる", ans:"油"},
    {q:"'だいず' の栄養を調べる", ans:"大豆"},
    {q:"'しか' けんしんを受ける", ans:"歯科"},
    {q:"'さんちょうめ' の夕日", ans:"三丁目"},
    {q:"水を 'そそぐ'", ans:"注ぐ"},
    {q:"'ようふく' を買う", ans:"洋服"},
    {q:"'りょくちゃ' を買う", ans:"緑茶"},
    {q:"車が 'はっしん' する", ans:"発進"},
    {q:"'さむい' 季節", ans:"寒い"},
    {q:"'あつい' 夏", ans:"暑い"},
    {q:"'ひめい' をあげる", ans:"悲鳴"},
    {q:"かみの毛が 'みじかい'", ans:"短い"},
    {q:"窓の 'そとがわ' をふく", ans:"外側"},
    {q:"'ねんがん' のタイトルを手に入れる", ans:"念願"},
    {q:"'こてい' する", ans:"固定"},
    {q:"'しょうりゃく' する", ans:"省略"},
    {q:"秋の 'みかく'", ans:"味覚"}   
];

var question2nen = [
    //    {q:"", ans:""},
    {q:"大きな 'こえ'", ans:"声"},
    {q:"テレビの 'おんせい'", ans:"音声"},
    {q:"ありがとうと 'いう'", ans:"言う"},
    {q:"でん 'ごん' ゲームであそぶ", ans:"言"},
    {q:"'こころ' にのこる言葉", ans:"心"},
    {q:"クラスの 'ちゅうしん'", ans:"中心"},
    {q:"'はなし' をする", ans:"話"},
    {q:"兄弟で 'はなす'", ans:"話す"},
    {q:"'かいわ' する", ans:"会話"},    
    {q:"きょうか 'しょ' をよむ", ans:"書"},
    {q:"かん字を 'かく'", ans:"書く"},
    {q:"しゅくだいは 'さくぶん' です", ans:"作文"},
    {q:"かみひこうきを 'つくる'", ans:"作る"},
    {q:"'きいろ' いおり紙", ans:"黄色"},
    {q:"きれいな 'いろ'", ans:"色"},
    {q:"'さんしょく' ペン", ans:"三色"},
    {q:"け 'しき' を見る", ans:"色"},
    {q:"'ねいろ' を聞く", ans:"音色"},
    {q:"'おもいで' を話す", ans:"思い出"},
    {q:"うれしいと 'おもう'", ans:"思う"},
    {q:"'いま' から学校に行く", ans:"今"},
    {q:"'きょう' は休みだ", ans:"今日"},
    {q:"'こんげつ' のおこづかい", ans:"今月"},
    {q:"'ほし' を見る", ans:"星"},
    {q:"プラネタリウムで 'せい' ざをおぼえる", ans:"星"},
    {q:"'こんや' の天気", ans:"今夜"},
    {q:"'よぞら' の星", ans:"夜空"},
    {q:"ひると 'よる'", ans:"夜"},
    {q:"母に 'でんわ' をかける", ans:"電話"},
    {q:"'でんき' をけす", ans:"電気"},
    {q:"'にっき' のしゅくだい", ans:"日記"},
    {q:"ものがたりを 'しるす'", ans:"記す"},
    {q:"本を 'よむ'", ans:"読む"},
    {q:"'おんどく' をする", ans:"音読"},
    {q:"'ともだち' とあそぶ", ans:"友だち"},
    {q:"'ゆうじん' をしょうかいする", ans:"友人"},
    {q:"'にんげん' の生活", ans:"人間"},
    {q:"'いつかかん' 学校を休む", ans:"五日間"},
    {q:"木の 'あいだ' に道がある", ans:"間"},
    {q:"ひる 'ま' のうちに帰る", ans:"間"},
    {q:"'おやこ' で遊ぶ", ans:"親子"},
    {q:"'しん' せき の家に行く", ans:"親"},
    {q:"'したしい' 友だち", ans:"親しい"},
    {q:"帰りの 'かい' をはじめる", ans:"会"},
    {q:"友だちに 'あう'", ans:"会う"},
    {q:"今日は 'げつようび'", ans:"月曜日"},
    {q:"'あさ' になる", ans:"朝"},
    {q:"'ちょうれい' に出る", ans:"朝れい"}
];

var question1nen = [
    {q:"'きゅうじつ' をすごす", ans:"休日"},
    {q:"水の中で 'いきる' さかな", ans:"生きる"},
    {q:"'あしおと' 立ててあるく", ans:"足音"},
    {q:"毛 'いと' のマフラー", ans:"糸"},
    {q:"ふうりんの 'ねいろ'", ans:"音色"},
    {q:"でん 'しゃ' ででかける", ans:"車"},
    {q:"大きい 'おと' がした", ans:"音"},
    {q:"'おんがく' の先生", ans:"音楽"},
    {q:"おこづかいは 'ごひゃくえん'", ans:"五百円"},
    {q:"お 'しょうがつ' がまちどおしい", ans:"正月"},
    {q:"'くうはく' をなくす", ans:"空白"},
    {q:"'ゆうだち' がふる", ans:"夕立"},
    {q:"'じっぽん' のえんぴつ", ans:"十本"},
    {q:"'ほんき' でおぼえる", ans:"本気"},
    {q:"よう 'す' をうかがう", ans:"子"},
    {q:"すこし 'ひとやすみ' する", ans:"一休み"},
    {q:"'こ' とりがなく", ans:"小"},
    {q:"シャボン 'だま' がふくらむ", ans:"玉"},
    {q:"'うてん' にもまけない", ans:"雨天"},
    {q:"学校を三日 'やすむ'", ans:"休む"},
    {q:"大きな町に 'はいる'", ans:"入る"},
    {q:"'はく' ちょうがとぶ", ans:"白"},
    {q:"'みかづき' がひかる", ans:"三日月"},
    {q:"'さんそん' にすむ人びと", ans:"山村"},
    {q:"山から 'おりる'", ans:"下りる"},
    {q:"かい 'りき' のもちぬし", ans:"力"},
    {q:"'ごもく' ならべをする", ans:"五目"},
    {q:"出ぱつのひが 'はやまる'", ans:"早まる"},
    {q:"'ち' よがみで人ぎょうを作る", ans:"千"},
    {q:"'かわかみ' から大きなももがながれる", ans:"川上"},
    {q:"'あめあがり' の空を見る", ans:"雨上がり"},
    {q:"つり糸をいけに 'おろす'", ans:"下ろす"},
    {q:"大きな 'すいしゃ' がまわる", ans:"水車"},
    {q:"'ようか' かんで九九をおぼえる", ans:"八日"},
    {q:"'なのか' かんで売り切れた", ans:"七日"},
    {q:"'むいか' のお休み", ans:"六日"},
    {q:"まい月 'いつか' はセールがある", ans:"五日"},
    {q:"'せき' めんする", ans:"赤"},
    {q:"'じょうげ' に手をふる", ans:"上下"},
    {q:"'かわしも' のさかな", ans:"川下"},
    {q:"ながい 'としつき' がすぎる", ans:"年月"},
    {q:"学校を 'けんがく' する", ans:"見学"},
    {q:"'せんそく' のくつをうる", ans:"千足"},
    {q:"大きな 'かこう' をのぞく", ans:"火口"},
    {q:"'あおぞら' がひろがる", ans:"青空"},
    {q:"そらを 'みあげる'", ans:"見上げる"},
    {q:"あたたかい 'ひ' ざし", ans:"日"},
    {q:"うんどうじょうに 'にゅう' じょうする", ans:"入"},
    {q:"びんの中が 'から' になる", ans:"空"},
    {q:"にわの 'くさばな' に水をやる", ans:"草花"},
    {q:"'か' だんにひまわりのたねをまく", ans:"花"},
    {q:"'たけ' とんぼをとばした", ans:"竹"},
    {q:"海 'そう' がゆらゆらゆれる", ans:"草"},
    {q:"うら山で、 'たけ' の子をほる", ans:"竹"},
    {q:"'くさ' むらから、虫のこえがきこえる", ans:"草"},
    {q:"ばらの 'はな' をかう", ans:"花"},
    {q:"おとうとは、とてもなき 'むし' だ", ans:"虫"},
    {q:"うまは、やさしい 'め' つきをしている", ans:"目"},
    {q:"先生が、きびしい 'く' ちょうではなす", ans:"口"},
    {q:"そのはなしは、はつ 'みみ' でおどろいた", ans:"耳"},
    {q:"おいしいケーキをたべて、まん 'ぞく' だ", ans:"足"},
    {q:"ともだちに 'て' がみをかく", ans:"手"},
    {q:"まだまだ、力が 'た' りない", ans:"足"},
    {q:"うんどうをして、たい 'りょく' をつける", ans:"力"},
    {q:"リレーのせん 'しゅ' にえらばれる", ans:"手"},
    {q:"遠 'そく' に出かけた", ans:"足"},
    {q:"このえは、わたしの 'りき' 作だ", ans:"力"},
    {q:"あく 'しゅ' をして、なかなおりする", ans:"手"},
    {q:"はまべで 'かい' をひろう", ans:"貝"},
    {q:"ちょうのよう 'ちゅう' をみつけた", ans:"虫"},
    {q:"'いぬ' をさんぽにつれていく", ans:"犬"},
    {q:"かばが、大きな 'くち' をあける", ans:"口"},
    {q:"こくばんにちゅう 'もく' する", ans:"目"},
    {q:"ラジオの音が 'みみ' ざわりだ", ans:"耳"},
    {q:"えきのかいさつ 'ぐち' にむかう", ans:"口"},
    {q:"水を 'たす'", ans:"足す"},
    {q:"'ちから' もちの男", ans:"力"},
    {q:"'もく' じを見る", ans:"目"},
    {q:"ざっ 'そう' をぬく", ans:"草"},
    {q:"白い 'かい' がら", ans:"貝"},
    {q:"'おとこ' の人にあった", ans:"男"},
    {q:"'こ' ぶたが六ぴき生まれた", ans:"子"},
    {q:"おおきくなったら 'じょ' ゆうになりたい", ans:"女"},
    {q:"げきで、王 'じ' のやくをした", ans:"子"},
    {q:"'だんじょ' にわかれてならぶ", ans:"男女"},
    {q:"うまの親 'こ' がいる", ans:"子"},
    {q:"ぼくは長 'なん' で、おとうとがいる", ans:"男"},
    {q:"パンダはとても 'にん' 気がある", ans:"人"},
    {q:"'あま' の川はきれいだ", ans:"天"},
    {q:"おしろから 'おう' さまが出てきた", ans:"王"},
    {q:"日曜日は、 'ひと' 通りがとてもおおい", ans:"人"},
    {q:"こんしゅうは、せい 'てん' がつづいている", ans:"天"},
    {q:"歌 'しゅ' になりたい", ans:"手"},
    {q:"'ちく' 林の中", ans:"竹"},
    {q:"'はな' 火が上がる", ans:"花"},
    {q:"こん 'ちゅう' の本", ans:"虫"},
    {q:"番 'けん' がほえる", ans:"犬"},
    {q:"'おんな' の人にあった", ans:"女"},
    {q:"ピアノの上に 'にん' 形をかざる", ans:"人"},
    {q:"かわいい 'おうじょ' が生まれた", ans:"王女"},
    {q:"あの人は、ホームラン 'おう' だ", ans:"王"},
    {q:"'かわ' ぎしでつりをする", ans:"川"},
    {q:"'やま' もりのごはんを食べる", ans:"山"},
    {q:"学校に 'た' んぼがある", ans:"田"},
    {q:"'はやし' でドングリをひろう", ans:"林"},
    {q:"'しんりん' こうえんにあそびに行く", ans:"森林"},
    {q:"'くうき' がきれいだ", ans:"空気"},
    {q:"とりが 'おおぞら' をとぶ", ans:"大空"},
    {q:"明日は 'おおあめ' らしい", ans:"大雨"},
    {q:"かん 'じ' でかく", ans:"字"},
    {q:"行き 'さき' をきめる", ans:"先"},
    {q:"'てほん' を見る", ans:"手本"},
    {q:"川で、まるい 'いし' をひろう", ans:"石"},
    {q:"'やま' びこがこだまする", ans:"山"},
    {q:"貝の化 'せき' を見つける", ans:"石"},
    {q:"とつぜん火 'ざん' がふん火した", ans:"山"},
    {q:"ストーブに 'せき' ゆをいれる", ans:"石"},
    {q:"水がきれいで、 'かわ' ぞこ見える", ans:"川"},
    {q:"'がっこう' に行く", ans:"学校"},
    {q:"子犬が 'うまれる'", ans:"生まれる"},
    {q:"'いきもの' がかりになる", ans:"生きもの"},
    {q:"ぼくは 'いちねんせい' だ", ans:"一年生"},
    {q:"ノートに 'もじ' をかく", ans:"文字"},
    {q:"おまわりさんに 'ほんみょう' を言う", ans:"本名"},
    {q:"'すい' どうで手をあらう", ans:"水"},
    {q:"'おかね' がたりない", ans:"お金"},
    {q:"'かな' づちでくぎをうつ", ans:"金"},
    {q:"今日は 'つき' が大きい", ans:"月"},
    {q:"ダッシュ 'むら' に行ってみたい", ans:"村"},
    {q:"'そん' 長をきめる", ans:"村"},
    {q:"'こ' かげでひるねをする", ans:"木"},
    {q:"'だいしょう' をくらべる", ans:"大小"},
    {q:"'おがわ' に行く", ans:"小川"},
    {q:"たいこの 'めいじん'", ans:"名人"},
    {q:"かん 'じ' のテストがある", ans:"字"},
    {q:"ひげを 'はやす'", ans:"生やす"},
    {q:"日本のれきしを 'まなぶ'", ans:"学ぶ"},
    {q:"'ひ' のようじん", ans:"火"},
    {q:"'はなび' をみる", ans:"花火"},
    {q:"うんどうじょうの 'ちゅう' しん", ans:"中"},
    {q:"'しろ' 組がゆうしょうした", ans:"白"},
    {q:"'あか' 組のおうえんをする", ans:"赤"},
    {q:"'おおごえ' を出してあそぶ", ans:"大声"},
    {q:"'たいせつ' なたからのもの", ans:"大切"},
    {q:"海は 'あおい'", ans:"青い"},
    {q:"'おおきい' 家にすむ", ans:"大きい"},
    {q:"'ちいさい' こえではなす", ans:"小さい"},
    {q:"'しょうがっこう' がちかい", ans:"小学校"},
    {q:"'さ' せつする", ans:"左"},
    {q:"'げこう' のじかん", ans:"下校"},
    {q:"じゅぎょうのはじめにき 'りつ' する", ans:"立"},
    {q:"あついので 'うわ' ぎをぬぐ", ans:"上"},
    {q:"'ひので' の時間をしらべる", ans:"日の出"},
    {q:"'いりぐち' にむかう", ans:"入り口"},
    {q:"ぼうを 'たてる'", ans:"立てる"},
    {q:"あたまを 'さげる'", ans:"下げる"},
    {q:"お気に入りの人形を 'みせる'", ans:"見せる"},
    {q:"'ぎょく' ろをのむ", ans:"玉"},
    {q:"'せい' かくなとけい", ans:"正"},
    {q:"はっ 'しゃ' のあいず", ans:"車"},
    {q:"せい 'し' 工場", ans:"糸"},
    {q:"'しょう' めんの入り口", ans:"正"},
    {q:"兄は 'ちゅうがくせい' だ", ans:"中学生"},
    {q:"手を 'さゆう' にふる", ans:"左右"},
    {q:"ぼくは さか 'だち' ができる", ans:"立ち"},
    {q:"つなひきに 'しゅつ' 場する", ans:"出"},
    {q:"たからのものをはっ 'けん' する", ans:"見"},
    {q:"ひこうきが 'じょうくう' をとんでいる", ans:"上空"},
    {q:"川を 'くだる'", ans:"下る"},
    {q:"'した' じきを買う", ans:"下"},
    {q:"ぼくのい 'けん'", ans:"見"},
    {q:"学校を 'そう' たいする", ans:"早"},
    {q:"'まさ' ゆめになる", ans:"正"},
    {q:"'ゆうひ' がきれい", ans:"夕日"},
    {q:"'はやあし' で歩く", ans:"早足"},
    {q:"'まるく' わになる", ans:"円く"},
    {q:"'ただしい' かんじを書く", ans:"正しい"},
    {q:"あさ 'はやく' でかける", ans:"早く"}
];

var questionkosoado = [
    //    {q:"", ans:""},
    {q:"雨が降ってきた。(だから / しかし / それとも)、かさをさした。", ans:"だから"},
    {q:"暑くなった。 (けれども / それで / さらに)、シャツをぬいだ。", ans:"それで"},
    {q:"朝ごはんを食べた。(すると / ところが / それとも)、おなかがすいてきた。", ans:"ところが"},
    {q:"昨日は早くねた。(それで / さらに / つまり)、今朝は早く目が覚めた。", ans:"それで"},
    {q:"歌がうまい。(しかし / さらに / つまり)、とび箱も得意だ。", ans:"さらに"},
    {q:"週末は、海へ行こうか。(しかし / それで / それとも)、山へ行こうか。", ans:"それとも"},
    {q:"こちら父の姉です。(さらに / それで / つまり)、私のおばです。", ans:"つまり"},
    {q:"雨がふってきた。(さらに / あるいは / それで)、かさをさした。", ans:"それで"},
    {q:"雨がふってきた。(それで / さらに / しかし)、かさをささなかった。", ans:"しかし"},
    {q:"雨がふってきた。(さらに / さて / あるいは)、風も強くなった。", ans:"さらに"},
    {q:"週末は、海へ行こうか。(しかし / さて / あるいは)、山へ行こうか。", ans:"あるいは"},
    {q:"そうじは終わった。(さらに / さて / あるいは)、ゲームでもしようかな。", ans:"さて"},
    {q:"ありがとうございました。では、(こんにちは / さようなら)。", ans:"さようなら"},
    {q:"昨日は早くねた。(でも / だから / つまり)、早く起きられなかった。", ans:"でも"},
    {q:"雨が降った。(でも / だから / つまり)、兄はでかけた。", ans:"でも"}
];

var app = new Vue({
  el: '#app',
  data: {
    question: '　',
    answers:[],
    isCheck: 0
  },
  methods: {
      start4nen: function() {
        app.answers = [];
        app.isCheck = 0;
        var labelSet = [];
        var answerSet = [];
        var count = 0;

        do {
            var label = Math.floor( Math.random() * question4nen.length );
            if(labelSet.indexOf(label) == -1) {
                labelSet.push(label);
            }
        } while (labelSet.length != 10)

        function loop(){
            if(count > 9){
                app.question = "おわり";
                app.isCheck = 1;                
                return;
            }
            app.question = (count + 1) + ".　" + question4nen[labelSet[count]]['q'];
            answerSet.push(question4nen[labelSet[count]]);
            count++;        
            setTimeout(loop,10500)
        }
        loop();
        app.answers = answerSet;
      },
      start2nen: function() {
        app.answers = [];
        app.isCheck = 0;
        var labelSet = [];
        var answerSet = [];
        var count = 0;

        do {
            var label = Math.floor( Math.random() * question2nen.length );
            if(labelSet.indexOf(label) == -1) {
                labelSet.push(label);
            }
        } while (labelSet.length != 10)

        function loop(){
            if(count > 9){
                app.question = "おわり";
                app.isCheck = 1;                
                return;
            }
            app.question = (count + 1) + ".　" + question2nen[labelSet[count]]['q'];
            answerSet.push(question2nen[labelSet[count]]);
            count++;        
            setTimeout(loop,10500)
        }
        loop();
        app.answers = answerSet;
      },
      start1nen: function() {
        app.answers = [];
        app.isCheck = 0;
        var labelSet = [];
        var answerSet = [];
        var count = 0;

        do {
            var label = Math.floor( Math.random() * question1nen.length );
            if(labelSet.indexOf(label) == -1) {
                labelSet.push(label);
            }
        } while (labelSet.length != 10)

        function loop(){
            if(count > 9){
                app.question = "おわり";
                app.isCheck = 1;                
                return;
            }
            app.question = (count + 1) + ".　" + question1nen[labelSet[count]]['q'];
            answerSet.push(question1nen[labelSet[count]]);
            count++;        
            setTimeout(loop,10500)
        }
        loop();
        app.answers = answerSet;
      },
      startkosoado: function() {
        app.answers = [];
        app.isCheck = 0;
        var labelSet = [];
        var answerSet = [];
        var count = 0;

        do {
            var label = Math.floor( Math.random() * questionkosoado.length );
            if(labelSet.indexOf(label) == -1) {
                labelSet.push(label);
            }
        } while (labelSet.length != 10)

        function loop(){
            if(count > 9){
                app.question = "おわり";
                app.isCheck = 1;                
                return;
            }
            app.question = (count + 1) + ".　" + questionkosoado[labelSet[count]]['q'];
            answerSet.push(questionkosoado[labelSet[count]]);
            count++;        
            setTimeout(loop,10500)
        }
        loop();
        app.answers = answerSet;
      }
  }
})
