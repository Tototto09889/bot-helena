// daftarnovel.gs
// Objek daftarNovel berisi informasi novel-novel yang tersedia di bot.
// Setiap properti objek adalah huruf abjad awal judul novel (huruf besar).
// Nilai setiap properti adalah array objek, dengan setiap objek merepresentasikan satu novel.
// Struktur objek novel:
//   judul: Judul lengkap novel (untuk ditampilkan di menu)
//   keyword: Kata kunci untuk pencarian inline (gunakan huruf kecil, tanpa spasi)
//   genre: Genre novel (untuk deskripsi singkat)
//   sinopsis: Sinopsis singkat novel (untuk deskripsi lebih detail)

const daftarNovel = {
  "A": [
    {
      judul: "Arifureta: From Commonplace to World's Strongest",
      keyword: "arifureta",
      genre: "Isekai, Action, Fantasy",
      sinopsis: "Di dunia fantasi yang kejam, Hajime Nagumo dan teman-teman sekelasnya dipanggil sebagai pahlawan. Namun, Hajime mendapati dirinya sebagai yang terlemah dan dikhianati oleh teman-temannya. Terjatuh ke dalam jurang keputusasaan, Hajime harus berjuang untuk bertahan hidup dan menjadi yang terkuat untuk kembali ke rumah."
    },
    {
      judul: "Attack on Titan",
      keyword: "attackontitan",
      genre: "Action, Dark Fantasy, Post-apocalyptic",
      sinopsis: "Dalam dunia yang dikuasai oleh Titan raksasa pemakan manusia, umat manusia berjuang untuk bertahan hidup di balik tembok-tembok raksasa. Eren Yeager dan teman-temannya bergabung dengan Survey Corps untuk melawan Titan dan mengungkap misteri dunia mereka yang mengerikan."
    },
    {
      judul: "Assassination Classroom",
      keyword: "assassinationclassroom",
      genre: "Action, Comedy, School",
      sinopsis: "Ketika makhluk misterius menghancurkan sebagian bulan dan mengancam Bumi dengan nasib yang sama, kelas 3-E SMP Kunugigaoka diberi misi mustahil: membunuh makhluk tersebut, yang menjadi guru wali kelas mereka, sebelum akhir tahun ajaran."
    },
    {
      judul: "Another",
      keyword: "another",
      genre: "Horror, Mystery, Thriller",
      sinopsis: "Kouichi Sakakibara pindah ke SMP Yomiyama Utara dan menemukan suasana kelas 3-3 yang aneh dan menakutkan. Terikat oleh kutukan misterius yang melibatkan kematian siswa dan guru di masa lalu, Kouichi dan teman-temannya berusaha mengungkap kebenaran di balik teror yang menghantui kelas mereka."
    }
  ],
  "B": [
    {
      judul: "Berserk of Gluttony",
      keyword: "berserkofgluttony",
      genre: "Dark Fantasy, Action, Isekai",
      sinopsis: "Fate Graphite dihina karena skill 'Gluttony' yang dianggap tidak berguna, yang hanya membuatnya merasa lapar. Namun, dia menemukan bahwa skill tersebut memiliki kekuatan tersembunyi: Gluttony dapat melahap jiwa makhluk yang dibunuh dan mengambil kekuatan mereka. Dengan kekuatan baru ini, Fate memulai perjalanan berbahaya untuk mengubah takdirnya dan melindungi orang-orang yang dicintainya."
    },
    {
      judul: "Black Clover",
      keyword: "blackclover",
      genre: "Action, Fantasy, Magic",
      sinopsis: "Di dunia di mana sihir adalah segalanya, Asta lahir tanpa kekuatan sihir sama sekali. Meskipun demikian, Asta bercita-cita menjadi Kaisar Sihir terhebat. Dengan semangat pantang menyerah dan kekuatan anti-sihir yang misterius, Asta dan teman-temannya dari Black Bulls berjuang melawan berbagai ancaman untuk melindungi kerajaan mereka."
    },
    {
      judul: "Bleach",
      keyword: "bleach",
      genre: "Action, Supernatural, Shounen",
      sinopsis: "Ichigo Kurosaki, seorang siswa SMA yang memiliki kemampuan melihat hantu, tiba-tiba menjadi Soul Reaper setelah bertemu dengan Rukia Kuchiki. Ichigo kemudian terlibat dalam dunia roh dan harus berjuang melawan Hollows jahat serta melindungi teman dan keluarganya."
    },
    {
      judul: "Boruto: Naruto Next Generations",
      keyword: "boruto",
      genre: "Action, Adventure, Fantasy",
      sinopsis: "Boruto Uzumaki, putra Hokage Naruto, memasuki Akademi Ninja untuk menempa jalannya sendiri. Meskipun berbakat, Boruto merasa terbebani oleh bayang-bayang ayahnya dan berusaha membuktikan kemampuannya sendiri sambil menghadapi ancaman baru yang muncul di dunia ninja yang damai."
    }
  ],
  "C": [
     {
      judul: "Classroom of the Elite",
      keyword: "classroomelite",
      genre: "Psychological, School, Slice of Life",
      sinopsis: "Kiyotaka Ayanokoji memasuki SMA Tokyo Metropolitan Advanced Nurturing, sekolah elit yang menjanjikan masa depan cerah. Namun, dia ditempatkan di Kelas D, kelas buangan yang berisi siswa-siswa bermasalah. Di sana, Kiyotaka harus menggunakan kecerdasan dan kelicikannya untuk bertahan hidup dan naik ke puncak sekolah."
    },
    {
      judul: "Code Geass",
      keyword: "codegeass",
      genre: "Mecha, Military, Sci-Fi",
      sinopsis: "Diperbudak oleh Kekaisaran Britannia, Jepang (sekarang Area 11) menjadi medan pertempuran antara pemberontak dan penguasa. Lelouch Lamperouge, seorang siswa yang menyimpan dendam terhadap Britannia, mendapatkan kekuatan misterius bernama Geass. Dengan kekuatan ini, Lelouch memulai pemberontakan untuk menghancurkan Britannia dan menciptakan dunia yang lebih baik untuk adiknya."
    },
    {
      judul: "Charlotte",
      keyword: "charlotte",
      genre: "Superpower, School, Drama",
      sinopsis: "Yu Otosaka adalah seorang remaja yang memiliki kemampuan mencuri tubuh orang lain selama 5 detik. Dia menggunakan kekuatannya untuk keuntungan pribadi sampai bertemu dengan Nao Tomori, ketua OSIS yang misterius. Nao mengungkap keberadaan lebih banyak remaja dengan kekuatan supernatural dan mengajak Yu untuk bergabung dalam misi melindungi mereka dari eksploitasi."
    }
  ],
  "D": [
    {
      judul: "Death Note",
      keyword: "deathnote",
      genre: "Mystery, Police, Psychological, Supernatural, Thriller",
      sinopsis: "Light Yagami, seorang siswa SMA jenius, menemukan Death Note, buku catatan kematian milik Shinigami. Dengan Death Note, Light dapat membunuh siapa pun hanya dengan menulis nama mereka di buku tersebut. Terobsesi untuk menciptakan dunia tanpa kejahatan, Light memulai aksinya sebagai 'Kira', hakim dunia baru yang misterius, dan berhadapan dengan detektif jenius L."
    },
    {
      judul: "Demon Slayer",
      keyword: "demonslayer",
      genre: "Action, Demons, Historical, Supernatural",
      sinopsis: "Di Jepang era Taisho, Tanjiro Kamado kembali ke rumah dan menemukan keluarganya dibantai oleh iblis, dan satu-satunya yang selamat adalah adiknya, Nezuko, yang telah berubah menjadi iblis. Untuk menyembuhkan Nezuko dan membalaskan dendam keluarganya, Tanjiro bergabung dengan Korps Pembasmi Iblis dan memulai perjalanan berbahaya melawan iblis."
    },
    {
      judul: "DanMachi (Is It Wrong to Try to Pick Up Girls in a Dungeon?)",
      keyword: "danmachi",
      genre: "Action, Adventure, Comedy, Fantasy, Romance",
      sinopsis: "Di kota Orario, para petualang menjelajahi Dungeon, labirin bawah tanah berbahaya yang penuh monster dan harta karun. Bell Cranel, seorang petualang pemula, bertemu dengan dewi Hestia dan memulai petualangannya di Dungeon dengan harapan menjadi petualang terhebat dan menemukan cinta."
    }
  ],
  "E": [
    {
      judul: "Erased",
      keyword: "erased",
      genre: "Mystery, Psychological, Supernatural, Thriller",
      sinopsis: "Satoru Fujinuma memiliki kemampuan 'Revival', yang membuatnya dapat kembali ke masa lalu untuk mencegah kejadian buruk. Ketika ibunya terbunuh, Satoru terlempar kembali ke masa lalu, ke masa kecilnya sebelum teman-teman sekelasnya menjadi korban pembunuhan berantai. Satoru harus menggunakan Revival untuk mengungkap pelaku sebenarnya dan mengubah masa depan."
    },
    {
        judul: "Eighty-Six",
        keyword: "eightysix",
        genre: "Action, Military, Sci-Fi, Drama",
        sinopsis: "Republik San Magnolia berperang melawan Kekaisaran Giadian yang menggunakan drone otomatis 'Legion'. Namun, di balik propaganda kemenangan, terdapat kenyataan pahit: Eighty-Six, distrik ke-86 yang tidak diakui sebagai manusia, dipaksa untuk berperang sebagai umpan meriam. Shinei Nouzen, seorang Eighty-Six yang selamat, memimpin pasukan Spearhead dalam misi bunuh diri melawan Legion."
    }
  ],
  "F": [
    {
      judul: "Fate/stay night: Unlimited Blade Works",
      keyword: "fatestaynightubw",
      genre: "Action, Fantasy, Magic, Supernatural",
      sinopsis: "Dalam Perang Cawan Suci, tujuh Master dan tujuh Servant bertarung untuk memperebutkan Cawan Suci yang mahakabul. Shirou Emiya, seorang siswa SMA yang bercita-cita menjadi pahlawan keadilan, tanpa sengaja terlibat dalam perang ini dan memanggil Saber sebagai Servant-nya. Bersama Saber, Shirou harus menghadapi musuh-musuh kuat dan mengungkap misteri di balik Perang Cawan Suci."
    },
     {
        judul: "Fullmetal Alchemist: Brotherhood",
        keyword: "fullmetalalchemistbrotherhood",
        genre: "Action, Adventure, Fantasy",
        sinopsis: "Dua saudara alkemis, Edward dan Alphonse Elric, melakukan kesalahan fatal dalam mencoba menghidupkan kembali ibu mereka dengan alkimia. Akibatnya, Alphonse kehilangan seluruh tubuhnya dan Edward kehilangan tangan kanannya. Untuk mengembalikan tubuh Alphonse dan menebus kesalahan mereka, mereka memulai perjalanan mencari Batu Bertuah legendaris."
    }
  ],
  "G": [
    {
      judul: "Goblin Slayer",
      keyword: "goblinslayer",
      genre: "Action, Dark Fantasy, Adventure",
      sinopsis: "Di dunia fantasi yang penuh dengan monster, Goblin Slayer adalah seorang petualang yang hanya fokus membasmi goblin. Setelah desa kampung halamannya dihancurkan oleh goblin, Goblin Slayer bersumpah untuk memusnahkan semua goblin di dunia dan melindungi umat manusia dari ancaman mereka."
    },
    {
      judul: "Gate: Jieitai Kanochi nite, Kaku Tatakaeri",
      keyword: "gate",
      genre: "Action, Adventure, Fantasy, Military",
      sinopsis: "Sebuah gerbang misterius muncul di Ginza, Tokyo, menghubungkan dunia modern dengan dunia fantasi yang penuh dengan monster dan kerajaan magis. Pasukan Bela Diri Jepang (JSDF) dikirim ke dunia fantasi untuk menyelidiki dan menjalin hubungan dengan penduduk dunia lain. Youji Itami, seorang otaku JSDF, memimpin pasukan JSDF dalam petualangan mereka di dunia fantasi yang penuh dengan bahaya dan keajaiban."
    }
  ],
  "H": [
    {
      judul: "Hunter x Hunter",
      keyword: "hunterxhunter",
      genre: "Action, Adventure, Fantasy, Shounen",
      sinopsis: "Gon Freecss bercita-cita menjadi Hunter, petualang elit yang berburu harta karun, monster, dan manusia. Untuk mencapai tujuannya, Gon mengikuti ujian Hunter yang sangat sulit dan bertemu dengan teman-teman baru seperti Killua, Kurapika, dan Leorio. Bersama-sama, mereka menghadapi berbagai tantangan dan mengungkap misteri dunia Hunter."
    },
    {
      judul: "Haikyuu!!",
      keyword: "haikyuu",
      genre: "Comedy, School, Shounen, Sports",
      sinopsis: "Shoyo Hinata, seorang siswa SMP pendek, terinspirasi untuk bermain voli setelah menonton pertandingan SMA di TV. Meskipun tidak memiliki tinggi badan yang ideal, Hinata memiliki semangat juang yang tinggi dan refleks yang luar biasa. Dia bergabung dengan klub voli SMA Karasuno dan bertekad untuk membawa timnya ke puncak nasional."
    },
    {
      judul: "Horimiya",
      keyword: "horimiya",
      genre: "Comedy, Romance, School, Slice of Life",
      sinopsis: "Kyouko Hori, seorang siswi SMA populer dan pintar, dan Izumi Miyamura, seorang siswa pendiam dan berkacamata, memiliki sisi rahasia yang tidak diketahui teman-teman sekelas mereka. Ketika mereka bertemu di luar sekolah, mereka saling mengungkap sisi lain dari diri mereka dan memulai hubungan yang unik dan menghangatkan hati."
    }
  ],
  "I": [
    {
      judul: "Inuyasha",
      keyword: "inuyasha",
      genre: "Action, Adventure, Comedy, Fantasy, Historical, Romance, Supernatural",
      sinopsis: "Kagome Higurashi, seorang siswi SMA dari Tokyo modern, terlempar kembali ke era Sengoku Jepang setelah terjatuh ke dalam sumur keramat di kuil keluarganya. Di sana, dia bertemu dengan Inuyasha, siluman setengah manusia setengah anjing, dan bersama-sama mereka memulai perjalanan untuk mengumpulkan pecahan-pecahan Bola Shikon yang legendaris dan mengalahkan iblis jahat Naraku."
    },
    {
        judul: "Infinite Dendrogram",
        keyword: "infinitedendrogram",
        genre: "Sci-Fi, Game, Action, Fantasy",
        sinopsis: "Reiji Mukudori memulai kehidupan kuliahnya di Tokyo, tetapi memutuskan untuk menunda kuliahnya untuk memainkan game VRMMORPG 'Infinite Dendrogram'. Dengan bantuan kakaknya yang veteran, Shuu, Reiji memulai petualangan di dunia game yang luas dan penuh kemungkinan tak terbatas."
    }
  ],
  "J": [
    {
      judul: "Jujutsu Kaisen",
      keyword: "jujutsukaisen",
      genre: "Action, Supernatural, Horror",
      sinopsis: "Yuuji Itadori, seorang siswa SMA dengan kemampuan fisik luar biasa, menelan jari kutukan untuk melindungi teman-temannya dari roh jahat. Akibatnya, dia menjadi wadah bagi Ryomen Sukuna, Raja Kutukan yang kuat. Di bawah bimbingan penyihir jujutsu, Yuuji memulai perjalanan berbahaya untuk mengendalikan kekuatan Sukuna dan melawan kutukan jahat."
    }
  ],
  "K": [
    {
      judul: "Kaguya-sama: Love Is War",
      keyword: "kaguyasama",
      genre: "Comedy, Psychological, Romance, School, Slice of Life",
      sinopsis: "Miyuki Shirogane dan Kaguya Shinomiya, ketua OSIS dan wakil ketua OSIS SMA Shuchiin, adalah dua orang jenius yang saling mencintai, tetapi terlalu gengsi untuk mengakuinya. Mereka memulai perang cinta yang rumit dan lucu, berusaha membuat pihak lain mengaku terlebih dahulu."
    },
    {
      judul: "Kimetsu no Yaiba (Demon Slayer)",
      keyword: "kimetsunoyaiba",
      genre: "Action, Demons, Historical, Supernatural",
      sinopsis: "Sama dengan sinopsis Demon Slayer di atas (karena judul alternatif)"
    },
    {
      judul: "Konosuba: God's Blessing on This Wonderful World!",
      keyword: "konosuba",
      genre: "Adventure, Comedy, Fantasy, Isekai, Parody, Supernatural",
      sinopsis: "Kazuma Satou, seorang NEET yang menyedihkan, meninggal dalam kecelakaan lalu lintas yang memalukan dan bereinkarnasi ke dunia fantasi. Bersama dewi Aqua yang menyebalkan, penyihir Megumin yang obsesif dengan ledakan, dan crusader Darkness yang masokis, Kazuma memulai petualangan konyol dan penuh kekacauan di dunia fantasi yang tidak sesuai harapannya."
    }
  ],
  "L": [
    {
      judul: "Log Horizon",
      keyword: "loghorizon",
      genre: "Action, Adventure, Fantasy, Game",
      sinopsis: "Tiga puluh ribu pemain game online Elder Tale terjebak di dalam dunia game setelah update ekspansi terbaru. Shiroe, seorang penyihir veteran yang cerdas dan licik, harus memimpin para pemain lain untuk bertahan hidup di dunia game yang kini menjadi kenyataan dan mengungkap misteri di balik fenomena ini."
    },
    {
      judul: "Love, Chunibyo & Other Delusions!",
      keyword: "chunibyo",
      genre: "Comedy, Romance, School, Slice of Life",
      sinopsis: "Yuuta Togashi berusaha melupakan masa lalunya yang memalukan sebagai penderita 'chunibyo' (delusi tingkat SMP) saat memasuki SMA. Namun, dia bertemu dengan Rikka Takanashi, seorang gadis 'chunibyo' akut yang membuatnya kembali terlibat dalam dunia delusi dan fantasi yang kocak dan mengharukan."
    },
    {
        judul: "Lycoris Recoil",
        keyword: "lycorisrecoil",
        genre: "Action, Slice of Life",
        sinopsis: "Di dunia yang damai berkat organisasi rahasia 'Lycoris', Chisato Nishikigi adalah Lycoris terkuat yang legendaris. Bersama rekannya yang baru, Takina Inoue, Chisato bekerja di LycoReco, sebuah cabang Lycoris yang menyamar sebagai kafe, sambil menghadapi berbagai misi dan masalah pribadi."
    }
  ],
  "M": [
    {
      judul: "Mushoku Tensei: Jobless Reincarnation",
      keyword: "mushokutensei",
      genre: "Drama, Fantasy, Isekai",
      sinopsis: "Seorang NEET berusia 34 tahun bereinkarnasi ke dunia fantasi sebagai bayi bernama Rudeus Greyrat. Dengan ingatan dari kehidupan sebelumnya, Rudeus bertekad untuk menjalani kehidupan baru yang lebih baik dan menghindari kesalahan masa lalunya. Dia memulai perjalanan panjang untuk mengembangkan kekuatannya, menemukan jati dirinya, dan menghadapi takdirnya di dunia baru ini."
    },
    {
      judul: "My Hero Academia",
      keyword: "myheroacademia",
      genre: "Action, Comedy, School, Superpower",
      sinopsis: "Di dunia di mana hampir semua orang memiliki 'Quirk' (kekuatan super), Izuku Midoriya lahir tanpa Quirk sama sekali. Meskipun demikian, dia bercita-cita menjadi pahlawan super seperti idolanya, All Might. Setelah pertemuan takdir dengan All Might, Izuku mewarisi Quirk 'One For All' dan memasuki SMA UA, sekolah pahlawan terkemuka, untuk mewujudkan impiannya."
    },
    {
      judul: "Made in Abyss",
      keyword: "madeinabyss",
      genre: "Adventure, Dark Fantasy, Mystery, Sci-Fi",
      sinopsis: "Riko, seorang gadis yatim piatu yang tinggal di kota Orth, bercita-cita menjadi Cave Raider legendaris seperti ibunya. Ketika dia menemukan robot humanoid bernama Reg, mereka berdua memulai petualangan berbahaya menuruni Abyss, jurang raksasa misterius yang penuh dengan makhluk aneh dan relik kuno, untuk mencari ibunya yang hilang."
    },
    {
      judul: "Mob Psycho 100",
      keyword: "mobpsycho100",
      genre: "Action, Comedy, Slice of Life, Supernatural",
      sinopsis: "Shigeo 'Mob' Kageyama adalah seorang siswa SMP yang memiliki kekuatan psikis yang luar biasa. Mob berusaha menjalani kehidupan normal dan menekan emosinya agar tidak kehilangan kendali atas kekuatannya yang berbahaya. Namun, berbagai kejadian supernatural dan pertemuan dengan esper lain terus menguji batas kemampuannya."
    },
     {
        judul: "Monogatari Series",
        keyword: "monogatari",
        genre: "Mystery, Supernatural, Romance, Vampire",
        sinopsis: "Koyomi Araragi, seorang siswa SMA yang selamat dari serangan vampir, terlibat dalam kehidupan gadis-gadis yang menderita 'keanehan' supernatural. Setiap cerita berfokus pada satu gadis dan 'keanehan' yang mereka hadapi, dengan Koyomi berusaha membantu mereka sambil menghadapi masa lalunya sendiri."
    }
  ],
  "N": [
    {
      judul: "Naruto",
      keyword: "naruto",
      genre: "Action, Adventure, Comedy, Martial Arts, Shounen, Supernatural",
      sinopsis: "Naruto Uzumaki, seorang ninja yatim piatu yang dikucilkan oleh desanya, bercita-cita menjadi Hokage, pemimpin desa Konohagakure. Dengan semangat pantang menyerah dan bantuan teman-temannya, Naruto berjuang untuk diakui dan melindungi desa tercintanya dari berbagai ancaman."
    },
    {
      judul: "No Game No Life",
      keyword: "nogamenolife",
      genre: "Adventure, Comedy, Ecchi, Fantasy, Game, Supernatural",
      sinopsis: "Sora dan Shiro, kakak beradik NEET dan gamer jenius, dipanggil ke dunia Disboard, dunia di mana segala sesuatu diputuskan melalui permainan. Di dunia ini, mereka bertemu dengan dewi Tet dan memulai petualangan untuk menantang semua ras dan menjadi dewa dunia permainan."
    },
    {
      judul: "Nisekoi: False Love",
      keyword: "nisekoi",
      genre: "Comedy, Harem, Romance, School",
      sinopsis: "Raku Ichijo, putra seorang bos yakuza, dan Chitoge Kirisaki, putri seorang bos gangster, terpaksa berpura-pura menjadi pasangan kekasih untuk mencegah perang antar geng. Meskipun saling membenci pada awalnya, mereka perlahan mulai mengembangkan perasaan satu sama lain di tengah kepura-puraan dan kesalahpahaman yang lucu."
    },
    {
        judul: "Ningen Fushin no Boukenshatachi ga Sekai o Sukuu Youdesu (The Adventurers Who Don't Believe in Humanity Will Save the World)",
        keyword: "ningenfushin",
        genre: "Fantasy, Adventure, Comedy",
        sinopsis: "Nick, seorang petualang yang dikeluarkan dari party heroiknya, bergabung dengan party baru yang beranggotakan petualang-petualang yang juga tidak percaya pada kemanusiaan. Bersama-sama, mereka membentuk ikatan yang unik dan memulai petualangan untuk bertahan hidup dan membuktikan bahwa mereka bisa menyelamatkan dunia meskipun memiliki masa lalu yang kelam."
    }
  ],
  "O": [
    {
      judul: "One Punch Man",
      keyword: "onepunchman",
      genre: "Action, Comedy, Parody, Sci-Fi, Superpower, Supernatural",
      sinopsis: "Saitama, seorang pahlawan super yang terlalu kuat, mampu mengalahkan semua musuh hanya dengan satu pukulan. Bosan dengan kekuatannya yang tak tertandingi, Saitama mencari lawan yang sepadan dan petualangan yang lebih menantang sambil menjalani kehidupan sehari-hari yang membosankan."
    },
    {
      judul: "Overlord",
      keyword: "overlord",
      genre: "Action, Adventure, Fantasy, Game, Isekai, Magic, Supernatural",
      sinopsis: "Ketika server game online Yggdrasil akan ditutup, Momonga, seorang pemain veteran, memutuskan untuk tetap tinggal di dalam game sampai akhir. Namun, server tidak pernah ditutup, dan Momonga mendapati dirinya terjebak di dalam dunia game sebagai karakter kerangka kuat bernama Ainz Ooal Gown. Bersama para NPC setia yang kini memiliki kesadaran, Ainz memulai misinya untuk menaklukkan dunia baru ini."
    },
    {
      judul: "Oregairu (My Teen Romantic Comedy SNAFU)",
      keyword: "oregairu",
      genre: "Comedy, Drama, Romance, School, Slice of Life",
      sinopsis: "Hachiman Hikigaya, seorang siswa SMA penyendiri dan sinis, dipaksa bergabung dengan Klub Relawan sekolah. Di sana, dia bertemu dengan Yukino Yukinoshita, gadis cantik dan cerdas yang juga memiliki kepribadian dingin dan idealis. Bersama-sama, mereka membantu siswa lain memecahkan masalah mereka, tetapi juga menghadapi masalah pribadi dan kesulitan dalam memahami hubungan sosial."
    },
     {
        judul: "Oshi no Ko",
        keyword: "oshinoko",
        genre: "Drama, Mystery, Supernatural, Reincarnation",
        sinopsis: "Seorang dokter kandungan yang terobsesi dengan idol bernama Ai Hoshino, secara tragis terbunuh oleh stalker. Namun, dia bereinkarnasi sebagai salah satu anak kembar Ai. Dengan ingatan dari kehidupan sebelumnya, dia menyaksikan sisi gelap industri hiburan dan bertekad untuk mengungkap misteri kematian Ai dan membalas dendam."
    }
  ],
  "P": [
    {
      judul: "Parasyte -the maxim-",
      keyword: "parasyte",
      genre: "Action, Horror, Sci-Fi, Psychological",
      sinopsis: "Shinichi Izumi, seorang siswa SMA biasa, menjadi korban parasit alien yang mencoba mengambil alih otaknya. Namun, parasit tersebut hanya berhasil menginfeksi tangan kanannya dan menjadi 'Migi', parasit yang hidup berdampingan dengan Shinichi. Bersama Migi, Shinichi harus berjuang melawan parasit lain yang mengancam umat manusia dan menghadapi dilema moral tentang keberadaan mereka."
    },
    {
      judul: "Psycho-Pass",
      keyword: "psychopass",
      genre: "Action, Police, Sci-Fi",
      sinopsis: "Di masa depan distopia, sistem Sibyl mengukur tingkat stres mental dan kecenderungan kriminalitas setiap orang dengan 'Psycho-Pass'. Akane Tsunemori, seorang Inspektur baru di Biro Investigasi Kriminal, harus bekerja sama dengan Enforcer Shinya Kogami, seorang mantan Inspektur yang Psycho-Pass-nya keruh, untuk menegakkan hukum dan mengungkap kebenaran di balik sistem Sibyl yang kompleks dan korup."
    },
    {
      judul: "Promised Neverland",
      keyword: "promisedneverland",
      genre: "Horror, Mystery, Psychological, Sci-Fi, Thriller",
      sinopsis: "Emma, Norman, dan Ray adalah anak-anak yatim piatu yang hidup bahagia di panti asuhan Grace Field House. Namun, mereka menemukan kebenaran mengerikan tentang panti asuhan mereka yang ternyata adalah peternakan manusia untuk iblis. Dengan kecerdasan dan keberanian mereka, Emma, Norman, dan Ray merencanakan pelarian massal dari panti asuhan neraka tersebut."
    }
  ],
  "Q": [],
  "R": [
    {
      judul: "Re:Zero - Starting Life in Another World-",
      keyword: "rezero",
      genre: "Action, Adventure, Drama, Fantasy, Psychological, Thriller",
      sinopsis: "Subaru Natsuki, seorang NEET yang tiba-tiba dipanggil ke dunia fantasi, mendapatkan kemampuan 'Return by Death', yang membuatnya dapat kembali ke titik penyimpanan setiap kali dia mati. Terjebak dalam siklus kematian dan keputusasaan, Subaru harus menggunakan kemampuannya untuk melindungi orang-orang yang dicintainya dan mengungkap misteri dunia baru yang kejam ini."
    },
    {
      judul: "Rent-A-Girlfriend",
      keyword: "rentagirlfriend",
      genre: "Comedy, Romance, School",
      sinopsis: "Kazuya Kinoshita, seorang mahasiswa yang patah hati, menyewa pacar sewaan bernama Chizuru Ichinose untuk mengatasi kesepiannya. Meskipun awalnya hanya hubungan palsu, Kazuya dan Chizuru perlahan mulai mengembangkan perasaan yang nyata satu sama lain di tengah situasi yang rumit dan lucu."
    },
    {
      judul: "Rascal Does Not Dream of Bunny Girl Senpai",
      keyword: "bunnygirlsenpai",
      genre: "Comedy, Romance, School, Supernatural",
      sinopsis: "Sakuta Azusagawa, seorang siswa SMA yang sering dianggap sebagai 'anak bermasalah', bertemu dengan Mai Sakurajima, seorang aktris terkenal yang tiba-tiba menghilang dari pandangan orang-orang kecuali dirinya. Sakuta menyadari bahwa Mai menderita 'Sindrom Pubertas', fenomena misterius yang menyebabkan kejadian supernatural pada remaja. Bersama-sama, mereka berusaha memecahkan misteri Sindrom Pubertas dan membantu gadis-gadis lain yang menderitanya."
    },
    {
      judul: "Rising of the Shield Hero",
      keyword: "shieldhero",
      genre: "Action, Adventure, Fantasy, Isekai",
      sinopsis: "Naofumi Iwatani, seorang mahasiswa biasa, dipanggil ke dunia lain sebagai 'Pahlawan Perisai'. Namun, dia dikhianati dan difitnah oleh kerajaan, membuatnya menjadi orang yang paling dibenci dan direndahkan. Dikhianati dan sendirian, Naofumi harus berjuang untuk bertahan hidup dan membuktikan dirinya sebagai pahlawan sejati dengan perisai legendarisnya."
    }
  ],
  "S": [
    {
      judul: "Sword Art Online",
      keyword: "swordartonline",
      genre: "Action, Adventure, Fantasy, Game, Romance",
      sinopsis: "Kazuto 'Kirito' Kirigaya terjebak di dalam game virtual reality Sword Art Online bersama ribuan pemain lainnya. Jika mereka mati di dalam game, mereka juga akan mati di dunia nyata. Kirito harus berjuang untuk bertahan hidup dan menyelesaikan game tersebut untuk kembali ke dunia nyata dan menyelamatkan semua pemain yang terjebak."
    },
    {
      judul: "Steins;Gate",
      keyword: "steinsgate",
      genre: "Sci-Fi, Psychological, Thriller",
      sinopsis: "Rintaro Okabe, seorang ilmuwan gila yang mengaku dirinya 'ilmuwan gila yang gila', secara tidak sengaja menemukan cara untuk mengirim pesan ke masa lalu. Bersama teman-temannya di laboratorium, Okabe mulai bereksperimen dengan mesin waktu buatannya, tanpa menyadari konsekuensi mengerikan yang akan menimpa mereka dan dunia di sekitar mereka."
    },
    {
      judul: "Spy x Family",
      keyword: "spyxfamily",
      genre: "Action, Comedy, Slice of Life",
      sinopsis: "Twilight, mata-mata terhebat Westalis, diberi misi rahasia untuk menyusup ke sekolah elit Eden Academy untuk mendekati Donovan Desmond, tokoh penting Ostania. Untuk menjalankan misinya, Twilight membentuk keluarga palsu dengan Yor Briar, seorang pembunuh bayaran, dan Anya, seorang gadis kecil yang memiliki kemampuan membaca pikiran. Keluarga Forger yang unik dan penuh rahasia ini memulai petualangan kocak dan penuh aksi untuk menjaga perdamaian dunia."
    },
    {
      judul: "Seven Deadly Sins",
      keyword: "sevendeadlysins",
      genre: "Action, Adventure, Fantasy, Magic, Shounen",
      sinopsis: "The Seven Deadly Sins, kelompok ksatria terkuat di Britannia yang difitnah dan dituduh berkhianat, diburu oleh Holy Knights. Elizabeth Liones, putri kerajaan Liones, mencari Seven Deadly Sins untuk meminta bantuan mereka dalam menyelamatkan kerajaannya dari tirani Holy Knights. Bersama Meliodas, kapten Seven Deadly Sins, Elizabeth memulai perjalanan epik untuk mengumpulkan kembali anggota Sins lainnya dan mengungkap kebenaran di balik pengkhianatan tersebut."
    },
    {
        judul: "Solo Leveling",
        keyword: "sololeveling",
        genre: "Action, Fantasy, Adventure",
        sinopsis: "Di dunia di mana portal ke dimensi lain muncul dan menghubungkan dunia manusia dengan dunia monster, para Hunter muncul untuk melawan monster dan melindungi umat manusia. Sung Jinwoo, seorang Hunter peringkat-E terlemah, secara tak terduga mendapatkan kekuatan misterius yang memungkinkannya untuk naik level tanpa batas. Dengan kekuatan barunya, Sung Jinwoo bertekad untuk menjadi Hunter terkuat dan mengungkap rahasia di balik portal dan kekuatannya."
    },
    {
        judul: "Shadows House",
        keyword: "shadowshouse",
        genre: "Mystery, Supernatural, Slice of Life",
        sinopsis: "Di rumah bangsawan Shadows House yang misterius, boneka hidup melayani keluarga bangsawan Shadows yang tanpa wajah. Emilico, boneka hidup yang ceria dan polos, melayani Kate Shadow, seorang bangsawan Shadows yang dingin dan misterius. Bersama-sama, mereka mengungkap rahasia gelap Shadows House dan dunia di balik tirai kemewahan."
    }
  ],
  "T": [
    {
      judul: "Tokyo Ghoul",
      keyword: "tokyoghoul",
      genre: "Action, Dark Fantasy, Horror, Supernatural",
      sinopsis: "Ken Kaneki, seorang mahasiswa biasa, menjadi setengah ghoul setelah selamat dari serangan ghoul. Terjebak di antara dunia manusia dan ghoul, Kaneki harus beradaptasi dengan kehidupan barunya sebagai ghoul dan berjuang untuk bertahan hidup di dunia Tokyo yang gelap dan berbahaya, di mana manusia dan ghoul saling memangsa."
    },
    {
      judul: "That Time I Got Reincarnated as a Slime",
      keyword: "tensura",
      genre: "Fantasy, Isekai, Adventure",
      sinopsis: "Satoru Mikami, seorang pekerja kantoran biasa, terbunuh dan bereinkarnasi ke dunia lain sebagai slime lemah. Meskipun lemah di awal, Rimuru Tempest (nama barunya) memiliki kemampuan unik 'Predator' yang membuatnya dapat melahap apa pun dan mendapatkan kekuatan mereka. Dengan kemampuan ini, Rimuru memulai perjalanan untuk membangun bangsa monster yang damai dan makmur di dunia fantasi yang penuh dengan konflik dan intrik."
    },
    {
      judul: "Tower of God",
      keyword: "towerofgod",
      genre: "Action, Adventure, Fantasy, Mystery",
      sinopsis: "Rachel meninggalkan sahabatnya, Bam, untuk mendaki Tower of God, menara misterius yang konon dapat mengabulkan semua keinginan. Bam, yang hanya memiliki Rachel di hidupnya, memutuskan untuk mengejar Rachel dan mendaki menara tersebut meskipun penuh dengan bahaya dan tantangan yang mematikan. Di dalam menara, Bam bertemu dengan berbagai karakter unik dan mengungkap misteri di balik menara dan takdirnya sendiri."
    },
    {
        judul: "The Eminence in Shadow",
        keyword: "eminenceinshadow",
        genre: "Action, Comedy, Fantasy, Isekai",
        sinopsis: "Cid Kageno memiliki impian tersembunyi: menjadi 'dalang bayangan' yang menarik benang dari balik layar dan mempengaruhi jalannya dunia. Dia berlatih tanpa lelah untuk mencapai kekuatan absolut, tetapi menyadari bahwa kekuatan saja tidak cukup untuk mewujudkan impiannya. Ketika dia bereinkarnasi ke dunia lain, Cid memutuskan untuk mewujudkan impiannya dengan cara yang paling absurd dan menggelikan, menciptakan organisasi fiktif 'Shadow Garden' dan menyebarkan kebohongan yang menjadi kenyataan."
    }
  ],
  "U": [],
  "V": [],
  "W": [],
  "X": [],
  "Y": [
     {
        judul: "Your Lie in April",
        keyword: "yourlieinapril",
        genre: "Drama, Music, Romance, School",
        sinopsis: "Kousei Arima, seorang pianis jenius, kehilangan kemampuan untuk mendengar suara pianonya setelah trauma kematian ibunya. Bertahun-tahun kemudian, dia bertemu dengan Kaori Miyazono, seorang pemain biola ceria dan bersemangat bebas yang membantunya kembali ke dunia musik dan menghadapi trauma masa lalunya."
    }
  ],
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
