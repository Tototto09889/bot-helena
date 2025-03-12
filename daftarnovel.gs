// daftarnovel.gs
// Objek daftarNovel berisi informasi novel-novel yang tersedia di bot.
// Setiap properti objek adalah huruf abjad awal judul novel (huruf besar).
// Nilai setiap properti adalah array objek, dengan setiap objek merepresentasikan satu novel.
// Struktur objek novel:
//   judul: Judul lengkap novel (untuk ditampilkan di menu)
//   keyword: Kata kunci untuk pencarian inline (gunakan huruf kecil, tanpa spasi, kata pertama judul)
//   genre: Genre novel (untuk deskripsi singkat)
//   sinopsis: Sinopsis singkat novel (untuk deskripsi lebih detail)

const daftarNovel = {
  "1": [
    {
      judul: "10-nen Goshi no HikiNEET o Yamete, Gaishutsushitara Jitaku goto Isekai ni Ten'ishiteta Bahasa Indonesia",
      keyword: "10-nen",
      genre: "Isekai, Fantasy",
      sinopsis: "Kamar tidurku terhubung ke dunia lain!? Tiba-tiba rumah kontrakan NEET berusia 30 tahun itu berpindah ke dunia lain."
    }
  ],
  "I": [
    {
      judul: "I Got a Cheat Skill in Another World Bahasa Indonesia",
      keyword: "i got",
      genre: "Fantasy, Isekai",
      sinopsis: "Berkisah tentang seorang pria bernama Yuuya Tenjou yang mendapatkan kemampuan curang di dunia lain."
    },
    {
      judul: "Imouto sae Ireba Ii. Bahasa Indonesia",
      keyword: "imouto",
      genre: "Comedy, Drama, Romance",
      sinopsis: "Kisah tentang seorang novelis obsesi adik perempuan dan orang-orang di sekitarnya."
    },
    {
      judul: "In the Land of Leadale Bahasa Indonesia",
      keyword: "in the",
      genre: "Adventure, Fantasy, Isekai",
      sinopsis: "Karena kecelakaan yang mengerikan, dia menemukan dirinya di dalam game VR 200 tahun kemudian."
    },
    {
      judul: "Incubus Banishment Bahasa Indonesia",
      keyword: "incubus",
      genre: "Fantasy",
      sinopsis: "Seorang pemuda bernama Ryouma dipanggil ke dunia lain untuk mengalahkan Raja Iblis. Namun, dia dikhianati oleh kerajaan dan dibuang. Dalam keputusasaan, dia bertemu dengan seorang incubus yang memberinya kekuatan baru."
    },
    {
      judul: "Infinite Dendrogram Bahasa Indonesia",
      keyword: "infinite",
      genre: "Sci-Fi, Game, Action, Fantasy",
      sinopsis: "Reiji Mukudori memulai kehidupan kuliahnya di Tokyo, tetapi memutuskan untuk menunda kuliahnya untuk memainkan game VRMMORPG 'Infinite Dendrogram'. Dengan bantuan kakaknya yang veteran, Shuu, Reiji memulai petualangan di dunia game yang luas dan penuh kemungkinan tak terbatas."
    },
    {
      judul: "Inkya no Boku ni Batsu Game de Kokuhaku Shite Bahasa Indonesia",
      keyword: "inkya",
      genre: "Comedy, Romance, School",
      sinopsis: "Karena hukuman dari permainan hukuman, saya akhirnya mengaku kepada gadis paling populer di sekolah."
    },
    {
      judul: "Isekai Apocalypse MYNOGHRA ~The Conquest of the World Starts With the Civilization of Ruin~ Bahasa Indonesia",
      keyword: "isekai",
      genre: "Action, Fantasy, Isekai",
      sinopsis: "Kisah tentang Touya yang bereinkarnasi ke dunia lain dan membangun peradaban reruntuhan untuk menaklukkan dunia."
    },
    {
      judul: "Isekai Mahou wa Okureteru! Bahasa Indonesia",
      keyword: "isekai",
      genre: "Action, Fantasy, Sci-Fi",
      sinopsis: "Kisah tentang Suimei yang secara tidak sengaja terseret ke dunia lain bersama teman-teman sekelasnya. Namun, sihir dunia lain 'terlalu ketinggalan zaman' baginya."
    },
    {
      judul: "Isekai Maou to Shoukan Shoujo Dorei Majutsu Bahasa Indonesia",
      keyword: "isekai",
      genre: "Comedy, Ecchi, Fantasy, Harem",
      sinopsis: "Sakamoto Takuma adalah seorang gamer yang sangat kuat di game MMORPG Cross Reverie dan dikenal sebagai Raja Iblis oleh para player lain. Suatu hari, dia dipanggil ke dunia lain dalam wujud karakter gamenya, Raja Iblis Diablo."
    },
    {
      judul: "Isekai Nonbiri Nouka Bahasa Indonesia",
      keyword: "isekai",
      genre: "Fantasy, Slice of Life",
      sinopsis: "Setelah berjuang melawan penyakit selama bertahun-tahun, Hiraku Machio meninggal dunia di usia 38 tahun. Ia kemudian dihidupkan kembali oleh Dewa dan dikirim ke dunia lain yang sesuai dengan keinginannya. Hiraku yang kini menjadi petani muda memulai kehidupan bertani yang santai di dunia lain."
    },
    {
      judul: "Isekai wa Heiwa deshita Bahasa Indonesia",
      keyword: "isekai",
      genre: "Comedy, Fantasy, Slice of Life",
      sinopsis: "27 orang dipindahkan ke dunia lain. Beberapa menjadi pahlawan, beberapa menjadi orang bijak, beberapa menjadi orang suci, dan beberapa menjadi raja. Dan yang lainnya ... menjadi 'orang biasa'."
    },
    {
      judul: "Isekai wa Smartphone to Tomoni Bahasa Indonesia",
      keyword: "isekai",
      genre: "Adventure, Comedy, Fantasy, Harem, Romance",
      sinopsis: "Touya Mochizuki tidak sengaja terbunuh oleh Tuhan. Sebagai permintaan maaf, Tuhan menghidupkannya kembali di dunia lain dan memberinya smartphone dengan kemampuan untuk terhubung ke dunia lamanya."
    },
    {
      judul: "I’m the Evil Lord of an Intergalactic Empire!",
      keyword: "i’m",
      genre: "Sci-Fi, Action, Adventure, Comedy, Fantasy, Harem, Romance",
      sinopsis: "Liam, protagonis kita, bereinkarnasi ke dunia pedang dan sihir... tapi sebagai penjahat! Sebagai penguasa Kekaisaran Galaksi yang kejam, ia mengabdikan dirinya untuk berbuat jahat."
    }
  ],
  "J": [
    {
      judul: "Jaku-chara Tomozaki-kun Bahasa Indonesia",
      keyword: "jaku-chara",
      genre: "Comedy, Romance, School",
      sinopsis: "Fumiya Tomozaki adalah seorang siswa SMA yang menganggap dirinya sebagai 'karakter lemah' dalam game kehidupan. Suatu hari, dia bertemu dengan Aoi Hinami, seorang 'karakter hero' sempurna, yang bertekad untuk membuktikan bahwa hidup adalah game yang bisa dimenangkan."
    }
  ],
  "K": [
    {
      judul: "Kage no Jitsuryokusha ni Naritakute Bahasa Indonesia",
      keyword: "kage",
      genre: "Action, Comedy, Fantasy",
      sinopsis: "Bahkan dalam kehidupan sebelumnya, Cid selalu bermimpi menjadi dalang di balik layar—otak yang memanipulasi segalanya dari balik layar, dan pada akhirnya, ketika dia bereinkarnasi ke dunia lain yang penuh dengan sihir, dia mewujudkan mimpinya!"
    },
    {
      judul: "Kami wa Game ni Ueteiru Bahasa Indonesia",
      keyword: "kami",
      genre: "Game",
      sinopsis: "Dewa-dewa yang terlalu berkuasa menciptakan game-game terhebat yang terlalu membosankan! Mantan dewi Lesche dan manusia jenius Fei menantang 'game-game dewa' yang tidak ada yang berhasil menamatkannya!"
    },
    {
      judul: "Kawaii Onnanoko ni Kouryaku Sareru! Bahasa Indonesia",
      keyword: "kawaii",
      genre: "Comedy, Romance",
      sinopsis: "“Selamat pagi, target penaklukanku.” Suatu pagi, aku dibangunkan oleh gadis tercantik di sekolah—Amaha Yuu, dan tiba-tiba dinyatakan sebagai 'target penaklukannya'!? Selain itu, dia bukan hanya cantik, tapi kepribadian dan tubuhnya juga malaikat! Malaikat yang terlalu kawaii mencoba menaklukkanku!?"
    },
    {
      judul: "Kawaikereba Hentai demo Suki ni Natte Kuremasu ka? Bahasa Indonesia",
      keyword: "kawaikereba",
      genre: "Comedy, Ecchi, Harem, Romance",
      sinopsis: "Keita Kiryuu adalah seorang siswa SMA yang suatu hari menerima surat cinta. Dia sangat gembira karena akhirnya mendapatkan pacar, tetapi surat cinta itu dikirim oleh seorang gadis mesum yang mengaku 'akan menjadi mesum jika dia imut'!? Kehidupan SMA Keita yang penuh dengan gadis-gadis mesum baru saja dimulai!"
    },
    {
      judul: "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen Bahasa Indonesia",
      keyword: "kimi",
      genre: "Fantasy, Romance, War",
      sinopsis: "Kisah cinta yang tragis dan indah antara seorang ksatria terkuat dari Kekaisaran dan seorang 'Penyihir Bencana Es' dari Nebulis, negara musuh."
    },
    {
      judul: "Kimi wa Hatsukoi no Hito no Musume Bahasa Indonesia",
      keyword: "kimi",
      genre: "Romance, Slice of Life",
      sinopsis: "“Putrimu—biar aku terima.” Teman sekamar ayahku adalah cinta pertamaku yang tak terbalas!?"
    },
    {
      judul: "Kiraware Maou ga Botsuraku Reijou to Koi ni Ochiru made Bahasa Indonesia",
      keyword: "kiraware",
      genre: "Fantasy, Romance",
      sinopsis: "Pangeran Richard, yang dikenal sebagai Raja Iblis yang dibenci, bertemu dengan Rachel, seorang putri bangsawan yang jatuh yang kehilangan tunangannya. Meskipun awalnya saling membenci, mereka perlahan mulai tertarik satu sama lain."
    },
    {
      judul: "Kokoro Connect Bahasa Indonesia",
      keyword: "kokoro",
      genre: "Comedy, Drama, Romance, School, Supernatural",
      sinopsis: "Lima siswa SMA di klub penelitian budaya mengalami fenomena supernatural yang aneh: tubuh mereka bertukar secara acak dengan siswa lain di klub. Saat mereka berjuang untuk mengatasi kekacauan yang terjadi, ikatan mereka diuji, dan luka tersembunyi mulai muncul ke permukaan."
    },
    {
      judul: "Kokugensou wo Item Cheat de Ikinuku Bahasa Indonesia",
      keyword: "kokugensou",
      genre: "Action, Adventure, Fantasy, Isekai",
      sinopsis: "Kaito, seorang siswa SMA biasa, tiba-tiba dipindahkan ke dunia lain yang penuh dengan monster dan bahaya. Namun, dia mendapatkan 'item cheat' yang memungkinkannya untuk bertahan hidup dan menjadi yang terkuat."
    },
    {
      judul: "Kono Subarashii Sekai ni Shukufuku wo! Bahasa Indonesia",
      keyword: "kono",
      genre: "Adventure, Comedy, Fantasy, Isekai, Parody, Supernatural",
      sinopsis: "Kazuma Satou, seorang NEET yang menyedihkan, meninggal dalam kecelakaan lalu lintas yang memalukan dan bereinkarnasi ke dunia fantasi. Bersama dewi Aqua yang menyebalkan, penyihir Megumin yang obsesif dengan ledakan, dan crusader Darkness yang masokis, Kazuma memulai petualangan konyol dan penuh kekacauan di dunia fantasi yang tidak sesuai harapannya."
    },
    {
      judul: "Kou 2 ni Time Leaped Shita Ore ga, Touji Suki Datta Sensei ni Kokutta Kekka Bahasa Indonesia",
      keyword: "kou",
      genre: "Romance, School, Supernatural",
      sinopsis: "Protagonis kembali ke masa lalu ke tahun kedua SMA dan mengaku pada guru yang dia sukai saat itu."
    },
    {
      judul: "Koujo Denka no Kateikyoushi Bahasa Indonesia",
      keyword: "koujo",
      genre: "Fantasy, Romance",
      sinopsis: "Seorang mantan pembunuh bayaran bereinkarnasi sebagai guru pribadi putri kerajaan!?"
    },
    {
      judul: "Kuma Kuma Kuma Bear Bahasa Indonesia",
      keyword: "kuma",
      genre: "Adventure, Comedy, Fantasy",
      sinopsis: "Seorang gadis rumahan yang kaya raya bernama Yuna memulai debutnya sebagai petualang di dunia VRMMORPG dan menjadi terjebak dalam peralatan beruang yang memalukan."
    },
    {
      judul: "Kumo desu ga, Nani ka? Bahasa Indonesia",
      keyword: "kumo",
      genre: "Adventure, Fantasy, Isekai",
      sinopsis: "Aku bereinkarnasi menjadi laba-laba di dunia lain! Lebih buruk lagi, aku terlahir di dungeon bawah tanah yang penuh dengan monster mengerikan. Untuk bertahan hidup, aku harus menggunakan semua kecerdasan dan kepositifanku."
    },
    {
      judul: "Kurasu No Daikiraina Joshi To Kekkon Suru Bahasa Indonesia",
      keyword: "kurasu",
      genre: "Comedy, Romance, School",
      sinopsis: "“Aku tidak punya pilihan selain menikahimu.” Aku, yang duduk di sebelah gadis yang paling kubenci di kelas, tiba-tiba dilamar olehnya!?"
    },
    {
      judul: "Kuro no Shoukanshi Bahasa Indonesia",
      keyword: "kuro",
      genre: "Action, Adventure, Fantasy, Isekai",
      sinopsis: "Ketika terbangun, Kinji mendapati dirinya berada di tempat yang tidak dikenal. Seolah-olah diatur, yang ada di sisinya adalah satu-satunya gadis cantik."
    }
  ],
  "L": [
    {
      judul: "Last Round Arthurs Bahasa Indonesia",
      keyword: "last",
      genre: "Action, Fantasy, School",
      sinopsis: "Di dunia di mana Raja Arthur dan ksatria meja bundarnya adalah pahlawan terhebat, Touya Yaguruma, seorang siswa SMA biasa, tiba-tiba menemukan dirinya menjadi Raja Arthur terakhir. Dengan Excalibur di tangan, Touya harus berjuang untuk melindungi dunia dari ancaman musuh yang kuat."
    },
    {
      judul: "Lazy Dungeon Master Bahasa Indonesia",
      keyword: "lazy",
      genre: "Fantasy",
      sinopsis: "Seorang pemuda bernama Keima Kagami tiba-tiba menjadi Dungeon Master di dunia lain. Dengan kekuatan untuk menciptakan dan memanipulasi dungeon, Keima memutuskan untuk menjalani kehidupan yang santai dan bermalas-malasan di dalam dungeonnya."
    },
    {
      judul: "Liar Liar Bahasa Indonesia",
      keyword: "liar",
      genre: "Game, School",
      sinopsis: "Di Academy Island, semuanya ditentukan oleh 'Game.' Siswa peringkat teratas menerima bintang tujuh, dan mereka yang berjuang tanpa bintang tidak punya apa-apa. Shinohara Hiroto pindah ke Academy Island dan menantang Saionji Fuyuko, juara bintang tujuh terkuat di sekolah. Sekarang, untuk mencapai puncak, dia harus berbohong dan menipu jalan menuju puncak."
    },
    {
      judul: "Log Horizon Bahasa Indonesia",
      keyword: "log",
      genre: "Action, Adventure, Fantasy, Game",
      sinopsis: "Tiga puluh ribu pemain game online Elder Tale terjebak di dalam dunia game setelah update ekspansi terbaru. Shiroe, seorang penyihir veteran yang cerdas dan licik, harus memimpin para pemain lain untuk bertahan hidup di dunia game yang kini menjadi kenyataan dan mengungkap misteri di balik fenomena ini."
    }
  ],
  "M": [
    {
      judul: "Magic Knight of the Old Ways Bahasa Indonesia",
      keyword: "magic",
      genre: "Action, Fantasy",
      sinopsis: "Seorang pemuda bernama Leon tiba-tiba terbangun di dunia lain dan mendapati dirinya memiliki kekuatan sihir yang luar biasa. Namun, sihir yang dia gunakan adalah sihir kuno yang dianggap ketinggalan zaman dan tidak berguna. Meskipun demikian, Leon bertekad untuk membuktikan bahwa sihir kuno juga bisa menjadi kekuatan yang hebat."
    },
    {
      judul: "Magic Stone Gourmet: Eating Magical Power Made Me The Strongest Bahasa Indonesia",
      keyword: "magic",
      genre: "Fantasy",
      sinopsis: "Setelah terbangun di dunia yang berbeda, saya bereinkarnasi sebagai monster terlemah, Goblin. Untuk bertahan hidup, saya memutuskan untuk memakan batu ajaib untuk menjadi lebih kuat."
    },
    {
      judul: "Mahouka Koukou No Rettousei Bahasa Indonesia",
      keyword: "mahouka",
      genre: "Magic, Sci-Fi, School, Supernatural",
      sinopsis: "Sihir bukanlah lagi cerita fiksi, tetapi telah menjadi teknologi nyata sejak sekitar seratus tahun yang lalu. Tatsuya Shiba dan Miyuki Shiba adalah saudara kandung yang mendaftar di SMA Sihir."
    },
    {
      judul: "Majo no Tabitabi Bahasa Indonesia",
      keyword: "majo",
      genre: "Adventure, Fantasy",
      sinopsis: "Seorang penyihir bernama Elaina melakukan perjalanan keliling dunia, bertemu dengan berbagai orang dan negara dalam perjalanannya."
    },
    {
      judul: "Make Heroine ga Oosugiru! Bahasa Indonesia",
      keyword: "make",
      genre: "Comedy, Romance",
      sinopsis: "“Aku tidak akan menyerah menjadi pacar protagonis!” Kisah cinta segitiga yang kusut antara protagonis, pahlawan wanita yang gagal, dan pahlawan wanita utama!"
    },
    {
      judul: "Mamahaha no Tsurego ga Motokano datta Bahasa Indonesia",
      keyword: "mamahaha",
      genre: "Romance, Slice of Life",
      sinopsis: "Karena pernikahan kembali orang tua mereka, Mizuto Irido dan Yume Ayai, yang dulunya adalah kekasih, sekarang menjadi saudara tiri."
    },
    {
      judul: "Maou Gakuen no Hangyakusha Bahasa Indonesia",
      keyword: "maou",
      genre: "Action, Fantasy, School",
      sinopsis: "Dunia di mana Raja Iblis dan Pahlawan saling bermusuhan. Akademi Raja Iblis—sebuah institusi untuk Raja Iblis dan calon kader mereka. Orang yang berdiri di sana sebagai siswa pindahan adalah Raja Iblis Tirani, Anoth Voldigord—…tapi, setelah dua ribu tahun reinkarnasi, dia ternyata tidak cocok sebagai raja iblis!?"
    },
    {
      judul: "Maou Gakuin no Futekigousha Bahasa Indonesia",
      keyword: "maou",
      genre: "Action, Fantasy, School",
      sinopsis: "Dunia di mana Raja Iblis dan Pahlawan saling bermusuhan. Akademi Raja Iblis—sebuah institusi untuk Raja Iblis dan calon kader mereka. Orang yang berdiri di sana sebagai siswa pindahan adalah Raja Iblis Tirani, Anoth Voldigord—…tapi, setelah dua ribu tahun reinkarnasi, dia ternyata tidak cocok sebagai raja iblis!?"
    },
    {
      judul: "Maou ni Natta node, Dungeon Tsukutte Jingai Musume to Honobono suru Bahasa Indonesia",
      keyword: "maou",
      genre: "Fantasy, Slice of Life",
      sinopsis: "Seorang pria bereinkarnasi menjadi Raja Iblis dan memutuskan untuk membuat dungeon dan hidup santai bersama gadis-gadis monster."
    },
    {
      judul: "Mapping The Trash-Tier Skill That Got Me Into a Top-Tier Party Bahasa Indonesia",
      keyword: "mapping",
      genre: "Adventure, Fantasy",
      sinopsis: "Seorang anak laki-laki bernama Nile yang memiliki skill 'Mapping' yang dianggap sampah, secara tak terduga bergabung dengan party petualang top-tier dan memulai petualangan di dunia fantasi."
    },
    {
      judul: "Masou Gakuen HxH Bahasa Indonesia",
      keyword: "masou",
      genre: "Action, Ecchi, Fantasy, Harem, Mecha, Romance, School",
      sinopsis: "Ketika dunia lain tiba-tiba muncul, umat manusia menciptakan senjata ajaib 'HHG' untuk melawan monster. Hida Kizuna adalah seorang siswa SMA yang memiliki kemampuan untuk meningkatkan kekuatan HHG dengan melakukan hal-hal mesum."
    },
    {
      judul: "Megami no Yuusha wo Taosu Gesu na Houhou Bahasa Indonesia",
      keyword: "megami",
      genre: "Action, Adventure, Fantasy",
      sinopsis: "Dunia yang diperintah oleh dewi dan pahlawan. Seorang pemuda bernama Yuuto bereinkarnasi ke dunia itu dan bertekad untuk mengalahkan dewi dan pahlawan dengan cara yang keji."
    },
    {
      judul: "Mob kara Hajimaru Tansaku Eiyuutan Bahasa Indonesia",
      keyword: "mob",
      genre: "Action, Adventure, Fantasy",
      sinopsis: "Seorang pemuda biasa bernama Mob memulai petualangan di dunia fantasi untuk menjadi pahlawan terkuat."
    },
    {
      judul: "Mondaiji-tachi ga Isekai kara Kuru Sou desu yo? Bahasa Indonesia",
      keyword: "mondaiji-tachi",
      genre: "Comedy, Fantasy, Supernatural",
      sinopsis: "Sakamaki Izayoi, Kudou Asuka, dan Kasukabe You adalah anak-anak bermasalah yang memiliki kekuatan supernatural yang luar biasa. Suatu hari, mereka dipanggil ke dunia lain bernama Little Garden, tempat para pemilik kekuatan supernatural bermain game untuk bersaing memperebutkan otoritas dan hadiah."
    },
    {
      judul: "Mushoku Tensei Bahasa Indonesia",
      keyword: "mushoku",
      genre: "Drama, Fantasy, Isekai",
      sinopsis: "Seorang NEET berusia 34 tahun bereinkarnasi ke dunia fantasi sebagai bayi bernama Rudeus Greyrat. Dengan ingatan dari kehidupan sebelumnya, Rudeus bertekad untuk menjalani kehidupan baru yang lebih baik dan menghindari kesalahan masa lalunya. Dia memulai perjalanan panjang untuk mengembangkan kekuatannya, menemukan jati dirinya, dan menghadapi takdirnya di dunia baru ini."
    },
    {
      judul: "Musume Janakute, Watashi (Mama) ga Suki Nano!? Bahasa Indonesia",
      keyword: "musume",
      genre: "Comedy, Romance",
      sinopsis: "“Aku menyukai ibu dari pacarku.” Siswa SMA Mamoru bertemu dengan ibu dari pacarnya di hari orang tua-guru dan jatuh cinta pada pandangan pertama padanya!?"
    },
    {
      judul: "My Gift LVL 9999 Unlimited Gacha Bahasa Indonesia",
      keyword: "my gift",
      genre: "Fantasy, Isekai",
      sinopsis: "Allen, yang dikenal sebagai sampah karena 'Gift'-nya yang tidak berguna, [Gacha], ternyata memiliki Gift terkuat yang tersembunyi—!?"
    },
    {
      judul: "My Instant Death Ability Is So Overpowered, No One in This Other World Stands a Chance Against Me! Bahasa Indonesia",
      keyword: "my instant",
      genre: "Action, Adventure, Fantasy, Isekai",
      sinopsis: "Siswa sekolah menengah Yogiri Takato selalu tidur di bus sekolah dalam perjalanan field trip, tetapi ketika dia bangun, dia tidak berada di bus lagi dan dia tidak lagi berada di Bumi. Seorang wanita tua muncul di hadapannya, mengaku sebagai Sage, dan memberinya 'kekuatan instan kematian'."
    },
    {
      judul: "My Plain-looking Fiance is Secretly Sweet with Me Bahasa Indonesia",
      keyword: "my plain-looking",
      genre: "Romance, Slice of Life",
      sinopsis: "Kisah cinta manis antara tunangan yang tampan dan tunangan yang polos."
    }
  ],
  "N": [
    {
      judul: "Nageki no Bourei wa Intai shitai ~ Saijiyaku Hanta ni Yoru Saikiyou Pātii Ikusei-jutsu ~ Bahasa Indonesia",
      keyword: "nageki",
      genre: "Adventure, Fantasy",
      sinopsis: "Seorang hunter terlemah bernama Raizou bertekad untuk pensiun dan menjalani kehidupan yang santai. Namun, dia terpaksa melatih party terkuat untuk menyelamatkan dunia."
    },
    {
      judul: "Nee-chan wa Chuunibyou Bahasa Indonesia",
      keyword: "nee-chan",
      genre: "Comedy, Slice of Life",
      sinopsis: "Yuuta adalah siswa SMA yang memiliki kakak perempuan yang menderita chuunibyou (delusi tingkat SMP). Dia berusaha menjalani kehidupan normal meskipun memiliki kakak perempuan yang aneh."
    },
    {
      judul: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu Bahasa Indonesia",
      keyword: "nidome",
      genre: "Action, Adventure, Fantasy, Psychological",
      sinopsis: "Pahlawan itu mati dan kembali ke masa lalu untuk membalas dendam pada dunia yang telah mengkhianatinya."
    },
    {
      judul: "No Game No Life Bahasa Indonesia",
      keyword: "no game",
      genre: "Adventure, Comedy, Ecchi, Fantasy, Game, Supernatural",
      sinopsis: "Sora dan Shiro, kakak beradik NEET dan gamer jenius, dipanggil ke dunia Disboard, dunia di mana segala sesuatu diputuskan melalui permainan. Di dunia ini, mereka bertemu dengan dewi Tet dan memulai petualangan untuk menantang semua ras dan menjadi dewa dunia permainan."
    }
  ],
  "O": [
    {
      judul: "Omiai Shitakunakatta Node Bahasa Indonesia",
      keyword: "omiai",
      genre: "Comedy, Romance, Slice of Life",
      sinopsis: "Protagonis tidak ingin melakukan perjodohan, jadi dia melarikan diri, tetapi bertemu dengan gadis idealnya di tempat pelarian!?"
    },
    {
      judul: "Omniscient Reader's Viewpoint Bahasa Indonesia",
      keyword: "omniscient",
      genre: "Action, Adventure, Fantasy",
      sinopsis: "Dokja adalah satu-satunya orang yang tahu akhir dari novel web fantasi 'Ways of Survival'. Suatu hari, dunia dalam novel web tersebut menjadi kenyataan, dan Dokja adalah satu-satunya yang tahu bagaimana dunia ini akan berakhir. Dengan pengetahuannya, Dokja memulai perjalanan untuk mengubah alur cerita dan menyelamatkan dunia."
    },
    {
      judul: "Ore ni Trauma wo Ataeta Joshi-tachi ga Chirachira Mite Kuru kedo, Zannen desu ga Teokure desu Bahasa Indonesia",
      keyword: "ore ni",
      genre: "Comedy, Romance",
      sinopsis: "Mantan gadis-gadis yang menolakku di masa lalu, sekarang mereka menatapku sambil menyesalinya, tapi sayang sekali, sudah terlambat!"
    },
    {
      judul: "Ore no Shibou Flag ga Todomaru Tokoro wo Shiranai Bahasa Indonesia",
      keyword: "ore no",
      genre: "Comedy, Fantasy, Romance",
      sinopsis: "Protagonis bereinkarnasi ke dalam game otome sebagai penjahat yang penuh dengan death flag. Untuk menghindari akhir yang buruk, dia bertekad untuk menghancurkan semua death flag yang ada di sekitarnya."
    },
    {
      judul: "Oregairu Bahasa Indonesia",
      keyword: "oregairu",
      genre: "Comedy, Drama, Romance, School, Slice of Life",
      sinopsis: "Hachiman Hikigaya, seorang siswa SMA penyendiri dan sinis, dipaksa bergabung dengan Klub Relawan sekolah. Di sana, dia bertemu dengan Yukino Yukinoshita, gadis cantik dan cerdas yang juga memiliki kepribadian dingin dan idealis. Bersama-sama, mereka membantu siswa lain memecahkan masalah mereka, tetapi juga menghadapi masalah pribadi dan kesulitan dalam memahami hubungan sosial."
    },
    {
      judul: "Otome Game no Heroine de Saikyou Survival Bahasa Indonesia",
      keyword: "otome",
      genre: "Fantasy, Isekai",
      sinopsis: "Seorang gadis bereinkarnasi ke dalam game otome sebagai heroine. Namun, dunia game otome itu penuh dengan bahaya dan kematian. Untuk bertahan hidup, heroine terpaksa menjadi yang terkuat."
    },
    {
      judul: "Otonari Asobi Bahasa Indonesia",
      keyword: "otonari",
      genre: "Comedy, Romance, Slice of Life",
      sinopsis: "Tetangga sebelah rumah protagonis adalah seorang gadis cantik yang populer di sekolah. Mereka berdua mulai bermain 'permainan tetangga' yang aneh dan lucu."
    },
    {
      judul: "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken Bahasa Indonesia",
      keyword: "otonari",
      genre: "Romance, Slice of Life",
      sinopsis: "Amane Fujimiya tinggal sendirian di sebuah apartemen. Tetangga apartemennya adalah gadis tercantik di sekolah, Shiina Mahiru—malaikat. Suatu hari, Amane meminjamkan payungnya kepada Mahiru yang kehujanan, dan sejak saat itu, mereka mulai berinteraksi."
    },
    {
      judul: "Ousama no Propose Bahasa Indonesia",
      keyword: "ousama",
      genre: "Fantasy, Romance",
      sinopsis: "Pangeran Richard melamar seorang gadis biasa untuk menjadi ratunya. Namun, gadis itu adalah seorang gadis yang sangat unik dan tidak terduga."
    },
    {
      judul: "Overlord Bahasa Indonesia",
      keyword: "overlord",
      genre: "Action, Adventure, Fantasy, Game, Isekai, Magic, Supernatural",
      sinopsis: "Ketika server game online Yggdrasil akan ditutup, Momonga, seorang pemain veteran, memutuskan untuk tetap tinggal di dalam game sampai akhir. Namun, server tidak pernah ditutup, dan Momonga mendapati dirinya terjebak di dalam dunia game sebagai karakter kerangka kuat bernama Ainz Ooal Gown. Bersama para NPC setia yang kini memiliki kesadaran, Ainz memulai misinya untuk menaklukkan dunia baru ini."
    }
  ],
  "P": [
    {
      judul: "Psycho Love Comedy Bahasa Indonesia",
      keyword: "psycho",
      genre: "Comedy, Romance, Psychological",
      sinopsis: "Komedi romantis psikologis yang berpusat pada seorang siswa SMA yang terlibat dalam insiden pembunuhan dan seorang gadis misterius yang mengaku sebagai psikopat."
    }
  ],
  "R": [
    {
      judul: "Rakudai Kishi no Cavalry Bahasa Indonesia",
      keyword: "rakudai",
      genre: "Action, Ecchi, Fantasy, Romance, School",
      sinopsis: "Di dunia di mana penyihir ksatria yang disebut 'Blazer' ada, Ikki Kurogane dianggap sebagai 'Blazer Gagal' karena tidak memiliki kemampuan sihir. Namun, dia bertekad untuk menjadi kuat dan membuktikan dirinya sebagai Blazer sejati."
    },
    {
      judul: "Re:Zero kara Hajimeru Isekai Seikatsu Bahasa Indonesia",
      keyword: "re:zero",
      genre: "Action, Adventure, Drama, Fantasy, Psychological, Thriller",
      sinopsis: "Subaru Natsuki, seorang NEET yang tiba-tiba dipanggil ke dunia fantasi, mendapatkan kemampuan 'Return by Death', yang membuatnya dapat kembali ke titik penyimpanan setiap kali dia mati. Terjebak dalam siklus kematian dan keputusasaan, Subaru harus menggunakan kemampuannya untuk melindungi orang-orang yang dicintainya dan mengungkap misteri dunia baru yang kejam ini."
    },
    {
      judul: "Reborn as a Space Mercenary: I Woke Up Piloting the Strongest Starship! Bahasa Indonesia",
      keyword: "reborn",
      genre: "Sci-Fi, Action, Adventure, Mecha",
      sinopsis: "Saat aku bangun, aku berada di kokpit pesawat ruang angkasa. Lebih buruk lagi, saya bereinkarnasi sebagai tentara bayaran luar angkasa!?"
    },
    {
      judul: "Reign of the Seven Spellblades Bahasa Indonesia",
      keyword: "reign",
      genre: "Fantasy, School",
      sinopsis: "Setiap musim semi, Akademi Sihir Kimberly menyambut siswa baru. Di antara mereka adalah Oliver Horn, seorang anak laki-laki yang tenang dan cerdas yang mendaftar di akademi untuk memenuhi takdirnya."
    },
    {
      judul: "Rokudenashi Majutsu Koushi to Akashic Records Bahasa Indonesia",
      keyword: "rokudenashi",
      genre: "Action, Comedy, Fantasy, School",
      sinopsis: "Glenn Radars adalah seorang guru pengganti yang malas dan tidak kompeten di Akademi Sihir Alzano. Namun, di balik penampilannya yang malas, Glenn menyembunyikan kekuatan sihir yang luar biasa dan masa lalu yang misterius."
    },
    {
      judul: "Ryoushin no Shakkin wo Katagawari shite Morau Jouken wa Nihon'ichi Kawaii Joshikousei to Issho ni Kurasu Koto Deshita. Bahasa Indonesia",
      keyword: "ryoushin",
      genre: "Comedy, Romance, Slice of Life",
      sinopsis: "Untuk melunasi hutang orang tuanya, protagonis harus tinggal bersama gadis SMA tercantik di Jepang sebagai pembantunya!?"
    }
  ],
  "S": [
    {
      judul: "Saenai Heroine no Sodatekata Bahasa Indonesia",
      keyword: "saenai",
      genre: "Comedy, Romance, Harem, School",
      sinopsis: "Tomoya Aki, seorang otaku, bertekad untuk membuat game simulasi kencan yang hebat. Untuk mewujudkan impiannya, dia merekrut gadis-gadis cantik di sekitarnya untuk menjadi heroine dalam gamenya."
    },
    {
      judul: "Saijaku Muhai No Bahamut Bahasa Indonesia",
      keyword: "saijaku",
      genre: "Action, Ecchi, Fantasy, Harem, Mecha, Romance, School",
      sinopsis: "Lux Arcadia, mantan pangeran dari Kekaisaran Arcadia yang jatuh, secara tidak sengaja memasuki area pemandian wanita dan bertemu dengan putri kerajaan Lisesharte Atismata. Pertemuan yang memalukan ini membawanya terlibat dalam konflik dan intrik di akademi ksatria wanita."
    },
    {
      judul: "Saijaku Tamer wa Gomi Hiroi no Tabi o Hajimemashita. Bahasa Indonesia",
      keyword: "saijaku",
      genre: "Adventure, Fantasy",
      sinopsis: "Seorang gadis bernama Ivy bereinkarnasi ke dunia lain dan menjadi seorang Tamer dengan bintang terendah. Dalam dunia di mana Tamer dengan bintang rendah dianggap tidak berguna, Ivy harus berjuang untuk bertahan hidup dengan hanya mengandalkan slime terlemah."
    },
    {
      judul: "Saikyou Degarashi Ouji no An’yaku Teii Arasoi: Munou wo Enjiru SS Rank Ouji wa Koui Keishou-sen wo Kage kara Shihai Suru Bahasa Indonesia",
      keyword: "saikyou",
      genre: "Fantasy",
      sinopsis: "Pangeran terkuat berpura-pura menjadi pangeran sampah dan mengendalikan perang suksesi dari bayang-bayang."
    },
    {
      judul: "Saikyou Mahoushi no Inton Keikaku Bahasa Indonesia",
      keyword: "saikyou",
      genre: "Fantasy, Isekai",
      sinopsis: "Penyihir terkuat bereinkarnasi ke dunia lain dan berencana untuk hidup tenang dan damai."
    },
    {
      judul: "Saikyou no Shien-shoku [Wajutsushi] de Aru Ore wa Sekai Saikyou Clan wo Shitagaeru Bahasa Indonesia",
      keyword: "saikyou",
      genre: "Adventure, Fantasy",
      sinopsis: "Protagonis menjadi kelas pendukung terlemah [Wajutsushi] dan dianggap tidak berguna, tetapi dengan menggunakan cheat terkuat, dia menjadi yang terkuat dan menguasai dunia."
    },
    {
      judul: "Sakurasou no Pet na Kanojo Bahasa Indonesia",
      keyword: "sakurasou",
      genre: "Comedy, Drama, Romance, School, Slice of Life",
      sinopsis: "Sorata Kanda pindah ke asrama Sakurasou, asrama yang penuh dengan siswa-siswa bermasalah di SMA Suimei. Di sana, dia bertemu dengan Mashiro Shiina, seorang gadis cantik dan jenius yang ternyata tidak bisa mengurus dirinya sendiri."
    },
    {
      judul: "Seiken Gakuin no Maken Tsukai Bahasa Indonesia",
      keyword: "seiken",
      genre: "Action, Ecchi, Fantasy, Harem, School",
      sinopsis: "Leon, Raja Iblis terkuat, bereinkarnasi seribu tahun kemudian di dunia yang sama. Namun, setelah bereinkarnasi, dia menjadi anak laki-laki berusia sepuluh tahun!"
    },
    {
      judul: "Seirei Gensouki Bahasa Indonesia",
      keyword: "seirei",
      genre: "Fantasy, Romance, Isekai",
      sinopsis: "Seorang anak laki-laki bernama Rio adalah yatim piatu yang tinggal di daerah kumuh. Di usia tujuh tahun, dia menyadari bahwa dia adalah reinkarnasi dari Haruto Amakawa, seorang mahasiswa yang meninggal dalam kecelakaan."
    },
    {
      judul: "Seirei Tsukai no Blade Dance Bahasa Indonesia",
      keyword: "seirei",
      genre: "Action, Ecchi, Fantasy, Harem, Romance, School",
      sinopsis: "Di dunia di mana roh dan gadis-gadis suci yang disebut 'Seirei Tsukai' ada, Kamito Kazehaya secara tidak sengaja melihat pemandian para Seirei Tsukai dan terlibat dalam Blade Dance, turnamen antar Seirei Tsukai untuk menentukan yang terkuat."
    },
    {
      judul: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Bahasa Indonesia",
      keyword: "seishun",
      genre: "Comedy, Romance, School, Supernatural",
      sinopsis: "Sakuta Azusagawa, seorang siswa SMA yang sering dianggap sebagai 'anak bermasalah', bertemu dengan Mai Sakurajima, seorang aktris terkenal yang tiba-tiba menghilang dari pandangan orang-orang kecuali dirinya. Sakuta menyadari bahwa Mai menderita 'Sindrom Pubertas', fenomena misterius yang menyebabkan kejadian supernatural pada remaja. Bersama-sama, mereka berusaha memecahkan misteri Sindrom Pubertas dan membantu gadis-gadis lain yang menderitanya."
    },
    {
      judul: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru Bahasa Indonesia",
      keyword: "sekai",
      genre: "Action, Fantasy, Isekai",
      sinopsis: "Seorang pembunuh bayaran terhebat di dunia bereinkarnasi ke dunia lain sebagai pewaris keluarga bangsawan. Dengan pengetahuan dan pengalaman dari kehidupan sebelumnya, dia bertekad untuk menjadi pembunuh bayaran terhebat di dunia lain."
    },
    {
      judul: "Sentouin, Hakenshimasu! Bahasa Indonesia",
      keyword: "sentouin",
      genre: "Action, Adventure, Comedy, Sci-Fi",
      sinopsis: "Organisasi Rahasia Kisaragi akan menaklukkan dunia lain!?"
    },
    {
      judul: "Sevens Bahasa Indonesia",
      keyword: "sevens",
      genre: "Fantasy, Isekai",
      sinopsis: "Seorang anak laki-laki bereinkarnasi ke dunia lain sebagai putra bungsu keluarga bangsawan. Namun, dia tidak memiliki bakat sihir dan dianggap tidak berguna. Meskipun demikian, dia bertekad untuk bertahan hidup dan membuktikan dirinya sebagai bangsawan sejati."
    },
    {
      judul: "Shijou Saikyou no Daimaou, Murabito A ni Tensei suru Bahasa Indonesia",
      keyword: "shijou",
      genre: "Action, Comedy, Fantasy, Romance",
      sinopsis: "Raja Iblis terkuat dalam sejarah, Varvatos, bereinkarnasi sebagai penduduk desa biasa, Ard Meteor, di dunia yang sama 2000 tahun kemudian. Namun, di dunia di mana dia bereinkarnasi, peradaban sihir telah menurun drastis."
    },
    {
      judul: "Shijou Saikyou Orc-san no Tanoshii Tanetsuke Harem Zukuri Bahasa Indonesia",
      keyword: "shijou",
      genre: "Ecchi, Fantasy, Harem",
      sinopsis: "Orc terkuat di dunia membuat harem yang menyenangkan dengan menanam benih!?"
    },
    {
      judul: "Shimotsuki-san wa Mob ga Suki Bahasa Indonesia",
      keyword: "shimotsuki-san",
      genre: "Romance, School, Slice of Life",
      sinopsis: "Aku menyukai Mob-kun yang biasa-biasa saja."
    },
    {
      judul: "Shinigami ni Sodaterareta Shoujo wa Shikkoku no Ken wo Mune ni Idaku Bahasa Indonesia",
      keyword: "shinigami",
      genre: "Action, Adventure, Fantasy",
      sinopsis: "Seorang gadis yang dibesarkan oleh Dewa Kematian memegang pedang hitam di dadanya."
    },
    {
      judul: "Shinmai Maou no Keiyakusha Bahasa Indonesia",
      keyword: "shinmai",
      genre: "Action, Ecchi, Fantasy, Harem, Romance, Supernatural",
      sinopsis: "Toujou Basara adalah siswa SMA yang tiba-tiba mendapatkan dua adik perempuan tiri yang cantik. Namun, identitas asli mereka adalah succubus dan iblis!?"
    },
    {
      judul: "Shiranai Uchi ni Kachigumi Jinsei Bahasa Indonesia",
      keyword: "shiranai",
      genre: "Fantasy, Isekai",
      sinopsis: "Protagonis bereinkarnasi ke dunia lain dan tanpa menyadarinya, dia menjalani kehidupan pemenang."
    },
    {
      judul: "Silver Cross and Vampire Bahasa Indonesia",
      keyword: "silver",
      genre: "Action, Fantasy, Romance, Supernatural",
      sinopsis: "Seorang pemburu vampir bernama Kruz Schild bertemu dengan seorang vampir cantik bernama Luna Heres dan memulai petualangan bersama untuk mengungkap misteri vampir dan dunia di sekitar mereka."
    },
    {
      judul: "Solo Leveling Bahasa Indonesia",
      keyword: "solo",
      genre: "Action, Fantasy, Adventure",
      sinopsis: "Di dunia di mana portal ke dimensi lain muncul dan menghubungkan dunia manusia dengan dunia monster, para Hunter muncul untuk melawan monster dan melindungi umat manusia. Sung Jinwoo, seorang Hunter peringkat-E terlemah, secara tak terduga mendapatkan kekuatan misterius yang memungkinkannya untuk naik level tanpa batas. Dengan kekuatan barunya, Sung Jinwoo bertekad untuk menjadi Hunter terkuat dan mengungkap rahasia di balik portal dan kekuatannya."
    },
    {
      judul: "Sono mono. Nochi ni... Bahasa Indonesia",
      keyword: "sono",
      genre: "Fantasy, Isekai",
      sinopsis: "Seorang pria bereinkarnasi ke dunia lain sebagai monster terlemah, Goblin. Namun, goblin ini memiliki kemampuan untuk berevolusi dan menjadi lebih kuat."
    },
    {
      judul: "Spy Kyoushitsu Bahasa Indonesia",
      keyword: "spy",
      genre: "Comedy, School, Slice of Life",
      sinopsis: "Untuk menyelesaikan misi yang mustahil, mata-mata terbaik di dunia membentuk tim yang terdiri dari gadis-gadis cantik dengan kemampuan yang luar biasa, tetapi kepribadian yang bermasalah."
    },
    {
      judul: "Strike the Blood Bahasa Indonesia",
      keyword: "strike",
      genre: "Action, Ecchi, Fantasy, Magic, Romance, School, Supernatural, Vampire",
      sinopsis: "Koujou Akatsuki adalah siswa SMA biasa yang tiba-tiba menjadi vampir terkuat, 'Vampire Keempat Primogenitor'. Untuk mengawasinya, organisasi Lion mengirimkan seorang Sword Shaman bernama Yukina Himeragi."
    },
    {
      judul: "Sword Art Online Bahasa Indonesia",
      keyword: "sword",
      genre: "Action, Adventure, Fantasy, Game, Romance",
      sinopsis: "Kazuto 'Kirito' Kirigaya terjebak di dalam game virtual reality Sword Art Online bersama ribuan pemain lainnya. Jika mereka mati di dalam game, mereka juga akan mati di dunia nyata. Kirito harus berjuang untuk bertahan hidup dan menyelesaikan game tersebut untuk kembali ke dunia nyata dan menyelamatkan semua pemain yang terjebak."
    }
  ],
  "T": [
    {
      judul: "Taking My Reincarnation One Step at a Time: No One Told Me There Would Be Monsters Here! Bahasa Indonesia",
      keyword: "taking",
      genre: "Adventure, Fantasy, Isekai",
      sinopsis: "Protagonis bereinkarnasi ke dunia lain dan memutuskan untuk menjalani kehidupan yang santai dan damai. Namun, dunia lain itu penuh dengan monster dan bahaya."
    },
    {
      judul: "Tantei wa mou Shindeiru Bahasa Indonesia",
      keyword: "tantei",
      genre: "Mystery, Romance, Supernatural",
      sinopsis: "Kimihiko Kimizuka adalah mantan asisten detektif terkenal, Siesta. Setelah kematian Siesta, Kimihiko berusaha menjalani kehidupan SMA yang normal, tetapi dia terus-menerus terlibat dalam kasus-kasus misterius."
    },
    {
      judul: "Tate no Yuusha no Nariagari Bahasa Indonesia",
      keyword: "tate",
      genre: "Action, Adventure, Fantasy, Isekai",
      sinopsis: "Naofumi Iwatani, seorang mahasiswa biasa, dipanggil ke dunia lain sebagai 'Pahlawan Perisai'. Namun, dia dikhianati dan difitnah oleh kerajaan, membuatnya menjadi orang yang paling dibenci dan direndahkan. Dikhianati dan sendirian, Naofumi harus berjuang untuk bertahan hidup dan membuktikan dirinya sebagai pahlawan sejati dengan perisai legendarisnya."
    },
    {
      judul: "Tearmoon Teikoku Monogatari ~Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story~ Bahasa Indonesia",
      keyword: "tearmoon",
      genre: "Fantasy",
      sinopsis: "Putri Mia Luna Tearmoon bereinkarnasi kembali ke masa kecilnya setelah dieksekusi di usia 20 tahun. Dengan ingatan dari kehidupan masa depannya, Mia bertekad untuk menghindari akhir yang buruk dan mengubah takdir kerajaannya."
    },
    {
      judul: "Tensai Ouji no Akaji Kokka Saisei Jutsu (Sou da, Baikoku Shiyou) Bahasa Indonesia",
      keyword: "tensai",
      genre: "Fantasy",
      sinopsis: "Pangeran Wein adalah seorang pangeran yang jenius dan berbakat, tetapi dia bercita-cita untuk menjual kerajaannya dan pensiun dini. Namun, rencana pensiunnya selalu gagal karena bakat dan kebijaksanaannya yang luar biasa."
    },
    {
      judul: "Tensei Kizoku no Isekai Boukenroku ~Jichou wo Shiranai Kamigami no Shito~ Bahasa Indonesia",
      keyword: "tensei",
      genre: "Fantasy, Isekai",
      sinopsis: "Seorang anak laki-laki bereinkarnasi ke dunia lain sebagai Cain von Silford, putra ketiga keluarga bangsawan. Diberkati oleh para dewa dengan kekuatan sihir yang luar biasa, Cain menjalani kehidupan yang penuh petualangan di dunia lain."
    },
    {
      judul: "Tensei Oujo to Tensai Reijou no Mahou Kakumei Bahasa Indonesia",
      keyword: "tensei",
      genre: "Fantasy, Yuri, Romance",
      sinopsis: "Seorang putri kerajaan bereinkarnasi ke dunia lain dan bertekad untuk mewujudkan impiannya di kehidupan sebelumnya: sihir."
    },
    {
      judul: "Tensei shitara Slime Datta Ken Bahasa Indonesia",
      keyword: "tensei",
      genre: "Fantasy, Isekai, Adventure",
      sinopsis: "Satoru Mikami, seorang pekerja kantoran biasa, terbunuh dan bereinkarnasi ke dunia lain sebagai slime lemah. Meskipun lemah di awal, Rimuru Tempest (nama barunya) memiliki kemampuan unik 'Predator' yang membuatnya dapat melahap apa pun dan mendapatkan kekuatan mereka. Dengan kemampuan ini, Rimuru memulai perjalanan untuk membangun bangsa monster yang damai dan makmur di dunia fantasi yang penuh dengan konflik dan intrik."
    },
    {
      judul: "The Demon Prince Goes to the Academy Bahasa Indonesia",
      keyword: "the demon",
      genre: "Fantasy, School",
      sinopsis: "Pangeran iblis terkuat bereinkarnasi ke dunia manusia dan mendaftar di akademi untuk mencari tahu mengapa kekuatan sihirnya menghilang."
    },
    {
      judul: "The New Gate Bahasa Indonesia",
      keyword: "the new",
      genre: "Action, Adventure, Fantasy, Game",
      sinopsis: "Shin, pemain veteran VRMMORPG 'THE NEW GATE', terbangun dan mendapati dirinya terjebak di dunia game 500 tahun kemudian."
    },
    {
      judul: "The Unexplored Summon Blood-Sign Bahasa Indonesia",
      keyword: "the unexplored",
      genre: "Fantasy",
      sinopsis: "Kisah tentang seorang anak laki-laki yang dipanggil ke dunia lain dan menjadi Summoner terkuat."
    },
    {
      judul: "The World Otome Games/Trapped in a Dating Sim: The World of Otome Games is Tough for Mobs Bahasa Indonesia",
      keyword: "the world",
      genre: "Fantasy, Isekai, Romance",
      sinopsis: "Seorang pria bereinkarnasi ke dunia game otome sebagai karakter mob (karakter figuran). Untuk bertahan hidup di dunia game yang penuh dengan flag kehancuran, dia harus menggunakan pengetahuannya tentang game dan menjadi lebih kuat."
    },
    {
      judul: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san Bahasa Indonesia",
      keyword: "tokidoki",
      genre: "Comedy, Romance, School",
      sinopsis: "Alisa Mikhailovna Kujou adalah gadis tercantik, tercerdas, dan terpopuler di sekolah, dan juga merupakan anak blasteran Rusia. Duduk di sebelahku, dia selalu menggodaku dengan kata-kata manis dalam bahasa Rusia yang sebenarnya tidak kumengerti."
    },
    {
      judul: "Tomodachi no Imouto ga Ore ni Dake Uzai Bahasa Indonesia",
      keyword: "tomodachi",
      genre: "Comedy, Romance",
      sinopsis: "“Kamu benar-benar payah, ya?” Suatu hari, Airi Ichinose, adik perempuan temanku, mulai menggodaku. Meskipun dia biasanya bersikap dingin dan menyendiri, dia hanya bersikap kasar padaku."
    },
    {
      judul: "Torture Princess: Fremd Torturchen Bahasa Indonesia",
      keyword: "torture",
      genre: "Fantasy, Dark Fantasy",
      sinopsis: "Kisah tentang seorang pemuda yang bereinkarnasi ke dunia lain dan menjadi pelayan seorang putri sadis yang dikenal sebagai 'Torture Princess'."
    },
    {
      judul: "Tsuki ga Michibiku Isekai Douchuu Bahasa Indonesia",
      keyword: "tsuki",
      genre: "Adventure, Comedy, Fantasy, Isekai",
      sinopsis: "SMA biasa, Misumi Makoto, dipanggil ke dunia lain sebagai pahlawan. Namun, dewi dunia lain itu mengatakan kepadanya, “Wajahmu jelek,” dan mencabut gelar kepahlawanannya, lalu membuangnya ke ujung dunia."
    }
  ],
  "U": [
    {
      judul: "Uchi no Musume no Tame Naraba, Ore wa Moshikashitara Maou mo Taoseru Kamoshirenai. Bahasa Indonesia",
      keyword: "uchi",
      genre: "Fantasy, Slice of Life",
      sinopsis: "Seorang petualang terkuat bernama Dale menemukan seorang gadis kecil iblis di hutan dan memutuskan untuk mengadopsinya sebagai putrinya. Meskipun dia adalah petualang terkuat, Dale sangat menyayangi putrinya dan menjadi ayah yang terlalu protektif."
    },
    {
      judul: "Ultimate Antihero Bahasa Indonesia",
      keyword: "ultimate",
      genre: "Action, Fantasy",
      sinopsis: "Seorang pemuda bernama Kaito mendapatkan kekuatan untuk menjadi antihero terhebat dan bertekad untuk mengubah dunia dengan caranya sendiri."
    },
    {
      judul: "Unnamed Memory Bahasa Indonesia",
      keyword: "unnamed",
      genre: "Fantasy, Romance",
      sinopsis: "Putra mahkota Farsas, Oscar, dikutuk untuk tidak pernah memiliki keturunan. Untuk mematahkan kutukan tersebut, dia mencari penyihir terkuat di benua itu, Tinasha, dan meminta bantuannya."
    },
    {
      judul: "Urasekai Picnic Bahasa Indonesia",
      keyword: "urasekai",
      genre: "Sci-Fi, Yuri, Adventure, Horror",
      sinopsis: "Dua gadis, Sorawo Kamikoshi dan Toriko Nishina, menjelajahi dunia lain yang misterius dan berbahaya yang disebut 'Ura Sekai' (Dunia Belakang)."
    },
    {
      judul: "Utsuro no Hako to Zero no Maria Bahasa Indonesia",
      keyword: "utsuro",
      genre: "Mystery, Psychological, School, Supernatural",
      sinopsis: "Kazuki Hoshino adalah seorang siswa SMA yang mencintai kehidupan sehari-harinya. Suatu hari, dunianya berubah drastis ketika dia bertemu dengan Maria Otonashi, seorang gadis misterius yang mengaku sebagai 'Kotak Kebinasaan'."
    }
  ],
  "V": [
    {
      judul: "Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord Bahasa Indonesia",
      keyword: "villainess",
      genre: "Comedy, Fantasy, Isekai",
      sinopsis: "Yumiella Dolkness bereinkarnasi ke dunia game otome sebagai villainess. Namun, dia terobsesi untuk menjadi kuat dan tanpa sadar mencapai level 99, level tertinggi dalam game, dan menjadi 'hidden boss'."
    }
  ],
  "W": [
    {
      judul: "Watashi ga Koibito ni Nareru Wakenaijan, Muri Muri! (※Muri Janakatta!?) Bahasa Indonesia",
      keyword: "watashi",
      genre: "Comedy, Romance",
      sinopsis: "“Aku tidak mungkin bisa menjadi pacarnya, mustahil, mustahil!” Siswi SMA, Alicia, selalu berpikir begitu. Tapi—!?"
    },
    {
      judul: "Watashi, Nouryoku wa Heikinchi de tte Itta yo ne! Bahasa Indonesia",
      keyword: "watashi",
      genre: "Adventure, Comedy, Fantasy",
      sinopsis: "Misato Kurihara bereinkarnasi ke dunia lain, tetapi dia terlalu kuat. Dia meminta kepada dewa untuk memberinya kekuatan rata-rata di kehidupan selanjutnya, tetapi—kenyataannya, 'rata-rata' di dunia lain jauh lebih kuat dari yang dia bayangkan!?"
    }
  ],
  "Y": [
    {
      judul: "Yasei no Last Boss ga Arawareta! Bahasa Indonesia",
      keyword: "yasei",
      genre: "Fantasy, Romance",
      sinopsis: "Seorang gadis gamer bereinkarnasi ke dalam game 200 tahun kemudian sebagai Last Boss terkuat, Ratu Iblis."
    },
    {
      judul: "Yobidasareta Satsurikusha Bahasa Indonesia",
      keyword: "yobidasareta",
      genre: "Action, Fantasy, Isekai",
      sinopsis: "Seorang pembunuh bayaran terkuat dipanggil ke dunia lain sebagai pahlawan. Namun, dia tidak tertarik untuk menjadi pahlawan dan hanya ingin membunuh semua orang yang menghalangi jalannya."
    },
    {
      judul: "Yondome wa Iyana Shi Zokusei Majutsushi",
      keyword: "yondome",
      genre: "Fantasy, Isekai",
      sinopsis: "Seorang pria bereinkarnasi ke dunia lain untuk keempat kalinya. Di kehidupan sebelumnya, dia selalu mati dengan cara yang mengerikan. Di kehidupan keempatnya, dia bertekad untuk menghindari kematian dan menjalani kehidupan yang bahagia."
    },
    {
      judul: "Youjo Senki Bahasa Indonesia",
      keyword: "youjo",
      genre: "Military, Sci-Fi",
      sinopsis: "Seorang pekerja kantoran Jepang bereinkarnasi ke dunia lain sebagai Tanya Degurechaff, seorang gadis kecil yang memiliki bakat sihir yang luar biasa. Di dunia yang dilanda perang, Tanya bergabung dengan militer dan bertekad untuk naik pangkat dan menjalani kehidupan yang aman di belakang garis depan."
    },
    {
      judul: "Your and My Asylum Bahasa Indonesia",
      keyword: "your",
      genre: "Drama, Romance",
      sinopsis: "Sebuah kisah cinta yang mengharukan antara dua orang yang kesepian dan terluka yang menemukan kenyamanan satu sama lain di rumah sakit jiwa."
    },
    {
      judul: "Yujin Kyara wa Taihen desu ka? Bahasa Indonesia",
      keyword: "yujin",
      genre: "Comedy, Romance",
      sinopsis: "Protagonis bereinkarnasi ke dunia game otome sebagai karakter teman masa kecil protagonis wanita. Dia bertekad untuk menjadi teman yang baik dan mendukung protagonis wanita dari bayang-bayang."
    },
    {
      judul: "Yumemiru Danshi wa Genjitsushugisha Bahasa Indonesia",
      keyword: "yumemiru",
      genre: "Romance, Slice of Life",
      sinopsis: "Wataru Sajou adalah seorang siswa SMA yang mencintai teman sekelasnya, Aika Natsukawa. Dia terus-menerus mendekati Aika dan menyatakan cintanya padanya, tetapi selalu diabaikan. Suatu hari, Wataru menyadari bahwa dia tidak cocok untuk Aika dan memutuskan untuk menyerah."
    },
    {
      judul: "yuusha ni horobosareru dake no kantan na oshigoto desu Bahasa Indonesia",
      keyword: "yuusha",
      genre: "Comedy, Fantasy",
      sinopsis: "Pekerjaan mudah yang hanya perlu dikalahkan oleh pahlawan."
    }
  ],
};



