<h1 align="center">神白機器人</h1>

## 一般資訊

[**邀請我至您的伺服器**](https://discord.com/api/oauth2/authorize?client_id=935165496427446302&permissions=8&scope=bot%20applications.commands)

支援DC伺服器：

<a href="https://discord.gg/dcdev"><img src="https://discord.com/api/guilds/846992875236884521/widget.png?style=banner4"></a>

## 安裝

<details>
  <summary>版本以及重要套件包需求</summary>

  ### 版本
  
  * [nodejs](https://nodejs.org)
    - 最低nodejs v16.6，建議使用最新的nodejs LTS
  
  ### 套件包
  
  > **Note**
  >> 只是列出重要套件包，且不需要單獨安裝
  >>> 意思就是不需要使用` npm i <package>`

  * [discordjs](https://www.npmjs.com/package/discord.js)
    - 最低discordjs v13，建議使用最新的discordjs
</details>
  
<details>
  <summary>安裝步驟</summary>

  ### 修改`./botconfig/config.json
  
  ```json
  {
    "token": "你的機器人權杖",
    "prefix": "!",
    "ownerIDS": [
        "578138842117308426"
    ],
    "fnbr": "GET from: https://fnbr.co",
    "fortnitetracker": "GET from: https://fortnitetracker.com",
    "memer_api": "GET from: https://discord.gg/Mc2FudJkgP",
    "status": {
        "text": "{prefix}help | on {guildcount} Servers, with {membercount} Members | Played: {songsplayed} Songs",
        "type": "神白機器人1.0測試中",
        "url": "https://twitch.tv/milratodiscordbot",
        "text2": "By: discord.gg/dcdev"
    },
    "clientsettings": {
        "nodes": [
            {
                "host": "Lavalink網址",
                "port": 2333,
                "password": "Godwhite"
            }
        ]
    },
    "spotify": {
        "clientSecret": "GET from: https://developers.spotify.com",
        "clientID": "GET from: https://developers.spotify.com"
    },
    "settings": {
        "COMMENT": "time_delay 0 === insta leave",
        "leaveOnEmpty_Channel": {
            "enabled": true,
            "time_delay": 30000
        },
        "LeaveOnEmpty_Queue": {
            "enabled": true,
            "time_delay": 30000
        },
        "selfDeaf": true
    },
    "lyricssettings": {
        "lyrics_finder": true,
        "ksoft_api": {
            "use_this_instead": true,
            "api_key": "DISABLED"
        }
    }
}
  ```
  1. token
    - 機器人權杖，這不用多說吧到 [**Discord Devloper Portal**](https://discord.com/developers/applications) 拿自己的機器人權杖
  
  2. prefix
    - 預設的機器人前綴
  
  3. ownerIDS
    - 機器人的擁有者ID，可以填很多個，像這樣：
  ```json
  {
    "ownerIDS": [
      "123",
      "456",
      "789"
    ]
  }
  ```
  
  4. status
    - 就是機器人的狀態，可以設定：
      1. text
        - 第一種文字，任意填
      2. type
        - 正在...，可以填的有：
        - 正在玩：`PLAYING`
        - 正在看：`WATCHING`
        - 競爭中：`COMPETEING`
        - 正在直播：`STREAMING`
        - 注意大小寫
      3. url
        - 如果`type`是填`STREAMING`的可以填入網址
      4. text2
        - 第二種文字，任意填
  
  5. clientsettings的nodes
    - 填入Lavalink的網址，可以自架，不然去Google也有
  
  6. spotify
    - 如果要播spotify的音樂的話請填入，到 [**Spotify for Developer**](https://developer.spotify.com/) 得到這些東西
  
  7. settings
    - 顧名思義
  
  8. lyricssettings
    - 歌詞尋找用的，但現在還沒有實裝，所以不用管他
  
</details>
