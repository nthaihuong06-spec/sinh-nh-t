/* =====================================================================
   FILE NỘI DUNG CỦA TRANG SINH NHẬT

   Sửa chữ ở đây, không cần đụng vào file index.html.

   Cách sửa: chỉ đổi phần chữ nằm giữa hai dấu nháy kép " "
   hoặc giữa hai dấu huyền ` `. Đừng xoá dấu nháy, dấu phẩy, dấu ngoặc.

   - Trong chữ nằm giữa " ", đừng gõ thêm dấu " ở giữa câu.
   - Trong khối chữ nằm giữa ` `, MỖI DÒNG là một đoạn (hoặc một mục).
     Muốn thêm đoạn thì thêm dòng, muốn xoá thì xoá dòng.
   - {to} sẽ tự thành tên người nhận, {from} thành tên người gửi.
   ===================================================================== */
const CONFIG = {

  /* ---------- Tên ---------- */
  toName: "Anh Viên",
  fromName: "bé Hương",

  /* ---------- Màn hình bìa ---------- */
  coverHint: "Chạm vào hộp quà nhé",
  coverTo: "Gửi anh Viên",

  /* ---------- Dòng nhỏ trên cùng của trang chính ----------
     Nếu muốn hiện số ngày yêu nhau thì điền togetherSince (năm-tháng-ngày),
     khi đó togetherText sẽ thay cho topLine. Để togetherSince là "" thì hiện topLine. */
  togetherSince: "",
  togetherText: "Đã {n} ngày bên nhau",
  topLine: "Chúc mừng sinh nhật anh",

  /* ---------- Nhạc nền: chạy khi anh chạm hộp quà, lặp lại liên tục ---------- */
  bgMusic: { title: "Forest of Silent Gods", artist: "AI AINU", file: "nhacnen.m4a", start: 0 },

  /* ---------- Hai video trên băng cassette ----------
     video: tên file video. Chạm sẽ mở video, nhạc nền tạm dừng, xem xong nhạc nền bật lại. */
  songsEyebrow: "Dành cho {to} · Từ {from}",
  songsTitle: "Những bài hát cho anh",
  cassetteLabel: "Songs for you",
  cassetteTip: "Chạm vào băng cassette để dừng hoặc phát nhạc",
  songs: [
    { title: "Video số 1", artist: "Bé Hương", file: "", start: 0, video: "video2.mp4" },
    { title: "Video số 2", artist: "Bé Hương", file: "", start: 0, video: "video.mp4" }
  ],
  linerLabel: "Lời nhắn nhỏ",
  linerNote: "Bật nhạc lên nghe, rồi đọc thư, xem ảnh, mở hũ kỷ niệm ở bên dưới nhé.",

  /* ---------- Thư ----------
     Mỗi lá thư gồm: kicker (chữ nhỏ trên cùng), title (tiêu đề), teaser (một dòng giới thiệu, để "" nếu không cần),
     text (nội dung, mỗi dòng là một đoạn), sign (ký tên). Muốn thêm thư: copy cả cụm { ... }, nhớ dấu phẩy. */
  lettersTitle: "Thư cho anh",
  lettersSub: "Mỗi lá thư mở vào một lúc khác nhau.",
  letterButton: "Mở thư",
  letterClose: "Đóng thư",
  letterSign: "Bé Hương",
  letters: [
    {
      kicker: "Mở khi sinh nhật",
      title: "Chúc mừng sinh nhật anh",
      teaser: "Lá thư đầu tiên, dành cho hôm nay.",
      text: `
Gửi Anh Viên
Sinh nhật anh năm nay, em thật sự không biết nên chúc anh điều gì. Vì nghĩ đi nghĩ lại, điều em mong nhất vẫn chỉ là anh có thể sống những ngày thật bình yên và hạnh phúc.
Em biết anh luôn cố gắng, dù không phải lúc nào anh cũng nói ra những khó khăn mà mình đang trải qua. Có những chuyện anh chọn tự mình giải quyết, có những mệt mỏi anh chỉ lặng im, rồi lại tự động viên mình bước tiếp. Có lẽ cũng vì vậy mà em càng thương anh nhiều hơn.
Em không cần anh phải trở thành người giỏi nhất, cũng chẳng cần anh phải thành công hơn bất kỳ ai. Với em, anh của hiện tại đã là một người rất đáng để tự hào rồi. Em chỉ mong tuổi mới sẽ đối xử với anh dịu dàng hơn một chút, để những cố gắng, những hy sinh và cả những điều anh âm thầm chịu đựng đều được đáp lại bằng những điều thật xứng đáng.
Chúc mừng sinh nhật anh.
Em chẳng dám mong mọi chuyện lúc nào cũng thuận lợi, chỉ mong sau tất cả những lần cuộc sống đổi thay, chúng mình vẫn còn muốn dành cho nhau một chỗ trong lòng.
Tháng mười một năm nay có anh, em chỉ mong tháng mười một của nhiều năm sau, mình vẫn còn có nhau.
`,
      sign: "Bé Hương"
    },
    {
      kicker: "Mở khi anh thấy mệt",
      title: "Anh nghỉ một chút nhé",
      teaser: "Dành cho những ngày anh mệt mỏi",
      text: `
Anh Viên,
Nếu anh đang đọc lá thư này, chắc hôm nay không dễ với anh. Em muốn anh nhớ là anh không cần phải mạnh mẽ mọi lúc.
Anh cứ nghỉ một chút, uống nước, hít thở thật chậm. Việc nào rồi cũng sẽ qua.
Khi nào anh muốn kể, em sẽ nghe. Khi nào anh muốn im lặng, em sẽ ngồi cạnh anh.
Anh đã cố gắng nhiều rồi. Em tự hào về anh.
`,
      sign: "Bé Hương"
    },
    {
      kicker: "Mở khi anh nhớ em",
      title: "Em cũng nhớ anh",
      teaser: "",
      text: `
Em có lòng tham trong tình yêu, anh biết không? Em muốn chiếm lấy những năm tháng đẹp nhất của anh, cả những nỗi mệt mỏi trong anh hiện tại, muốn anh vẫn nhìn em bằng ánh mắt của buổi đầu gặp gỡ.
"Je veux être ton dernier amour, et toutes tes premières fois."
Em muốn là tình yêu cuối cùng của anh, và là những lần đầu tiên mà anh chẳng bao giờ muốn vậy nên hãy đừng để những nỗi buồn của anh làm đau anh nhé
`,
      sign: "Bé Hương"
    }
  ],

  /* ---------- Ảnh ----------
     Mỗi dòng: tên-file-ảnh | chú thích (chú thích có thể bỏ trống)
     Ảnh để trong thư mục "anh" cùng chỗ với index.html. Xoá dòng để xoá ảnh, thêm dòng để thêm ảnh. */
  photosTitle: "Ảnh của chúng mình",
  photosSub: "Chạm vào ảnh để xem lớn.",
  photos: `
anh/anh1.jpg
anh/anh2.jpg
anh/anh3.jpg
anh/anh4.jpg
`,

  /* ---------- Hũ kỷ niệm: mỗi dòng là một ngôi sao ---------- */
  jarTitle: "Hũ kỷ niệm",
  jarSub: "Chạm vào từng ngôi sao để đọc.",
  jarEmpty: "Chọn một ngôi sao",
  memories: `
Em thích cách anh cười mỗi khi anh nằm với em.
Cảm ơn anh luôn nhớ món em ghét kể cả khi em quên.
Lần đầu em gặp anh, em rất là ghét anh.
Đi cạnh anh, quãng đường em đi cảm giác nó an toàn hẳn.
Em thích những buổi tối mình chỉ ngồi cạnh nhau.
Cảm ơn anh vì đã là chính anh.
`,

  /* ---------- Phần kết ---------- */
  finaleBig: "Chúc mừng sinh nhật!",
  finaleText: "Em iu anh nhiều hơn những gì em nói, iu anh nhiều, chúc anh sinh nhật vui vẻ.",
  finaleSign: "Bé Hương",
  finaleButton: "Thả cánh hoa"
};