function getMenuNovelKeyboard() {
  let keyboard = {
    inline_keyboard: [
      [
        { text: "A", callback_data: "novel_list_A" },
        { text: "B", callback_data: "novel_list_B" },
        { text: "C", callback_data: "novel_list_C" },
        { text: "D", callback_data: "novel_list_D" },
        { text: "E", callback_data: "novel_list_E" },
        { text: "F", callback_data: "novel_list_F" },
        { text: "G", callback_data: "novel_list_G" },
      ],
      [
        { text: "H", callback_data: "novel_list_H" },
        { text: "I", callback_data: "novel_list_I" },
        { text: "J", callback_data: "novel_list_J" },
        { text: "K", callback_data: "novel_list_K" },
        { text: "L", callback_data: "novel_list_L" },
        { text: "M", callback_data: "novel_list_M" },
        { text: "N", callback_data: "novel_list_N" },
      ],
      [
        { text: "O", callback_data: "novel_list_O" },
        { text: "P", callback_data: "novel_list_P" },
        { text: "Q", callback_data: "novel_list_Q" },
        { text: "R", callback_data: "novel_list_R" },
        { text: "S", callback_data: "novel_list_S" },
        { text: "T", callback_data: "novel_list_T" },
        { text: "U", callback_data: "novel_list_U" },
      ],
      [
        { text: "V", callback_data: "novel_list_V" },
        { text: "W", callback_data: "novel_list_W" },
        { text: "X", callback_data: "novel_list_X" },
        { text: "Y", callback_data: "novel_list_Y" },
        { text: "Z", callback_data: "novel_list_Z" },
        { text: "#", callback_data: "novel_list_#" },
      ],
      [
        { text: "Kembali ke Fitur 🤡", callback_data: "kembali_ke_fitur" },
      ]
    ]
  };
  return keyboard;
}

