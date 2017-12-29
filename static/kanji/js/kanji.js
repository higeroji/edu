// ４年生用の問題を登録する
var question4nen = [
    //    {q:"", ans:""},
    {q:"'しゅうい' を見回す", ans:"周囲"},
    {q:"強い 'りきし'", ans:"力士"},
    {q:"'うめ' ぼし", ans:"梅"},
    {q:"必勝 'ほう'", ans:"法"},
    {q:"地球の 'みらい'", ans:"未来"},
    {q:"世界 'かくち'", ans:"各地"},
    {q:"'なふだ' をつける", ans:"名札"},
    {q:"三月の 'すえ'", ans:"末"},
    {q:"さいばん 'かん'", ans:"官"},
    {q:"ビルの 'かんせい'", ans:"完成"},
    {q:"'やくそく' を守る", ans:"約束"},
    {q:"'くん' 読み", ans:"訓"},
    {q:"'せき' に着く", ans:"席"},
    {q:"'きねん' 写真", ans:"記念"},
    {q:"'かふん' が飛ぶ", ans:"花粉"},
    {q:"日本の 'れきし'", ans:"歴史"},
    {q:"'ろう' 働力", ans:"労"},
    {q:"'たいけん' 学習", ans:"体験"},
    {q:"'ゆうはん' の時間", ans:"夕飯"},
    {q:"アルプス 'さんみゃく'", ans:"山脈"},
    {q:"'とうろく' する", ans:"登録"},
    {q:"寺の 'ほんどう'", ans:"本堂"},
    {q:"'かんさつ' 日記", ans:"観察"},
    {q:"寒い 'きせつ'", ans:"季節"},
    {q:"'かもつ' 船", ans:"貨物"},
    {q:"'きょうそう' する", ans:"競争"},
    {q:"'ほっきょく' の生物", ans:"北極"},
    {q:"'こうこう' 中の船", ans:"航行"},
    {q:"重さの 'たんい'", ans:"単位"},
    {q:"'はく' らん会", ans:"博"},
    {q:"'きょうとふ'", ans:"京都府"},
    {q:"'めいれい' する", ans:"命令"},
    {q:"'そうこ' に運ぶ", ans:"倉庫"},
    {q:"'ていしゃ' する", ans:"停車"},
    {q:"'けんこう' な体", ans:"健康"},
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
    {q:"試合に 'やぶれる'", ans:"敗れる"},
    {q:"えだが 'おれる'", ans:"折れる"},
    {q:"子どもを 'やしなう'", ans:"養う"},
    {q:"雪が 'つもる'", ans:"積もる"},
    {q:"'おっと' と妻", ans:"夫"},
    {q:"'えいご' を習う", ans:"英語"},
    {q:"'きゅうしょく' 当番", ans:"給食"},
    {q:"'しょう' 竹梅", ans:"松"},
    {q:"白い 'ぐんて'", ans:"軍手"},
    {q:"'しかい' をする", ans:"司会"},
    {q:"'とうだい' が見える", ans:"灯台"},
    {q:"'やく' 百秒間", ans:"約"},
    {q:"'ゆうき' をだす", ans:"勇気"},
    {q:"'がっき' を演奏する", ans:"楽器"},
    {q:"'みんわ' を読む", ans:"民話"},
    {q:"駅の 'きんぺん'", ans:"近辺"},
    {q:"'ふく' 会長", ans:"副"},
    {q:"円の 'はんけい'", ans:"半径"},
    {q:"'さくじつ' の天気", ans:"昨日"},
    {q:"昆虫の 'ひょうほん'", ans:"標本"},
    {q:"'ざいもく' をきる", ans:"材木"},
    {q:"'へいし' になる", ans:"兵士"},
    {q:"着物と 'おび'", ans:"帯"},
    {q:"'じょうりく' する", ans:"上陸"},
    {q:"実験の 'せいこう'", ans:"成功"},
    {q:"'えいよう' をとる", ans:"栄養"},
    {q:"'えんぶん' が多い", ans:"塩分"},
    {q:"大 'りょう' 旗", ans:"漁"},
    {q:"'がんぼう' がかなう", ans:"願望"},
    {q:"冬の 'いふく'", ans:"衣服"},
    {q:"'しゃくや' に住む", ans:"借家"},
    {q:"音楽 'たい'", ans:"隊"},
    {q:"'きぼう' がある", ans:"希望"},
    {q:"手を 'さしだす'", ans:"差し出す"},
    {q:"新聞を 'する'", ans:"刷る"},
    {q:"一等 'しょう'", ans:"賞"},
    {q:"品物の 'とくちょう'", ans:"特長"},
    {q:"市長の 'せんきょ'", ans:"選挙"},
    {q:"も 'けい' を作る", ans:"型"},
    {q:"'わなげ' をする", ans:"輪投げ"},
    {q:"けんび 'きょう'", ans:"鏡"},
    {q:"'とほ' で行く", ans:"徒歩"},
    {q:"労 'どう' 時間", ans:"働"},
    {q:"おかしを 'つつむ'", ans:"包む"},
    {q:"へいで 'かこむ'", ans:"囲む"},
    {q:"信号の色が 'かわる'", ans:"変わる"},
    {q:"強い相手と 'たたかう'", ans:"戦う"},
    {q:"国を 'おさめる'", ans:"治める"},
    {q:"道が長く 'つづく'", ans:"続く"},
    {q:"一位を 'あらそう'", ans:"争う"},
    {q:"目を 'さます'", ans:"覚ます"},
    {q:"日に 'やける'", ans:"焼ける"},
    {q:"明るく 'てらす'", ans:"照らす"},
    
    //    {q:"", ans:""},
    {q:"'いえじ' を急ぐ", ans:"家路"},
    {q:"'びょうどう' に分ける", ans:"平等"},
    {q:"'しんりょく' の山を見る", ans:"新緑"},
    {q:"後ろに 'そり' 返る", ans:"反り"},
    {q:"'にがり' 切った顔", ans:"苦り"},
    {q:"主語に 'かかる' 語", ans:"係る"},
    {q:"古い 'じんじゃ'", ans:"神社"},
    {q:"'てっきょう' をわたる", ans:"鉄橋"},
    {q:"'ようもう' のセーター", ans:"羊毛"},
    {q:"王に 'つかえる'", ans:"仕える"},
    {q:"'きたい' する", ans:"期待"},
    {q:"文化 'さい' を行う", ans:"祭"},
    {q:"学校に 'つく'", ans:"着く"},
    {q:"文章の段 'らく'", ans:"落"},
    {q:"'くうこう' へ行く", ans:"空港"},
    {q:"'けい' かいな音", ans:"軽"},
    {q:"三角 'じょう' 規", ans:"定"},
    {q:"外の 'ようす'", ans:"様子"},
    {q:"取り 'つぐ'", ans:"次ぐ"},
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
    {q:"花の 'め' が出る", ans:"芽"},
    {q:"問題を 'ついか' する", ans:"追加"},
    {q:"'どりょく' する", ans:"努力"},
    {q:"大きなビルが 'かんせい' する", ans:"完成"},
    {q:"'じどうかん' で遊ぶ", ans:"児童館"},
    {q:"'がっしょう' の練習をする", ans:"合唱"},
    {q:"'いちょう' が弱い", ans:"胃腸"},
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
    {q:"'しょう' 竹梅の絵", ans:"松"},
    {q:"'ぎょせん' に乗る", ans:"漁船"},
    {q:"'りくじょう' の生物", ans:"陸上"},
    {q:"さくで 'かこむ'", ans:"囲む"},
    {q:"母が 'てれる'", ans:"照れる"},
    {q:"試合の 'ぞっこう'", ans:"続行"},
    {q:"'せいこう' する", ans:"成功"},
    {q:"'ぶじ' に着く", ans:"無事"},
    {q:"洋服の 'かたがみ'", ans:"型紙"},
    {q:"'しゅうい' の様子", ans:"周囲"},
    {q:"海に 'りょう' に出る", ans:"漁"},
    {q:"'しょうめい' の光", ans:"照明"},
    {q:"車の模 'けい'", ans:"型"},
    {q:"食料が 'ない'", ans:"無い"}
    // 14まで

];

