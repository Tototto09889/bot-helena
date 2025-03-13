const daftarNovel = {
  "#": [
    {
      judul: "10-nen Goshi no HikiNEET",
      keyword: "10-nen",
      genre: "Isekai, Fantasy",
      sinopsis: "Kamar tidurku terhubung ke dunia lain!? Tiba-tiba rumah kontrakan NEET berusia 30 tahun itu berpindah ke dunia lain."
    },
    {
      judul: "11 Eyes",
      keyword: "11 eyes",
      genre: "Action, Supernatural, Romance",
      sinopsis: "Lima belas tahun yang lalu, sebuah fenomena yang dikenal sebagai 'Bulan Merah' memicu serangkaian tragedi di seluruh dunia."
    }
  ],
  "A": [
    {
      judul: "Accel World",
      keyword: "accel world",
      genre: "Action, Sci-Fi, Romance",
      sinopsis: "Pada tahun 2046, teknologi Neuro-Link memungkinkan manusia untuk terhubung ke dunia virtual."
    }
  ],
  "B": [
    {
      judul: "Baka to Test to Shoukanjuu",
      keyword: "baka to test",
      genre: "Comedy, Romance, School",
      sinopsis: "Di Akademi Fumizuki, siswa dikelompokkan berdasarkan skor tes mereka. Kelas A adalah yang terbaik, sementara Kelas F adalah yang terburuk."
    }
  ],
  "C": [
    {
      judul: "Classroom of the Elite",
      keyword: "classroom of the elite",
      genre: "Drama, Psychological, School",
      sinopsis: "Koudo Ikusei Senior High School adalah sekolah bergengsi yang menjamin siswa untuk masuk ke universitas atau pekerjaan yang mereka inginkan."
    }
  ],
};

function getDaftarGenre() {
  let daftarGenre = new Set();
  for (const huruf in daftarNovel) {
    daftarNovel[huruf].forEach(novel => {
      novel.genre.split(', ').forEach(genre => daftarGenre.add(genre));
    });
  }
  return [...daftarGenre].sort();
}

function getMenuGenreKeyboard() {
  let daftarGenre = getDaftarGenre();
  let tombolGenre = daftarGenre.map(genre => [{ text: genre, callback_data: "genre_list_" + genre }]);
  tombolGenre.push([{ text: "Kembali ke Menu Utama 🤡", callback_data: "main_menu" }]);
  return { inline_keyboard: tombolGenre };
}

function getGenreListKeyboard(genre) {
  let novels = [];
  for (const huruf in daftarNovel) {
    daftarNovel[huruf].forEach(novel => {
      if (novel.genre.includes(genre)) {
        novels.push(novel);
      }
    });
  }
  let tombolNovel = novels.map(novel => [{ text: novel.judul, callback_data: "novel_page_" + novel.judul }]);
  tombolNovel.push([{ text: "Kembali ke Menu Genre 📜", callback_data: "daftar_genre" }]);
  return { inline_keyboard: tombolNovel };
}

function getMainMenuKeyboard() {
  let keyboard = {
    inline_keyboard: [
      [
        { text: "📚 Daftar Novel 🖤", callback_data: "daftar_novel" },
        { text: "📜 Daftar Genre 🖤", callback_data: "daftar_genre" }
      ],
      // Tambahkan tombol menu utama lainnya di sini jika ada
    ]
  };
  return keyboard;
}

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
        { text: "Kembali ke Menu Utama 🤡", callback_data: "main_menu" },
      ]
    ]
  };
  return keyboard;
}

function getNovelListKeyboard(huruf) {
  let novels = daftarNovel[huruf] || [];
  let tombolNovel = novels.map(novel => [{ text: novel.judul, callback_data: "novel_page_" + novel.judul }]);
  tombolNovel.push([{ text: "Kembali ke Menu Novel 🤡", callback_data: "daftar_novel" }]);
  return { inline_keyboard: tombolNovel };
}