function getNovelListKeyboard(huruf) {
  let novels = daftarNovel[huruf] || [];
  let tombolNovel = novels.map(novel => [{ text: novel.judul, callback_data: "novel_page_" + novel.judul }]);
  tombolNovel.push([{ text: "Kembali ke Menu Novel 🤡", callback_data: "daftar_novel" }]); // Tombol kembali ke menu novel A-Z
  return { inline_keyboard: tombolNovel };
}

function getNovelPageKeyboard(judulNovel) {
  let novel = null;
  for (const huruf in daftarNovel) {
    novel = daftarNovel[huruf].find(n => n.judul === judulNovel);
    if (novel) break;
  }

  if (!novel) {
    return getMenuNovelKeyboard(); // Kembali ke menu novel jika novel tidak ditemukan (error handling)
  }

  let keyboard = {
    inline_keyboard: [
      [
        { text: "Telusuri Berkas 🔮", switch_inline_query_current_chat: novel.keyword } // Inline query dengan keyword novel
      ],
      [
        { text: "Kembali ke Daftar Menu " + judulNovel.charAt(0).toUpperCase(), callback_data: "novel_list_" + judulNovel.charAt(0).toUpperCase() } // Kembali ke menu novel per huruf
      ]
    ]
  };
  return keyboard;
}


