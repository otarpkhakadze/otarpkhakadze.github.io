let i, i2, ImgNumber, a2, j, a, k, n, txt, answer, timetxt, time, hided=1, ImgEnabled=1, Color=1;
        function getValue() {
            a=1;
            i=1;
            j=1;
            n=0;
            txt=0;
            answer=0;
            txt = document.getElementById("InputNumber");
            n = txt.value;
            answer = document.getElementById("Value");
            for (i=1; i<=n; i++)
            {
              a*=i;
            }
            answer.innerText = a;
            
            
        }
        timetxt = document.getElementById("timeteller")
        setInterval(() => {
            time = new Date();
            timetxt.innerText = time.toLocaleTimeString() + " " + " " + time.toLocaleDateString();
        }, 10);
        
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByClassName("RippleEffect");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
function opensettings()
{
  if (hided==1)
  {
      document.getElementById("settings-box").style.visibility="visible";
      document.getElementById("main-box").style.visibility="hidden";
      hided = 2;
  }
  else if (hided==2)
  {
      document.getElementById("settings-box").style.visibility="hidden";
      document.getElementById("main-box").style.visibility="visible";
      hided = 1;
  }
}
function Background()
{
  if (ImgEnabled == 1)
  {
      document.getElementById("BgImg").innerText = "Background image: disabled";
      
      ImgEnabled = 2;
      if (Color==2){
        document.getElementById("bodymain").style.background = "rgb(230,230,230)";;
      }
      else{
        document.getElementById("bodymain").style.background = "rgb(77, 77, 77)";
      }
  }
  else if (ImgEnabled == 2)
  {
      document.getElementById("bodymain").style.background = "url(Image1.jpg)";
      document.getElementById("BgImg").innerText = "Background image: enabled";
      ImgEnabled = 1;
  }
}
function CopyText()
{
  navigator.clipboard.writeText(answer.innerText).then(() => {
    console.log('Content copied to clipboard');
  },() => {
    console.error('Failed to copy');
  });
}
function ColorMode()
{
  if (Color==1){
  document.getElementById("timeteller").style.color = "rgb(1,1,1)";
  document.getElementById("title").style.color = "rgb(1,1,1)";
  document.getElementById("main-box").style.color = "rgb(1,1,1)";
  document.getElementById("Value").style.color = "rgb(1,1,1)";
  document.getElementById("topbar").style.background = "rgb(250,250,250)";
  document.getElementById("generate").style.color = "rgb(1,1,1)";
  document.getElementById("generate").style.borderColor = "rgb(1,1,1)";
  document.getElementById("InputNumber").style.borderColor = "rgb(1,1,1)";
  document.getElementById("InputNumber").style.color = "rgb(1,1,1)";
  document.getElementById("copy1").style.color = "rgb(1,1,1)";
  document.getElementById("copy1").style.borderColor = "rgb(1,1,1)";
  document.getElementById("box1").style.borderColor = "rgb(1,1,1)";
  document.getElementById("ColorMode").innerText = "Light mode";
  Color = 2;

  if (ImgEnabled == 2)
  {
    document.getElementById("bodymain").style.background = "rgb(230,230,230)";
  }
  }
  else{
    document.getElementById("timeteller").style.color = "rgb(250,250,250)";
    document.getElementById("title").style.color = "rgb(250,250,250)";
    document.getElementById("main-box").style.color = "rgb(250,250,250)";
    document.getElementById("Value").style.color = "rgb(250,250,250)";
    document.getElementById("topbar").style.background = "rgb(65,65,65)";
    document.getElementById("generate").style.color = "rgb(250,250,250)";
    document.getElementById("generate").style.borderColor = "white";
    document.getElementById("InputNumber").style.borderColor = "white";
    document.getElementById("InputNumber").style.color = "rgb(250,250,250)";
    document.getElementById("copy1").style.color = "rgb(250,250,250)";
    document.getElementById("copy1").style.borderColor = "white";
    document.getElementById("box1").style.borderColor = "rgba(255,255,255,0.5)";
    document.getElementById("ColorMode").innerText = "Dark mode";
    Color = 1;
  
    if (ImgEnabled == 2)
    {
      document.getElementById("bodymain").style.background = "rgb(77,77,77)";
    }
    }
}