// daftarnovel.gs

// Daftar Novel (sementara, bisa diganti dengan data dari sheet atau sumber lain)
const daftarNovel = {
  "A": [
    {
      judul: "Arifureta: From Commonplace to World's Strongest",
      keyword: "arifureta",
      deskripsi: "Kisah Hajime Nagumo, seorang otaku biasa yang terlempar ke dunia lain dan berjuang untuk menjadi yang terkuat demi bertahan hidup."
    }
  ],
  "B": [
    {
      judul: "Berserk of Gluttony",
      keyword: "berserk gluttony",
      deskripsi: "Fate Graphite selalu dihina karena skill 'Gluttony' yang hanya membuatnya kelaparan. Namun, suatu hari ia menyadari kekuatan tersembunyi dari skill tersebut."
    }
  ],
  // ... bisa ditambahkan novel lain di sini sesuai abjad
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
  tombolNovel.push([{ text: "Kembali ke Menu Novel", callback_data: "daftar_novel" }]); // Tombol kembali ke menu novel A-Z
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
        { text: "🔮 Telusuri Berkas", switch_inline_query_current_chat: novel.keyword } // Inline query dengan keyword novel
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

  let novelText = `<b>📚 ${novel.judul} 🖤</b>\n\n<b>Deskripsi 📜:</b>\n${novel.deskripsi}\n\n<i>Jejak kisah dalam kehampaan digital... 🥀</i>`;
  editMessageText(chatId, messageId, novelText, JSON.stringify(getNovelPageKeyboard(judulNovel)));
}
