import champData from '../static-data/champ-static-data';
import itemData from '../static-data/item-static-data';

const defaultMMR = [
    { "mmr" : 1000, "tier" : "bronze", "rank": 5 },
    { "mmr" : 1050, "tier" : "bronze", "rank": 4 },
    { "mmr" : 1100, "tier" : "bronze", "rank": 3 },
    { "mmr" : 1150, "tier" : "bronze", "rank": 2 },
    { "mmr" : 1200, "tier" : "bronze", "rank": 1 },
    { "mmr" : 1250, "tier" : "silver", "rank": 5 },
    { "mmr" : 1300, "tier" : "silver", "rank": 4 },
    { "mmr" : 1350, "tier" : "silver", "rank": 3 },
    { "mmr" : 1400, "tier" : "silver", "rank": 2 },
    { "mmr" : 1450, "tier" : "silver", "rank": 1 },
    { "mmr" : 1500, "tier" : "gold", "rank": 5 },
    { "mmr" : 1550, "tier" : "gold", "rank": 4 },
    { "mmr" : 1600, "tier" : "gold", "rank": 3 },
    { "mmr" : 1650, "tier" : "gold", "rank": 2 },
    { "mmr" : 1700, "tier" : "gold", "rank": 1 },
    { "mmr" : 1750, "tier" : "platinum", "rank": 5 },
    { "mmr" : 1800, "tier" : "platinum", "rank": 4 },
    { "mmr" : 1850, "tier" : "platinum", "rank": 3 },
    { "mmr" : 1900, "tier" : "platinum", "rank": 2 },
    { "mmr" : 1950, "tier" : "platinum", "rank": 1 },
    { "mmr" : 2000, "tier" : "diamond", "rank": 5 },
    { "mmr" : 2050, "tier" : "diamond", "rank": 4 },
    { "mmr" : 2100, "tier" : "diamond", "rank": 3 },
    { "mmr" : 2150, "tier" : "diamond", "rank": 2 },
    { "mmr" : 2200, "tier" : "diamond", "rank": 1 },
    { "mmr" : 2250, "tier" : "master", "rank": 1 },
    { "mmr" : 2700, "tier" : "challenger", "rank": 1 },
]
const lineIconData = [
        {
          lane : "SUPPORT", 
          playCount: 0, 
          miniStyle : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-104px -2768px",
          },
          style : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-70px -2794px",
          }
        },
        {
          lane : "TOP", 
          playCount: 0,
          miniStyle : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-108px -2845px",
          },
          style : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-80px -2872px",
          }
        },
        {
          lane : "MID", 
          playCount: 0,
          miniStyle : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-108px -2692px",
          },
          style : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-80px -2719px",
          }
        },
        {
          lane : "JUNGLE", 
          playCount: 0,
          miniStyle : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-110px -2615px",
          },
          style : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-83px -2640px",
          }
        },
        {
          lane : "BOTTOM", 
          playCount: 0,
          miniStyle : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-108px -2537px",
          },
          style : {
            backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
            backgroundPosition: "-80px -2564px",
          }
        },
        { lane : "NONE", playCount: 0 },
]
const GetUserMMR = {
    getWinningRateMMR : (winningRate) => (winningRate - 50) * 20,
    getTierMMR : (league, rank) => defaultMMR.filter(item => item.tier === league.tier.toLowerCase() && item.rank === rank),
    getCommntData : (mmrData, league, rank) => {
        let myMMRcomment = ''; 
        let checkMMR = mmrData - GetUserMMR.getTierMMR(league, rank)[0].mmr;
        if(checkMMR <= -50){
            myMMRcomment = 'MMR이 매우 낮습니다! 팀원들에게 민폐입니다!'; 
        }else if(checkMMR < 0){
            myMMRcomment = '평균보다 MMR이 낮습니다. 강등에 주의하세요.';
        }else if(checkMMR < 25){
            myMMRcomment = 'MMR이 보통 수준입니다. 분발하세요.';
        }else if(checkMMR > 0){
            myMMRcomment = '평균보다 MMR이 높습니다. 자질이 보이는군요?';
        }else{
            myMMRcomment = '매우 좋습니다! 이 리그의 수준이 아니시군요?';
        }
        return myMMRcomment;
    }
}

const GetGameData = {
    getChampData : (champion) => {
        for (let i in champData.data) {
            if(champData.data[i].id === champion) return champData.data[i]
        }
    },
    getGameTime : (timestamp) => {
        const date = new Date(timestamp),
              year = date.getFullYear(),
              month = date.getMonth()+1,
              day = date.getDate(),
              hour = date.getHours(),
              min = date.getMinutes(),
              sec = date.getSeconds(),
              retVal =   year + "-" + (month < 10 ? "0" + month : month) + "-" 
                        + (day < 10 ? "0" + day : day) + " " 
                        + (hour < 10 ? "0" + hour : hour) + ":"
                        + (min < 10 ? "0" + min : min) + ":" 
                        + (sec < 10 ? "0" + sec : sec);
        return retVal
    },
    getLaneIconData : (lane) => lineIconData.filter((item) => item.lane === lane),
    
    getPlayerItemData : (itemCode) => itemData.data[itemCode],
    getItemUrl : (itemCode) => `http://opgg-static.akamaized.net/images/lol/item/${itemCode}.png?image=w_22&v=15276924000`
}
export { GetUserMMR, GetGameData };