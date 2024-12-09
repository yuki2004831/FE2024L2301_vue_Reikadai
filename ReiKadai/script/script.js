new Vue({
    el: '#app',
    data: {
      animal: 'わんちゃん',  // 動物はわんちゃんで初期化
      isChanged: false,      // スタイルはfalse(オフ)で初期化
      scale: 20,             // 癒され度
      red: 1,                // ♥の色の赤部分
      // カードリストをわんちゃんで初期化 (名前と画像パスを定義)
      cards: Array.from({ length: 30 }, (_, i) => ({
        name: `カード${i + 1}`,
        image: `./img/dog/card${i + 1}.png` // 動的に画像を読み込み
      })),
      selectedCards: []     // 引いたカードを格納
    },
    methods: {
      changeStyle() {
        // ★穴埋め★ スタイルのオンオフを切り替える
        XXXXXXXX
      },
      drawCards() {
        // シャッフルして最初の5枚を選ぶ
        const shuffled = this.cards.sort(() => Math.random() - 0.5);
        this.selectedCards = shuffled.slice(0, 5);
      },
      animalChange() {
        // わんちゃんとねこちゃんを切り替える
        if (this.animal === 'わんちゃん') {
          this.animal = 'ねこちゃん';
          // カードリスト (名前と画像パスを再定義)
          this.cards = Array.from({ length: 30 }, (_, i) => ({
            name: `カード${i + 1}`,
            image: `./img/cat/card${i + 1}.png`
          }));
        } else {
          this.animal = 'わんちゃん';
          // カードリスト (名前と画像パスを再定義)
          this.cards = Array.from({ length: 30 }, (_, i) => ({
            name: `カード${i + 1}`,
            image: `./img/dog/card${i + 1}.png`
          }));
        }
      }
    },
    // ★穴埋め★ 算出プロパティ
    XXXXXXXX {
      bindStyle() {
        // レンジに応じたスタイルを適用する
        return `font-size: ${this.scale}px; color: rgb(${this.red},20,100)`
      }
    }
  });
  