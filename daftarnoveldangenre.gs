const daftarNovel = {
    "#": [
        {
            judul: "10-nen Goshi no HikiNEET",
            keyword: "10-nen",
            genre: "Isekai, Fantasy",
            sinopsis: "Kamar tidurku terhubung ke dunia lain!? Tiba-tiba rumah kontrakan NEET berusia 30 tahun itu berpindah ke dunia lain."
        }
    ],
    "A": [
        {
            judul: "Arifureta Shokugyou de Sekai Saikyou",
            keyword: "arifureta",
            genre: "Isekai, Action, Fantasy",
            sinopsis: "Di kelas yang dipenuhi siswa bermasalah, Hajime Nagumo adalah orang biasa-biasa saja. Namun, saat kelas tersebut dipanggil ke dunia lain, Hajime mendapati dirinya tidak hanya lemah tapi juga terperangkap di ruang bawah tanah yang mengerikan. Akankah dia bertahan hidup di dunia yang penuh monster dan dewa?"
        },
        {
            judul: "Absolute Duo",
            keyword: "absolute duo",
            genre: "Action, Ecchi, Harem, School, Supernatural",
            sinopsis: "Kisah ini berlatar di sebuah sekolah menengah atas khusus, Akademi Koryo, di mana para siswa yang memiliki 'Blaze' — senjata yang merupakan manifestasi dari jiwa mereka — berpasangan untuk bertarung dan belajar bersama sebagai 'Duo' dengan tujuan menjadi yang terkuat."
        },
        {
            judul: "Accel World",
            keyword: "accel world",
            genre: "Sci-Fi, Action, Romance, School",
            sinopsis: "Pada tahun 2046, dunia virtual telah menjadi bagian dari kehidupan. Haruyuki Arita, seorang anak laki-laki gemuk yang sering di-bully, menemukan pelarian dalam game virtual. Suatu hari, dia bertemu dengan Kuroyukihime, gadis tercantik di sekolah, yang mengubah hidupnya dengan mengajaknya ke 'Accel World', dunia game pertempuran virtual."
        }
    ],
    // ... (Data novel lainnya)
    "Y": [
        {
            judul: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (Classroom of the Elite)",
            keyword: "classroom of the elite",
            genre: "School, Psychological, Drama",
            sinopsis: "(Sinopsis sama dengan Classroom of the Elite di atas)"
        }
    ],
    "Z": [
        // Tidak ada novel dengan awalan huruf Z
    ]
};

// Fungsi untuk membuat daftar genre unik dan terurut dari daftar novel
function getUniqueGenres() {
    let genres = new Set();
    for (const huruf in daftarNovel) {
        daftarNovel[huruf].forEach(novel => {
            novel.genre.split(', ').forEach(genre => genres.add(genre.trim()));
        });
    }
    return Array.from(genres).sort();
}

// Fungsi untuk membuat keyboard menu genre
function getMenuGenreKeyboard() {
    let genres = getUniqueGenres();
    let keyboard = {
        inline_keyboard: []
    };
    let row = [];
    genres.forEach(genre => {
        row.push({ text: genre, callback_data: "genre_list_" + genre });
        if (row.length === 3) { // Maksimal 3 tombol per baris
            keyboard.inline_keyboard.push(row);
            row = [];
        }
    });
    if (row.length > 0) {
        keyboard.inline_keyboard.push(row); // Tambahkan sisa tombol jika ada
    }
    keyboard.inline_keyboard.push([{ text: "Kembali ke Fitur 🤡", callback_data: "kembali_ke_fitur" }]); // Tombol kembali ke menu fitur
    return keyboard;
}