var question1nen = [
    //     {q:"", ans:""},
    {q:"にわの 'くさばな' に水をやる", ans:"草花"},
    {q:"'か' だんにひまわりのたねをまく", ans:"花"},
    {q:"'たけ' とんぼをとばした", ans:"竹"},
    {q:"海 'そう' がゆらゆらゆれる", ans:"草"},
    {q:"うら山で、 'たけ' の子をほる", ans:"竹"},
    {q:"'くさ' むらから、虫のこえがきこえる", ans:"草"},
    {q:"ばらの 'はな' をかう", ans:"花"},
    {q:"おとうとは、とてもなき 'むし' だ", ans:"虫"},
    {q:"はまべで 'かい' をひろう", ans:"貝"},
    {q:"ちょうのよう 'ちゅう' をみつけた", ans:"虫"},
    {q:"'いぬ' をさんぽにつれていく", ans:"犬"},
    {q:"かばが、大きな 'くち' をあける", ans:"口"},
    {q:"こくばんにちゅう 'もく' する", ans:"目"},
    {q:"ラジオの音が 'みみ' ざわりだ", ans:"耳"},
    {q:"えきのかいさつ 'ぐち' にむかう", ans:"口"},
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
    {q:"水を 'たす'", ans:"足す"},
    {q:"'ちから' もちの男", ans:"力"},
    {q:"'もく' じを見る", ans:"目"},
    {q:"ざっ 'そう' をぬく", ans:"草"},
    {q:"白い 'かい' がら", ans:"貝"},
    {q:"歌 'しゅ' になりたい", ans:"手"},
    {q:"'ちく' 林の中", ans:"竹"},
    {q:"'はな' 火が上がる", ans:"花"},
    {q:"こん 'ちゅう' の本", ans:"虫"},
    {q:"番 'けん' がほえる", ans:"犬"},
    {q:"'おんな' の人にあった", ans:"女"},
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
    {q:"ピアノの上に 'にん' 形をかざる", ans:"人"},
    {q:"かわいい 'おうじょ' が生まれた", ans:"王女"},
    {q:"あの人は、ホームラン 'おう' だ", ans:"王"},
    {q:"'かわ' ぎしでつりをする", ans:"川"},
    {q:"'やま' もりのごはんを食べる", ans:"山"},
    {q:"川で、まるい 'いし' をひろう", ans:"石"},
    {q:"'やま' びこがこだまする", ans:"山"},
    {q:"貝の化 'せき' を見つける", ans:"石"},
    {q:"とつぜん火 'ざん' がふん火した", ans:"山"},
    {q:"ストーブに 'せき' ゆをいれる", ans:"石"},
    {q:"水がきれいで、 'かわ' ぞこ見える", ans:"川"},
    {q:"学校に 'た' んぼがある", ans:"田"},
    {q:"'はやし' でドングリをひろう", ans:"林"},
    {q:"'しんりん' こうえんにあそびに行く", ans:"森林"},
    {q:"'くうき' がきれいだ", ans:"空気"},
    {q:"とりが 'おおぞら' をとぶ", ans:"大空"},
    {q:"明日は 'おおあめ' らしい", ans:"大雨"},
    {q:"かん 'じ' でかく", ans:"字"},
    {q:"行き 'さき' をきめる", ans:"先"},
    {q:"'てほん' を見る", ans:"手本"},
    {q:"'がっこう' に行く", ans:"学校"},
    {q:"子犬が 'うまれる'", ans:"生まれる"},
    {q:"'いきもの' がかりになる", ans:"生きもの"},
    {q:"ぼくは 'いちねんせい' だ", ans:"一年生"},
    {q:"ノートに 'もじ' をかく", ans:"文字"},
    {q:"おまわりさんに 'ほんみょう' を言う", ans:"本名"},
    {q:"たいこの 'めいじん'", ans:"名人"},
    {q:"かん 'じ' のテストがある", ans:"字"},
    {q:"ひげを 'はやす'", ans:"生やす"},
    {q:"日本のれきしを 'まなぶ'", ans:"学ぶ"},
    {q:"'ひ' のようじん", ans:"火"},
    {q:"'はなび' をみる", ans:"花火"},
    {q:"'すい' どうで手をあらう", ans:"水"},
    {q:"'おかね' がたりない", ans:"お金"},
    {q:"'かな' づちでくぎをうつ", ans:"金"},
    {q:"今日は 'つき' が大きい", ans:"月"},
    {q:"ダッシュ 'むら' に行ってみたい", ans:"村"},
    {q:"'そん' 長をきめる", ans:"村"},
    {q:"'こ' かげでひるねをする", ans:"木"},
    {q:"'だいしょう' をくらべる", ans:"大小"},
    {q:"'おがわ' に行く", ans:"小川"},
    {q:"うんどうじょうの 'ちゅう' しん", ans:"中"},
    {q:"'しろ' 組がゆうしょうした", ans:"白"},
    {q:"'あか' 組のおうえんをする", ans:"赤"},
    {q:"'おおごえ' を出してあそぶ", ans:"大声"},
    {q:"'たいせつ' なたからのもの", ans:"大切"},
    {q:"海は 'あおい'", ans:"青い"},
    {q:"'おおきい' 家にすむ", ans:"大きい"},
    {q:"'ちいさい' こえではなす", ans:"小さい"},
    {q:"'しょうがっこう' がちかい", ans:"小学校"},
    {q:"兄は 'ちゅうがくせい' だ", ans:"中学生"},
    {q:"手を 'さゆう' にふる", ans:"左右"},
    {q:"ぼくは さか 'だち' ができる", ans:"立ち"},
    {q:"つなひきに 'しゅつ' 場する", ans:"出"},
    {q:"たからのものをはっ 'けん' する", ans:"見"},
    {q:"ひこうきが 'じょうくう' をとんでいる", ans:"上空"},
    {q:"川を 'くだる'", ans:"下る"},
    {q:"'した' じきを買う", ans:"下"},
    {q:"ぼくのい 'けん'", ans:"見"},
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
    {q:"学校を 'そう' たいする", ans:"早"},
    {q:"'まさ' ゆめになる", ans:"正"},
    {q:"'ゆうひ' がきれい", ans:"夕日"},
    {q:"'はやあし' で歩く", ans:"早足"},
    {q:"毛 'いと' のマフラー", ans:"糸"},
    {q:"ふうりんの 'ねいろ'", ans:"音色"},
    {q:"でん 'しゃ' ででかける", ans:"車"},
    {q:"大きい 'おと' がした", ans:"音"},
    {q:"'おんがく' の先生", ans:"音楽"},
    {q:"おこづかいは 'ごひゃくえん'", ans:"五百円"},
    {q:"お 'しょうがつ' がまちどおしい", ans:"正月"},
    {q:"'まるく' わになる", ans:"円く"},
    {q:"'ただしい' かんじを書く", ans:"正しい"},
    {q:"あさ 'はやく' でかける", ans:"早く"}
    //    {q:"", ans:""},
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
      }
  }
})
