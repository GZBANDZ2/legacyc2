
const c=document.getElementById('particles');
if(c){const x=c.getContext('2d');let w,h,p=[];
function r(){w=c.width=innerWidth;h=c.height=innerHeight}r();addEventListener('resize',r);
for(let i=0;i<80;i++)p.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4});
(function a(){x.clearRect(0,0,w,h);for(const n of p){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;x.beginPath();x.arc(n.x,n.y,2,0,6.28);x.fillStyle='#17d6ff';x.fill();}
for(let i=0;i<p.length;i++)for(let j=i+1;j<p.length;j++){let dx=p[i].x-p[j].x,dy=p[i].y-p[j].y,d=Math.hypot(dx,dy);if(d<170){x.strokeStyle=`rgba(23,214,255,${1-d/170})`;x.beginPath();x.moveTo(p[i].x,p[i].y);x.lineTo(p[j].x,p[j].y);x.stroke();}}
requestAnimationFrame(a)})();}