// Fungsi untuk membuat keyboard daftar novel per genre
function getNovelListGenreKeyboard(genre) {
    let tombolNovel = [];
    for (const huruf in daftarNovel) {
        daftarNovel[huruf].forEach(novel => {
            if (novel.genre.includes(genre)) {
                tombolNovel.push([{ text: novel.judul, callback_data: `genre_${genre}_novel_page_${novel.judul}` }]); // Simpan konteks genre
            }
        });
    }
    tombolNovel.push([{ text: "Kembali ke Menu Genre 🎭", callback_data: "daftar_genre" }]); // Tombol kembali ke menu genre
    return { inline_keyboard: tombolNovel };
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
                { text: "Kembali ke Fitur 🤡", callback_data: "kembali_ke_fitur" },
            ]
        ]
    };
    return keyboard;
}

function getNovelListKeyboard(huruf) {
    let novels = daftarNovel[huruf] || [];
    let tombolNovel = novels.map(novel => [{ text: novel.judul, callback_data: `alfabet_${huruf}_novel_page_${novel.judul}` }]); // Simpan konteks alfabet
    tombolNovel.push([{ text: "Kembali ke Menu Novel 🤡", callback_data: "daftar_novel" }]); // Tombol kembali ke menu novel A-Z
    return { inline_keyboard: tombolNovel };
}

function showNovelMenu(chatId, messageId) {
    let menuText = "<b>📚 Daftar Novel - Pilih Abjad Kegelapan...</b>\n\n<i>Gulir abjad untuk menemukan kisah yang jiwamu cari... 🖤</i>";
    editMessageText(chatId, messageId, menuText, JSON.stringify(getMenuNovelKeyboard()));
}

function showNovelListPage(chatId, messageId, huruf) {
    let listNovelKeyboard = getNovelListKeyboard(huruf);
    if (listNovelKeyboard.inline_keyboard.length <= 1) { // Hanya tombol kembali, berarti tidak ada novel di huruf ini
        let menuText = `<b>📚 Daftar Novel - Abjad ${huruf.toUpperCase()} Kosong 👻</b>\n\n<i>Tidak ada arwah novel yang bersembunyi di abjad ini... Kembali ke menu utama novel.</i>`;
        editMessageText(chatId, messageId, menuText, JSON.stringify({ inline_keyboard: [[{ text: "Kembali ke Menu Novel", callback_data: "daftar_novel" }]] }));
    } else { let menuText = `<b>📚 Daftar Novel - Abjad ${huruf.toUpperCase()} 🖤</b>\n\n<i>Pilih novel yang memanggil jiwamu dari daftar berikut...</i>`;
        editMessageText(chatId, messageId, menuText, JSON.stringify(listNovelKeyboard));
    }
}

function showNovelPage(chatId, messageId, callback_data) { // Menerima callback_data
    let parts = callback_data.split('_');
    let context = parts[0];
    let hurufAtauGenre = parts[1];
    let judulNovel = parts.slice(3).join('_'); // Ambil judul novel dari callback_data

    let novel = null;
    for (const huruf in daftarNovel) {
        novel = daftarNovel[huruf].find(n => n.judul === judulNovel);
        if (novel) break;
    }

    if (!novel) {
        kirimPesan(chatId, "Novel tidak ditemukan dalam arsip kegelapan... 😈");
        return;
    }

    let kembaliCallback;
    let kembaliText;
    if (context === "alfabet") {
        kembaliCallback = "novel_list_" + hurufAtauGenre;
        kembaliText = "Kembali ke Daftar " + hurufAtauGenre.toUpperCase();
    } else if (context === "genre") {
        kembaliCallback = "genre_list_" + hurufAtauGenre;
        kembaliText = "Kembali ke Genre " + hurufAtauGenre;
    }

    let keyboard = {
        inline_keyboard: [
            [{ text: "Telusuri Berkas 🔮", switch_inline_query_current_chat: novel.keyword }],
            [{ text: kembaliText, callback_data: kembaliCallback }]
        ]
    };

    let novelText = `<b>📚 ${novel.judul} 🖤</b>\n\n<b>Genre 📜:</b> ${novel.genre}\n\n<b>Sinopsis 📜:</b> ${novel.sinopsis}\n\n<i>Jejak kisah dalam kehampaan digital... 🥀</i>`;
    editMessageText(chatId, messageId, novelText, JSON.stringify(keyboard));
}
