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
  "#": [
    {
      judul: "10-nen Goshi no HikiNEET o Yamete, Gaishutsushitara Jitaku goto Isekai ni Ten'ishiteta Bahasa Indonesia",
      keyword: "10-nen",
      genre: "Isekai, Fantasy",
      sinopsis: "Kamar tidurku terhubung ke dunia lain!? Tiba-tiba rumah kontrakan NEET berusia 30 tahun itu berpindah ke dunia lain."
    }
  ],
  "A": [
    {
      judul: "Ankoku Kishi Monogatari ~Yuusha wo Taosu Tameni Maou ni Shoukansaremashita~ Bahasa Indonesia",
      keyword: "ankoku",
      genre: "Fantasy, Action, Adventure",
      sinopsis: "Dunia fantasi yang diperintah oleh raja iblis dan pahlawan. Ksatria Kegelapan dipanggil ke dunia lain untuk mengalahkan pahlawan!?"
    },
    {
      judul: "Ankoku Kishi to Issho! Bahasa Indonesia",
      keyword: "ankoku",
      genre: "Comedy, Fantasy, Slice of Life",
      sinopsis: "Menceritakan kehidupan sehari-hari yang lucu dari Ksatria Kegelapan yang kikuk dan gadis gothic kecil yang kesepian."
    },
    {
      judul: "Arifureta Shokugyou De Sekai Saikyou Bahasa Indonesia",
      keyword: "arifureta",
      genre: "Isekai, Action, Fantasy",
      sinopsis: "Di dunia fantasi yang kejam, Hajime Nagumo dan teman-teman sekelasnya dipanggil sebagai pahlawan. Namun, Hajime mendapati dirinya sebagai yang terlemah dan dikhianati oleh teman-temannya. Terjatuh ke dalam jurang keputusasaan, Hajime harus berjuang untuk bertahan hidup dan menjadi yang terkuat untuk kembali ke rumah."
    },
    {
      judul: "Ashita, Boku wa Shinu. Kimi wa Ikikaeru. Bahasa Indonesia",
      keyword: "ashita",
      genre: "Drama, Romance, School, Supernatural",
      sinopsis: "Aku pasti akan mati besok, dan kamu akan hidup kembali —. Murid SMA kelas dua, Shiro Nagai, memiliki kekuatan untuk melihat 'besok' orang lain. Suatu hari, dia melihat 'besok' dari teman masa kecilnya, Haruna Rikka, dan mengetahui bahwa dia akan mati karena kecelakaan yang tidak masuk akal. Untuk mengubah 'besok' Haruna, Shiro menggunakan kekuatannya."
    }
  ],
  "B": [
    {
      judul: "Battle Divas Bahasa Indonesia",
      keyword: "battle",
      genre: "Action, Ecchi, Fantasy, Harem",
      sinopsis: "Di benua yang luas dan beragam di Azure, tempat pedang dan sihir berkuasa, banyak ras hidup berdampingan meskipun ada konflik dan kekacauan yang terus-menerus. Di antara mereka, manusia, dengan kecerdasan dan kebijaksanaan mereka, orc dengan kekuatan fisik yang besar, beastkin yang diberkati dengan indra yang luar biasa, peri yang mahir dalam sihir dan seni, dan kurcaci yang bangga dengan keahlian mereka, masing-masing berkembang di wilayah mereka sendiri, membentuk lima negara besar yang dikenal sebagai Lima Bangsa Besar."
    },
    {
      judul: "Berserk of Gluttony Bahasa Indonesia",
      keyword: "berserk",
      genre: "Dark Fantasy, Action, Isekai",
      sinopsis: "Fate Graphite dihina karena skill 'Gluttony' yang dianggap tidak berguna, yang hanya membuatnya merasa lapar. Namun, dia menemukan bahwa skill tersebut memiliki kekuatan tersembunyi: Gluttony dapat melahap jiwa makhluk yang dibunuh dan mengambil kekuatan mereka. Dengan kekuatan baru ini, Fate memulai perjalanan berbahaya untuk mengubah takdirnya dan melindungi orang-orang yang dicintainya."
    },
    {
      judul: "Bofuri Bahasa Indonesia",
      keyword: "bofuri",
      genre: "Sci-Fi, Slice of Life",
      sinopsis: "Karena sahabatnya, Risa Shiramine dengan paksa menyeretnya untuk bermain game VRMMORPG NewWorld Online, Kaede Honjou yang tidak menyukai rasa sakit sama sekali memilih untuk mengalokasikan semua poin statusnya ke VIT. Akibatnya, dia menjadi bergerak lambat, tidak bisa menggunakan sihir, dan bahkan tidak bisa melompat, dia mendapatkan julukan 'Benteng Hidup' yang tidak terduga, tetapi ternyata dia memiliki skill 'Pertahanan Absolut' yang merupakan skill yang sangat kuat…?"
    },
    {
      judul: "Boku no Kanojo Sensei Bahasa Indonesia",
      keyword: "boku",
      genre: "Comedy, Romance, School",
      sinopsis: "“Aku akan menjadikanmu pacarku, sebagai hukuman karena telah melihatku dalam keadaan yang memalukan!” Karena suatu alasan, Yoshio bertemu dengan wali kelasnya yang cantik, Hayama Kana, dalam keadaan yang memalukan di toilet sekolah dan dipaksa untuk berpacaran dengannya!? Selain itu, Natsukawa Shiho, teman masa kecil Yoshio, juga ikut campur dalam hubungan mereka…!?"
    }
  ],
  "C": [
    {
      judul: "Campione! Bahasa Indonesia",
      keyword: "campione",
      genre: "Action, Fantasy, Harem, Romance, Supernatural",
      sinopsis: "Ketika Kusanagi Godou berhasil mengalahkan dewa perang, dia menjadi Campione! Sekarang dia harus menghadapi dewa-dewa yang tidak patuh yang menyebabkan masalah di sekitarnya."
    },
    {
      judul: "Chitose-kun wa Ramune Bin no Naka Bahasa Indonesia",
      keyword: "chitose-kun",
      genre: "Romance, School",
      sinopsis: "Dikelilingi oleh pacar-pacar yang tak terhitung jumlahnya, Saku Chitose menduduki posisi populer kelas-S yang tak tergoyahkan di sekolah. Dia menyadari bahwa dia 'memahami' mereka. Dia pikir, karena dia tahu bahwa 'kebosanan adalah racun terbesar,' bahwa 'hal-hal yang menyenangkan selalu benar,' dan bahwa dia spesial, berbeda dari orang lain di sekitar— Namun, apakah dia benar-benar 'memahami' mereka?"
    },
    {
      judul: "Choppiri Toshiue Demo Kanojo ni Shite Kuremasu ka? Bahasa Indonesia",
      keyword: "choppiri",
      genre: "Comedy, Romance",
      sinopsis: "“Apakah kamu tidak keberatan jika aku sedikit lebih tua?” Suatu hari, Kouki Sakuraba dipanggil oleh kecantikan dewasa yang bekerja di toko serba ada tempat dia bekerja paruh waktu dan diminta untuk menjadi pacarnya…! Dihadapkan dengan pengakuan cinta yang tiba-tiba dari wanita dewasa yang lebih tua, Kouki, yang tidak berpengalaman dalam cinta, menjadi bingung. Namun, saat dia berinteraksi dengan wanita itu, dia mulai tertarik padanya…"
    },
    {
      judul: "Chounin A wa Akuyaku Reijou wo Doushitemo Sukuitai Bahasa Indonesia",
      keyword: "chounin",
      genre: "Fantasy, Romance, Isekai",
      sinopsis: "Seorang pria bereinkarnasi menjadi karakter figuran, penduduk desa A. Namun, target yang harus dia selamatkan adalah penjahat wanita yang ditakdirkan untuk kehancuran!? Ini adalah kisah tentang seorang pria biasa yang berjuang untuk menyelamatkan penjahat wanita itu meskipun dia adalah karakter figuran!"
    },
     {
      judul: "Classroom of the Elite Bahasa Indonesia",
      keyword: "classroom",
      genre: "Psychological, School, Slice of Life",
      sinopsis: "Kiyotaka Ayanokoji memasuki SMA Tokyo Metropolitan Advanced Nurturing, sekolah elit yang menjanjikan masa depan cerah. Namun, dia ditempatkan di Kelas D, kelas buangan yang berisi siswa-siswa bermasalah. Di sana, Kiyotaka harus menggunakan kecerdasan dan kelicikannya untuk bertahan hidup dan naik ke puncak sekolah."
    }
  ],
  "D": [
    {
      judul: "Danjo no Yuujou wa Seiritsu suru? (Iya, Shinai!!) Bahasa Indonesia",
      keyword: "danjo",
      genre: "Comedy, Romance, School",
      sinopsis: "“—Aku menyukaimu sebagai teman, tentu saja!” Teman sebangku di kelas, Yu Izumi, mengatakan ini kepada Himari Hinase dengan wajah tersenyum cerah. Namun, jarak antara mereka terlalu dekat, dan dia terus-menerus menggodanya, membuatnya bingung. Apakah persahabatan antara pria dan wanita itu mungkin? Tidak, tidak mungkin! Tapi, mungkin ada pengecualian untuk kita!?"
    },
    {
      judul: "Date Alive Bahasa Indonesia",
      keyword: "date",
      genre: "Action, Comedy, Harem, Mecha, Romance, Sci-Fi",
      sinopsis: "Itsuka Shido adalah anak sekolah menengah biasa sampai dia bertemu dengan seorang gadis misterius. Ternyata, gadis itu adalah roh, makhluk dari dunia lain, yang penampilannya menyebabkan gempa dahsyat. Shido ditugaskan untuk menyegel roh-roh itu dan menyelamatkan umat manusia."
    },
    {
      judul: "Disciple of the Lich: Or How I Was Cursed by the Gods and Dropped Into the Abyss! Bahasa Indonesia",
      keyword: "disciple",
      genre: "Adventure, Fantasy",
      sinopsis: "Seorang pemuda terbangun di dasar jurang yang dikenal sebagai Abyss. Dia tidak memiliki ingatan, tidak tahu mengapa dia ada di sana, atau bahkan siapa namanya. Yang dia tahu hanyalah sebuah suara di kepalanya yang terus-menerus mengejeknya dan mengatakan bahwa dia dikutuk oleh para dewa."
    },
    {
      judul: "Dokuzetsu Kuudere Bishoujo Bahasa Indonesia",
      keyword: "dokuzetsu",
      genre: "Comedy, Romance",
      sinopsis: "“Menjijikkan.” “Bodoh.” “Menghilang saja.” Beginilah caraku diperlakukan oleh gadis tercantik di sekolah, Aoya Yuzuki. Meskipun kata-katanya kasar, terkadang dia tersipu dan terkadang dia panik? Aku tidak tahu apa yang dia pikirkan! Tapi, entah bagaimana, sepertinya dia menyukaimu...?"
    },
    {
      judul: "Dungeon Battle Royale ~ Since I Became a Demon King, I Will Aim for World Domination Bahasa Indonesia",
      keyword: "dungeon",
      genre: "Action, Fantasy, Harem",
      sinopsis: "Setelah bereinkarnasi menjadi Raja Iblis terlemah, saya memutuskan untuk menaklukkan dunia dengan Dungeon yang diberikan kepada saya sebagai cheat!"
    },
    {
      judul: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Bahasa Indonesia",
      keyword: "dungeon",
      genre: "Action, Adventure, Comedy, Fantasy, Romance",
      sinopsis: "Di kota Orario, para petualang menjelajahi Dungeon, labirin bawah tanah berbahaya yang penuh monster dan harta karun. Bell Cranel, seorang petualang pemula, bertemu dengan dewi Hestia dan memulai petualangannya di Dungeon dengan harapan menjadi petualang terhebat dan menemukan cinta."
    },
    {
      judul: "Dungeon no Nai Sekai de 【Incompetent Skill “Dungeon Nai Ten'i”】 ga Kakusei Shita Kekka, Subete Saikyou e to Tsuujiteita Ken: Level Up wa Jinsei wo Kaeta Bahasa Indonesia",
      keyword: "dungeon",
      genre: "Action, Adventure, Fantasy",
      sinopsis: "Manusia yang terbangun dengan keterampilan yang tidak kompeten 【Transfer Tanpa Dungeon】 telah mencapai yang terkuat. Ini adalah kisah tentang seorang anak laki-laki bernama Yuuto yang, meskipun memiliki keterampilan yang tidak berguna, menjadi yang terkuat di dunia tanpa dungeon."
    }
  ],
  "E": [
    {
      judul: "Ecstas Online Bahasa Indonesia",
      keyword: "ecstas",
      genre: "Action, Adventure, Fantasy, Sci-Fi",
      sinopsis: "Protagonis kita suatu hari menemukan dirinya di dunia yang berbeda. Dunia tempat game VRMMORPG populer, Ecstas Online, menjadi kenyataan. Lebih buruk lagi, dia menjadi salah satu monster terlemah di dunia, Goblin."
    },
    {
        judul: "Eighty-Six (Delapan-Enam) – 86 Bahasa Indonesia",
        keyword: "eighty-six",
        genre: "Action, Military, Sci-Fi, Drama",
        sinopsis: "Republik San Magnolia berperang melawan Kekaisaran Giadian yang menggunakan drone otomatis 'Legion'. Namun, di balik propaganda kemenangan, terdapat kenyataan pahit: Eighty-Six, distrik ke-86 yang tidak diakui sebagai manusia, dipaksa untuk berperang sebagai umpan meriam. Shinei Nouzen, seorang Eighty-Six yang selamat, memimpin pasukan Spearhead dalam misi bunuh diri melawan Legion."
    },
    {
      judul: "Eromanga Sensei Bahasa Indonesia",
      keyword: "eromanga",
      genre: "Comedy, Romance, Slice of Life",
      sinopsis: "Masamune Izumi, seorang siswa SMA dan novelis ringan, harus hidup bersama adik tirinya, Sagiri Izumi, yang merupakan seorang hikikomori. Sagiri tidak pernah keluar dari kamarnya selama setahun terakhir dan memaksa Masamune untuk melakukan semua pekerjaan rumah. Selain itu, Masamune menyadari bahwa ilustrator anonim untuk novel ringannya, 'Eromanga Sensei', tidak lain adalah adik tirinya sendiri!?"
    },
    {
      judul: "Evil avalon Bahasa Indonesia",
      keyword: "evil",
      genre: "Action, Adventure, Ecchi, Fantasy, Harem",
      sinopsis: "Manusia terkuat bereinkarnasi menjadi Raja Iblis terlemah!? Kehidupan kedua yang dimulai oleh mantan manusia terkuat sebagai Raja Iblis terlemah di dunia lain!!"
    }
  ],
  "F": [
    {
      judul: "Failure Frame: I Became the Strongest and Annihilated Everything with Low-Level Spells Bahasa Indonesia",
      keyword: "failure",
      genre: "Fantasy, Isekai",
      sinopsis: "Touka Mimori dan teman-teman sekelasnya dipanggil ke dunia lain sebagai pahlawan. Namun, Touka adalah yang terlemah di antara mereka dan dianggap tidak berguna. Dibuang oleh kerajaan, Touka harus berjuang untuk bertahan hidup di dunia yang kejam ini dengan kekuatannya yang 'gagal'."
    },
    {
      judul: "Free Life Fantasy Online: Immortal Princess Bahasa Indonesia",
      keyword: "free",
      genre: "Adventure, Fantasy, Sci-Fi, Slice of Life",
      sinopsis: "Protagonis adalah seorang NEET yang hidup dari pendapatan investasi. Suatu hari, dia menemukan informasi tentang game VR baru dan memutuskan untuk mencobanya. Game itu disebut [Free Life Fantasy Online], di mana kamu bisa melakukan apa saja sesukamu. Dia membuat karakter dan memulai petualangan di dunia yang berbeda."
    },
    {
      judul: "Fushi no Kami Bahasa Indonesia",
      keyword: "fushi",
      genre: "Fantasy, Slice of Life, Supernatural",
      sinopsis: "Seorang anak laki-laki bereinkarnasi ke dunia lain. Dia dilahirkan kembali sebagai cucu dari dewa yang dikenal sebagai Dewa Kematian. Nama anak laki-laki itu adalah Ash. Dia seharusnya menjalani kehidupan yang damai sebagai cucu dewa, tetapi kenyataannya—dia harus bekerja sangat keras setiap hari untuk bertahan hidup."
    }
  ],
  "G": [
    {
      judul: "Gakusen Toshi Asterisk Bahasa Indonesia",
      keyword: "gakusen",
      genre: "Action, Ecchi, Fantasy, Harem, Romance, Sci-Fi, School",
      sinopsis: "Pada abad ke-20, kehancuran yang belum pernah terjadi sebelumnya—dikenal sebagai Invertia—menyerang planet ini. Karena bencana ini, tatanan dunia benar-benar hancur. Namun, dari dalam kehancuran, umat manusia telah memperoleh jenis kekuatan baru—Genestella. Kota академия, yang didirikan untuk Genestella generasi berikutnya, adalah 'Rikka'—juga dikenal sebagai Asterisk."
    },
    {
      judul: "Garbage Brave: Isekai ni Shoukan Sare Suterareta Yuusha no Fukushuu Monogatari",
      keyword: "garbage",
      genre: "Action, Adventure, Fantasy, Isekai",
      sinopsis: "Pahlawan itu—dibuang seperti sampah. Suatu hari, Kanbara Kanata dipanggil ke dunia lain bersama teman-teman sekelasnya. Di dunia yang berbeda, dia diberi gelar 'Pahlawan' dan diminta untuk mengalahkan Raja Iblis. Namun, Kanata, yang memiliki kemampuan terlemah, diperlakukan tidak kompeten dan dibuang ke tempat yang disebut 'Lahan Terbuang' sendirian."
    },
    {
      judul: "Genjitsu Shugi Yuusha no Oukoku Saikenki Bahasa Indonesia",
      keyword: "genjitsu",
      genre: "Fantasy, Isekai, Romance",
      sinopsis: "“Oh, Pahlawan!” Kazuya Souma dipanggil ke dunia lain untuk menjadi pahlawan. Akan tetapi, pahlawan versi Souma sangat berbeda dari tokoh pahlawan pada umumnya. Alih-alih bertualang, ia malah berencana untuk membangun kembali kerajaan dengan kebijakan ekonomi dan administrasi yang rasional. Souma yang akhirnya berhasil mendapatkan takhta kerajaan mulai menunjukkan bakatnya sebagai raja dengan mereformasi kerajaan selangkah demi selangkah."
    },
    {
      judul: "Gimai Seikatsu Bahasa Indonesia",
      keyword: "gimai",
      genre: "Romance, Slice of Life",
      sinopsis: "Karena pernikahan kembali orang tua mereka, siswa SMA Toujou Yuuta dan Ayase Saki tiba-tiba menjadi saudara tiri. Berdasarkan 'aturan keluarga saudara tiri,' yang mereka berdua pertimbangkan, mereka berjanji untuk menjaga jarak yang tepat dan tidak menjadi terlalu dekat satu sama lain. Awalnya, Yuuta dan Saki berusaha untuk hidup bersama sebagai keluarga tetapi tetap menjadi orang asing. Namun, saat mereka melewati hari-hari bersama di rumah yang sama, mereka secara bertahap mulai berubah menjadi sesuatu yang lebih dari sekadar keluarga."
    },
    {
      judul: "Goblin Slayer Bahasa Indonesia",
      keyword: "goblin",
      genre: "Action, Dark Fantasy, Adventure",
      sinopsis: "Di dunia fantasi yang penuh dengan monster, Goblin Slayer adalah seorang petualang yang hanya fokus membasmi goblin. Setelah desa kampung halamannya dihancurkan oleh goblin, Goblin Slayer bersumpah untuk memusnahkan semua goblin di dunia dan melindungi umat manusia dari ancaman mereka."
    }
  ],
  "H": [
    {
      judul: "Hai to Gensou no Grimgar Bahasa Indonesia",
      keyword: "hai",
      genre: "Action, Adventure, Drama, Fantasy",
      sinopsis: "Ketika Haruhito terbangun dalam kegelapan, dia tidak tahu di mana dia berada, mengapa dia ada di sana, dan dari mana asalnya. Di sekelilingnya ada beberapa pria dan wanita yang memiliki ingatan yang sama dan samar-samar tentang diri mereka sendiri. Meskipun demikian, dunia yang tidak pernah mereka kenal ini disebut Grimgar. Dalam dunia seperti game ini, Haruhito, untuk bertahan hidup, terpaksa membentuk party dengan orang lain, dan dari sana, kisah tentang Haruhito sebagai seorang prajurit magang dari kehidupan yang dipaksakan dimulai."
    },
    {
      judul: "Hataraku Maou-sama! Bahasa Indonesia",
      keyword: "hataraku",
      genre: "Comedy, Fantasy, Romance",
      sinopsis: "Raja Iblis Sadao hampir menaklukkan dunia ketika dia dikalahkan oleh Pahlawan dan terdampar di dunia lain—Tokyo modern. Untuk bertahan hidup dan menemukan jalan kembali ke Ente Isla, Sadao bekerja paruh waktu di MgRonald."
    },
    {
      judul: "Hazure Skill [Guild Member] de, Jitsu wa Saikyou desu ~Toaru Ossan no VRMMO Katsudouki~ Bahasa Indonesia",
      keyword: "hazure",
      genre: "Action, Adventure, Fantasy, Sci-Fi",
      sinopsis: "Seorang pria paruh baya biasa bernama Earth dipindahkan ke dunia lain dan menjadi seorang petualang. Namun, skill yang dia peroleh adalah skill yang tidak berguna bernama [Guild Member] yang tidak memiliki kekuatan ofensif. Earth putus asa, tetapi dia menyadari bahwa skill [Guild Member] sebenarnya adalah skill terkuat yang memungkinkannya untuk mendapatkan skill apa pun yang diinginkannya dengan menggunakan poin guild. Dengan skill terkuat, Earth memulai petualangan di dunia lain sebagai seorang petualang yang tak terkalahkan."
    },
    {
      judul: "Hige wo Soru. Soshite Joshikousei wo Hirou. Bahasa Indonesia",
      keyword: "hige",
      genre: "Drama, Romance, Slice of Life",
      sinopsis: "Yoshida, seorang karyawan perusahaan berusia 26 tahun, telah jatuh cinta pada Yoshida selama lima tahun. Meskipun akhirnya dia mendapatkan keberanian untuk mengajak kencannya, dia ditolak mentah-mentah dan mabuk pulang. Dalam perjalanan pulang, dia melihat seorang gadis SMA duduk di pinggir jalan. Gadis itu bernama Sayu Ogiwara. Tanpa berpikir panjang, Yoshida membiarkannya tinggal di tempatnya."
    },
    {
      judul: "High School DxD Bahasa Indonesia",
      keyword: "high",
      genre: "Action, Comedy, Ecchi, Fantasy, Harem, Romance, School, Supernatural",
      sinopsis: "Issei Hyodo adalah siswa mesum kelas 2 SMA Akademi Kuoh yang memiliki keinginan untuk membuat harem. Tiba-tiba suatu hari, dia diajak kencan oleh seorang gadis bernama Yuma Amano. Saat kencan, Yuma menunjukkan wujud aslinya sebagai Malaikat Jatuh dan mencoba membunuh Issei!"
    },
    {
      judul: "Hikawa-sensei wants an otaku boyfriend Bahasa Indonesia",
      keyword: "hikawa-sensei",
      genre: "Comedy, Romance",
      sinopsis: "“Aku akan membuatmu jatuh cinta padaku.” Hikawa, guru bahasa Inggris di sekolah menengah, menyatakan cintanya kepada Narumi, seorang guru seni rupa yang merupakan seorang otaku. Namun, Narumi tidak tertarik pada wanita, dan dia juga seorang otaku yang payah. Hikawa-sensei yang cantik dan sempurna mendekati Narumi dengan berbagai cara, tetapi—!?"
    },
    {
      judul: "Hikikomori Kyuuketsuki no Monmon Bahasa Indonesia",
      keyword: "hikikomori",
      genre: "Comedy, Supernatural",
      sinopsis: "Komedi vampir rumahan yang terjadi di sebuah rumah tempat seorang vampir NEET yang berusia lebih dari 300 tahun dan seorang gadis SMA yang cerewet tinggal bersama."
    },
    {
      judul: "Hitoribocchi no Isekai Kouryaku Bahasa Indonesia",
      keyword: "hitoribocchi",
      genre: "Action, Adventure, Comedy, Fantasy, Harem, Romance",
      sinopsis: "Bocchi tiba-tiba dipindahkan ke dunia lain! Dan dunia lain itu adalah dunia game yang pernah dia mainkan dulu. Bocchi, yang selalu sendirian dalam hidup, harus memulai petualangan di dunia lain sendirian. Dalam keputusasaan karena sendirian, dia mengikuti saran dari dewi game dan mencoba untuk menaklukkan dunia lain sendirian—."
    },
    {
      judul: "Houkago no Seijo Bahasa Indonesia",
      keyword: "houkago",
      genre: "Fantasy, Romance, School",
      sinopsis: "“Jadilah milikku.” Suatu hari setelah sekolah, aku dipanggil oleh seorang gadis cantik yang merupakan santa—!? Kehidupan sekolah menengahku berubah drastis setelah bertemu dengan santa cantik itu!"
    }
  ],
  "I": [],
  "J": [],
  "K": [],
  "L": [],
  "M": [],
  "N": [],
  "O": [],
  "P": [],
  "Q": [],
  "R": [],
  "S": [],
  "T": [],
  "U": [],
  "V": [],
  "W": [],
  "X": [],
  "Y": [],
  "Z": []
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