function showNovelMenu(chatId, messageId) {
  let menuText = "<b>📚 Daftar Novel - Pilih Abjad Kegelapan...</b>\n\n<i>Gulir abjad untuk menemukan kisah yang jiwamu cari... 🖤</i>";
  editMessageText(chatId, messageId, menuText, JSON.stringify(getMenuNovelKeyboard()));
}

function showNovelListPage(chatId, messageId, huruf) {
  let listNovelKeyboard = getNovelListKeyboard(huruf);
  if (listNovelKeyboard.inline_keyboard.length <= 1) { // Hanya tombol kembali, berarti tidak ada novel di huruf ini
      let menuText = `<b>📚 Daftar Novel - Abjad ${huruf.toUpperCase()} Kosong 👻</b>\n\n<i>Tidak ada arwah novel yang bersembunyi di abjad ini... Kembali ke menu utama novel.</i>`;
      editMessageText(chatId, messageId, menuText, JSON.stringify({inline_keyboard: [[{text: "Kembali ke Menu Novel", callback_data: "daftar_novel"}]]}));
  } else {
      let menuText = `<b>📚 Daftar Novel - Abjad ${huruf.toUpperCase()} 🖤</b>\n\n<i>Pilih novel yang memanggil jiwamu dari daftar berikut...</i>`;
      editMessageText(chatId, messageId, menuText, JSON.stringify(listNovelKeyboard));
  }
}


function showNovelPage(chatId, messageId, judulNovel) {
  let novel = null;
  for (const huruf in daftarNovel) {
    novel = daftarNovel[huruf].find(n => n.judul === judulNovel);
    if (novel) break;
  }

  if (!novel) {
    kirimPesan(chatId, "Novel tidak ditemukan dalam arsip kegelapan... 😈"); // Error handling jika novel tidak ditemukan
    return;
  }

  let novelText = `<b>📚 ${novel.judul} 🖤</b>\n\n<b>Genre 📜:</b> ${novel.genre}\n\n<b>Sinopsis 📜:</b> ${novel.sinopsis}\n\n<i>Jejak kisah dalam kehampaan digital... 🥀</i>`;
  editMessageText(chatId, messageId, novelText, JSON.stringify(getNovelPageKeyboard(judulNovel)));
}
