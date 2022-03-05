const classes = ["trigger1","trigger2","trigger3"];
let state = 0;
function changeTheme()
{
  if(state == 0)
  {
    document.querySelector(".trigger").classList.add(classes[1]);
    state++;
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "theme2.css";
    link.type = "text/css";
    document.getElementsByTagName("head")[0].append(link);
  }
  else if(state == 1)
  {
    document.querySelector(".trigger").classList.add(classes[2]);
    state++;
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "theme3.css";
    link.type = "text/css";
    document.getElementsByTagName("head")[0].append(link);
  }
  else if(state == 2)
  {
    document.querySelector(".trigger").classList.remove(classes[1], classes[2]);
    state = 0;
    document.getElementsByTagName("link")[2].remove();
    document.getElementsByTagName("link")[2].remove();
  }
}
document.querySelector(".trigger").addEventListener("click", changeTheme);