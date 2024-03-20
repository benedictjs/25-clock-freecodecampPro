const AlliconsEl=document.getElementsByClassName('material-symbols-outlined')
const sesTExt=document.getElementById('ses')
const breTExt=document.getElementById('bre')
const minutes=document.getElementById('minit')
const seconds=document.getElementById('secx')
const timeEl=document.getElementsByClassName('time')[0]
const audioEl=document.getElementsByTagName('audio')[0]
const bredownEl=AlliconsEl[0]
const nameEL=document.getElementsByTagName('h4')[0]

const breupEl=AlliconsEl[1]
const sesDownEl=AlliconsEl[2]
const sesupEl=AlliconsEl[3]
const palyEl=AlliconsEl[4]
const pauseEl=AlliconsEl[5]
const restartEl=AlliconsEl[6]
let playPow=true;
let toClear;
let defaultSesLength=3
let defaultbreLength=2
let sesLength=defaultSesLength
let Breaklen=defaultbreLength
let firstCase=true
let ToChangeLen=true;
let minsInCloc=3;
bredownEl.addEventListener('click',()=>{
    if(playPow){
        let val=breTExt.innerText
        val--
  if(val<1){
      breTExt.innerText=1
      Breaklen=1
  }
  else{breTExt.innerText=val;
      Breaklen=val   }
    }
})
breupEl.addEventListener('click',()=>{
    if(playPow){let val2=breTExt.innerText
        val2++
        if(val2>60){
            breTExt.innerText=60
            Breaklen=60
        }
        else{breTExt.innerText=val2
            Breaklen=val2}}
    
})
sesDownEl.onclick=()=>{
    // let val3=sesTExt.innerText
    if(playPow){
        nameEL.innerText="Session"
        seconds.innerText='00'
        sesLength--
    if(sesLength<1){
        sesTExt.innerText=1
    }
    else{ sesTExt.innerText=sesLength}
    upDateMins(sesLength)
    }
    
}
sesupEl.onclick=()=>{
    if(playPow){
        let val4=sesTExt.innerText
        nameEL.innerText="Session"
        seconds.innerText='00'
        firstCase=true
        val4++
        sesLength=val4
          if(val4>60){
            sesTExt.innerText=60
          }
          else{sesTExt.innerText=val4  }
          upDateMins(val4)
    }
}
palyEl.onclick=()=>{
    if(playPow){
playFunc()
playPow=false
palyEl.disabled=true
    }    
}
function upDateMins(val){
    minsInCloc=val
    if(minsInCloc<1){
        minsInCloc=1
    }
    if(minsInCloc>60){
        minsInCloc=60
    }
    minutes.innerText=minsInCloc<10?'0'+minsInCloc:minsInCloc;
}
restartEl.onclick=()=>{
     clearInterval(toClear)
     minutes.innerText='0'+defaultSesLength
     seconds.innerText='00'
     sesTExt.innerText=defaultSesLength
     sesLength=defaultSesLength
     minsInCloc=defaultSesLength
    firstCase=true
     playPow=true
}
pauseEl.onclick=()=>{
    clearInterval(toClear)
    playPow=true
}
function playFunc() {
    toClear= setInterval(() => {
        if(firstCase){
            seconds.innerText=59
            firstCase=false
            let mins=minutes.innerText
            mins--
    
           minutes.innerText=mins<10?'0'+mins:mins
        }
        else{
             let sesDrop=seconds.innerText
                   if(sesDrop==0){
                       seconds.innerText='00' 
                        minsInCloc--
                        let mins2=minutes.innerText
                        minutes.innerText=mins2--;
                           mins2==0?timeEl.style.color='red':timeEl.style.color='white';
                                
                                if(mins2<0){
                                    audioEl.play()
                                      if(ToChangeLen){
                                            minsInCloc=Breaklen
                                            nameEL.innerText='Break'
                                            seconds.innerText='00'
                                            //  firstCase=true
                                         minutes.innerText=minsInCloc<10?'0'+minsInCloc:minsInCloc  ;
                                        ToChangeLen=false
                                        }
                                        else{
                                            console.log(sesLength)
                                            minsInCloc=sesLength
                                            minutes.innerText=minsInCloc;
                                            ToChangeLen=true;
                                            firstCase=true
                                        nameEL.innerText="Session"
                                        }
                                        
                }
                minutes.innerText=minsInCloc<10?'0'+minsInCloc:minsInCloc  
                firstCase=true
             }
             else{
                 sesDrop--
                 seconds.innerText=sesDrop<10?'0'+sesDrop:sesDrop;
             }
        }
        
    },100);
}