function getNovelPageKeyboard(judulNovel) {
  let novel = null;
  for (const huruf in daftarNovel) {
    novel = daftarNovel[huruf].find(n => n.judul === judulNovel);
    if (novel) break;
  }

  if (!novel) {
    return getMenuNovelKeyboard();
  }

  let keyboard = {
    inline_keyboard: [
      [
        { text: "Telusuri Berkas 🔮", switch_inline_query_current_chat: novel.keyword }
      ],
      [
        { text: "Kembali ke Daftar Menu " + judulNovel.charAt(0).toUpperCase(), callback_data: "novel_list_" + judulNovel.charAt(0).toUpperCase() }
      ]
    ]
  };
  return keyboard;
}

function showMainMenu(chatId, messageId) {
  let menuText = "<b>Selamat datang di Menu Utama Kegelapan 🖤</b>\n\n<i>Pilih jalan yang ingin kamu tempuh...</i>";
  editMessageText(chatId, messageId, menuText, JSON.stringify(getMainMenuKeyboard()));
}

function showGenreMenu(chatId, messageId) {
  let menuText = "<b>📜 Daftar Genre - Pilih Genre Kegelapan...</b>\n\n<i>Gulir genre untuk menemukan kisah yang jiwamu cari... 🖤</i>";
  editMessageText(chatId, messageId, menuText, JSON.stringify(getMenuGenreKeyboard()));
}

function showGenreListPage(chatId, messageId, genre) {
  let listGenreKeyboard = getGenreListKeyboard(genre);
  if (listGenreKeyboard.inline_keyboard.length <= 1) {
    let menuText = `<b>📜 Daftar Novel - Genre ${genre} Kosong 👻</b>\n\n<i>Tidak ada arwah novel yang bersembunyi di genre ini... Kembali ke menu utama genre.</i>`;
    editMessageText(chatId, messageId, menuText, JSON.stringify({ inline_keyboard: [[        { text: "Kembali ke Menu Genre 📜", callback_data: "daftar_genre" }]] }));
  } else {
    let menuText = `<b>📜 Daftar Novel - Genre ${genre} 🖤</b>\n\n<i>Pilih novel yang memanggil jiwamu dari daftar berikut...</i>`;
    editMessageText(chatId, messageId, menuText, JSON.stringify(listGenreKeyboard));
  }
}

function showNovelMenu(chatId, messageId) {
  let menuText = "<b>📚 Daftar Novel - Pilih Abjad Kegelapan...</b>\n\n<i>Gulir abjad untuk menemukan kisah yang jiwamu cari... 🖤</i>";
  editMessageText(chatId, messageId, menuText, JSON.stringify(getMenuNovelKeyboard()));
}

function showNovelListPage(chatId, messageId, huruf) {
  let listNovelKeyboard = getNovelListKeyboard(huruf);
  if (listNovelKeyboard.inline_keyboard.length <= 1) {
    let menuText = `<b>📚 Daftar Novel - Abjad ${huruf.toUpperCase()} Kosong 👻</b>\n\n<i>Tidak ada arwah novel yang bersembunyi di abjad ini... Kembali ke menu utama novel.</i>`;
    editMessageText(chatId, messageId, menuText, JSON.stringify({ inline_keyboard: [[{ text: "Kembali ke Menu Novel", callback_data: "daftar_novel" }]] }));
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
    kirimPesan(chatId, "Novel tidak ditemukan dalam arsip kegelapan... 😈");
    return;
  }

  let novelText = `<b>📚 ${novel.judul} 🖤</b>\n\n<b>Genre 📜:</b> ${novel.genre}\n\n<b>Sinopsis 📜:</b> ${novel.sinopsis}\n\n<i>Jejak kisah dalam kehampaan digital... 🥀</i>`;
  editMessageText(chatId, messageId, novelText, JSON.stringify(getNovelPageKeyboard(judulNovel)));
}

// Fungsi dummy untuk simulasi editMessageText dan kirimPesan
function editMessageText(chatId, messageId, text, replyMarkup) {
  console.log(`Edit pesan di ${chatId} dengan ID ${messageId}: ${text}\nReply Markup: ${replyMarkup}`);
}

function kirimPesan(chatId, text) {
  console.log(`Kirim pesan ke ${chatId}: ${text}`);
}

// Contoh penggunaan (simulasi)
showMainMenu(123456789, 987654321);



