const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
    isRandom: false,
    currentIndex: 0,
    isPlaying: false,
    isRepeat: false,
    settings: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
songs: [
    {
      name: "Ánh sao và bầu trời",
      singer: "Ngtinhs X QNhu",
      path: './Mp3/anhsaovabautroi.mp3',
      image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/278843837_1440477413076591_2712276955363853423_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Kzf3h6Dfh_UAX8S7s2Y&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT8XhIFhBGp82CBgdihNcQcLWhFIdCCXHUtbtQTSQ5gLQg&oe=62BEF748"
    },
    {
        name: "Già cùng nhau là được",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/giacungnhauladuoc.mp3',
        image: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/274615944_1400460803744919_641614232942927374_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TJh2dzDIc_UAX8QMEbV&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT_C_9F1oC5RctSgAuVn6p6bFizfkCPROB1DAliBo4kyYA&oe=62C038CD"
      },
      {
        name: "Có hẹn với thanh xuân",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/cohenvoithanhxuan.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
      {
        name: "Bao tiền một mớ bình yên",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/baotienmotmobinhyen.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
      {
        name: "Ghé qua",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/ghequa.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
      {
        name: "Nàng thơ",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/nangtho.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
      {
        name: "Vì mẹ anh bắt chia tay",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/ViMeAnhBatChiaTay.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
      {
        name: "Hai mươi hai",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/HaiMuoiHai22.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
      {
        name: "Sợ nằng em biết anh còn yêu em",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/SoRangEmBietAnhConYeuEm-.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
      {
        name: "Chỉ là không cùng nhau",
        singer: "Ngtinhs X QNhu",
        path: './Mp3/ChiLaKhongCungNhau.mp3',
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OjyrdrQ8JzMAX-wfXhR&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8CeWf9drxRiBQFY0vvt5kDNYvvgRpy7LifcLl3gVYmbQ&oe=62BF75C4"
      },
],
    setConfig: function (key, value){
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))

    },
    render: function (){
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index= "${index}">
                <div class="thumb" 
                style="background-image: url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },
    defineProperties: function(){
            Object.defineProperty(this, 'currentSong', {
                get: function(){
                    return this.songs[this.currentIndex]
                }
            })
    },

    loadCurrentSong: function(){

        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },

    handleEvents: function(){
         
            const cdWidth = cd.offsetWidth

        // xử lí Cd quay/ dừng
       const cdThumbAnimate = cdThumb.animate ([
            { transform: 'rotate(360deg)'}
        ], {
                duration: 10000, //10 giây
                interations: Infinity
    })
    cdThumbAnimate.pause()


        //Xử lí phóng to thu nhỏ Cd
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0

            cd.style.opacity = newCdWidth / cdWidth
        }
        //XỬ lí khi click play
        playBtn.onclick = function(){
            if (app.isPlaying){
                app.isPlaying = false
                audio.pause()
                player.classList.remove('playing')
                cdThumbAnimate.pause()
            } else {
                app.isPlaying = true
                audio.play()
                player.classList.add('playing')
                cdThumbAnimate.play()
            }

            // /*CÁCH KHÁC *

        // playBtn.onclick = function(){
        //     if (app.isPlaying){
        //         audio.pause()
        //     } else{
        //         audio.play()
        //     }
        // }   
        // audio.onplay = function(){
        //     app.isPlaying = true
        //     player.classList.add('playing')
        // }
        // audio.onpause = function(){
        //     app.isPlaying = false
        //     player.classList.remove('playing')
        // }
            
        }


        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
         if(audio.duration){
             const progressPresent = Math.floor(audio.currentTime / audio.duration * 100)
             progress.value = progressPresent
         }
        }
        // Xử lí khi tua song
        progress.onchange = function (e){
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }
        //Khi next song
        nextBtn.onclick = function(){
            if (app.isRandom){
                app.playRandomSong()
            } else{
                app.nextSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()
         
        }
        //Khi prev song
        prevBtn.onclick = function(){
            if (app.isRandom){
                app.playRandomSong()
            } else{
                app.prevSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()

        }
        //Xử lí bật tắt random
        randomBtn.onclick = function(e){
           app.isRandom = !app.isRandom
           app.setConfig('isRandom', app.isRandom)
           randomBtn.classList.toggle ('active', app.isRandom)        
        }
        // Xử lí next song khi audio ended
         audio.onended = function (){
             if (app.isRepeat){
                audio.play()
             } else{
                nextBtn.click()
             }  
         }
         // Lắng nghe hành vi click vào playlist
         playlist.onclick = function(e){
             const songNode = e.target.closest('.song:not(.active)')
            
             if (songNode || e.target.closest('.option')) {
                // Xử lí khi click vào song
                if (songNode) {
                    app.currentIndex = Number(songNode.dataset.index)
                    app.loadCurrentSong()
                    app.render()
                    audio.play()
                }

                // Xử lí khi click vào song option
                if  (e.target.closest('.option')) {

                }
            }
         }
         // Xử lí lặp lại một song
         repeatBtn.onclick = function(){
            app.isRepeat = !app.isRepeat
            app.setConfig('isRepeat', app.isRepeat)
            repeatBtn.classList.toggle ('active', app.isRepeat)
         }
        
    },
    scrollToActiveSong: function(){
             setTimeout (() => {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
             }, 300)
    },
    nextSong: function(){
        this.currentIndex++
        if (this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function(){
        this.currentIndex--
        if (this.currentIndex < 0 ){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    
        //Play random song 
        playRandomSong: function (){
             let newIndex
            do {
                newIndex = Math.floor(Math.random() * this.songs.length)
            } while (newIndex === this.currentIndex)
            this.currentIndex = newIndex
            this.loadCurrentSong()
        },
   start: function (){
       //
    //    this.loadConfig()

    //Định nghĩa các thuộc tính cho object
       this.defineProperties()

       //Lắng nghe/ xử lí các sự kiện (DOM events)
        this.handleEvents()

        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()
        //Render playlist
        this.render()
  }
}
app.start()